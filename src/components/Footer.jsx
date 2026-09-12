import { ArrowUp } from "lucide-react";

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-line mt-16">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13.5px] text-muted">
        <p>© 2026 Sakshi Mishra</p>
        {/* <p>
          Built with React + Framer Motion <span className="text-pink-500">♡</span>
        </p> */}
        <button
          onClick={toTop}
          className="inline-flex items-center gap-1.5 font-semibold text-ink hover:text-pink-500 hover:-translate-y-0.5 transition-all"
        >
          Back to top <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}