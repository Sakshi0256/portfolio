import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[12px] tracking-[0.22em] uppercase text-pink-500 font-semibold mb-4">
            About
          </p>
          <h2 className="text-[clamp(30px,4.2vw,52px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink mb-6">
            I DON'T JUST WRITE CODE.
            <br />
            <span className="font-serif italic font-medium text-pink-500">I build products.</span>
          </h2>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-pink-50 text-pink-500 rounded-full text-[13px] font-medium w-fit mt-2">
            <MapPin size={14} />
            Maharashtra, India
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-base text-muted leading-[1.85] mb-5">
            I'm a Full-Stack Mobile &amp; Web Developer with hands-on production experience
            building cross-platform apps, REST APIs, authentication systems and real-time
            features.
          </p>
          <p className="text-base text-muted leading-[1.85]">
            My work spans healthcare, pharma and society-management products, where I've
            worked across mobile UI, backend services, databases and production debugging.
          </p>
        </motion.div>
      </div>
    </section>
  );
}