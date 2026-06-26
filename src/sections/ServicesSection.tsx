import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Dumbbell, Weight, HeartPulse, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Dumbbell,
    title: "Personal Training",
    description:
      "One-on-one sessions with certified trainers who design personalized workout plans tailored to your goals.",
    image: "/oxygengym/service-training.jpg",
  },
  {
    icon: Weight,
    title: "Strength Training",
    description:
      "Comprehensive free weights and machine-based strength programs to build muscle and increase power.",
    image: "/oxygengym/service-strength.jpg",
  },
  {
    icon: HeartPulse,
    title: "Cardio Zone",
    description:
      "Treadmills, ellipticals, stationary bikes, and rowing machines for heart-healthy endurance training.",
    image: "/oxygengym/service-cardio.jpg",
  },
  {
    icon: Zap,
    title: "Functional Fitness",
    description:
      "Kettlebells, battle ropes, TRX, and open floor space for dynamic, full-body workouts.",
    image: "/oxygengym/service-functional.jpg",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      const headerEls = headerRef.current?.querySelectorAll(".reveal");
      if (headerEls) {
        gsap.fromTo(
          headerEls,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Cards stagger
      const cards = cardsRef.current?.querySelectorAll(".service-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
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
      id="services"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-gradient-dark"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="reveal inline-block text-oxygen-blue text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            What We Offer
          </span>
          <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Everything You Need to Succeed
          </h2>
          <p className="reveal text-frost/60 text-base sm:text-lg max-w-xl mx-auto">
            From personalized training to state-of-the-art equipment, we provide
            all the tools for your fitness transformation.
          </p>
        </div>

        {/* Service Cards */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 gap-6"
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card group relative bg-surface border border-steel rounded-xl overflow-hidden hover:border-oxygen-blue/30 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                
                {/* Icon badge */}
                <div className="absolute bottom-4 left-6 w-12 h-12 bg-oxygen-blue/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-oxygen-blue/30">
                  <service.icon className="text-oxygen-blue" size={22} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-oxygen-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-frost/50 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
