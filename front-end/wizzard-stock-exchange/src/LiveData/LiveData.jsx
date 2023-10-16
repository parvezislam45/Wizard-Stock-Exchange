import { useEffect, useRef, useState } from 'react';
import LiveChart from '../LiveChart/LiveChart';
import SecData from '../SecData/SecData';
import Buy from '../Buy/Buy';

const LiveTradingApp = () => {
  const [symbol, setSymbol] = useState('solusdt'); // Default symbol
  const [interval, setInterval] = useState('1m'); // Default interval
  const [openData, setOpenData] = useState(null);
  const [closeData, setCloseData] = useState(null);
  const [ohlcData, setOhlcData] = useState([]);
  const [stockPrice, setStockPrice] = useState(1);
  const [ws, setWs] = useState(null); // Store the WebSocket reference
  const SVGRect = useRef(null);

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

  return (
    // <div>
    //   <button onClick={() => handleButtonClick('ethusdt')}>ETH/USDT</button>
    //   <button onClick={() => handleButtonClick('btcusdt')}>BTC/USDT</button>
    //   <button onClick={() => handleButtonClick('solusdt')}>SOL/USDT</button>
    //   {/* Display the selected symbol */}
    //   <p>Selected Symbol: {symbol}</p>
    //   <span className="text-2xl sm:text-3xl leading-none font-bold">
    //     <h4 className={openData > closeData ? 'text-red-500' : 'text-green-500'}>{closeData}</h4>
    //   </span>
    //   {/* Display the latest stock price */}
    //   <p>Last Price: {closeData}</p>
    //   <LiveChart ohlcData={ohlcData}></LiveChart>
    //   <SecData ohlcData={ohlcData}></SecData>
    
      
    // </div>
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
                      <label htmlFor="my_modal_7" className="btn px-5">
                        <span className="text-xl font-black">Buy Now</span>
                      </label>
                    </div>
                  </div>
                  {/* <div id="main-chart"></div> */}
                </div>
                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                  <div className="mb-4 w-full h-72 overflow-hidden">
                    <SecData ohlcData={ohlcData}></SecData>
                  </div>
                </div>
                <Buy/>
              </div>
  );
};

export default LiveTradingApp;