import { Award, Heart, MessageSquare, Mic } from "lucide-react";
import { motion } from "motion/react";

const achievements = [
  {
    stat: "3+",
    label: "Years Active",
    description: "Active member developing communication and leadership skills",
    icon: <Award size={20} className="text-blue-accent" />,
  },
  {
    stat: "2",
    label: "Leadership Levels",
    description: "Completed structured leadership development programs",
    icon: <Mic size={20} className="text-blue-accent" />,
  },
  {
    stat: "10+",
    label: "Speeches Delivered",
    description: "Delivered speeches on technical and personal growth topics",
    icon: <MessageSquare size={20} className="text-blue-accent" />,
  },
  {
    stat: "∞",
    label: "Peer Mentoring",
    description: "Guided fellow members through their public speaking journey",
    icon: <Heart size={20} className="text-blue-accent" />,
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-accent mb-3">
            Leadership
          </p>
          <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Toastmasters International
          </h2>
          <p className="text-base text-[#a1a1aa] max-w-xl">
            Communication and leadership development through one of the world's
            largest organizations.
          </p>
        </motion.div>

        {/* Achievement cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-14">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              data-ocid={`leadership.item.${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface-2 border border-white/8 rounded-xl p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-accent/10 border border-blue-accent/20 flex items-center justify-center shrink-0">
                  {a.icon}
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-2xl font-black text-blue-accent">
                      {a.stat}
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {a.label}
                    </span>
                  </div>
                  <p className="text-sm text-[#71717a] leading-relaxed">
                    {a.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
