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
  MapPin,
  Star,
} from "lucide-react";
import Magnetic from "./Magnetic.jsx";
import AnimatedNumber from "./AnimatedNumber.jsx";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/* Split text into words, animate each word as a masked slide */
function SplitLine({ children, className = "", delay = 0 }) {
  const words = String(children).split(" ");
  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.28em] pb-[0.05em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

const features = [
  { Icon: Code2, title: "Clean Code", sub: "better products" },
  { Icon: Smartphone, title: "Mobile Apps", sub: "beautiful UI/UX" },
  { Icon: Server, title: "Backend", sub: "scalable APIs" },
  { Icon: Database, title: "Database", sub: "MongoDB · MySQL" },
  { Icon: Zap, title: "Real-time", sub: "live experiences" },
];

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section
      id="home"
      className="relative w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-28 md:pt-36 pb-24 md:pb-32 min-h-screen flex items-center"
    >
      {/* Ticker strip at top of hero */}
     {/* Ticker strip at top of hero */}
<motion.div
  initial={{ opacity: 0, y: -12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.7 }}
  className="absolute top-20 md:top-28 left-0 right-0 overflow-hidden pointer-events-none select-none"
  style={{
    maskImage:
      "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
    WebkitMaskImage:
      "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
  }}
>
  <div className="flex whitespace-nowrap text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-zinc-400 animate-marquee">
    {[...Array(4)].map((_, k) => (
      <div key={k} className="flex items-center gap-6 md:gap-8 pr-6 md:pr-8">
        <span>available for freelance</span>
        <span className="text-zinc-900">★</span>
        <span>react native · node.js</span>
        <span className="text-zinc-900">★</span>
        <span>shipping real products</span>
        <span className="text-zinc-900">★</span>
        <span>based in maharashtra, india</span>
        <span className="text-zinc-900">★</span>
      </div>
    ))}
  </div>
</motion.div>

      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center w-full mt-16">
        {/* LEFT */}
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-5">
  {/* Eyebrow first */}
  <motion.p
    variants={fadeUp}
    className="text-[10.5px] md:text-[11px] tracking-[0.3em] uppercase text-zinc-400 font-semibold"
  >
    Full-Stack Mobile &amp; Web Developer
  </motion.p>

  {/* Sticker row */}
  <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2.5">
    <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-zinc-200 rounded-full text-[12px] font-medium text-zinc-600 shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      open to work
    </span>
    <span className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-zinc-900 text-white rounded-full text-[12px] font-semibold shadow-[0_6px_20px_rgba(0,0,0,0.28)] rotate-[-3deg]">
      <Sparkles size={12} /> 1+ yr shipping
    </span>
    <span className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white border border-zinc-200 rounded-full text-[12px] font-medium text-zinc-600 rotate-[2deg]">
      <MapPin size={12} /> Maharashtra
    </span>
  </motion.div>

  {/* Headline */}
  <h1 className="text-[clamp(38px,6.2vw,88px)] font-extrabold leading-[0.95] tracking-[-0.04em] text-zinc-900 pt-1">
    <SplitLine delay={0.1}>I build</SplitLine>
    <span className="block">
      <SplitLine
        delay={0.3}
        className="font-serif italic font-medium text-zinc-900"
      >
        digital products
      </SplitLine>
    </span>
    <span className="block">
      <SplitLine delay={0.55}>that ship.</SplitLine>
    </span>
  </h1>
          <motion.p
            variants={fadeUp}
            className="text-[15.5px] text-zinc-500 max-w-[500px] leading-[1.75]"
          >
            Hey — I'm Sakshi. I ship cross-platform apps and backend systems that real
            people actually use. React Native on the front, Node.js on the back,{" "}
            <span className="text-zinc-900 font-semibold">zero fluff in between.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex gap-3 flex-wrap pt-1">
            <Magnetic>
              <button className="btn-primary" onClick={() => scrollTo("projects")}>
                see my work <ArrowRight size={17} />
              </button>
            </Magnetic>
            <Magnetic>
              <button className="btn-ghost" onClick={() => scrollTo("contact")}>
                say hi <MoveUpRight size={17} />
              </button>
            </Magnetic>
          </motion.div>

          {/* Stats — sticker card */}
          <motion.div
            variants={fadeUp}
            className="relative mt-8 p-5 rounded-[24px] bg-white border border-zinc-200 shadow-[0_10px_40px_rgba(30,64,245,0.06)]"
          >
            <div className="absolute -top-2.5 left-6 px-2.5 py-0.5 bg-zinc-900 text-white text-[10px] rounded-full tracking-[0.15em] uppercase font-semibold">
              quick stats
            </div>
            <div className="flex items-center gap-6 flex-wrap pt-2">
              <div>
                <div className="text-[30px] font-extrabold tracking-tight text-zinc-900">
                  <AnimatedNumber value={1} suffix="+" />
                </div>
                <div className="text-[10.5px] text-zinc-400 uppercase tracking-[0.12em] mt-1">
                  years shipping
                </div>
              </div>
              <div className="w-px h-10 bg-zinc-200" />
              <div>
                <div className="text-[30px] font-extrabold tracking-tight text-zinc-900">
                  <AnimatedNumber value={10} suffix="+" />
                </div>
                <div className="text-[10.5px] text-zinc-400 uppercase tracking-[0.12em] mt-1">
                  projects built
                </div>
              </div>
              <div className="w-px h-10 bg-zinc-200" />
              <div>
                <div className="text-[30px] font-extrabold tracking-tight text-pink-500">
                  <AnimatedNumber value={3} />
                </div>
                <div className="text-[10.5px] text-zinc-400 uppercase tracking-[0.12em] mt-1">
                  core domains
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — portrait + floating bits */}
        <div className="relative min-h-[440px] sm:min-h-[520px] md:min-h-[600px] py-12 md:py-0 flex items-center justify-center">
          {/* Aura */}
          <motion.div
            aria-hidden
            className="absolute inset-[8%_4%_6%_6%] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 55% 45%, rgba(30,64,245,0.28), transparent 62%)",
            }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div
            aria-hidden
            className="absolute top-[10%] right-[6%] w-[340px] h-[340px] rounded-full border border-dashed border-pink-300/70 animate-[spin_40s_linear_infinite]"
          />
          <div
            aria-hidden
            className="absolute bottom-[8%] left-[6%] w-[240px] h-[240px] rounded-full border border-dashed border-pink-200 animate-[spin_55s_linear_infinite_reverse]"
          />

          {/* Portrait */}
          <motion.div
           className="relative z-[2] w-[min(320px,85%)] md:w-[min(420px,90%)] aspect-[4/5]"
            initial={{ opacity: 0, y: 60, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/sakshi-profile.jpeg"
              alt="Sakshi Mishra"
              loading="eager"
              className="w-full h-full object-cover object-top rounded-[220px_220px_40px_40px] bg-pink-50"
              style={{
                boxShadow:
                  "0 30px 60px -20px rgba(30,64,245,0.30), 0 0 0 10px rgba(255,255,255,0.95), 0 0 0 11px #dce7ff",
              }}
            />
          </motion.div>

          {/* Code card */}
          <motion.div
            className="absolute -top-6 -left-6 md:top-[36%] md:-left-[8%] w-[180px] md:w-[240px] z-[4] bg-[#0a0a0a] rounded-2xl p-3 md:p-3.5 border border-white/[0.1] shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
            initial={{ opacity: 0, x: -60, rotate: -8 }}
            animate={{ opacity: 1, x: 0, rotate: -6 }}
            transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: 0, y: -6, scale: 1.04 }}
          >
            <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-white/[0.08]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-auto text-[10px] text-white/45 font-mono">sakshi.dev</span>
            </div>
            <pre className="font-mono text-[10px] md:text-[11px] leading-[1.7] text-[#dce7ff] whitespace-pre m-0">
{`const dev = {
  name: "Sakshi",
  stack: ["RN", "Node"],
  vibe: "shipping ✨"
};`}
            </pre>
          </motion.div>

          {/* Feature card */}
          <motion.div
            className="absolute -right-6 md:-right-[8%] -bottom-8 md:bottom-[2%] w-[180px] md:w-[230px] z-[4] bg-white/90 backdrop-blur-xl border border-zinc-200 rounded-[22px] p-3.5 md:p-4 shadow-[0_24px_60px_rgba(0,0,0,0.14)]"
            initial={{ opacity: 0, x: 60, rotate: 4 }}
            animate={{ opacity: 1, x: 0, rotate: 2 }}
            transition={{ duration: 0.9, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 text-[10.5px] font-bold text-pink-500 mb-3 tracking-[0.14em] uppercase">
              <Star size={12} fill="currentColor" />
              <span>what I do</span>
            </div>
            <ul className="flex flex-col gap-2">
              {features.map(({ Icon, title, sub }) => (
                <li key={title} className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-pink-50 text-pink-500 grid place-items-center flex-shrink-0 mt-0.5">
                    <Icon size={12} />
                  </span>
                  <div className="flex flex-col leading-tight">
                    <strong className="text-[11.5px] text-zinc-900 font-bold">{title}</strong>
                    <span className="text-[10px] text-zinc-400">{sub}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Floating pills */}
          <motion.span
            className="absolute top-[8%] right-0 md:top-[42%] md:right-[2%] z-[3] px-3 py-1.5 bg-zinc-900 text-white rounded-full text-[10px] font-bold uppercase tracking-[0.14em]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            react native
          </motion.span>
          <motion.span
            className="absolute bottom-[4%] left-0 md:bottom-[16%] md:left-[2%] z-[3] px-3 py-1.5 bg-white border border-zinc-300 rounded-full text-[10px] font-bold text-zinc-900 uppercase tracking-[0.14em]"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            node.js
          </motion.span>

          {/* Scroll hint */}
          <motion.div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-semibold"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓ scroll
          </motion.div>
        </div>
      </div>
    </section>
  );
}