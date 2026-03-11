import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const education = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    school: "ITER, SOA University",
    cgpa: "B",
    logo: "https://upload.wikimedia.org/wikipedia/en/c/c5/Siksha_%E2%80%98O%E2%80%99_Anusandhan.png",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
      "OOP",
      "Software Engineering",
    ],
  },
  {
    degree: "12th — Science (CBSE)",
    school: "Ekya School ITPL",
    logo: "https://d1zx4fn8ox8446.cloudfront.net/filemanager.rboxfile/d7e399144b6d44f3acfde925c5231fe8/Screen%20Shot%202015-07-14%20at%204.51.05%20pm.png",
  },
  {
    degree: "10th — ICSE",
    school: "Ryan International School, Kundalahalli",
    logo: "https://content.jdmagicbox.com/comp/noida/w7/011pxx11.xx11.160605150318.w5w7/catalogue/ryan-international-school-noida-extension-noida-schools-1h595n5.jpg",
  },
];

export function Education() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="education"
      ref={ref}
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-accent mb-3">
            Education
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Academic Background
          </h2>
        </motion.div>

        <div className="relative">

          {/* Background line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/10" />

          {/* Animated progress line */}
          <motion.div
            style={{ height }}
            className="absolute left-6 top-0 w-[2px] bg-blue-accent origin-top"
          />

          <div className="space-y-16">
            {education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex gap-10"
              >

                {/* Timeline Node */}
                <div className="relative z-10 w-12 flex justify-center">

                  <div className="relative">

                    {/* Glow */}
                    <div className="absolute inset-0 rounded-full bg-blue-accent blur-md opacity-40" />

                    {/* Dot */}
                    <div className="relative w-4 h-4 rounded-full bg-blue-accent border-4 border-[#0b0b0c]" />

                  </div>

                </div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex-1 bg-surface-2 border border-white/8 rounded-2xl p-8 md:p-10 shadow-lg"
                >

                  {/* Top */}
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">

                    <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                      <img
                        src={edu.logo}
                        alt={edu.school}
                        className="object-contain w-full h-full"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {edu.degree}
                      </h3>

                      <p className="text-[#a1a1aa]">
                        {edu.school}
                      </p>
                    </div>

                    {edu.cgpa && (
                      <div className="flex flex-col items-start md:items-end">

                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-black text-blue-accent">
                            {edu.cgpa}
                          </span>
                          <span className="text-[#71717a] text-sm"></span>
                        </div>

                        <span className="text-xs text-[#71717a] uppercase tracking-wider">
                          GRADE
                        </span>

                      </div>
                    )}
                  </div>

                  {/* Coursework */}
                  {edu.coursework && (
                    <div className="border-t border-white/10 pt-6">

                      <p className="text-xs font-semibold tracking-widest uppercase text-blue-accent mb-4">
                        Relevant Coursework
                      </p>

                      <div className="flex flex-wrap gap-2">

                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-[#e4e4e7]"
                          >
                            {course}
                          </span>
                        ))}

                      </div>

                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
