import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SKILLS = [
  "React Native",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Firebase",
  "Git",
];

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 py-20 md:py-28">
      <motion.p
        className="text-[12px] tracking-[0.22em] uppercase text-pink-500 font-semibold mb-4"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.p>
      <motion.h2
        className="text-[clamp(30px,4.2vw,52px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
      >
        My everyday <span className="font-serif italic font-medium text-pink-500">stack.</span>
      </motion.h2>

      <div className="flex flex-col border-t border-line">
        {SKILLS.map((s, i) => (
          <motion.div
            key={s}
            className="group grid grid-cols-[40px_1fr_24px] md:grid-cols-[60px_1fr_24px] items-center gap-3 md:gap-5 py-4 md:py-5.5 px-2 md:px-3 border-b border-line transition-all duration-400 hover:translate-x-3 hover:bg-pink-50 hover:rounded-xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <span className="font-serif italic text-[14px] text-pink-500 font-medium">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[clamp(20px,2.4vw,30px)] font-bold tracking-[-0.02em] text-ink">
              {s}
            </span>
            <ArrowRight
              size={18}
              className="text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-pink-500"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}