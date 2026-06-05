import { motion } from "framer-motion";
import { Download, FileText, Eye, ExternalLink } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import AnimatedContainer from "../ui/AnimatedContainer";
import { personalInfo } from "../../data/portfolioData";

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative py-28 overflow-hidden"
      aria-labelledby="resume-heading"
    >
      <div className="absolute inset-0 bg-purple-glow opacity-15 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeading
          title="My CV"
          subtitle="Download or preview my full resume below."
        />

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <AnimatedContainer preset="slideLeft">
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden group">
              <div className="w-full aspect-[3/4] bg-gradient-to-br from-white/5 via-primary/5 to-transparent flex flex-col items-center justify-center gap-5 p-8">
                <motion.div
                  className="w-20 h-20 rounded-2xl border border-primary/30 bg-primary/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                >
                  <FileText size={36} className="text-primary" />
                </motion.div>
                <div className="text-center">
                  <p className="font-display text-white font-semibold text-lg">{personalInfo.name}</p>
                  <p className="text-primary font-mono text-sm mt-1">{personalInfo.title}</p>
                </div>
                <div className="text-center">
                  <p className="text-white/30 font-body text-sm">
                    {personalInfo.email}
                  </p>
                  <p className="text-white/30 font-body text-sm">{personalInfo.location}</p>
                </div>

                <div className="w-full flex flex-col gap-2 mt-4">
                  {[100, 80, 90, 70, 85].map((w, i) => (
                    <div
                      key={i}
                      className="h-1.5 rounded-full bg-white/10"
                      style={{ width: `${w}%` }}
                    />
                  ))}
                </div>
              </div>
              <motion.div
                className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <Button
                  href={personalInfo.resumeFile}
                  target="_blank"
                  variant="primary"
                  icon={Eye}
                >
                  Preview PDF
                </Button>
              </motion.div>
            </div>
          </AnimatedContainer>
          <AnimatedContainer preset="slideRight" className="flex flex-col gap-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-display text-white font-semibold text-xl mb-2">
                {personalInfo.title}
              </h3>
              <p className="text-white/50 font-body text-sm leading-relaxed">
                My resume covers my full professional background, including roles, projects, certifications, and education. Last updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                href={personalInfo.resumeFile}
                target="_blank"
                variant="primary"
                size="lg"
                icon={Download}
                className="w-full justify-center"
              >
                Download PDF
              </Button>
              <Button
                href={personalInfo.resumeFile}
                target="_blank"
                variant="secondary"
                size="lg"
                icon={ExternalLink}
                className="w-full justify-center"
              >
                Open in Browser
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Format", value: "PDF" },
                { label: "Language", value: "English" },
                { label: "Pages", value: "1" },
                { label: "Version", value: "2026" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-3 rounded-xl border border-white/10 bg-white/5 flex flex-col gap-0.5"
                >
                  <span className="text-white/30 font-mono text-xs">{item.label}</span>
                  <span className="text-white font-body text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </div>

            <p className="text-white/30 font-mono text-xs text-center">
              Resume file path: <code className="text-primary/70">{personalInfo.resumeFile}</code>
            </p>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
}
