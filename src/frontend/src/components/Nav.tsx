import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      data-ocid="nav.panel"
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-500 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-full flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick("#hero")}
          className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-accent rounded-lg"
          aria-label="Go to top"
        >
          <div className="w-9 h-9 rounded-xl bg-blue-accent flex items-center justify-center text-white font-black text-sm tracking-tight group-hover:scale-105 transition-transform">
            SJ
          </div>
        </button>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNavClick(link.href)}
              data-ocid="nav.link"
              className="px-4 py-2 text-sm font-medium text-[#a1a1aa] hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-accent"
            >
              {link.label}
            </button>
          ))}
          <a
            href="mailto:sidhantjha2002@gmail.com"
            className="ml-2 px-4 py-2 text-sm font-semibold text-white bg-blue-accent hover:bg-blue-hover rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-accent"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile nav */}
        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="p-2 text-[#a1a1aa] hover:text-white rounded-lg hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-accent"
                aria-label="Open mobile menu"
              >
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 bg-[#0d0d0d] border-l border-white/8 p-0"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-9 h-9 rounded-xl bg-blue-accent flex items-center justify-center text-white font-black text-sm">
                    SJ
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    className="p-1.5 text-[#a1a1aa] hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={18} />
                  </button>
                </div>

                <nav className="flex flex-col gap-1 flex-1">
                  {navLinks.map((link, i) => (
                    <motion.button
                      key={link.href}
                      type="button"
                      onClick={() => handleNavClick(link.href)}
                      className="text-left px-4 py-3 text-base font-medium text-[#a1a1aa] hover:text-white rounded-xl hover:bg-white/5 transition-all duration-200"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </nav>

                <a
                  href="mailto:sidhantjha2002@gmail.com"
                  className="mt-4 w-full px-4 py-3 text-center text-sm font-semibold text-white bg-blue-accent hover:bg-blue-hover rounded-xl transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  Hire Me
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
