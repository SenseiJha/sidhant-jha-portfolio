import {
  ArrowDown,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { type Variants, motion } from "motion/react";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Init particles
    const count = 70;
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      radius: Math.random() * 1.2 + 0.5,
      opacity: Math.random() * 0.18 + 0.06,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      }
      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-gradient"
    >
      {/* Particle canvas */}
      {/* biome-ignore lint/a11y/noAriaHiddenOnFocusable: decorative particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        tabIndex={-1}
      />

      {/* Blue glow orb */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Location badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-[#a1a1aa] text-xs font-medium mb-10"
        >
          <MapPin size={12} className="text-blue-accent" />
          Bangalore, India
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="hero-name text-[clamp(4rem,12vw,9rem)] font-black text-white mb-5"
        >
          <span className="text-gradient-blue">Sidhant Jha</span>
        </motion.h1>

        {/* Single refined tagline */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg lg:text-xl font-medium text-[#a1a1aa] mb-4 max-w-lg tracking-[-0.01em]"
        >
          Backend Engineer · Mobile Builder · Applied AI Explorer
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base text-[#71717a] max-w-[520px] leading-[1.7] mb-10"
        >
          Building reliable production-grade systems — from scalable APIs to
          intelligent applications. Staying curious about aerospace.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12"
        >
          <button
            type="button"
            onClick={scrollToProjects}
            data-ocid="hero.primary_button"
            className="px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-accent hover:bg-blue-hover transition-all duration-200 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-accent glow-on-hover"
          >
            View Projects
          </button>
          <a
            href="/resume.pdf"
            download
            data-ocid="hero.secondary_button"
            className="px-8 py-3.5 rounded-xl text-sm font-semibold text-white border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-200 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={itemVariants} className="flex items-center gap-5">
          <a
            href="https://github.com/SenseiJha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-xl text-[#a1a1aa] hover:text-white hover:bg-white/8 transition-all duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-accent"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/sidhant-jha-13324838a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-xl text-[#a1a1aa] hover:text-white hover:bg-white/8 transition-all duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-accent"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:sidhantjha2002@gmail.com"
            aria-label="Email"
            className="p-2.5 rounded-xl text-[#a1a1aa] hover:text-white hover:bg-white/8 transition-all duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-accent"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://leetcode.com/u/SenseiJha/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="p-2.5 rounded-xl text-[#a1a1aa] hover:text-white hover:bg-white/8 transition-all duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-accent flex items-center gap-1"
          >
            <span className="text-xs font-bold leading-none">LC</span>
            <ExternalLink size={12} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#71717a]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.8,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
