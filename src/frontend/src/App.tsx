import { Toaster } from "@/components/ui/sonner";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Curiosity } from "./components/Curiosity";
import { Education } from "./components/Education";
import { EngineeringThinking } from "./components/EngineeringThinking";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Leadership } from "./components/Leadership";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Nav />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <EngineeringThinking />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Leadership />
        <div className="section-divider" />
        <Curiosity />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
