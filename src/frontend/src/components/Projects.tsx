import {
  Brain,
  ExternalLink,
  Github,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    title: "RESET",
    subtitle: "On-Demand Cleaning Services Platform",
    description:
      "A full-featured platform for booking on-demand home cleaning services with real-time scheduling, provider matching, and service tracking.",
    tech: ["React Native", "Flutter", "REST APIs", "Scheduling"],
    github: "https://github.com/SenseiJha",
    demo: "#",
    icon: <Smartphone size={40} className="text-blue-accent opacity-70" />,
    gradient: "from-blue-900/30 to-slate-900/60",
    accentColor: "blue",
    metrics: null,
  },
  {
    title: "Geo Viral Tweet Prediction",
    subtitle: "ML-Powered Virality Prediction System",
    description:
      "Machine learning pipeline that predicts tweet virality using geo-tagged data, feature engineering, and advanced predictive modeling techniques.",
    tech: [
      "ML Pipeline",
      "Feature Engineering",
      "Data Preprocessing",
      "Predictive Modeling",
    ],
    github: "https://github.com/SenseiJha",
    demo: "#",
    icon: <Brain size={40} className="text-purple-400 opacity-70" />,
    gradient: "from-purple-900/30 to-slate-900/60",
    accentColor: "purple",
    metrics: null,
  },
  {
    title: "AI Career Guide Platform",
    subtitle: "Intelligent Career Guidance Platform",
    description:
      "AI-powered career guidance platform serving 500+ users with personalized recommendations, blazing-fast response times, and rock-solid reliability.",
    tech: ["Next.js", "PostgreSQL", "Gemini API"],
    github: "https://github.com/SenseiJha",
    demo: "#",
    icon: <Sparkles size={40} className="text-amber-400 opacity-70" />,
    gradient: "from-amber-900/20 to-slate-900/60",
    accentColor: "amber",
    metrics: [
      { label: "Users", value: "500+" },
      { label: "Latency", value: "200ms" },
      { label: "Uptime", value: "99.5%" },
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-accent mb-3">
            Projects
          </p>
          <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Things I've built
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              data-ocid={`projects.item.${i + 1}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex flex-col bg-surface-2 border border-white/8 rounded-2xl overflow-hidden card-hover"
            >
              {/* Image / preview area */}
              <div
                className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                {/* Grid pattern overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="relative z-10">{project.icon}</div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-blue-accent mb-3">
                  {project.subtitle}
                </p>
                <p className="text-sm text-[#71717a] leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Metrics */}
                {project.metrics && (
                  <div className="flex gap-3 mb-4">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="flex flex-col items-center bg-white/5 rounded-xl px-3 py-2 flex-1"
                      >
                        <span className="text-sm font-bold text-blue-accent">
                          {m.value}
                        </span>
                        <span className="text-xs text-[#71717a] mt-0.5">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-xs text-[#a1a1aa] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2 border-t border-white/8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`projects.github_button.${i + 1}`}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-[#a1a1aa] border border-white/8 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-[#a1a1aa] border border-white/8 hover:text-blue-accent hover:border-blue-accent/30 hover:bg-blue-accent/5 transition-all"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
