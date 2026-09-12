import { motion } from "framer-motion";

const TECHS = [
  { name: "React Native", slug: "react" },
  { name: "React.js", slug: "react" },
  { name: "Node.js", slug: "nodejs" },
  { name: "Express.js", slug: "express" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "MySQL", slug: "mysql" },
  { name: "Firebase", slug: "firebase" },
  { name: "Git", slug: "git" },
];

const ICON_MAP = {
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
};


const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function TechStack() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 py-14 md:py-16 text-center">
      <motion.p
        className="text-[12px] tracking-[0.22em] uppercase text-pink-500 font-semibold mb-10"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        Technologies I work with
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3"
      >
        {TECHS.map((t, i) => (
          <motion.div
            key={`${t.name}-${i}`}
            variants={item}
            className="group flex flex-col items-center justify-center gap-2.5 py-5 px-3 rounded-[20px] bg-white border border-line transition-all duration-300 hover:-translate-y-1.5 hover:bg-pink-50 hover:border-pink-200 hover:shadow-[0_10px_40px_rgba(24,24,27,,0.1)]"
          >
            <img
              src={ICON_MAP[t.slug]}
              alt={t.name}
              className="w-8 h-8 md:w-9 md:h-9 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-[12.5px] font-semibold text-muted text-center">{t.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}