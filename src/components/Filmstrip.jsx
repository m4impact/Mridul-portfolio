import { useState, useEffect } from "react";

export default function Filmstrip() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const calc = () => setCount(Math.ceil(window.innerHeight / 36) + 4);
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  const holes = Array.from({ length: count });
  return (
    <>
      <div className="filmstrip left" aria-hidden="true">{holes.map((_,i) => <div key={i} className="filmstrip-hole" />)}</div>
      <div className="filmstrip right" aria-hidden="true">{holes.map((_,i) => <div key={i} className="filmstrip-hole" />)}</div>
    </>
  );
}
