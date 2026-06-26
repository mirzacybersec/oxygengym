import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: "Monthly",
    price: "6,000",
    period: "/month",
    badge: null,
    highlighted: false,
    features: [
      "24/7 Gym Access",
      "Locker Facility",
      "Free Fitness Assessment",
      "Basic Equipment Access",
    ],
  },
  {
    name: "Quarterly",
    price: "15,000",
    period: "/3 months",
    badge: "MOST POPULAR",
    highlighted: true,
    features: [
      "Everything in Monthly",
      "2 Personal Training Sessions",
      "Nutrition Guidance",
      "Priority Support",
    ],
  },
  {
    name: "Yearly",
    price: "55,000",
    period: "/year",
    badge: "BEST VALUE",
    highlighted: false,
    features: [
      "Everything in Quarterly",
      "8 Personal Training Sessions",
      "Custom Meal Plan",
      "Quarterly Progress Tracking",
      "Exclusive Member Events",
    ],
  },
];

export default function PricingSection() {
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
      const cards = cardsRef.current?.querySelectorAll(".pricing-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
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
      id="pricing"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-obsidian"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="reveal inline-block text-oxygen-blue text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Membership Plans
          </span>
          <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Invest in Yourself
          </h2>
          <p className="reveal text-frost/60 text-base sm:text-lg max-w-xl mx-auto">
            Choose a plan that fits your lifestyle. All memberships include 24/7
            access, locker facilities, and free fitness assessment.
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card relative rounded-xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-oxygen-blue/10 to-surface border-2 border-oxygen-blue/50 shadow-glow scale-105 md:scale-110 z-10"
                  : "bg-surface border border-steel hover:border-oxygen-blue/30 hover:shadow-card-hover"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className={`text-xs font-bold px-4 py-1 rounded-full ${
                      plan.highlighted
                        ? "bg-oxygen-blue text-obsidian"
                        : "bg-electric-cyan/20 text-electric-cyan"
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-white font-semibold text-xl mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-frost/50 text-sm">PKR</span>
                <span
                  className={`text-4xl font-bold ${
                    plan.highlighted ? "text-oxygen-blue" : "text-white"
                  }`}
                >
                  {plan.price}
                </span>
                <span className="text-frost/50 text-sm">{plan.period}</span>
              </div>

              {/* Divider */}
              <div className="h-px bg-steel mb-6" />

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.highlighted
                          ? "bg-oxygen-blue/20"
                          : "bg-steel"
                      }`}
                    >
                      <Check
                        size={12}
                        className={
                          plan.highlighted
                            ? "text-oxygen-blue"
                            : "text-frost/60"
                        }
                      />
                    </div>
                    <span className="text-frost/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://wa.me/923162128803?text=Hi!%20I'm%20interested%20in%20the%20${plan.name}%20membership%20plan."
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-250 ${
                  plan.highlighted
                    ? "bg-oxygen-blue text-obsidian hover:bg-[#33DDFF] hover:shadow-glow"
                    : "border border-oxygen-blue/50 text-oxygen-blue hover:bg-oxygen-blue hover:text-obsidian"
                }`}
              >
                JOIN NOW
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-frost/40 text-sm mt-10">
          No hidden fees. Cancel anytime with 7 days notice.
        </p>
      </div>
    </section>
  );
}
