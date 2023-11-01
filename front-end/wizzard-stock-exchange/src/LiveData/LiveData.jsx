/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import LiveChart from '../LiveChart/LiveChart';
import SecData from '../SecData/SecData';
import Buy from '../Buy/Buy';
import axios from 'axios';
import Sell from "../Sell/Sell";

const LiveTradingApp = () => {
  const [symbol, setSymbol] = useState('solusdt'); // Default symbol
  const [interval, setInterval] = useState('1m'); // Default interval
  const [openData, setOpenData] = useState(null);
  const [closeData, setCloseData] = useState(null);
  const [ohlcData, setOhlcData] = useState([]);
  const [stockPrice, setStockPrice] = useState(1);
  const [ws, setWs] = useState(null); // Store the WebSocket reference
  const SVGRect = useRef(null);
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");
  const [userShares, setUserShares] = useState([]);
  const [wallet, setWallet] = useState([]);
  const [userWalletId, setUserWalletId] = useState(0)

  useEffect(() => {
    const wsEndpoint = `wss://stream.binance.com:9443/ws/${symbol}@kline_${interval}`;

    // Check if the WebSocket connection exists and is open
    if (ws && ws.readyState === WebSocket.OPEN) {
      // If it's open, we don't need to open a new one
      return;
    }

    // If the WebSocket doesn't exist or is not open, create a new one
    const newWs = new WebSocket(wsEndpoint);

    newWs.onopen = () => {
      console.log('WebSocket connection opened.');
    };

    newWs.onmessage = (event) => {
      const eventData = JSON.parse(event.data);
      const klineData = eventData.k;
      setOpenData(klineData.o);
      setCloseData(klineData.c);

      // Extract OHLC data
      const openPrice = parseFloat(klineData.o).toFixed(2);
      const lowPrice = parseFloat(klineData.l).toFixed(2);
      const highPrice = parseFloat(klineData.h).toFixed(2);
      const closePrice = parseFloat(klineData.c).toFixed(2);

      // Update ohlcData with the new data point
      setOhlcData((prevData) => [
        {
          open: openPrice,
          low: lowPrice,
          high: highPrice,
          close: closePrice,
        },
        ...prevData,
      ]);

      const JsonPrice = parseFloat(parseInt(eventData.p));
      setStockPrice(JsonPrice);
    };

    newWs.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    newWs.onclose = async (event) => {
      console.log(`WebSocket connection closed with code ${event.code} and reason: ${event.reason}`);

      // Example asynchronous operation when WebSocket closes
      try {
        // Simulating some asynchronous operation
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log('Async operation completed after WebSocket closed.');
      } catch (error) {
        console.error('Error during async operation:', error);
      }
    };

    // Save the new WebSocket reference
    setWs(newWs);

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      newWs.close();
    };
  }, [symbol, interval]);

  const handleButtonClick = (newSymbol) => {
    setSymbol(newSymbol);
    setStockPrice(1); // Reset stockPrice when switching symbols
  };

  //all share exist in userShares from trade
  useEffect(() => {
    const url = 'http://127.0.0.1:8000/trade/buy-shares/';

    axios.get(url)
      .then(response => {
        setUserShares(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []); // The empty dependency array ensures this runs once after the initial render

  useEffect(() => {
    // console.log(userShares); // Log the userShares when it changes
  }, [userShares]);

//fetch wallets in trade
useEffect(() => {
  const url = "http://127.0.0.1:8000/trade/user-wallets/";

  axios
    .get(url)
    .then((response) => {
      setWallet(response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
     
    // console.log(wallet)
    

}, []);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/account/profile/",
          {
            headers: {
              Authorization: `Token ${localStorage.getItem("token")}`,
            },
          }
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    if (token) {
      fetchProfile();
    }
  }, []);

  useEffect(() => {
    if (user) {
      const filtered = wallet.filter(wall => wall.user_email === user.email);
      if (filtered.length > 0) {
        const id = filtered[0].user;
        setUserWalletId(id);
        // console.log(filtered[0].user); // Update state with the filtered data
      }
    }
  }, [user, wallet]);

  console.log(userWalletId);
 
  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
        <button onClick={() => handleButtonClick("ethusdt")}>
          ETH/USDT
        </button>
        <button onClick={() => handleButtonClick("btcusdt")}>
          BTC/USDT
        </button>
        <button onClick={() => handleButtonClick("solusdt")}>
          SOL/USDT
        </button>
              {/* Display the selected symbol */}
              <p>Selected Symbol: {symbol}</p>
              <span className="text-2xl sm:text-3xl leading-none font-bold">
                <h4
                  className={
                    openData > closeData ? "text-red-500" : "text-green-500"
                  }
                >
                  {closeData}
                </h4>
              </span>
              {/* Display the latest stock price */}
              <p>Last Price: {closeData}</p>
              <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                <div className="">
                  {/* <LiveTradingApp></LiveTradingApp> */}
                  <LiveChart
                    className="w-full"
                    ohlcData={ohlcData}
                  ></LiveChart>
                  <div className="text-center mt-5">
                  {closeData !== null && (
                    <label htmlFor="my_modal_7" className="btn px-5">
                      <span className="text-xl font-black">Buy Now</span>
                    </label>
                  )}
                  </div>
                  
                </div>
                {/* <div id="main-chart"></div> */}
              </div>
              <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                <div className="mb-4 w-full h-72 overflow-hidden">
                  <SecData ohlcData={ohlcData}></SecData>
                </div>
              </div>
              <Buy 
              user_wallet = {userWalletId}
              ohlcData={ohlcData}
              closeData={closeData}
              symbol={symbol}
              ></Buy> 
<div>
    {userShares.map(wallet => {
      if ( user && wallet.user_email === user.email && wallet.stock_symbol === symbol ) {
        // console.log(wallet)
        // console.log('Found:', wallet.user_email, user.email);
        const calculatedValue = (closeData - wallet.price) * wallet.quantity;
        return (
          <div key={wallet.id}>
          <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full w-6/6 mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex justify-center items-center gap-6">
              <a href="">
                <h3 className="text-sm font-semibold leading-none text-gray-900">
                  Open Docker(2)
                </h3>
              </a>
              <a href="">
                <h3 className="text-sm font-semibold leading-none text-gray-900">
                  Position (1)
                </h3>
              </a>
            </div>
    
            <a
              href="#"
              className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
            >
              <img
                className="w-5 h-6"
                src="https://static.vecteezy.com/system/resources/thumbnails/026/753/173/small/save-icon-icon-for-your-website-mobile-presentation-and-logo-design-vector.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img
                className="mr-2 w-5 h-5 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjMiX1PusL0DZjwvQCE5nmT8XDvRZhVqDDLjMJ9EG7YpoFwG62VzSqprkuu7ydokIJdwc&usqp=CAU"
                alt=""
              />
    
              <p>
                <span className="text-md font-semibold">
                  Hide Other Pairs
                </span>
              </p>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
            >
              Clear All
            </a>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img
                className="mr-2 w-7 h-7 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjMiX1PusL0DZjwvQCE5nmT8XDvRZhVqDDLjMJ9EG7YpoFwG62VzSqprkuu7ydokIJdwc&usqp=CAU"
                alt=""
              />
    
              <p>
                <span className="text-lg font-bold">
                  {" "}
                  BIDKUT{" "}
                  <span className="text-md font-semibold">
                    Prpitual
                  </span>
                </span>
              </p>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
            >
              <img
                className="w-5"
                src="https://cdn.icon-icons.com/icons2/2645/PNG/512/box_arrow_in_up_right_icon_160373.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex justify-between items-center mb-3">
            

          </div>
          <div className="flex justify-between items-center mb-3">
            <h1 className="text-md font-semibold">{wallet.stock_name}</h1>
            <h1 className="text-md font-semibold">
              <h1><span className="text-green-500">Profit</span> & <span className="text-red-500">Loss</span></h1>
            </h1>
          </div>
          <div className="flex justify-between items-center mb-3">
            <h1 className="text-md font-semibold">Size : {wallet.quantity}</h1>
            
            {closeData !== null && (
                    <h1 className={
                      wallet.price > closeData ? "text-md font-semibold text-red-600" : "text-md font-semibold text-green-600"
                    }>
                      $ {calculatedValue}
                    </h1>
            )}
          </div>
          <div className="flex justify-between items-center mb-3">
            <h1 className="text-md font-semibold">Entry Price</h1>
            <h1 className="text-md font-semibold">Current Price</h1>
          </div>
          <div className="flex justify-between items-center mb-3">
            <h1 className="text-md font-semibold text-green-500">{wallet.price}</h1>
            {closeData !== null && (
                    <h1 className={
                      wallet.price > closeData ? "text-md font-semibold text-red-600" : "text-md font-semibold text-green-600"
                    }>
                      $ {closeData}
                    </h1>
            )}
          </div>
          <h1 className="mb-8">TP/SL -- / --</h1>
          <div className="text-center mb-3">
              {closeData !== null && (
                  <label htmlFor="my_modal_6" className="btn px-5">
                    <span className="text-xl font-black">Sell</span>
                  </label>
              )}
            <Sell
            user_wallet = {wallet.user_wallet}
            ohlcData={ohlcData}
            closeData={closeData}
            symbol={symbol}
            />
          </div>
          </div>
          </div>
        );
      }

    })}
  </div>

    </div>
    

  );
};

export default LiveTradingApp;