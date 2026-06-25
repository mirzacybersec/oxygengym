import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Fade in overlay
      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" }
      );

      // Headline reveal - word by word
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll(".word");
        tl.fromTo(
          words,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power3.out" },
          "-=0.4"
        );
      }

      // Subtitle
      tl.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.4"
      );

      // CTAs
      tl.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Oxygen Gym Interior"
          className="w-full h-full object-cover"
        />
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/50 to-obsidian"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-transparent to-obsidian/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 pt-24 pb-16 text-center">
        <div className="inline-block mb-6">
          <span className="text-oxygen-blue text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
            Karachi&apos;s Premier 24/7 Fitness Center
          </span>
        </div>

        <h1
          ref={headlineRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight"
        >
          <span className="word inline-block">Breathe</span>{" "}
          <span className="word inline-block">Life</span>{" "}
          <span className="word inline-block">Into</span>{" "}
          <br className="hidden sm:block" />
          <span className="word inline-block text-gradient">Your</span>{" "}
          <span className="word inline-block text-gradient">Fitness</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-frost/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          State-of-the-art equipment, expert trainers, and round-the-clock access.
          Your transformation starts at Oxygen Gym in Shah Faisal Town.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => handleScroll("#pricing")}
            className="group bg-oxygen-blue text-obsidian px-8 py-4 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-[#33DDFF] hover:shadow-glow transition-all duration-250 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            START YOUR JOURNEY
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => handleScroll("#services")}
            className="border border-oxygen-blue/50 text-oxygen-blue px-8 py-4 rounded-lg font-semibold text-sm hover:bg-oxygen-blue hover:text-obsidian transition-all duration-250 w-full sm:w-auto"
          >
            EXPLORE SERVICES
          </button>

          <a
            href="https://wa.me/923162128803"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp text-white px-8 py-4 rounded-lg font-semibold text-sm flex items-center gap-2 hover:brightness-110 hover:shadow-glow-green transition-all duration-250 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "24/7", label: "Open Round the Clock" },
            { value: "50+", label: "Premium Equipment" },
            { value: "Expert", label: "Certified Trainers" },
            { value: "1000+", label: "Active Members" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-oxygen-blue">{stat.value}</div>
              <div className="text-xs sm:text-sm text-frost/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-frost/40 text-xs tracking-wider">SCROLL</span>
        <div className="w-5 h-8 border-2 border-frost/30 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-oxygen-blue rounded-full" />
        </div>
      </div>
    </section>
  );
}
