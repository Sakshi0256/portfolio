import { motion } from "framer-motion";

export default function Marquee({ items, speed = 30, reverse = false }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-line shadow-[0_4px_16px_rgba(237,67,137,0.06)] whitespace-nowrap"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}