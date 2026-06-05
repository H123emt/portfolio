import { motion } from "framer-motion";
import {
  Monitor, Server, Database, Cloud, GitBranch, Wrench,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "../ui/AnimatedContainer";
import { skillGroups } from "../../data/portfolioData";

const iconMap = { Monitor, Server, Database, Cloud, GitBranch, Wrench };

function SkillGroup({ group, index }) {
  const Icon = iconMap[group.icon] || Monitor;

  return (
    <motion.div
      className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-primary/30 hover:bg-primary/[0.04] transition-all duration-400 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl border border-primary/20 bg-primary/10 flex items-center justify-center group-hover:border-primary/40 transition-colors duration-300">
          <Icon size={18} className="text-primary" />
        </div>
        <h3 className="font-display text-white font-semibold text-lg">{group.category}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill, i) => (
          <motion.span
            key={skill}
            className="px-3 py-1.5 rounded-lg font-mono text-xs border border-white/10 bg-white/5 text-white/70 hover:border-primary/40 hover:text-primary hover:bg-primary/10 cursor-default transition-all duration-200"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 + i * 0.04 }}
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 bg-white/[0.01]"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="A curated stack of tools I use to ship production-grade software."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <SkillGroup key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
