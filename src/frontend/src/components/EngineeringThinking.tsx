import { BookOpen, Layers, Users, Zap } from "lucide-react";
import { motion } from "motion/react";

const thinkingCards = [
  {
    icon: <Layers size={36} className="text-blue-accent" />,
    title: "Systems First",
    description:
      "Designing modular architecture and clear API design before writing a single line of code.",
    accent: "from-blue-500/10 to-transparent",
  },
  {
    icon: <Zap size={36} className="text-amber-400" />,
    title: "Performance & Reliability",
    description:
      "Latency optimization, retry strategies, circuit breakers, and fault-tolerant design patterns.",
    accent: "from-amber-500/10 to-transparent",
  },
  {
    icon: <BookOpen size={36} className="text-emerald-400" />,
    title: "Learning New Systems Quickly",
    description:
      "Comfortable integrating unfamiliar technologies and adapting fast to new architectures.",
    accent: "from-emerald-500/10 to-transparent",
  },
  {
    icon: <Users size={36} className="text-purple-400" />,
    title: "Communication & Leadership",
    description:
      "Public speaking and mentoring experience through Toastmasters — because great engineers communicate clearly.",
    accent: "from-purple-500/10 to-transparent",
  },
];

export function EngineeringThinking() {
  return (
    <section id="thinking" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-5"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-accent mb-3">
            Philosophy
          </p>
          <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Engineering Thinking
          </h2>
          <p className="text-base md:text-lg text-[#a1a1aa] max-w-xl">
            I focus on designing systems that are reliable, scalable, and simple
            to understand.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-14">
          {thinkingCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative p-8 bg-surface-2 border border-white/8 rounded-2xl hover:border-blue-accent/30 hover:bg-surface-3 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${card.accent} pointer-events-none`}
              />

              <div className="relative">
                <div className="mb-5">{card.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
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
