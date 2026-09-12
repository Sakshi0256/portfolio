import { motion } from "framer-motion";
import { Mail } from "lucide-react";

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section-wrap">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden text-center px-6 py-16 md:px-10 md:py-20 rounded-[36px] border border-line bg-gradient-to-br from-[#f4f4f5] to-[#e4e4e7]"
      >
        <div className="pointer-events-none absolute -top-32 -left-20 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(24,24,27,0.35),transparent_70%)]" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(24,24,27,0.35),transparent_70%)]" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="relative z-10 text-[clamp(28px,4.4vw,56px)] font-extrabold tracking-[-0.03em] leading-[1.05] mb-4"
        >
          LET'S MAKE SOMETHING
          <br />
          <span className="font-serif italic font-medium text-pink-500">
            GREAT TOGETHER.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative z-10 text-base text-muted mb-8"
        >
          Got an idea, product or opportunity? Let's talk.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative z-10 flex gap-3 justify-center flex-wrap mb-8"
        >
          <a className="btn-primary" href="mailto:sakshimishra04082004@gmail.com">
            <Mail size={18} /> Email Me
          </a>
          <a
            className="btn-ghost"
            href="https://www.linkedin.com/in/sakshi-mishra-703067258"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon size={18} /> LinkedIn
          </a>
        </motion.div>

        <div className="relative z-10 flex gap-3 justify-center flex-wrap text-[14px] text-muted">
          <a
            href="mailto:sakshimishra04082004@gmail.com"
            className="hover:text-pink-500 transition-colors"
          >
            sakshimishra04082004@gmail.com
          </a>
          <span className="text-pink-200">•</span>
          <a
            href="https://www.linkedin.com/in/sakshi-mishra-703067258"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            linkedin.com/in/sakshi-mishra-703067258
          </a>
        </div>
      </motion.div>
    </section>
  );
}