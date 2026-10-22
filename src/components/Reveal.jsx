import { useEffect, useRef, useState } from "react";
import "../style_css/reveal.css";

export default function Reveal({ children }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`rl-box ${show ? "rl-show" : ""}`}>
      {children}
    </div>
  );
}