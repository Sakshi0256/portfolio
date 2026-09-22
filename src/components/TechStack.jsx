import { motion } from "framer-motion";

const GROUPS = [
  {
    label: "Mobile & Frontend",
    techs: [
      { name: "React Native", slug: "react" },
      { name: "React.js", slug: "react" },
      { name: "JavaScript", slug: "javascript" },
    ],
  },
  {
    label: "Backend",
    techs: [
      { name: "Node.js", slug: "nodejs" },
      { name: "Express.js", slug: "express" },
    ],
  },
  {
    label: "Databases",
    techs: [
      { name: "MongoDB", slug: "mongodb" },
      { name: "MySQL", slug: "mysql" },
      { name: "Firebase", slug: "firebase" },
    ],
  },
  {
    label: "Data Science",
    techs: [
      { name: "Python", slug: "python" },
      { name: "Pandas", slug: "pandas" },
      { name: "NumPy", slug: "numpy" },
      { name: "Jupyter", slug: "jupyter" },
    ],
  },
  // {
  //   label: "DevOps & Cloud",
  //   techs: [
  //     { name: "Docker", slug: "docker" },
  //     { name: "Hostinger", slug: "hostinger" },
  //     { name: "DigitalOcean", slug: "digitalocean" },
  //     // { name: "AWS", slug: "amazonwebservices" }, // will add later
  //   ],
  // },
  {
    label: "Tools",
    techs: [
      { name: "VS Code", slug: "vscode" },
      { name: "Cursor", slug: "cursor" },
      { name: "Postman", slug: "postman" },
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "Axios", slug: "axios" },
    ],
  },
];

const ICON_MAP = {
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  numpy: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  jupyter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  amazonwebservices:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  // Hostinger + DigitalOcean via SimpleIcons (devicon doesn't have them)
  hostinger: "https://cdn.simpleicons.org/hostinger/000000",
  digitalocean: "https://cdn.simpleicons.org/digitalocean/000000",
  vscode: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  postman: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  axios: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg",
  cursor: "https://cdn.simpleicons.org/cursor/000000",
};

export default function TechStack() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-16 md:py-24">
      {/* Label */}
      <motion.div
        className="flex items-center justify-center gap-3 mb-14"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-[12px] tracking-[0.3em] uppercase text-zinc-400 font-semibold">
          my everyday stack
        </span>
        <span className="text-zinc-900 text-[12px] font-bold">→</span>
      </motion.div>

      {/* Category rows */}
      <div className="flex flex-col">
        {GROUPS.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: gi * 0.06 }}
            className="grid md:grid-cols-[220px_1fr] gap-4 md:gap-10 py-6 md:py-7 border-t border-zinc-200 last:border-b"
          >
            {/* Category label */}
            <div className="flex md:items-center">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
                <span className="text-[11px] tracking-[0.25em] uppercase text-zinc-500 font-semibold">
                  {group.label}
                </span>
              </div>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap items-center gap-3 md:gap-3.5">
              {group.techs.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -5 }}
                  className="group flex items-center gap-3 pl-2.5 pr-5 py-2 rounded-full
                             bg-white border border-zinc-200
                             shadow-[0_2px_10px_rgba(0,0,0,0.03)]
                             hover:border-zinc-900 hover:shadow-[0_14px_36px_rgba(0,0,0,0.12)]
                             transition-all duration-300 cursor-default"
                >
                  <span
                    className="w-10 h-10 rounded-full bg-zinc-50 grid place-items-center
                               group-hover:bg-zinc-900 transition-colors duration-300
                               overflow-hidden"
                  >
                    <img
                      src={ICON_MAP[t.slug]}
                      alt={t.name}
                      className="w-5 h-5 object-contain transition-all duration-300 group-hover:scale-110 group-hover:invert group-hover:brightness-200"
                    />
                  </span>
                  <span className="text-[14px] md:text-[15px] font-semibold text-zinc-800 whitespace-nowrap tracking-[-0.01em]">
                    {t.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}