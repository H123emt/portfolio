import { motion } from "framer-motion";
import { Code2, Heart } from "lucide-react";
import SocialLinks from "../ui/SocialLinks";
import { personalInfo } from "../../data/portfolioData";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-background/80" role="contentinfo">
      <div className="absolute inset-0 bg-purple-glow opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <motion.a
              href="#"
              className="flex items-center gap-2 text-white font-display font-bold text-xl"
              whileHover={{ scale: 1.03 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="w-9 h-9 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                <Code2 size={18} className="text-primary" />
              </div>
              {personalInfo.name.split(" ")[0]}
              <span className="text-primary">.</span>
            </motion.a>
            <p className="text-white/40 font-body text-sm max-w-xs text-center md:text-left leading-relaxed">
              {personalInfo.tagline}
            </p>
            <SocialLinks />
          </div>
          <nav aria-label="Footer navigation">
            <p className="text-white/30 font-mono text-xs uppercase tracking-widest mb-4 text-center md:text-left">
              Navigation
            </p>
            <ul className="flex flex-col gap-2" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-white/50 hover:text-primary font-body text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col items-center md:items-start gap-4">
            <p className="text-white/30 font-mono text-xs uppercase tracking-widest">Get In Touch</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-white/50 hover:text-primary font-body text-sm transition-colors duration-200"
            >
              {personalInfo.email}
            </a>
            <span className="text-white/50 font-body text-sm">{personalInfo.location}</span>
            {personalInfo.availableForWork && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/10">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-mono text-xs">Available for work</span>
              </div>
            )}
          </div>
        </div>     
      </div>
    </footer>
  );
}
