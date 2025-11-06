const CandleBackground = () => (
  <div className="absolute inset-0 pointer-events-none">
    {Array.from({ length: 15 }).map((_, idx) => {
      const left = Math.random() * 100;
      const height = 20 + Math.random() * 60;
      const color = Math.random() > 0.5 ? '#00ff99' : '#ff4c4c';
      const delay = Math.random() * 5;
      const duration = 8 + Math.random() * 5;
      return (
        <div
          key={idx}
          className="absolute bottom-0 w-1 rounded"
          style={{
            left: `${left}%`,
            height: `${height}px`,
            backgroundColor: color,
            animation: `floatUp ${duration}s ease-in-out ${delay}s infinite alternate`,
            opacity: 0.7,
          }}
        />
      );
    })}
  </div>
);

export default CandleBackground;
