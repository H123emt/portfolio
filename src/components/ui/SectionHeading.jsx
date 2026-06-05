import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const alignClass = {
    center: "text-center items-center",
    left: "text-left items-start",
  };

  return (
    <motion.div
      className={`flex flex-col gap-3 mb-16 ${alignClass[align]}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase">
          <span className="w-6 h-px bg-primary" />
          {eyebrow}
          <span className="w-6 h-px bg-primary" />
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/50 font-body max-w-xl leading-relaxed text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
