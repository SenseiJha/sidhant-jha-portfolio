import {
  ExternalLink,
  Github,
  Linkedin,
  Loader2,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useState } from "react";
import { useActor } from "../hooks/useActor";

export function Contact() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!name.trim() || !email.trim() || !message.trim()) {
        setErrorMsg("Please fill in all fields.");
        setStatus("error");
        return;
      }
      if (!actor) {
        setErrorMsg("Not connected. Please refresh and try again.");
        setStatus("error");
        return;
      }
      setStatus("loading");
      setErrorMsg("");
      try {
        await actor.submitMessage(name.trim(), email.trim(), message.trim());
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } catch (err) {
        console.error(err);
        setErrorMsg(
          "Something went wrong. Please try again or email me directly.",
        );
        setStatus("error");
      }
    },
    [actor, name, email, message],
  );

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-accent mb-3">
            Contact
          </p>
          <h2 className="heading-premium text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 max-w-2xl mx-auto">
            Interested in building something meaningful together?
          </h2>

          {/* Contact info row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-8 mb-6">
            <a
              href="mailto:sidhantjha2002@gmail.com"
              className="flex items-center gap-2.5 text-[#a1a1aa] hover:text-white transition-colors text-sm"
            >
              <Mail size={16} className="text-blue-accent" />
              sidhantjha2002@gmail.com
            </a>
            <div className="hidden sm:block w-px h-4 bg-white/15" />
            <a
              href="tel:+916360054316"
              className="flex items-center gap-2.5 text-[#a1a1aa] hover:text-white transition-colors text-sm"
            >
              <Phone size={16} className="text-blue-accent" />
              +91-6360054316
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/SenseiJha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl text-[#a1a1aa] hover:text-white hover:bg-white/8 border border-white/8 hover:border-white/20 transition-all duration-200 hover:scale-110"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/sidhant-jha-13324838a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl text-[#a1a1aa] hover:text-white hover:bg-white/8 border border-white/8 hover:border-white/20 transition-all duration-200 hover:scale-110"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://leetcode.com/u/SenseiJha/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="p-2.5 rounded-xl text-[#a1a1aa] hover:text-white hover:bg-white/8 border border-white/8 hover:border-white/20 transition-all duration-200 hover:scale-110 flex items-center gap-1"
            >
              <span className="text-xs font-bold leading-none">LC</span>
              <ExternalLink size={10} />
            </a>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-surface-2 border border-white/8 rounded-2xl p-6 md:p-10 max-w-2xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="text-xs font-semibold text-[#a1a1aa] uppercase tracking-wider"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  data-ocid="contact.input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Sidhant Jha"
                  autoComplete="name"
                  className="w-full px-4 py-3 rounded-xl bg-surface-4 border border-white/10 text-white placeholder-[#71717a] text-sm focus:outline-none focus:border-blue-accent/60 focus:ring-1 focus:ring-blue-accent/40 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="text-xs font-semibold text-[#a1a1aa] uppercase tracking-wider"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hello@example.com"
                  autoComplete="email"
                  className="w-full px-4 py-3 rounded-xl bg-surface-4 border border-white/10 text-white placeholder-[#71717a] text-sm focus:outline-none focus:border-blue-accent/60 focus:ring-1 focus:ring-blue-accent/40 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-message"
                className="text-xs font-semibold text-[#a1a1aa] uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                data-ocid="contact.textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project, idea, or opportunity..."
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-surface-4 border border-white/10 text-white placeholder-[#71717a] text-sm focus:outline-none focus:border-blue-accent/60 focus:ring-1 focus:ring-blue-accent/40 transition-all resize-none"
              />
            </div>

            {/* Error state */}
            {status === "error" && (
              <div
                data-ocid="contact.error_state"
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
              >
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Success state */}
            {status === "success" && (
              <div
                data-ocid="contact.success_state"
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm"
              >
                <span>✓ Message sent! I'll get back to you soon.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              data-ocid="contact.submit_button"
              className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-accent hover:bg-blue-hover disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-accent mt-1"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
