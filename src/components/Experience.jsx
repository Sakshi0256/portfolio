import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    role: "Full-Stack Developer Intern",
    company: "Digilateral Solutions Pvt. Ltd.",
    period: "Feb 2026 – Aug 2026",
    points: [
      "Built production React Native applications",
      "Built production React Web applications",
      "Designed and maintained REST APIs",
      "Worked with Node.js and Express",
      "Worked with MongoDB and MySQL",
      "Implemented JWT authentication",
      "Built reusable UI components",
      "Worked on healthcare applications",
      "Worked on real-time doctor-patient communication",
      "Debugged production issues",
      "Collaborated with UI/UX and backend engineers",
    ],
  },
  {
    role: "React Native Developer Intern",
    company: "Resicore Solutions",
    period: "Jun 2025 – Dec 2025",
    points: [
      "Built society management application",
      "Visitor management",
      "Complaints",
      "Notice board",
      "Admin dashboard",
      "Payments",
      "Push notifications",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 py-20 md:py-28"
    >
      <motion.p
        className="text-[12px] tracking-[0.22em] uppercase text-pink-500 font-semibold mb-4"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.p>
      <motion.h2
        className="text-[clamp(30px,4.2vw,52px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
      >
        Where I've <span className="font-serif italic font-medium text-pink-500">shipped.</span>
      </motion.h2>

      <div className="relative pl-8">
        <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-pink-200 via-pink-100 to-transparent" />

        <div className="flex flex-col gap-8">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="absolute -left-8 top-6 w-4.5 h-4.5 w-[18px] h-[18px] rounded-full bg-white border-[3px] border-pink-500 shadow-[0_0_0_6px_rgba(24,24,27,,0.1)]" />
              <div className="bg-white border border-line rounded-[28px] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(24,24,27,,0.1)]">
                <div className="flex justify-between items-start gap-4 mb-4 flex-wrap">
                  <div>
                    <h3 className="text-[19px] font-bold tracking-[-0.01em] text-ink">
                      {exp.role}
                    </h3>
                    <p className="text-[14px] text-pink-500 font-medium mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-[12.5px] font-medium text-muted bg-pink-50 px-3 py-1.5 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2">
                  {exp.points.map((pt) => (
                    <li
                      key={pt}
                      className="relative pl-4.5 pl-[18px] text-[14px] text-muted leading-[1.6] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-pink-500"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}