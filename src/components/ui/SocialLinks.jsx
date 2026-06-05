import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";

const socialIcons = {
  linkedin: { icon: Linkedin, label: "LinkedIn" },
  github: { icon: Github, label: "GitHub" },
  twitter: { icon: Twitter, label: "Twitter" },
};

export default function SocialLinks({ show = ["linkedin", "github", "twitter"], size = 20, className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {show.map((key) => {
        const entry = socialIcons[key];
        const url = personalInfo.social[key];
        if (!entry || !url) return null;
        const Icon = entry.icon;
        return (
          <motion.a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={entry.label}
            className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon size={size} />
          </motion.a>
        );
      })}
      <motion.a
        href={`mailto:${personalInfo.email}`}
        aria-label="Email"
        className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Mail size={size} />
      </motion.a>
    </div>
  );
}
