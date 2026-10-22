import { useEffect, useState } from "react";
import "../style_css/counter.css";

export default function Counter({ number, label, icon }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1400;
    const stepTime = 20;
    const increment = number / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;

      if (start >= number) {
        start = number;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, stepTime);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <div className="counter-card">

      <div className="counter-number">
        {count}
        <span>+</span>
      </div>

      <div className="counter-label">
        {label}
      </div>

      <div className="counter-line"></div>

    </div>
  );
}