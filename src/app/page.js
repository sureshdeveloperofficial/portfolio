 "use client";
 
 import HeroSection from "@/sections/HeroSection";
 import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SmoothSkillsAnimation from "@/sections/SmoothSkillsAnimation";
import FooterSection from "@/sections/FooterSection";
import Experience from "@/sections/Experience";
import MagneticCursor from "@/components/MagneticCursor";
import MyProjects from "@/sections/MyProjects";
import NavBar from "@/components/NavBar";
import AboutSection from "@/sections/AboutSection";
import ExploreMeSection from "@/sections/ExploreMeSection";
import TextAnimation from "@/sections/TextAnimation";

 gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

export default function Home() {
  useGSAP(() => {
    const existing = ScrollSmoother.get();
    if (existing) existing.kill();
 
    const smoother = ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
 
    return () => {
      if (smoother) smoother.kill();
    };
  }, []);

  return (
    <main>
      <MagneticCursor />
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <AboutSection />
          <ExploreMeSection />
          <TextAnimation />
          <SmoothSkillsAnimation />
          <Experience />
          <MyProjects />
          <FooterSection />
        </div>
      </div>
    </main>
  );
};

