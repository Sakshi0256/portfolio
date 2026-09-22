import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

const EDU = [
  {
    degree: "Master of Science",
    field: "Information Technology",
    school: "VIVA College",
    period: "2025 – 2027",
  },
  {
    degree: "Bachelor of Science",
    field: "Information Technology",
    school: "VIVA College",
    period: "2022 – 2025",
  },
];

const CERTS = [
  {
    name: "React Native: The Practical Guide",
    issuer: "Udemy",
  },
  {
    name: "Backend REST API Development",
    issuer: "Udemy",
  },
  {
    name: "Node.js: The Complete Guide",
    issuer: "Udemy",
  },
  {
    name: "Python with Data Science",
    issuer: "Udemy",
  },
  {
    name: "MySQL: Assessment Certification",
    issuer: "Assessment",
  },
  {
    name: "Python: Using AI",
    issuer: "Certification",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-20 md:py-28"
    >
      <div className="grid md:grid-cols-2 gap-10 md:gap-20">
        {/* EDUCATION */}
        <div>
          <motion.p
            className="text-[11px] tracking-[0.28em] uppercase text-zinc-400 font-semibold mb-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Education
          </motion.p>
          <motion.h2
            className="text-[clamp(32px,4.4vw,56px)] font-extrabold leading-[1] tracking-[-0.035em] text-zinc-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            Academic{" "}
            <span className="font-serif italic font-medium">background.</span>
          </motion.h2>

          <div className="flex flex-col gap-3">
            {EDU.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group flex gap-4 p-5 bg-white border border-zinc-200 rounded-[20px]
                           transition-all duration-300
                           hover:border-zinc-900 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
              >
                <span
                  className="w-11 h-11 rounded-full bg-zinc-100 text-zinc-900 grid place-items-center
                             flex-shrink-0 group-hover:bg-zinc-900 group-hover:text-white
                             transition-colors duration-300"
                >
                  <GraduationCap size={20} />
                </span>
                <div className="flex-1">
                  <h3 className="text-[16px] font-bold text-zinc-900 tracking-[-0.01em] mb-1">
                    {e.degree}
                  </h3>
                  <p className="text-[13.5px] text-zinc-600 font-medium">{e.field}</p>
                  <p className="text-[12.5px] text-zinc-400 mt-1 tracking-[0.02em]">
                    {e.school} · {e.period}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div>
          <motion.p
            className="text-[11px] tracking-[0.28em] uppercase text-zinc-400 font-semibold mb-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Certifications
          </motion.p>
          <motion.h2
            className="text-[clamp(32px,4.4vw,56px)] font-extrabold leading-[1] tracking-[-0.035em] text-zinc-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            Verified{" "}
            <span className="font-serif italic font-medium">learning.</span>
          </motion.h2>

          <div className="flex flex-col gap-3">
            {CERTS.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group flex items-start gap-4 p-5 bg-white border border-zinc-200 rounded-[20px]
                           transition-all duration-300
                           hover:border-zinc-900 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
              >
                <span
                  className="w-11 h-11 rounded-full bg-zinc-100 text-zinc-900 grid place-items-center
                             flex-shrink-0 group-hover:bg-zinc-900 group-hover:text-white
                             transition-colors duration-300"
                >
                  <Award size={20} />
                </span>
                <div className="flex-1">
                  <h3 className="text-[15.5px] font-bold text-zinc-900 tracking-[-0.01em] leading-snug">
                    {c.name}
                  </h3>
                  <p className="text-[12.5px] text-zinc-400 mt-1 uppercase tracking-[0.1em] font-semibold">
                    {c.issuer}
                  </p>
                </div>
                <ExternalLink
                  size={15}
                  className="text-zinc-300 group-hover:text-zinc-900 transition-colors flex-shrink-0 mt-1"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}