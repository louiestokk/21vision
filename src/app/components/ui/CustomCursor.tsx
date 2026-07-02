import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 220, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if it's touch device or if custom cursor shouldn't render
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    // Track hovers over links, buttons, and custom case cards
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if target or parent is a link/button
      const isInteractive = target.closest("a, button, [role='button'], input, textarea, select");
      const isCase = target.closest("[data-case-card]"); 

      if (isCase) {
        setHovered(true);
        setCursorText("VIEW");
      } else if (isInteractive) {
        setHovered(true);
        setCursorText("");
      } else {
        setHovered(false);
        setCursorText("");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Outer soft ring / custom indicator */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] flex items-center justify-center text-[9px] font-black tracking-widest text-black select-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovered ? (cursorText ? 80 : 44) : 24,
          height: hovered ? (cursorText ? 80 : 44) : 24,
          backgroundColor: cursorText ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
          border: cursorText ? "none" : "1.5px solid rgba(255, 255, 255, 0.45)",
          boxShadow: hovered && !cursorText ? "0 0 12px rgba(255,255,255,0.15)" : "none"
        }}
      />
    </>
  );
}
