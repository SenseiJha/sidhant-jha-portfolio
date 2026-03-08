import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "motion/react";

const experiences = [
  {
    role: "AI Intern",
    company: "Placify Technologies",
    location: "Bangalore",
    period: "Mar 2024 – May 2024",
    badge: "AI / Backend",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    bullets: [
      "Built backend and full-stack features using Next.js APIs and PostgreSQL",
      "Reduced manual workflows by ~30% through automation",
      "Integrated Gemini LLM APIs with authentication, retries, and rate limiting",
      "Maintained 99%+ uptime across production services",
      "Implemented automated unit testing using Test-Driven Development (TDD)",
      "Improved API response times by ~20% through optimization",
    ],
  },
  {
    role: "Graduate Engineer Trainee (Mobile)",
    company: "Floatr Wealth",
    location: "Bangalore",
    period: "Nov 2025 – Present",
    badge: "Mobile / Fintech",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    bullets: [
      "Designed mobile wireframes for a fintech wealth management platform",
      "Collaborated closely with product and engineering teams",
      "Converted business requirements into structured, intuitive UI flows",
      "Designed comprehensive UX flows including edge cases and error states",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-accent mb-3">
            Experience
          </p>
          <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Where I've worked
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-3 bottom-3 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-transparent" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                data-ocid={`experience.item.${i + 1}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-7 w-4 h-4 rounded-full bg-blue-accent border-2 border-surface-1 ring-2 ring-blue-accent/20" />

                {/* Card */}
                <div className="bg-surface-2 border border-white/8 rounded-2xl p-6 md:p-8 card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${exp.badgeColor}`}
                        >
                          {exp.badge}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1.5 text-sm text-[#a1a1aa]">
                        <div className="flex items-center gap-1.5">
                          <Briefcase
                            size={13}
                            className="text-blue-accent/70"
                          />
                          {exp.company}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-blue-accent/70" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#71717a] bg-white/5 px-3 py-1.5 rounded-full whitespace-nowrap shrink-0">
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2.5">
                    {exp.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-sm text-[#a1a1aa] leading-relaxed"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-accent/60 mt-1.5 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
