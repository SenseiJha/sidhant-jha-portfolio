import { Globe, Rocket, Target } from "lucide-react";
import { motion } from "motion/react";

const curiosityCards = [
  {
    icon: <Globe size={36} className="text-blue-accent" />,
    title: "Complex Systems",
    description:
      "Deep interest in distributed systems architecture and orbital mechanics — two fields where reliability isn't optional.",
    gradient: "from-blue-500/8 to-transparent",
  },
  {
    icon: <Target size={36} className="text-rose-400" />,
    title: "Precision Engineering",
    description:
      "Applying aerospace-grade precision thinking to backend architecture — zero tolerance for undefined behavior.",
    gradient: "from-rose-500/8 to-transparent",
  },
  {
    icon: <Rocket size={36} className="text-amber-400" />,
    title: "Continuous Learning",
    description:
      "Actively exploring emerging technologies in AI and aerospace, where the next frontier is always just over the horizon.",
    gradient: "from-amber-500/8 to-transparent",
  },
];

export function Curiosity() {
  return (
    <section id="curiosity" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-accent mb-3">
            Interests
          </p>
          <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Curiosity
          </h2>
          <p className="text-base md:text-lg text-[#a1a1aa] max-w-2xl leading-relaxed">
            Beyond software engineering, Sidhant is deeply curious about
            aerospace systems — machines designed to operate in extreme
            environments with precision and reliability.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {curiosityCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative p-7 bg-surface-2 border border-white/8 rounded-2xl hover:border-blue-accent/25 hover:bg-surface-3 transition-all duration-300 overflow-hidden group"
            >
              {/* Gradient accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-28 bg-gradient-to-b ${card.gradient} pointer-events-none`}
              />

              <div className="relative">
                <div className="mb-5 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
