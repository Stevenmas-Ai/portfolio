import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ExperienceSection from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Publications from "@/components/Publications";
import Awards from "@/components/Awards";
import Volunteering from "@/components/Volunteering";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="shell">
        <Hero />
        <Projects />
        <ExperienceSection />
        <Skills />
        <Education />
        <Publications />
        <Awards />
        <Volunteering />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
