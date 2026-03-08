import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/8 py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Divider */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name & copyright */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-accent flex items-center justify-center text-white font-black text-xs">
                SJ
              </div>
              <span className="text-sm font-semibold text-white">
                Sidhant Jha
              </span>
            </div>
            <p className="text-xs text-[#71717a]">
              © {year} Sidhant Jha. All rights reserved.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/SenseiJha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-[#71717a] hover:text-white hover:bg-white/5 transition-all"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/sidhant-jha-13324838a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-[#71717a] hover:text-white hover:bg-white/5 transition-all"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:sidhantjha2002@gmail.com"
              aria-label="Email"
              className="p-2 rounded-lg text-[#71717a] hover:text-white hover:bg-white/5 transition-all"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Caffeine attribution */}
          <p className="text-xs text-[#71717a]">
            Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-accent/70 hover:text-blue-accent transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
