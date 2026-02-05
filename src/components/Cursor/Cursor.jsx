import { useEffect, useState } from "react";
import "./cursor.css";

const Cursor = () => {
  const [hover, setHover] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    // 1. Move cursor using CSS variables (better performance)
    const move = (e) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };

    // 2. Click states
    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);

    // 3. Hover states
    const hoverIn = () => setHover(true);
    const hoverOut = () => setHover(false);

    document.addEventListener("mousemove", move);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const targets = document.querySelectorAll("button, .p-card, .s-card, .contact-btn, a");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", hoverIn);
      el.addEventListener("mouseleave", hoverOut);
    });

    return () => {
      document.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", hoverIn);
        el.removeEventListener("mouseleave", hoverOut);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-glow ${hover ? "hover" : ""} ${clicking ? "clicking" : ""}`}
        style={{ left: "var(--x)", top: "var(--y)" }}
      />
      <div
        className={`cursor-core ${hover ? "hover" : ""} ${clicking ? "clicking" : ""}`}
        style={{ left: "var(--x)", top: "var(--y)" }}
      />
    </>
  );
};

export default Cursor;