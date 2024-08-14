import React, { useEffect } from 'react';

function TradingViewChart() {
  useEffect(() => {
    new window.TradingView.widget({
      "width": 980,
      "height": 610,
      "symbol": "NASDAQ:AAPL",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "container_id": "tradingview_e09a7"
    });
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_e09a7"></div>
    </div>
  );
}

export default TradingViewChart;
