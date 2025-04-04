import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlow: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity"
      animate={{
        WebkitMaskImage: `radial-gradient(
          200px at ${mousePosition.x}px ${mousePosition.y}px,
          rgba(0, 0, 0, 0.15),
          transparent
        )`,
      }}
    >
      <div className="absolute inset-0 bg-green-500" />
    </motion.div>
  );
};

export default CursorGlow;
