import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20"
            : "bg-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav
          className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          <motion.a
            href="#"
            className="flex items-center gap-2 text-white font-display font-bold text-lg"
            whileHover={{ scale: 1.03 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
              <Code2 size={16} className="text-primary" />
            </div>
            {personalInfo.name.split(" ")[0]}
            <span className="text-primary">.</span>
          </motion.a>
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <motion.button
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 font-body text-sm transition-all duration-200"
                  whileHover={{ y: -1 }}
                >
                  {link.label}
                </motion.button>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              onClick={() => handleNavClick("#contact")}
              className="px-5 py-2 rounded-xl bg-primary text-white font-body text-sm font-medium hover:bg-primary-light transition-all duration-300 shadow-lg shadow-primary/25"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Hire Me
            </motion.button>
          </div>
          <motion.button
            className="md:hidden text-white/70 hover:text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            whileTap={{ scale: 0.9 }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </nav>
      </motion.header>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col gap-2" role="list">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="w-full text-left px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 font-body text-base transition-all duration-200"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
                <li>
                  <button
                    onClick={() => handleNavClick("#contact")}
                    className="w-full px-4 py-3 rounded-xl bg-primary text-white font-body font-medium text-base mt-2"
                  >
                    Hire Me
                  </button>
                </li>
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
