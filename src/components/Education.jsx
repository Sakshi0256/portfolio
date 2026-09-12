import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

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
  "React Native: The Practical Guide",
  "MySQL: Assessment Certification",
  "Python: Using AI",
];

export default function Education() {
  return (
    <section
      id="education"
      className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 py-20 md:py-28"
    >
      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <motion.p
            className="text-[12px] tracking-[0.22em] uppercase text-pink-500 font-semibold mb-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Education
          </motion.p>
          <motion.h2
            className="text-[clamp(30px,4.2vw,52px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            Academic <span className="font-serif italic font-medium text-pink-500">background.</span>
          </motion.h2>

          <div className="flex flex-col gap-3.5">
            {EDU.map((e, i) => (
              <motion.div
                key={e.degree}
                className="flex gap-4 p-5.5 p-[22px] bg-white border border-line rounded-[20px] text-pink-500 transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-[0_10px_40px_rgba(24,24,27,,0.1)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <GraduationCap size={22} className="flex-shrink-0" />
                <div>
                  <h3 className="text-[16px] font-bold text-ink mb-1 tracking-[-0.01em]">
                    {e.degree}
                  </h3>
                  <p className="text-[14px] text-pink-500 font-medium">{e.field}</p>
                  <p className="text-[13px] text-muted mt-0.5">
                    {e.school} · {e.period}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.p
            className="text-[12px] tracking-[0.22em] uppercase text-pink-500 font-semibold mb-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Certifications
          </motion.p>
          <motion.h2
            className="text-[clamp(30px,4.2vw,52px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            Verified <span className="font-serif italic font-medium text-pink-500">learning.</span>
          </motion.h2>

          <div className="flex flex-col gap-3.5">
            {CERTS.map((c, i) => (
              <motion.div
                key={c}
                className="flex gap-4 p-5.5 p-[22px] bg-white border border-line rounded-[20px] text-pink-500 transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-[0_10px_40px_rgba(24,24,27,,0.1)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Award size={22} className="flex-shrink-0" />
                <div>
                  <h3 className="text-[16px] font-bold text-ink tracking-[-0.01em]">{c}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}