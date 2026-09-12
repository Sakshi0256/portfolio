import { useRef, useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

export default function TiltCard({ children, className = "", max = 10 }) {
  const ref = useRef(null);
  const [hover, setHover] = useState(false);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);

  const rotateX = useMotionTemplate`${rx}deg`;
  const rotateY = useMotionTemplate`${ry}deg`;
  const bg = useMotionTemplate`radial-gradient(circle at ${mx}% ${my}%, rgba(255,255,255,0.55), transparent 60%)`;

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rx.set((0.5 - py) * max * 2);
    ry.set((px - 0.5) * max * 2);
    mx.set(px * 100);
    my.set(py * 100);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
    setHover(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`relative ${className}`}
    >
      {children}
      <motion.div
        aria-hidden
        style={{ background: bg }}
        className={`pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      />
    </motion.div>
  );
}