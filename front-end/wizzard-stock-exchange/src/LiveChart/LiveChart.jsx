import React, { useEffect, useState } from 'react';

const LiveChart = ({ symbolData }) => {
  const [interval, setInterval] = useState('1m'); // Default interval
  const [ohlcData, setOhlcData] = useState([]); // State variable for OHLC data
  const [openData, setOpenData] = useState(null);
  const [closeData, setCloseData] = useState(null);

  useEffect(() => {
    const wsEndpoint = `wss://stream.binance.com:9443/ws/${symbolData}@kline_${interval}`;

    const ws = new WebSocket(wsEndpoint);

    ws.onopen = () => {
      console.log('WebSocket connection opened.');
    };

    ws.onmessage = (event) => {
      const eventData = JSON.parse(event.data);
      const klineData = eventData.k;
      setOpenData(eventData.k.o);
      setCloseData(eventData.k.c);

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
  }, [symbolData, interval]);

  return (
    <div className="container">
      <h1 className="title">Real-Time OHLC Data for {symbolData}</h1>
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
    </div>
  );
};

export default LiveChart;
