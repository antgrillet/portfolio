"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function RubyCustomCursor() {
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 300, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 300, mass: 0.5 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
      if (isHidden) setIsHidden(false);
    };

    const handleOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setIsHoveringLink(el.closest("a, button") !== null);
      setIsHoveringImage(el.closest("img, [data-cursor-zoom]") !== null);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [mouseX, mouseY, isHidden]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      style={{ x: smoothX, y: smoothY }}
    >
      <motion.div
        animate={{
          width: isHoveringImage ? 80 : isHoveringLink ? 48 : 32,
          height: isHoveringImage ? 80 : isHoveringLink ? 48 : 32,
          backgroundColor: isHoveringLink ? "#991422" : "#f0f0f0",
          borderRadius: "50%",
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="flex items-center justify-center"
      >
        {isHoveringImage && (
          <span
            className="text-[#f0f0f0] text-[8px] font-bold uppercase tracking-widest"
            style={{ mixBlendMode: "difference" }}
          >
            Voir
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
