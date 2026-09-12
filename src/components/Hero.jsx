import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Smartphone,
  Server,
  Database,
  Zap,
  MoveUpRight,
} from "lucide-react";
import Magnetic from "./Magnetic.jsx";
import AnimatedNumber from "./AnimatedNumber.jsx";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const features = [
  { Icon: Code2, title: "Clean Code", sub: "Better Products" },
  { Icon: Smartphone, title: "Mobile Apps", sub: "Beautiful UI/UX" },
  { Icon: Server, title: "Backend", sub: "Scalable APIs" },
  { Icon: Database, title: "Database", sub: "MongoDB | MySQL" },
  { Icon: Zap, title: "Real-time", sub: "Live Experiences" },
];

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  const particles = [
    "top-[12%] left-[8%]",
    "top-[30%] left-[45%]",
    "top-[60%] left-[20%]",
    "top-[80%] left-[55%]",
    "top-[20%] right-[15%]",
    "top-[70%] right-[25%]",
    "bottom-[15%] left-[35%]",
    "bottom-[25%] right-[8%]",
  ];

  return (
    <section
      id="home"
      className="relative w-full max-w-[1240px] mx-auto px-5 sm:px-8 pt-32 md:pt-40 pb-20 md:pb-28 min-h-screen flex items-center"
    >
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            className={`absolute w-1.5 h-1.5 rounded-full bg-pink-400 opacity-50 ${particles[i]}`}
            animate={{
              y: [0, -18, 0],
              x: [0, i % 2 === 0 ? 8 : -8, 0],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          />
        ))}
      </div>

      <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center w-full">
        {/* LEFT */}
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-5">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-line rounded-full text-[12.5px] font-medium text-muted w-fit shadow-[0_4px_16px_rgba(237,67,137,0.06)]"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for Opportunities
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-[12px] tracking-[0.22em] uppercase text-pink-500 font-semibold"
          >
            Full-Stack Mobile &amp; Web Developer
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-[clamp(40px,6.2vw,78px)] font-extrabold leading-[0.98] tracking-[-0.035em] text-ink"
          >
            I BUILD
            <br />
            <span className="font-serif italic font-medium text-pink-500">DIGITAL PRODUCTS</span>
            <br />
            THAT SHIP.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-[16.5px] text-muted max-w-[540px] leading-[1.7]"
          >
            Full-Stack Mobile &amp; Web Developer specializing in React Native, Node.js and
            scalable backend systems. I turn ideas into real-world applications with clean
            code, beautiful interfaces and a focus on real impact.
          </motion.p>

          <motion.div variants={fadeUp} className="flex gap-3 flex-wrap pt-1">
            <Magnetic>
              <button className="btn-primary" onClick={() => scrollTo("projects")}>
                View My Work <ArrowRight size={18} />
              </button>
            </Magnetic>
            <Magnetic>
              <button className="btn-ghost" onClick={() => scrollTo("contact")}>
                Let's Connect <MoveUpRight size={18} />
              </button>
            </Magnetic>
          </motion.div>

         <motion.div
  variants={fadeUp}
  className="flex items-center gap-5 md:gap-6 pt-6 mt-2 border-t border-line flex-wrap"
>
  <div>
    <div className="text-[26px] font-extrabold tracking-tight text-ink">
      <AnimatedNumber value={1} suffix="+" />
    </div>
    <div className="text-[12.5px] text-muted max-w-[130px] leading-tight">
      Year Professional Experience
    </div>
  </div>

  <div className="hidden md:block w-px h-10 bg-line" />

  <div>
    <div className="text-[26px] font-extrabold tracking-tight text-ink">
      <AnimatedNumber value={10} suffix="+" />
    </div>
    <div className="text-[12.5px] text-muted max-w-[130px] leading-tight">
      Projects Built
    </div>
  </div>

  <div className="hidden md:block w-px h-10 bg-line" />

  <div>
    <div className="text-[26px] font-extrabold tracking-tight text-ink">
      <AnimatedNumber value={3} />
    </div>
    <div className="text-[12.5px] text-muted max-w-[130px] leading-tight">
      Core Development Domains
    </div>
  </div>
</motion.div>
        </motion.div>

        {/* RIGHT */}
        <div className="relative min-h-[460px] md:min-h-[560px] flex items-center justify-center">
          <motion.div
            aria-hidden
            className="absolute inset-[8%_4%_6%_6%] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 55% 45%, rgba(255,118,170,0.42), transparent 62%)",
            }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.65, 0.9, 0.65] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div
            aria-hidden
            className="absolute top-[12%] right-[8%] w-[380px] h-[380px] rounded-full border border-dashed border-pink-300/60 animate-[spin_40s_linear_infinite]"
          />
          <div
            aria-hidden
            className="absolute bottom-[6%] left-[4%] w-[260px] h-[260px] rounded-full border border-dashed border-pink-300/60 animate-[spin_55s_linear_infinite_reverse]"
          />

          <motion.div
            className="relative z-[2] w-[min(420px,90%)] aspect-[4/5] mt-14"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/sakshi-profile.jpeg"
              alt="Sakshi Mishra"
              loading="eager"
              className="w-full h-full object-cover object-top rounded-[220px_220px_40px_40px] bg-pink-50"
              style={{
                boxShadow:
                  "0 30px 60px -20px rgba(237,67,137,0.35), 0 0 0 10px rgba(255,255,255,0.85), 0 0 0 11px #ffe1ee",
              }}
            />
          </motion.div>

          {/* Code card */}
          <motion.div
            className="absolute top-[34%] -left-2 md:-left-[6%] w-[210px] md:w-[240px] z-[4] bg-[#1a1620] rounded-2xl p-3 md:p-3.5 border border-white/[0.06] shadow-[0_24px_60px_rgba(237,67,137,0.16)]"
            initial={{ opacity: 0, x: -60, rotate: -8 }}
            animate={{ opacity: 1, x: 0, rotate: -6 }}
            transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: 0, y: -6, scale: 1.03 }}
          >
            <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-white/[0.08]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-auto text-[11px] text-white/45 font-mono">sakshi.dev</span>
            </div>
            <pre className="font-mono text-[10px] md:text-[11.5px] leading-[1.7] text-[#e7d9ff] whitespace-pre m-0">
              {`const developer = {
  name: "Sakshi Mishra",
  stack: ["RN", "Node"],
  focus: "real products"
};`}
            </pre>
          </motion.div>

          {/* Feature card */}
          <motion.div
            className="absolute -right-1 md:-right-[8%] bottom-[4%] w-[200px] md:w-[240px] z-[4] bg-white/75 backdrop-blur-xl border border-white/90 rounded-[20px] p-3 md:p-4 shadow-[0_24px_60px_rgba(237,67,137,0.16)]"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 text-[12px] font-semibold text-pink-500 mb-3 tracking-wide">
              <Sparkles size={16} />
              <span>What I do</span>
            </div>
            <ul className="flex flex-col gap-1.5 md:gap-2.5">
              {features.map(({ Icon, title, sub }) => (
                <li key={title} className="flex items-start gap-2.5 text-pink-500">
                  <Icon size={14} className="flex-shrink-0 mt-[3px]" />
                  <div className="flex flex-col leading-tight">
                    <strong className="text-[11.5px] md:text-[12.5px] text-ink font-bold">
                      {title}
                    </strong>
                    <span className="text-[10.5px] md:text-[11.5px] text-muted">{sub}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.span
            className="absolute top-[10%] right-[4%] z-[3] px-3.5 py-2 bg-white border border-line rounded-full text-[12px] font-semibold text-ink shadow-[0_10px_40px_rgba(237,67,137,0.1)]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            React Native
          </motion.span>
          <motion.span
            className="absolute bottom-[12%] left-[2%] z-[3] px-3.5 py-2 bg-white border border-line rounded-full text-[12px] font-semibold text-ink shadow-[0_10px_40px_rgba(237,67,137,0.1)]"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Node.js
          </motion.span>
        </div>
      </div>
    </section>
  );
}