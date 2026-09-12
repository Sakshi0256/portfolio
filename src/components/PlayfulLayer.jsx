import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/* --- Cursor-following pink glow (desktop only) --- */
function CursorGlow() {
  const dotRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = dotRef.current;
    let raf;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!visible) setVisible(true);
    };
    const onLeave = () => setVisible(false);

    const loop = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      if (dot) dot.style.transform = `translate3d(${cx - 200}px, ${cy - 200}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [visible]);

  return (
    <div
      ref={dotRef}
      aria-hidden
      className={`pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full z-[5] transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background:
          "radial-gradient(circle, rgba(255,118,170,0.18), rgba(255,118,170,0) 65%)",
      }}
    />
  );
}

/* --- Fixed gradient mesh in the background --- */
function GradientMesh() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(255,118,170,0.28),transparent_65%)] blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,196,220,0.35),transparent_65%)] blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(237,67,137,0.18),transparent_65%)] blur-3xl" />
    </div>
  );
}

/* --- Top scroll progress bar --- */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 25,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300"
    />
  );
}

export default function PlayfulLayer() {
  return (
    <>
      <GradientMesh />
      <CursorGlow />
      <ScrollProgress />
    </>
  );
}