import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft, Github, ExternalLink, CheckCircle2, Layers,
  Lightbulb, Target, Cpu, ImageOff,
} from "lucide-react";
import { projects } from "../data/projects";
import Button from "../components/ui/Button";
import { StaggerContainer, StaggerItem } from "../components/ui/AnimatedContainer";

const SectionBlock = ({ icon: Icon, title, children }) => (
  <div className="p-7 rounded-2xl border border-white/10 bg-white/[0.03]">
    <div className="flex items-center gap-3 mb-5">
      <div className="w-9 h-9 rounded-xl border border-primary/25 bg-primary/10 flex items-center justify-center">
        <Icon size={16} className="text-primary" />
      </div>
      <h2 className="font-display text-white text-xl font-semibold">{title}</h2>
    </div>
    {children}
  </div>
);

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-background text-white">
        <p className="font-display text-2xl">Project not found.</p>
        <Button variant="primary" onClick={() => navigate("/")}>
          Go Home
        </Button>
      </div>
    );
  }

  const { title, description, technologies, image, github, liveDemo, detailedContent } = project;
  const d = detailedContent;

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="relative min-h-[45vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover opacity-20" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/15 via-primary-light/5 to-background" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 pb-12 pt-28 w-full">
          <motion.button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white/50 hover:text-primary font-body text-sm mb-8 transition-colors duration-200"
            whileHover={{ x: -4 }}
          >
            <ArrowLeft size={16} /> Back to Projects
          </motion.button>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 6).map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-2.5 py-1 rounded-lg border border-primary/25 bg-primary/10 text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
              {title}
            </h1>
            <p className="text-white/55 font-body text-lg max-w-2xl leading-relaxed">{description}</p>

            <div className="flex flex-wrap gap-3 mt-2">
              {github && (
                <Button href={github} target="_blank" variant="secondary" icon={Github}>
                  View Source
                </Button>
              )}
              {liveDemo && (
                <Button href={liveDemo} target="_blank" variant="primary" icon={ExternalLink}>
                  Live Demo
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 mb-12">
        <motion.div
          className="w-full aspect-video rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {image ? (
            <img src={image} alt={`${title} screenshot`} className="w-full h-full object-cover" />
          ) : (
            <div className="flex flex-col items-center gap-3 text-white/20">
              <ImageOff size={40} />
              <span className="font-mono text-sm">{title}</span>
            </div>
          )}
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-28">
        <StaggerContainer className="flex flex-col gap-6">
          {/* Overview */}
          {d?.overview && (
            <StaggerItem>
              <SectionBlock icon={Layers} title="Overview">
                <p className="text-white/60 font-body leading-relaxed">{d.overview}</p>
              </SectionBlock>
            </StaggerItem>
          )}

          {(d?.problem || d?.solution) && (
            <StaggerItem>
              <div className="grid md:grid-cols-2 gap-5">
                {d.problem && (
                  <SectionBlock icon={Target} title="Problem">
                    <p className="text-white/60 font-body leading-relaxed text-sm">{d.problem}</p>
                  </SectionBlock>
                )}
                {d.solution && (
                  <SectionBlock icon={Lightbulb} title="Solution">
                    <p className="text-white/60 font-body leading-relaxed text-sm">{d.solution}</p>
                  </SectionBlock>
                )}
              </div>
            </StaggerItem>
          )}

          {d?.architecture && (
            <StaggerItem>
              <SectionBlock icon={Cpu} title="Architecture">
                <p className="text-white/60 font-body leading-relaxed">{d.architecture}</p>
              </SectionBlock>
            </StaggerItem>
          )}

          <StaggerItem>
            <div className="p-7 rounded-2xl border border-white/10 bg-white/[0.03]">
              <h2 className="font-display text-white text-xl font-semibold mb-5">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {technologies.map((t) => (
                  <motion.span
                    key={t}
                    className="font-mono text-xs px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-white/70 hover:border-primary/40 hover:text-primary hover:bg-primary/10 cursor-default transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>
          </StaggerItem>

          {d?.features?.length > 0 && (
            <StaggerItem>
              <div className="p-7 rounded-2xl border border-white/10 bg-white/[0.03]">
                <h2 className="font-display text-white text-xl font-semibold mb-5">Key Features</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {d.features.map((feat, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-white/65 font-body text-sm">{feat}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          )}

          {d?.screenshots?.length === 0 && (
            <StaggerItem>
              <div className="p-7 rounded-2xl border border-dashed border-white/10 flex flex-col items-center gap-3 text-white/25">
                <ImageOff size={28} />
                <p className="font-mono text-sm">Screenshots will appear here when i,ll add</p>
              </div>
            </StaggerItem>
          )}

          <StaggerItem>
            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
              <Button variant="ghost" onClick={() => navigate(-1)} icon={ArrowLeft}>
                Back to Projects
              </Button>
              <div className="flex gap-3 ml-auto">
                {github && (
                  <Button href={github} target="_blank" variant="secondary" icon={Github}>
                    GitHub
                  </Button>
                )}
                {liveDemo && (
                  <Button href={liveDemo} target="_blank" variant="primary" icon={ExternalLink}>
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </motion.div>
  );
}
