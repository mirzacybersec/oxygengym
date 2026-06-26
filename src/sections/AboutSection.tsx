import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, Users, Dumbbell, Trophy } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const differentiators = [
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Train anytime, day or night. Your schedule, your rules.",
  },
  {
    icon: Users,
    title: "Expert Coaching",
    description: "Certified personal trainers to guide your fitness journey.",
  },
  {
    icon: Dumbbell,
    title: "Premium Equipment",
    description: "Top-of-the-line machines and free weights for every workout.",
  },
  {
    icon: Trophy,
    title: "Community",
    description: "Join a motivated community of fitness enthusiasts in Karachi.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.05 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Content reveal
      const contentEls = contentRef.current?.querySelectorAll(".reveal");
      if (contentEls) {
        gsap.fromTo(
          contentEls,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Cards stagger
      const cards = cardsRef.current?.querySelectorAll(".diff-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-obsidian"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div ref={contentRef} className="text-center mb-16">
          <span className="reveal inline-block text-oxygen-blue text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            About Oxygen Gym
          </span>
          <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Where Dedication Meets Results
          </h2>
          <p className="reveal text-frost/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Located in the heart of Gulshan-e-Iqbal Block 1, Oxygen Gym is Karachi&apos;s
            destination for serious fitness enthusiasts. We believe that fitness
            isn&apos;t a luxury — it&apos;s a necessity. That&apos;s why we keep our doors
            open 24/7, giving you the freedom to train on your schedule, not ours.
          </p>
        </div>

        {/* Image + Story Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
          <div ref={imageRef} className="relative rounded-xl overflow-hidden group">
            <img
              src="/oxygengym/about-gym.jpg"
              alt="Oxygen Gym Interior"
              className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Why Choose <span className="text-oxygen-blue">Oxygen Gym?</span>
            </h3>
            <p className="text-frost/60 leading-relaxed">
              We&apos;ve built a space where beginners and seasoned athletes alike can
              push their limits. Our facility features premium equipment across
              multiple training zones, from heavy iron to functional fitness.
            </p>
            <p className="text-frost/60 leading-relaxed">
              Every detail — from the lighting to the layout — is designed to
              maximize your focus and performance. No distractions, just results.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-frost/70">
                <div className="w-2 h-2 bg-oxygen-blue rounded-full" />
                Free Fitness Assessment
              </div>
              <div className="flex items-center gap-2 text-sm text-frost/70">
                <div className="w-2 h-2 bg-oxygen-blue rounded-full" />
                Locker Facilities
              </div>
              <div className="flex items-center gap-2 text-sm text-frost/70">
                <div className="w-2 h-2 bg-oxygen-blue rounded-full" />
                Flexible Memberships
              </div>
            </div>
          </div>
        </div>

        {/* Differentiator Cards */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="diff-card group bg-surface border border-steel rounded-xl p-6 hover:border-oxygen-blue/30 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-12 h-12 bg-oxygen-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-oxygen-blue/20 transition-colors">
                <item.icon className="text-oxygen-blue" size={24} />
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">
                {item.title}
              </h4>
              <p className="text-frost/50 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
