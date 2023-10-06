import  { useEffect, useState } from 'react';

const LiveChart = () => {
  const [symbol, setSymbol] = useState('ethusdt'); // Default symbol
  const [interval, setInterval] = useState('1m'); // Default interval
  const [ohlcData, setOhlcData] = useState([]); // State variable for OHLC data
  const [openData, setOpenData] = useState(null);
  const [closeData, setCloseData] = useState(null);
  useEffect(() => {
    const wsEndpoint = `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_${interval}`;

    const ws = new WebSocket(wsEndpoint);

    ws.onopen = () => {
      console.log('WebSocket connection opened.');
    };

    ws.onmessage = (event) => {
      const eventData = JSON.parse(event.data);
      const klineData = eventData.k;
        // console.log(eventData.k)
        setOpenData(eventData.k.o)
        setCloseData(eventData.k.c)
        console.log(eventData.k.o)
      // Extract OHLC data
      const openPrice = parseFloat(klineData.o).toFixed(2);
      const lowPrice = parseFloat(klineData.l).toFixed(2);
      const highPrice = parseFloat(klineData.h).toFixed(2);
      const closePrice = parseFloat(klineData.c).toFixed(2);

      // Update ohlcData with the new data point
      setOhlcData((prevData) => [
        ...prevData,
        {
          open: openPrice,
          low: lowPrice,
          high: highPrice,
          close: closePrice,
        },
      ]);
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


console.log(openData);
console.log(closeData);
  return (
    <div>
      <h1>Real-Time OHLC Data for {symbol.toUpperCase()}</h1>
      <div>
        <h2>OHLC Data</h2>
        <ul>
  {ohlcData.map((dataPoint, index) => {
    const textColorClass = dataPoint.open > dataPoint.close ? 'text-red-500' : 'text-green-500';
    
    return (
      <li key={index}>
        <span className={textColorClass}>
          Open: {dataPoint.open}, Low: {dataPoint.low}, High: {dataPoint.high}, Close: {dataPoint.close}
        </span>
      </li>
    );
  })}
</ul>

      </div>
    </div>
  );
};

export default LiveChart;
