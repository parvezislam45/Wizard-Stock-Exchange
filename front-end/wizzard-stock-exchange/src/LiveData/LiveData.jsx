import  { useEffect, useState } from 'react';
import LiveChart from '../LiveChart/LiveChart';



const LiveData = () => {
  const [stockPrice, setStockPrice] = useState(1);
  const [symbol, setSymbol] = useState('btcusdt'); // Default symbol

  const [interval, setInterval] = useState('1m'); // Default interval
  const [openData, setOpenData] = useState(null);
  const [closeData, setCloseData] = useState(null);

  useEffect(() => {
    const wsEndpoint = `wss://stream.binance.com:9443/ws/${symbol}@kline_${interval}`;

    const ws = new WebSocket(wsEndpoint);

    ws.onopen = () => {
      console.log('WebSocket connection opened.');
    };

    ws.onmessage = (event) => {
      const eventData = JSON.parse(event.data);
      setOpenData(eventData.k.o);
      setCloseData(eventData.k.c);
      const JsonPrice = parseFloat(eventData.p);
      setStockPrice(JsonPrice);

    
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = (event) => {
      console.log(`WebSocket connection closed with code ${event.code} and reason: ${event.reason}`);
    };

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      ws.close();
    };
  }, [symbol, interval]);

  const handleButtonClick = (newSymbol) => {
    setSymbol(newSymbol);
    setStockPrice(1); // Reset stockPrice when switching symbols
  };

  console.log(stockPrice);
  console.log(closeData);

  return (

    <div>
    <button onClick={() => handleButtonClick('ethusdt')}>ETH/USDT</button>
    <button onClick={() => handleButtonClick('btcusdt')}>BTC/USDT</button>
    <button onClick={() => handleButtonClick('solusdt')}>SOL/USDT</button>
    {/* Display the selected symbol */}
    <p>Selected Symbol: {symbol}</p>
    <span className="text-2xl sm:text-3xl leading-none font-bold">
  <h4 className={openData > closeData ? 'text-red-500' : 'text-green-500'}>

    {closeData}
  </h4>
</span>
    {/* Display the latest stock price */}
    <p>Last Price: {closeData}</p>
    <LiveChart symbolData={symbol}></LiveChart>
  </div>

  );
};

export default LiveData;
