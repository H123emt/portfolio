import { motion } from "framer-motion";
import { Github, Linkedin, MapPin, Mail } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import AnimatedContainer, { StaggerContainer, StaggerItem } from "../ui/AnimatedContainer";
import { personalInfo, aboutParagraphs, stats } from "../../data/portfolioData";

function StatCard({ value, label, index }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <span className="font-display text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-light">
        {value}
      </span>
      <span className="text-white/50 font-body text-sm mt-1 text-center">{label}</span>
    </motion.div>
  );
}

function SocialCard({ icon: Icon, label, value, href, color }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
      whileHover={{ x: 6 }}
    >
      <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shrink-0`}>
        <Icon size={18} className="text-white" />
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-white/40 font-mono text-xs uppercase tracking-wider">{label}</span>
        <span className="text-white/80 font-body text-sm truncate group-hover:text-primary transition-colors">
          {value}
        </span>
      </div>
    </motion.a>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 bg-purple-glow opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          title="Crafting digital experiences"
          subtitle="A bit about who I am and what drives my work."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-6">
            {aboutParagraphs.map((para, i) => (
              <AnimatedContainer key={i} preset="fadeUp" delay={i * 0.1}>
                <p className="font-body text-white/60 leading-relaxed text-base md:text-lg">{para}</p>
              </AnimatedContainer>
            ))}

            <AnimatedContainer preset="fadeUp" delay={0.4} className="flex flex-col gap-3 mt-4">
              <SocialCard
                icon={Linkedin}
                label="LinkedIn"
                value={personalInfo.social.linkedin.replace("https://linkedin.com/in/", "")}
                href={personalInfo.social.linkedin}
                color="bg-blue-600/80"
              />
              <SocialCard
                icon={Github}
                label="GitHub"
                value={personalInfo.social.github.replace("https://github.com/", "")}
                href={personalInfo.social.github}
                color="bg-white/10"
              />
              <SocialCard
                icon={Mail}
                label="Email"
                value={personalInfo.email}
                href={`mailto:${personalInfo.email}`}
                color="bg-primary/80"
              />
              <SocialCard
                icon={MapPin}
                label="Location"
                value={personalInfo.location}
                href=""
                color="bg-accent/80"
              />
            </AnimatedContainer>
          </div>

          {/* Right: stats */}
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} index={i} />
              ))}
            </div>

            <AnimatedContainer preset="scale" delay={0.4}>
              <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5 flex items-start gap-4">
                <div className="mt-1 w-3 h-3 rounded-full bg-green-400 shadow-lg shadow-green-400/40 shrink-0 animate-pulse" />
                <div>
                  <p className="font-display text-white font-semibold">Open to opportunities</p>
                  <p className="text-white/50 font-body text-sm mt-1 leading-relaxed">
                    Currently available for full-time roles.
                    Reach out anytime!
                  </p>
                </div>
              </div>
            </AnimatedContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
