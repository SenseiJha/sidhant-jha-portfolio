import { GraduationCap } from "lucide-react";
import { motion } from "motion/react";

const coursework = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "DBMS",
  "Computer Networks",
  "OOP",
  "Software Engineering",
];

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
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
            Education
          </p>
          <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Academic background
          </h2>
        </motion.div>

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-surface-2 border border-white/8 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto card-hover"
        >
          {/* Top */}
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
            <div className="w-16 h-16 rounded-2xl bg-blue-accent/10 border border-blue-accent/20 flex items-center justify-center shrink-0">
              <GraduationCap size={32} className="text-blue-accent" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-1">
                B.Tech — Computer Science & Engineering
              </h3>
              <p className="text-[#a1a1aa] text-base">ITER, SOA University</p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-1">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-blue-accent">
                  7.74
                </span>
                <span className="text-[#71717a] text-sm">/ 10</span>
              </div>
              <span className="text-xs text-[#71717a] uppercase tracking-wider">
                CGPA
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="section-divider mb-8" />

          {/* Coursework */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-accent mb-5">
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-2.5">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-[#e4e4e7] font-medium pill-hover cursor-default"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
