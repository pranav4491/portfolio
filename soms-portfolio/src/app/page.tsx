import Navbar from "@/components/Navbar";
import SectionWrapper from "@/components/SectionWrapper";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import VideoAnimation from "@/components/VideoAnimation";
import AutoPlayOnView from "@/components/AutoPlayOnView"; // ✅ Keep both

export default function Home() {
  return (
    <>
      <Navbar />

      <div id="hero">
        <SectionWrapper>
          <Hero />
        </SectionWrapper>
      </div>

      {/* Video animation (scroll-controlled) */}
      <VideoAnimation />

      <div id="about">
        <About />
      </div>

      {/* ✅ New video that plays once when in view */}
      <AutoPlayOnView />

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
