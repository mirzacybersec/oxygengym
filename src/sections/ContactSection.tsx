import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Instagram,
  Send,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "GPC 1, Block 1 Gulshan-e-Iqbal, Karachi",
    href: "https://maps.app.goo.gl/rSfqfqgintLVwHY97",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 316 2128803",
    href: "tel:+923162128803",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+92 316 2128803",
    href: "https://wa.me/923162128803?text=Hello!%20I%20am%20interested%20in%20your%20gym%20membership%20plans.",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Open 24/7, 365 days",
    href: null,
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

      // Content reveal
      const contentEls = contentRef.current?.querySelectorAll(".reveal-item");
      if (contentEls) {
        gsap.fromTo(
          contentEls,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", phone: "", message: "" });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-gradient-dark"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="reveal inline-block text-oxygen-blue text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Start Your Fitness Journey Today
          </h2>
          <p className="reveal text-frost/60 text-base sm:text-lg max-w-xl mx-auto">
            Visit us for a free tour or reach out via WhatsApp. Our team is ready
            to help you achieve your fitness goals.
          </p>
        </div>

        {/* Content Grid */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="reveal-item flex items-start gap-4 bg-surface border border-steel rounded-xl p-5 hover:border-oxygen-blue/30 transition-colors"
              >
                <div className="w-11 h-11 bg-oxygen-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-oxygen-blue" size={20} />
                </div>
                <div>
                  <div className="text-frost/50 text-xs uppercase tracking-wider mb-1">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-oxygen-blue transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-white font-medium">{item.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="reveal-item flex items-center gap-4 pt-4">
              <a
                href="https://www.instagram.com/oxygengymkarachi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-surface border border-steel rounded-xl flex items-center justify-center text-frost/60 hover:text-oxygen-blue hover:border-oxygen-blue/30 transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/923162128803"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-surface border border-steel rounded-xl flex items-center justify-center text-frost/60 hover:text-whatsapp hover:border-whatsapp/30 transition-all"
              >
                <MessageCircle size={20} />
              </a>
              <span className="text-frost/40 text-sm ml-2">
                Follow us for updates
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal-item bg-surface border border-steel rounded-xl p-6 sm:p-8">
            <h3 className="text-white font-semibold text-xl mb-6">
              Send us a Message
            </h3>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-oxygen-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="text-oxygen-blue" size={28} />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">
                  Message Sent!
                </h4>
                <p className="text-frost/50 text-sm">
                  We&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-frost/60 text-sm mb-1.5 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full h-12 bg-obsidian border border-steel rounded-lg px-4 text-frost placeholder:text-frost/30 focus:border-oxygen-blue focus:outline-none focus:ring-1 focus:ring-oxygen-blue/30 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-frost/60 text-sm mb-1.5 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState({ ...formState, phone: e.target.value })
                    }
                    className="w-full h-12 bg-obsidian border border-steel rounded-lg px-4 text-frost placeholder:text-frost/30 focus:border-oxygen-blue focus:outline-none focus:ring-1 focus:ring-oxygen-blue/30 transition-all"
                    placeholder="+92 3XX XXXXXXX"
                  />
                </div>
                <div>
                  <label className="text-frost/60 text-sm mb-1.5 block">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full bg-obsidian border border-steel rounded-lg px-4 py-3 text-frost placeholder:text-frost/30 focus:border-oxygen-blue focus:outline-none focus:ring-1 focus:ring-oxygen-blue/30 transition-all resize-none"
                    placeholder="Tell us about your fitness goals..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-oxygen-blue text-obsidian py-3.5 rounded-lg font-semibold text-sm hover:bg-[#33DDFF] hover:shadow-glow transition-all duration-250 flex items-center justify-center gap-2"
                >
                  SEND MESSAGE
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* CTA Buttons Row */}
        <div className="reveal-item flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a
            href="tel:+923162128803"
            className="inline-flex items-center justify-center gap-2 bg-surface border border-steel text-white px-8 py-4 rounded-lg font-semibold text-sm hover:border-oxygen-blue/50 hover:text-oxygen-blue transition-all"
          >
            <Phone size={18} />
            CALL NOW
          </a>
          <a
            href="https://wa.me/923162128803"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-whatsapp text-white px-8 py-4 rounded-lg font-semibold text-sm hover:brightness-110 hover:shadow-glow-green transition-all"
          >
            <MessageCircle size={18} />
            CHAT ON WHATSAPP
          </a>
          <a
            href="https://maps.app.goo.gl/rSfqfqgintLVwHY97"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-surface border border-steel text-white px-8 py-4 rounded-lg font-semibold text-sm hover:border-oxygen-blue/50 hover:text-oxygen-blue transition-all"
          >
            <MapPin size={18} />
            GET DIRECTIONS
          </a>
        </div>
      </div>
    </section>
  );
}
