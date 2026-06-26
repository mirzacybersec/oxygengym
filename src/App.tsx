import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import PricingSection from "./sections/PricingSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";
import ScrollProgress from "./components/ScrollProgress";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Simulate preloader completion
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 z-[300] bg-obsidian flex flex-col items-center justify-center">
        <div className="w-24 h-24 mb-8 animate-pulse">
          <img
            src="/oxygengym/oxygen-logo.png"
            alt="Oxygen Gym"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-48 h-1 bg-steel rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-oxygen-blue to-electric-cyan animate-[loading_1.5s_ease-out_forwards]" />
        </div>
        <style>{`
          @keyframes loading {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="relative bg-obsidian min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
