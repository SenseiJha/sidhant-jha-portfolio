import { motion } from "motion/react";

const skillCategories = [
  {
    category: "Languages",
    skills: ["Java", "Python", "JavaScript", "C#", "C", "Dart", "SQL"],
  },
  {
    category: "Backend",
    skills: ["Spring Boot", "Node.js", "Flask", "Django", "ASP.NET"],
  },
  {
    category: "Mobile",
    skills: ["React Native", "Flutter"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    category: "AI & Data",
    skills: ["EDA", "ML Fundamentals", "Feature Engineering", "LLM APIs"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Postman", "Firebase", "Neon", "Render"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
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
            Stack
          </p>
          <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-col gap-10">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-blue-accent mb-4">
                {cat.category}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: j * 0.04 }}
                    className="px-4 py-1.5 rounded-full bg-surface-4 border border-white/8 text-sm text-[#e4e4e7] font-medium cursor-default pill-hover"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
