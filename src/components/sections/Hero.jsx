import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import Button from "../ui/Button";
import SocialLinks from "../ui/SocialLinks";
import { personalInfo } from "../../data/portfolioData";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

function FloatingOrb({ size, color, x, y, duration }) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl pointer-events-none"
      style={{ width: size, height: size, background: color, left: x, top: y }}
      animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
      transition={{ duration, ease: "easeInOut", repeat: Infinity }}
    />
  );
}

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-hero-mesh pointer-events-none" />
      <FloatingOrb size={600} color="rgba(168,85,247,0.07)" x="60%" y="10%" duration={10} />
      <FloatingOrb size={400} color="rgba(239,68,68,0.05)" x="-10%" y="50%" duration={14} />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 pt-36 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-xs tracking-wide">
                <Sparkles size={12} className="animate-pulse" />
                {personalInfo.availableForWork ? "Open to opportunities" : "Currently building"}
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              </span>
            </motion.div>
            <motion.div {...fadeUp(0.1)} className="flex flex-col gap-2">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
                {personalInfo.name.split(" ")[0]}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                  {personalInfo.name.split(" ").slice(1).join(" ")}
                </span>
              </h1>
              <p className="font-mono text-primary-light/80 text-base tracking-widest uppercase">
                {personalInfo.title}
              </p>
            </motion.div>
            <motion.p
              {...fadeUp(0.2)}
              className="font-body text-white/55 text-lg leading-relaxed max-w-lg"
            >
              {personalInfo.summary}
            </motion.p>
            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3 mt-2">
              <Button variant="primary" size="lg" onClick={scrollToProjects} icon={ArrowDown} iconPosition="right">
                Explore Projects
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href={personalInfo.resumeFile}
                target="_blank"
                icon={Download}
                iconPosition="left"
              >
                Download Resume
              </Button>
            </motion.div>
            <motion.div {...fadeUp(0.4)}>
              <SocialLinks />
            </motion.div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-primary-light/20 to-transparent blur-2xl scale-110 animate-pulse-glow" />
              <motion.div
                className="absolute -inset-4 rounded-full border border-dashed border-primary/25"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
              />

              <div className="absolute -inset-2 rounded-full border border-primary/30" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-primary/40 bg-gradient-to-br from-primary/20 to-primary-light/10 flex items-center justify-center shadow-2xl shadow-primary/20">
                {personalInfo.profileImage ? (
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-3 text-center px-8">
                    <div className="w-24 h-24 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                      <span className="font-display text-4xl font-bold text-primary">
                        {personalInfo.name.charAt(0)}
                      </span>
                    </div>
                    <span className="font-body text-white/40 text-sm">
                      Profile photo placeholder
                    </span>
                  </div>
                )}
              </div>

              <motion.div
                className="absolute -top-4 -right-4 px-3 py-1.5 rounded-xl border border-primary/30 bg-primary/10 backdrop-blur-sm text-primary font-mono text-xs"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
              >
                0-1 year
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white/60 font-mono text-xs"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 1 }}
              >
                10+ projects
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <span className="font-mono text-xs tracking-widest">scroll</span>
          <ArrowDown size={14} />
        </motion.div>
      </div>
    </section>
  );
}
