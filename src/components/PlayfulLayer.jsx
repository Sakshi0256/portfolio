import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/* ---- Multi-dot cursor trail ---- */
function CursorTrail() {
  const dots = useRef([]);
  const positions = useRef(
    Array.from({ length: 6 }, () => ({ x: window.innerWidth / 2, y: window.innerHeight / 2 }))
  );
  const target = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    setEnabled(true);

    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    let raf;
    const loop = () => {
      let px = target.current.x;
      let py = target.current.y;
      positions.current.forEach((p, i) => {
        p.x += (px - p.x) * (0.32 - i * 0.04);
        p.y += (py - p.y) * (0.32 - i * 0.04);
        px = p.x;
        py = p.y;
        const el = dots.current[i];
        if (el) {
          const size = 10 - i * 1.2;
          el.style.transform = `translate3d(${p.x - size / 2}px, ${p.y - size / 2}px, 0)`;
          el.style.width = `${size}px`;
          el.style.height = `${size}px`;
          el.style.opacity = `${1 - i * 0.13}`;
        }
      });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (dots.current[i] = el)}
          aria-hidden
          className="pointer-events-none fixed top-0 left-0 rounded-full z-[99] mix-blend-multiply"
          style={{
            background: i === 0 ? "#1e40f5" : "#85a9ff",
            filter: "blur(0.5px)",
          }}
        />
      ))}
    </>
  );
}

/* ---- Soft slow-moving gradient mesh ---- */
function GradientMesh() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(30,64,245,0.22), transparent 65%)",
        }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(184,205,255,0.45), transparent 65%)",
        }}
        animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(30,64,245,0.16), transparent 65%)",
        }}
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* ---- Top scroll progress bar ---- */
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
      <CursorTrail />
      <ScrollProgress />
    </>
  );
}