import { motion } from "framer-motion";
import { MapPin, Sparkles, Coffee, Zap } from "lucide-react";

const chips = [
  { icon: Coffee, text: "fueled by coffee" },
  { icon: Zap, text: "fast shipper" },
  { icon: Sparkles, text: "clean UI guy/gal" },
  { icon: MapPin, text: "Maharashtra, India" },
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-20 md:py-28"
    >
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-zinc-400 font-semibold mb-4">
            about me
          </p>
          <h2 className="text-[clamp(34px,5vw,68px)] font-extrabold leading-[0.98] tracking-[-0.035em] text-zinc-900 mb-6">
            I don't just write code.
            <br />
            <span className="font-serif italic font-medium text-pink-500">
              I ship products.
            </span>
          </h2>

          <div className="flex flex-wrap gap-2 mt-2">
            {chips.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-zinc-200 rounded-full text-[11.5px] font-medium text-zinc-600 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
              >
                <Icon size={12} className="text-pink-500" />
                {text}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          <p className="text-[16px] text-zinc-600 leading-[1.8]">
            I'm a Full-Stack Mobile &amp; Web Developer with hands-on production
            experience building cross-platform apps, REST APIs, authentication
            systems and real-time features.
          </p>
          <p className="text-[16px] text-zinc-600 leading-[1.8]">
            My work spans <span className="text-zinc-900 font-semibold">healthcare</span>,{" "}
            <span className="text-zinc-900 font-semibold">pharma</span> and{" "}
            <span className="text-zinc-900 font-semibold">society-management</span>{" "}
            products — where I've worked across mobile UI, backend services, databases
            and production debugging.
          </p>
        </motion.div>
      </div>
    </section>
  );
}