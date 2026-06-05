import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  AlertCircle,
  User,
  MessageSquare,
  Phone,
  X,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import AnimatedContainer from "../ui/AnimatedContainer";
import { personalInfo } from "../../data/portfolioData";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "bg-primary/20 border-primary/30",
    hoverColor: "hover:border-primary/50",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: personalInfo.social.linkedin,
    color: "bg-blue-600/10 border-blue-600/20",
    hoverColor: "hover:border-blue-400/40",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Explore my repos",
    href: personalInfo.social.github,
    color: "bg-white/5 border-white/10",
    hoverColor: "hover:border-white/30",
  },
];

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle");

  // Check if all required fields are filled
  const isFormValid = () => {
    return (
      form.name.trim() !== "" &&
      form.email.trim() !== "" &&
      form.subject.trim() !== "" &&
      form.message.trim() !== ""
    );
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) return; // Prevent submission if form is invalid
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setTimeout(() => {
      setShowContactModal(true);
      setForm(INITIAL_FORM);
      setStatus("idle");
    }, 500);
  };

  return (
    <>
      <AnimatePresence>
        {showContactModal && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowContactModal(false)}
            />

            {/* Centered Modal */}
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.85, opacity: 0, y: 40 }}
                transition={{
                  duration: 0.35,
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                }}
                className="w-full max-w-md mx-4 sm:mx-0"
              >
                <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-[#111111]/95 backdrop-blur-xl p-5 sm:p-7 shadow-[0_0_60px_rgba(168,85,247,0.25)]">
                  {/* Glow Effect */}
                  <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl pointer-events-none" />

                  {/* Header */}
                  <div className="relative flex items-start justify-between mb-5 sm:mb-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-primary/15 border border-primary/20">
                        <CheckCircle2 className="text-primary" size={24} />
                      </div>

                      <div>
                        <h3 className="text-white text-lg sm:text-xl font-semibold">
                          Thank You!
                        </h3>
                      </div>
                    </div>

                    <button
                      onClick={() => setShowContactModal(false)}
                      className="text-white/40 hover:text-white transition-colors duration-300"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="relative space-y-4 sm:space-y-5">
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                      Thank you for reaching out.For faster communication, feel
                      free to contact me directly.
                    </p>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 space-y-3 sm:space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-primary/10">
                          <Phone size={16} className="text-primary" />
                        </div>

                        <div>
                          <p className="text-white/40 text-[10px] sm:text-xs uppercase tracking-wider">
                            Phone
                          </p>
                          <p className="text-white text-sm sm:text-base font-medium">
                            +91 9658225382
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-primary/10">
                          <Mail size={16} className="text-primary" />
                        </div>

                        <div>
                          <p className="text-white/40 text-[10px] sm:text-xs uppercase tracking-wider">
                            Email
                          </p>
                          <p className="text-white text-sm sm:text-base font-medium break-all">
                            {personalInfo.email}
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={() => setShowContactModal(false)}
                      className="w-full flex items-center justify-center"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <section
        id="contact"
        className="relative py-16 sm:py-20 md:py-28 bg-white/[0.01] overflow-hidden"
        aria-labelledby="contact-heading"
      >
        <div className="absolute inset-0 bg-purple-glow opacity-15 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading
            title="Let's Work Together"
            subtitle="Have a project in mind or want to discuss an opportunity? Reach out."
          />

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
            <div className="flex flex-col gap-4 sm:gap-5">
              <AnimatedContainer preset="fadeUp">
                <p className="text-white/55 font-body text-sm sm:text-base leading-relaxed">
                  I'm currently open to full-time roles, Whether it's building a
                  product from scratch or improving an existing system — let's
                  connect!
                </p>
              </AnimatedContainer>

              <div className="flex flex-col gap-3 sm:gap-4 mt-1 sm:mt-2">
                {contactCards.map((card, i) => {
                  const Icon = card.icon;
                  return (
                    <AnimatedContainer
                      key={card.label}
                      preset="slideLeft"
                      delay={i * 0.1}
                    >
                      <motion.a
                        href={card.href}
                        target={
                          card.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl border ${card.color} ${card.hoverColor} transition-all duration-300 group`}
                        whileHover={{ x: 6 }}
                      >
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${card.color} flex items-center justify-center shrink-0`}
                        >
                          <Icon size={18} className="text-white/80" />
                        </div>
                        <div>
                          <p className="text-white/40 font-mono text-[10px] sm:text-xs uppercase tracking-wider">
                            {card.label}
                          </p>
                          <p className="text-white font-body text-sm sm:text-base font-medium group-hover:text-primary transition-colors duration-300 break-all">
                            {card.value}
                          </p>
                        </div>
                      </motion.a>
                    </AnimatedContainer>
                  );
                })}
              </div>
            </div>
            <AnimatedContainer preset="slideRight">
              <form
                onSubmit={handleSubmit}
                className="p-5 sm:p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm flex flex-col gap-4 sm:gap-5"
                aria-label="Contact form"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <Field
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Alex Mercer"
                    value={form.name}
                    onChange={handleChange}
                    icon={User}
                    required
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="alex@example.com"
                    value={form.email}
                    onChange={handleChange}
                    icon={Mail}
                    required
                  />
                </div>

                <Field
                  label="Subject"
                  name="subject"
                  type="text"
                  placeholder="Project inquiry / Collaboration"
                  value={form.subject}
                  onChange={handleChange}
                  icon={MessageSquare}
                  required
                />

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-wider"
                  >
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm placeholder-white/25 focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all duration-300 resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={
                    status === "loading" ||
                    status === "success" ||
                    !isFormValid()
                  }
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary hover:bg-primary-light text-white font-body font-medium text-sm transition-all duration-300 shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary"
                  whileHover={{
                    scale: status === "idle" && isFormValid() ? 1.02 : 1,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <AnimatePresence mode="wait">
                    {status === "idle" && (
                      <motion.span
                        key="idle"
                        className="flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Send size={15} /> Send Message
                      </motion.span>
                    )}
                    {status === "loading" && (
                      <motion.span
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Sending...
                      </motion.span>
                    )}
                    {status === "success" && (
                      <motion.span
                        key="success"
                        className="flex items-center gap-2 text-green-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <CheckCircle2 size={15} /> Message Sent!
                      </motion.span>
                    )}
                    {status === "error" && (
                      <motion.span
                        key="error"
                        className="flex items-center gap-2 text-red-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <AlertCircle size={15} /> Try again
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>

                <p className="text-white/25 font-mono text-[10px] sm:text-xs text-center">
                  I typically respond within 24 hours.
                </p>
              </form>
            </AnimatedContainer>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  icon: Icon,
  required,
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-wider"
      >
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            size={14}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none"
          />
        )}
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 sm:py-3 text-white font-body text-sm placeholder-white/25 focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all duration-300"
        />
      </div>
    </div>
  );
}