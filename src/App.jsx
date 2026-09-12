import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TechStack from "./components/TechStack.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import PlayfulLayer from "./components/PlayfulLayer.jsx";

export default function App() {
  return (
    <div className="overflow-x-hidden relative">
      <PlayfulLayer />
      <Navbar />
      <main className="flex flex-col relative z-10">
        <Hero />
        <TechStack />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}