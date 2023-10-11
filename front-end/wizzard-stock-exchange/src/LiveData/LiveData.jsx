import { useEffect, useRef, useState } from 'react';
import LiveChart from '../LiveChart/LiveChart';
import SecData from '../SecData/SecData';

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
    <div>
      <button onClick={() => handleButtonClick('ethusdt')}>ETH/USDT</button>
      <button onClick={() => handleButtonClick('btcusdt')}>BTC/USDT</button>
      <button onClick={() => handleButtonClick('solusdt')}>SOL/USDT</button>
      {/* Display the selected symbol */}
      <p>Selected Symbol: {symbol}</p>
      <span className="text-2xl sm:text-3xl leading-none font-bold">
        <h4 className={openData > closeData ? 'text-red-500' : 'text-green-500'}>{closeData}</h4>
      </span>
      {/* Display the latest stock price */}
      <p>Last Price: {closeData}</p>
      {/* <div className="container">
        <h1 className="title">Real-Time OHLC Data for {symbol}</h1>
        <div className="ohlc-container">
          <h2 className="ohlc-title">OHLC Data</h2>
          <ul className="ohlc-list">
            {ohlcData.map((dataPoint, index) => {
              const textColorClass = dataPoint.open > dataPoint.close ? 'text-red-500' : 'text-green-500';

              return (
                <li key={index} className="ohlc-item">
                  <span className={`ohlc-text ${textColorClass}`}>
                    Open: {dataPoint.open}, Low: {dataPoint.low}, High: {dataPoint.high}, Close: {dataPoint.close}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div> */}
      <LiveChart ohlcData={ohlcData}></LiveChart>
      <SecData ohlcData={ohlcData}></SecData>
    </div>
  );
};

export default LiveTradingApp;