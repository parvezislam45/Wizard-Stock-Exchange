import  { useEffect, useState } from 'react';



const LiveData = () => {
  const [stockPrice, setStockPrice] = useState(null);
  const [symbol, setSymbol] = useState('btcusdt'); // Default symbol
  const [lastPrice, setLastPrice] = useState(null);


 

  useEffect(() => {
    const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}@trade`);

    ws.onmessage = (event) => {
      // console.log(event.data)
      const stockObject = JSON.parse(event.data);
      const JsonPrice = parseFloat(stockObject.p).toFixed(2);
      setStockPrice(JsonPrice);

      if (lastPrice === null) {
        setLastPrice(JsonPrice);
        
      }

      // Update chartData with new data point

    };

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      ws.close();
    };
  }, [symbol, lastPrice, stockPrice]);

  const handleButtonClick = (newSymbol) => {
    setSymbol(newSymbol);
    setStockPrice(null); // Reset stockPrice when switching symbols
    setLastPrice(null); // Reset lastPrice when switching symbols
  };

  return (

    <div>
    <button onClick={() => handleButtonClick('ethusdt')}>ETH/USDT</button>
    <button onClick={() => handleButtonClick('btcusdt')}>BTC/USDT</button>
    <button onClick={() => handleButtonClick('solusdt')}>SOL/USDT</button>
    {/* Display the selected symbol */}
    <p>Selected Symbol: {symbol}</p>
    <span className="text-2xl sm:text-3xl leading-none font-bold">
  <h4 className={stockPrice !== null ? (stockPrice > lastPrice ? 'text-green-500' : (stockPrice < lastPrice ? 'text-red-500' : 'text-black')) : ''}>
    {stockPrice !== null ? `${stockPrice} USDT` : 'Loading...'}
  </h4>
</span>
    {/* Display the latest stock price */}
    <p>Last Price: {lastPrice}</p>

  </div>

  );
};

export default LiveData;
