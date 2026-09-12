import { motion } from "framer-motion";
import { ArrowUpRight, Building2, User } from "lucide-react";

/* -------------------- COMPANY PROJECTS -------------------- */
const COMPANY_PROJECTS = [
  {
    number: "01",
    title: "RXPL",
    category: "Pharma Application",
    description:
      "Built and shipped a cross-platform mobile app in React Native with dynamic, date-driven leaderboard components. Backed by a mediator/API-gateway layer routing across multiple services.",
    tech: ["React Native", "Node.js", "MongoDB", "MySQL"],
    bg: "from-[#fff8fb] to-[#fff0f6]",
  },

  {
    number: "02",
    title: "Soccer",
    category: "Pharma Application",
    description:
      "Built and shipped a cross-platform mobile app in React Native with dynamic, date-driven leaderboard components. Backed by a mediator/API-gateway layer routing across multiple services.",
    tech: ["React Native", "Node.js",  "MySQL"],
    bg: "from-[#fff8fb] to-[#fff0f6]",
  },

  {
    number: "03",
    title: "DOC TALK",
    category: "Doctor–Patient Communication",
    description:
      "A real-time healthcare communication experience for doctor-patient messaging with secure authentication, reusable components, and smooth state synchronization for sensitive healthcare data.",
    tech: ["React.js", "Real-time", "JWT", "Node.js"],
    bg: "from-[#fff8fb] to-[#ffe1ee]",
  },
  {
    number: "04",
    title: "DIGITAL SOCIETY",
    category: "Society Management Platform",
    description:
      "An end-to-end resident platform covering visitor management, complaints, notice board, secure payments, real-time push notifications, and an admin dashboard.",
    tech: ["React Native", "Firebase", "REST API", "Push Notifications"],
    bg: "from-white to-[#fff0f6]",
  },
  {
    number: "05",
    title: "PabsMade ",
    category: "Healthcare Platform",
    description:
      "A medical application built with secure authentication and reusable components, designed to handle sensitive healthcare data reliably across devices.",
    tech: ["React Native", "Node.js", "JWT", "MongoDB"],
    bg: "from-white to-[#fff8fb]",
  },
];

/* -------------------- PERSONAL PROJECTS -------------------- */
const PERSONAL_PROJECTS = [
  {
    number: "01",
    title: "HealthMate",
    category: "Healthcare Content Management",
    description:
      "A full-stack healthcare content management app with secure JWT authentication and an admin panel. Real-time APIs sync data instantly between the admin panel and the user-facing app.",
    tech: ["React Native", "Node.js", "MySQL"],
    bg: "from-[#fff8fb] to-[#fff0f6]",
  },
 
  {
    number: "02",
    title: "QUIZ APP",
    category: "Interactive Learning",
    description:
      "Dynamic question rendering with score tracking, built for smooth quiz sessions across devices.",
    tech: ["React Native", "Firebase"],
    bg: "from-[#fff8fb] to-[#fff0f6]",
  },
  {
    number: "03",
    title: "WOMEN SAFETY TRACKER",
    category: "Real-time Safety App",
    description:
      "Real-time location tracking with instant alert notifications for emergency situations.",
    tech: ["React Native", "REST API", "Location"],
    bg: "from-white to-[#fff0f6]",
  },
  {
    number: "04",
    title: "WEATHER APP",
    category: "API Integration",
    description:
      "Live forecast data via third-party weather API integration with a clean, minimal interface.",
    tech: ["React Native", "REST API"],
    bg: "from-[#fff8fb] to-[#ffe1ee]",
  },
];

/* -------------------- Project Card -------------------- */
function ProjectCard({ project, index, total }) {
  return (
    <motion.article
      className={`group grid md:grid-cols-2 gap-10 items-center p-8 md:p-10 rounded-[36px] border border-line bg-gradient-to-br ${project.bg} transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(237,67,137,0.16)] overflow-hidden`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: (index % total) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={index % 2 === 1 ? "md:order-2" : ""}>
        <span className="block font-serif italic text-[18px] text-pink-500 mb-2">
          {project.number}
        </span>
        <h3 className="text-[clamp(26px,3.2vw,40px)] font-extrabold tracking-[-0.02em] leading-[1.05] text-ink mb-1.5">
          {project.title}
        </h3>
        <p className="text-[13px] text-pink-500 font-semibold tracking-wide mb-4">
          {project.category}
        </p>
        <p className="text-[15px] text-muted leading-[1.75] mb-5 max-w-[480px]">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 bg-white border border-line rounded-full text-[12px] font-medium text-muted"
            >
              {t}
            </span>
          ))}
        </div>
        <button
          className="w-11 h-11 rounded-full bg-ink text-white inline-flex items-center justify-center transition-all duration-300 group-hover:bg-pink-500 group-hover:rotate-45"
          aria-label={`Open ${project.title}`}
        >
          <ArrowUpRight size={18} />
        </button>
      </div>

      <div className={`flex flex-col items-center gap-3 ${index % 2 === 1 ? "md:order-1" : ""}`}>
        <div className="w-full max-w-[380px] bg-white rounded-[20px] border border-line shadow-[0_20px_50px_rgba(237,67,137,0.12)] overflow-hidden -rotate-3 transition-all duration-500 group-hover:rotate-0 group-hover:scale-[1.03] group-hover:shadow-[0_30px_70px_rgba(237,67,137,0.22)]">
          <div className="flex gap-1.5 px-3.5 py-3 bg-white border-b border-line">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="p-4 bg-pink-50 flex flex-col gap-3">
            <div className="grid grid-cols-[2fr_1fr] gap-2.5">
              <div className="h-[34px] rounded-lg bg-gradient-to-br from-pink-400 to-pink-500" />
              <div className="h-[34px] rounded-lg bg-white border border-line" />
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {[...Array(4)].map((_, k) => (
                <div
                  key={k}
                  className="h-[52px] rounded-[10px] bg-white border border-line relative overflow-hidden"
                >
                  <div className="absolute top-2.5 left-3 right-3 h-1.5 rounded bg-pink-100" />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-2 rounded bg-white border border-line" />
              <div className="h-2 w-3/5 rounded bg-white border border-line" />
              <div className="h-2 rounded bg-white border border-line" />
            </div>
          </div>
        </div>
        <span className="text-[11.5px] text-muted tracking-[0.05em] uppercase font-medium">
          Preview mockup · screenshots coming soon
        </span>
      </div>
    </motion.article>
  );
}

/* -------------------- Section Header -------------------- */
function SectionHeader({ icon: Icon, eyebrow, title, accent }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="w-10 h-10 rounded-full bg-pink-50 text-pink-500 grid place-items-center flex-shrink-0">
        <Icon size={18} />
      </span>
      <div>
        <p className="text-[12px] tracking-[0.22em] uppercase text-pink-500 font-semibold mb-1">
          {eyebrow}
        </p>
        <h3 className="text-[clamp(22px,2.8vw,34px)] font-extrabold tracking-[-0.02em] text-ink leading-tight">
          {title} <span className="font-serif italic font-medium text-pink-500">{accent}</span>
        </h3>
      </div>
    </div>
  );
}

/* -------------------- Main Component -------------------- */
export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 py-20 md:py-28"
    >
      {/* Top heading */}
      <div className="text-center mb-16">
        <motion.p
          className="text-[12px] tracking-[0.22em] uppercase text-pink-500 font-semibold mb-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Selected Work
        </motion.p>
        <motion.h2
          className="text-[clamp(30px,4.2vw,52px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          Things I've built.
        </motion.h2>
        <motion.p
          className="text-muted text-[15.5px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
        >
          Real applications. Real problems. Real development experience.
        </motion.p>
      </div>

      {/* COMPANY PROJECTS */}
      <div className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            icon={Building2}
            eyebrow="Production Work"
            title="Company"
            accent="projects."
          />
        </motion.div>

        <div className="flex flex-col gap-7">
          {COMPANY_PROJECTS.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              index={i}
              total={COMPANY_PROJECTS.length}
            />
          ))}
        </div>
      </div>

      {/* PERSONAL PROJECTS */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            icon={User}
            eyebrow="Side Builds"
            title="Personal"
            accent="projects."
          />
        </motion.div>

        <div className="flex flex-col gap-7">
          {PERSONAL_PROJECTS.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              index={i}
              total={PERSONAL_PROJECTS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}