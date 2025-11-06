import React, { useEffect, useState } from 'react';

const initialStocks = [
  { symbol: 'AAPL', change: 1.2 },
  { symbol: 'TSLA', change: -0.5 },
  { symbol: 'AMZN', change: 0.8 },
  { symbol: 'GOOG', change: 2.1 },
  { symbol: 'MSFT', change: -0.3 },
  { symbol: 'NFLX', change: 1.5 },
  { symbol: 'META', change: 0.7 },
  { symbol: 'NVDA', change: -1.0 },
  { symbol: 'BABA', change: 2.3 },
  { symbol: 'DIS', change: -0.6 },
];

const FloatingTicker: React.FC = () => {
  const [stocks, setStocks] = useState(initialStocks);

  // Randomly update stock prices every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStocks((prev) =>
        prev.map((stock) => {
          const delta = (Math.random() - 0.5) * 0.4; // random small variation
          const newChange = +(stock.change + delta).toFixed(2);
          return { ...stock, change: newChange };
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 w-full overflow-hidden py-2 bg-gray-900/40 backdrop-blur-sm border-b border-gray-700">
      <div className="ticker-track">
        <div className="ticker-content">
          {/* Duplicate the full stock list twice for seamless looping */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex space-x-10 px-10">
              {stocks.map((s, idx) => (
                <span
                  key={`${i}-${idx}`}
                  className={`font-mono text-sm lg:text-base whitespace-nowrap ${
                    s.change >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {s.symbol} {s.change >= 0 ? '+' : ''}
                  {s.change}%
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ticker-track {
          display: flex;
          white-space: nowrap;
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .ticker-content {
          display: inline-flex;
          animation: tickerRotate 30s linear infinite;
        }

        @keyframes tickerRotate {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default FloatingTicker;
