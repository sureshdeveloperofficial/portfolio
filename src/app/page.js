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
import Loader from "@/sections/Loader";
import PostHeroLoader from "@/components/PostHeroLoader";
import SuspenseLoader from "@/components/SuspenseLoader";
import { useState, Suspense } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

export default function Home() {
  const [showPostHeroLoader, setShowPostHeroLoader] = useState(false);
  const [heroAnimationComplete, setHeroAnimationComplete] = useState(false);

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

      const handleHeroAnimationComplete = () => {
      setHeroAnimationComplete(true);
      // Show post-hero loader after hero animation completes
      setTimeout(() => {
        setShowPostHeroLoader(true);
      }, 5000);
    };

  const handlePostHeroLoaderComplete = () => {
    setShowPostHeroLoader(false);
  };

  return (
    <main>
      <PostHeroLoader onLoadingComplete={handlePostHeroLoaderComplete} />
      <MagneticCursor />
      <NavBar />
      
      {/* Post-Hero Loader */}
      {showPostHeroLoader && (
        <PostHeroLoader onComplete={handlePostHeroLoaderComplete} />
      )}
      
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection onAnimationComplete={handleHeroAnimationComplete} />
          
          {/* Wrap other sections in Suspense with custom loader */}
          <Suspense fallback={<SuspenseLoader />}>
            <AboutSection />
          </Suspense>
          
          <Suspense fallback={<SuspenseLoader />}>
            <ExploreMeSection />
          </Suspense>
          
          <Suspense fallback={<SuspenseLoader />}>
            <TextAnimation />
          </Suspense>
          
          <Suspense fallback={<SuspenseLoader />}>
            <SmoothSkillsAnimation />
          </Suspense>
          
          <Suspense fallback={<SuspenseLoader />}>
            <Experience />
          </Suspense>
          
          <Suspense fallback={<SuspenseLoader />}>
            <MyProjects />
          </Suspense>
          
          <Suspense fallback={<SuspenseLoader />}>
            <FooterSection />
          </Suspense>
        </div>
      </div>
    </main>
  );
}

