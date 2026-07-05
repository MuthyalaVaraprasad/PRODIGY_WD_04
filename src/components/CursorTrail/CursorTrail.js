import React, {useState, useEffect, useRef} from "react";
import "./CursorTrail.scss";

export default function CursorTrail() {
  const [position, setPosition] = useState({x: 0, y: 0});
  const [trail, setTrail] = useState({x: 0, y: 0});
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const trailRef = useRef({x: 0, y: 0});
  const requestRef = useRef(null);

  // Mouse move listener
  useEffect(() => {
    const handleMouseMove = e => {
      setPosition({x: e.clientX, y: e.clientY});
      setIsHidden(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Smooth trail lag loop using requestAnimationFrame
  useEffect(() => {
    const updateTrail = () => {
      // Interpolate trail position (speed factor 0.15)
      trailRef.current.x += (position.x - trailRef.current.x) * 0.15;
      trailRef.current.y += (position.y - trailRef.current.y) * 0.15;
      setTrail({x: trailRef.current.x, y: trailRef.current.y});

      requestRef.current = requestAnimationFrame(updateTrail);
    };

    requestRef.current = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(requestRef.current);
  }, [position]);

  // Click & Hover listeners
  useEffect(() => {
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Event delegation to capture hovers dynamically
    const handleMouseOver = e => {
      const target = e.target;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".flashcard-scene") ||
        target.closest(".gap-chip-btn") ||
        target.closest(".contact-card-link") ||
        target.closest(".main-button") ||
        target.classList.contains("clickable") ||
        target.getAttribute("role") === "button";

      if (isClickable) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Inner Dot Cursor */}
      <div
        className={`cursor-dot ${isClicked ? "cursor-clicked" : ""} ${
          isHovered ? "cursor-hovered" : ""
        }`}
        style={{left: `${position.x}px`, top: `${position.y}px`}}
      />
      {/* Outer Ring Cursor */}
      <div
        className={`cursor-ring ${isClicked ? "cursor-clicked" : ""} ${
          isHovered ? "cursor-hovered" : ""
        }`}
        style={{left: `${trail.x}px`, top: `${trail.y}px`}}
      />
    </>
  );
}
