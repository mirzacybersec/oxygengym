import { Instagram, MessageCircle, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Personal Training",
  "Strength Training",
  "Cardio Zone",
  "Functional Fitness",
];

export default function Footer() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-obsidian border-t border-steel">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/oxygen-logo.png"
                alt="Oxygen Gym"
                className="h-12 w-12 object-contain"
              />
              <span className="text-white font-bold text-xl tracking-tight">
                OXYGEN <span className="text-oxygen-blue">GYM</span>
              </span>
            </div>
            <p className="text-frost/50 text-sm leading-relaxed mb-6">
              Breathe Life Into Your Fitness. Karachi&apos;s premier 24/7 fitness
              destination in Gulshan-e-Iqbal Block 1.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/oxygengymkarachi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-surface border border-steel rounded-lg flex items-center justify-center text-frost/50 hover:text-oxygen-blue hover:border-oxygen-blue/30 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/923162128803?text=Hello!%20I%20am%20interested%20in%20your%20gym%20membership%20plans."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-surface border border-steel rounded-lg flex items-center justify-center text-frost/50 hover:text-whatsapp hover:border-whatsapp/30 transition-all"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(link.href);
                    }}
                    className="text-frost/50 text-sm hover:text-oxygen-blue transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick("#services");
                    }}
                    className="text-frost/50 text-sm hover:text-oxygen-blue transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-frost/50 text-sm">
                <MapPin size={16} className="text-oxygen-blue flex-shrink-0 mt-0.5" />
                GPC 1, Block 1 Gulshan-e-Iqbal, Karachi
              </li>
              <li>
                <a
                  href="tel:+923162128803"
                  className="flex items-center gap-2 text-frost/50 text-sm hover:text-oxygen-blue transition-colors"
                >
                  <Phone size={16} className="text-oxygen-blue" />
                  +92 316 2128803
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923162128803?text=Hello!%20I%20am%20interested%20in%20your%20gym%20membership%20plans."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-frost/50 text-sm hover:text-whatsapp transition-colors"
                >
                  <MessageCircle size={16} className="text-whatsapp" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2 text-frost/50 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Open 24/7, 365 days
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-steel mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-frost/30 text-xs">
            &copy; 2026 Oxygen Gym Karachi. All rights reserved.
          </p>
          <p className="text-frost/30 text-xs">
            Designed for fitness enthusiasts in Karachi.
          </p>
        </div>
      </div>
    </footer>
  );
}
