import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

/* -------- Inline SVG icons (lucide removed brand icons) -------- */
function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
/* --------------------------------------------------------------- */

/* -------- Reusable GitHub dropdown (used in desktop nav) -------- */
function GithubDropdown({ open, setOpen }) {
  const accounts = [
    {
      label: "Personal",
      handle: "@Sakshi0256",
      href: "https://github.com/Sakshi0256",
      desc: "Personal projects & learning",
    },
    {
      label: "Work",
      handle: "@sakshidigilateral-a11y",
      href: "https://github.com/sakshidigilateral-a11y",
      desc: "Production & company work",
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        onBlur={() => setTimeout(() => setOpen(false), 180)}
        aria-label="GitHub accounts"
        aria-haspopup="menu"
        aria-expanded={open}
        className="w-9 h-9 grid place-items-center rounded-full text-muted hover:text-pink-500 hover:bg-pink-50 hover:-translate-y-0.5 transition-all"
      >
        <GithubIcon size={18} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            role="menu"
            className="absolute right-0 top-full mt-2 w-64 bg-white border border-line rounded-2xl shadow-[0_20px_50px_rgba(237,67,137,0.16)] p-2 z-50"
          >
            <p className="px-3 pt-2 pb-1.5 text-[10px] tracking-[0.18em] uppercase text-muted font-semibold">
              GitHub Accounts
            </p>

            {accounts.map((acc) => (
              <a
                key={acc.href}
                href={acc.href}
                target="_blank"
                rel="noreferrer"
                role="menuitem"
                onClick={() => setOpen(false)}
                className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-pink-50 transition-colors group/item"
              >
                <span className="w-8 h-8 rounded-full bg-pink-50 text-pink-500 grid place-items-center flex-shrink-0 mt-0.5 group-hover/item:bg-pink-100 transition-colors">
                  <GithubIcon size={15} />
                </span>
                <div className="flex flex-col leading-tight min-w-0">
                  <span className="text-[13px] font-semibold text-ink">{acc.label}</span>
                  <span className="text-[11.5px] text-muted truncate">{acc.handle}</span>
                  <span className="text-[11px] text-muted/80 mt-0.5">{acc.desc}</span>
                </div>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [ghOpen, setGhOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/75 backdrop-blur-xl border-line shadow-[0_8px_30px_rgba(237,67,137,0.05)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-3 md:py-4 flex items-center gap-8">
        <button onClick={() => scrollTo("home")} className="flex items-baseline gap-2.5">
          <span className="font-extrabold text-[22px] tracking-tight text-ink">SM.</span>
          <span className="hidden sm:inline text-[13px] text-muted font-medium">
            Sakshi Mishra
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-1 ml-auto">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`relative px-3.5 py-2 text-[14px] rounded-full transition-colors ${
                active === link.id
                  ? "text-ink font-semibold"
                  : "text-muted font-medium hover:text-ink"
              }`}
            >
              {link.label}
              {active === link.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 bg-pink-500 rounded"
                />
              )}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <GithubDropdown open={ghOpen} setOpen={setGhOpen} />

          <a
            href="https://www.linkedin.com/in/sakshi-mishra-703067258"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 grid place-items-center rounded-full text-muted hover:text-pink-500 hover:bg-pink-50 hover:-translate-y-0.5 transition-all"
          >
            <LinkedinIcon size={18} />
          </a>

          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-ink text-white text-[14px] font-semibold hover:bg-pink-500 hover:-translate-y-0.5 transition-all"
          >
            Let's Talk <ArrowUpRight size={16} />
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="lg:hidden ml-auto w-10 h-10 grid place-items-center rounded-full bg-pink-50 text-ink"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t border-line bg-white/98 backdrop-blur-xl"
          >
            <div className="px-6 pt-5 pb-7 flex flex-col gap-1">
              {LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className={`text-left px-3 py-3.5 rounded-xl text-base font-medium transition-colors ${
                    active === link.id
                      ? "bg-pink-50 text-pink-500"
                      : "text-muted hover:bg-pink-50 hover:text-pink-500"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}

              <div className="flex flex-col gap-2 pt-3 mt-2 border-t border-line">
                <p className="text-[10px] tracking-[0.18em] uppercase text-muted font-semibold px-1 pb-1">
                  GitHub Accounts
                </p>

                <a
                  href="https://github.com/Sakshi0256"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-pink-50 transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-pink-50 text-pink-500 grid place-items-center flex-shrink-0">
                    <GithubIcon size={15} />
                  </span>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[13px] font-semibold text-ink">Personal</span>
                    <span className="text-[11.5px] text-muted">@Sakshi0256</span>
                  </div>
                </a>

                <a
                  href="https://github.com/sakshidigilateral-a11y"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-pink-50 transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-pink-50 text-pink-500 grid place-items-center flex-shrink-0">
                    <GithubIcon size={15} />
                  </span>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[13px] font-semibold text-ink">Work</span>
                    <span className="text-[11.5px] text-muted">@sakshidigilateral-a11y</span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/sakshi-mishra-703067258"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-pink-50 transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-pink-50 text-pink-500 grid place-items-center flex-shrink-0">
                    <LinkedinIcon size={15} />
                  </span>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[13px] font-semibold text-ink">LinkedIn</span>
                    <span className="text-[11.5px] text-muted">sakshi-mishra</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}