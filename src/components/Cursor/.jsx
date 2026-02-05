import { useEffect, useState } from "react";
import "./cursor.css";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => setPosition({ x: e.clientX, y: e.clientY });

    const hoverIn = () => setHover(true);
    const hoverOut = () => setHover(false);

    document.addEventListener("mousemove", move);

    // Target hover on buttons and cards
    const targets = document.querySelectorAll(
      "button, .p-card, .s-card, .contact-btn"
    );
    targets.forEach((el) => {
      el.addEventListener("mouseenter", hoverIn);
      el.addEventListener("mouseleave", hoverOut);
    });

    return () => {
      document.removeEventListener("mousemove", move);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", hoverIn);
        el.removeEventListener("mouseleave", hoverOut);
      });
    };
  }, []);

  return (
    <>
      {/* Outer glowing circle */}
      <div
        className={`cursor-glow ${hover ? "hover" : ""}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      {/* Inner small circle */}
      <div
        className={`cursor-core ${hover ? "hover" : ""}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
};

export default Cursor;
