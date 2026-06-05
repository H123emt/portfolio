import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project, index = 0 }) {
  const navigate = useNavigate();
  const { id, title, description, technologies, image, github, liveDemo } = project;

  return (
    <motion.article
      className="group relative flex flex-col h-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all duration-500"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      aria-label={`Project: ${title}`}
    >
      {/* Fixed height image */}
      <div className="relative w-full h-48 flex-shrink-0 bg-gradient-to-br from-white/5 to-primary/10 flex items-center justify-center overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            loading="lazy" 
          />
        ) : (
          <span className="font-display text-2xl font-bold text-white/20 text-center px-6">
            {title}
          </span>
        )}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary opacity-60" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-display text-lg text-white font-semibold group-hover:text-primary transition-colors line-clamp-1">
          {title}
        </h3>

        <p className="font-body text-white/50 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2 py-0.5 rounded-lg border border-white/10 bg-white/5 text-white/60"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="font-mono text-xs px-2 py-0.5 rounded-lg border border-primary/20 bg-primary/10 text-primary">
              +{technologies.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-2 mt-1 border-t border-white/5">
          <motion.button
            onClick={() => navigate(`/project/${id}`)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/20 text-primary font-body text-xs font-medium transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore <ArrowRight size={12} />
          </motion.button>

          <div className="flex gap-1.5">
            {github && (
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 hover:text-white transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={14} />
              </motion.a>
            )}
            {liveDemo && (
              <motion.a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 hover:text-primary transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={14} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}