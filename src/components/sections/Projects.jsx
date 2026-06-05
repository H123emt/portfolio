import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 bg-white/[0.01]"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my most impactful work — from SaaS platforms to open-source tools."
        />

        {/* All Projects Grid - Responsive: 1/2/3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, i) => (
            <div key={project.id} className="h-full">
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>

        <motion.div
          className="mt-16 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/40 font-body text-sm">Want to see more?</p>
          <motion.a
            href="https://github.com/H123emt"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-white/15 bg-white/5 text-white/70 hover:text-white hover:border-primary/40 hover:bg-primary/10 font-body text-sm font-medium transition-all duration-300"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            View all on GitHub →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}