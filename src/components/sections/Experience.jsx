import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { experiences } from "../../data/portfolioData";

function TimelineItem({ exp, index, isLast }) {
  return (
    <div className="relative flex gap-8">
      <div className="flex flex-col items-center">
        <motion.div
          className="w-12 h-12 rounded-2xl border border-primary/30 bg-primary/10 flex items-center justify-center shrink-0 z-10"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.4, type: "spring" }}
        >
          <Briefcase size={18} className="text-primary" />
        </motion.div>
        {!isLast && (
          <motion.div
            className="w-px flex-1 bg-gradient-to-b from-primary/30 to-transparent mt-2"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.3, duration: 0.8 }}
          />
        )}
      </div>

      <motion.article
        className="flex-1 pb-12 group"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ delay: index * 0.15 + 0.1, duration: 0.6, ease: "easeOut" }}
        aria-label={`${exp.role} at ${exp.company}`}
      >
        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-primary/25 hover:bg-primary/[0.04] transition-all duration-400">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div>
              <h3 className="font-display text-xl text-white font-semibold group-hover:text-primary transition-colors duration-300">
                {exp.role}
              </h3>
              <p className="text-primary-light font-mono text-sm mt-0.5">{exp.company}</p>
            </div>
            <div className="flex flex-col gap-1 sm:items-end shrink-0">
              <span className="inline-flex items-center gap-1.5 text-white/40 font-mono text-xs">
                <Calendar size={11} />
                {exp.duration}
              </span>
              {exp.location && (
                <span className="inline-flex items-center gap-1.5 text-white/30 font-mono text-xs">
                  <MapPin size={11} />
                  {exp.location}
                </span>
              )}
            </div>
          </div>
          <p className="text-white/55 font-body text-sm leading-relaxed mb-4">{exp.description}</p>         
        </div>
      </motion.article>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 overflow-hidden"
      aria-labelledby="experience-heading"
    >
      <div className="absolute inset-0 bg-purple-glow opacity-10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeading
          title="Work Experience"
          subtitle="Companies I've worked with and the impact I've made."
        />

        <div className="mt-4">
          {experiences.map((exp, i) => (
            <TimelineItem
              key={exp.id}
              exp={exp}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
