import { motion } from "motion/react";

const aboutPoints = [
  {
    label: "Backend Systems",
    desc: "Designing and building scalable APIs, microservices, and distributed systems with production-grade reliability.",
  },
  {
    label: "Mobile Development",
    desc: "Cross-platform mobile experiences with React Native and Flutter for fintech and consumer apps.",
  },
  {
    label: "AI Integrations",
    desc: "Hands-on with Gemini LLM APIs, ML pipelines, and building intelligent product features.",
  },
  {
    label: "Strong Fundamentals",
    desc: "DSA, OS, Networks, DBMS — a solid CS foundation that shapes every architectural decision.",
  },
  {
    label: "Leadership",
    desc: "3+ years with Toastmasters, mentoring peers, and delivering 10+ public speeches.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-28 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-accent mb-3">
              About
            </p>
            <h2 className="heading-premium text-4xl md:text-5xl font-bold text-white mb-8">
              Building reliable systems,
              <br />
              <span className="text-[#a1a1aa]">one layer at a time.</span>
            </h2>

            {/* Philosophy quote */}
            <blockquote className="border-l-4 border-blue-accent pl-6 py-1">
              <p className="text-[#a1a1aa] text-base md:text-lg italic leading-relaxed">
                "I enjoy building systems that are simple on the surface but
                powerful underneath — from scalable APIs to intelligent
                applications."
              </p>
            </blockquote>

            {/* Decorative element */}
            <div className="mt-10 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-accent animate-pulse" />
              <span className="text-sm text-[#71717a]">
                Available for new opportunities
              </span>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.15,
            }}
            className="flex flex-col gap-5"
          >
            {aboutPoints.map((point, i) => (
              <motion.div
                key={point.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-5 rounded-2xl border border-white/8 bg-surface-2 hover:border-blue-accent/20 hover:bg-surface-3 transition-all duration-200"
              >
                <p className="text-sm font-semibold text-white mb-1">
                  {point.label}
                </p>
                <p className="text-sm text-[#71717a] leading-relaxed">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
