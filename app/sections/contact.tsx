"use client";

import { SectionHeading } from "@/app/components/sectionHeading";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "motion/react";

const contactDetails = [
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: "+1 234 567 8901",
    href: "tel:+12345678901",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Bangalore, India",
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/yourusername",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com/yourusername",
    label: "Twitter",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const Contact = () => {
  return (
    <section
      className="w-full py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
      }}
    >
      {/* ── Decorative glow orbs ── */}
      <div
        className="absolute top-[-8rem] left-[-6rem] w-[28rem] h-[28rem] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(255, 79, 110, 0.15)" }}
      />
      <div
        className="absolute bottom-[-6rem] right-[-4rem] w-[22rem] h-[22rem] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(45, 212, 191, 0.15)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "rgba(255, 79, 110, 0.06)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* ── Section heading ── */}
        <SectionHeading
          headingPrimary="My"
          headingAccent="Contact"
          subHeading="Get in Touch"
        />

        {/* ── Two-column glass layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* ── Left: Contact Info ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-3xl p-8 md:p-10 flex flex-col justify-between"
            style={{
              background: "rgba(255, 255, 255, 0.04)",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div>
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-white mb-2"
              >
                Let&apos;s work together
              </motion.h3>
              <motion.p
                variants={itemVariants}
                className="mb-8 leading-relaxed"
                style={{ color: "#94a3b8" }}
              >
                Feel free to reach out for collaborations, freelance
                opportunities, or just a friendly chat about tech.
              </motion.p>

              {/* Contact detail rows */}
              <div className="flex flex-col gap-5">
                {contactDetails.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={itemVariants}
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255, 79, 110, 0.2), rgba(45, 212, 191, 0.1))",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <item.icon className="text-accent text-lg" />
                    </div>
                    <div>
                      <span
                        className="text-xs font-medium uppercase tracking-wider block"
                        style={{ color: "#64748b" }}
                      >
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="block text-white font-medium hover:text-accent transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="block text-white font-medium">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="mt-10">
              <span
                className="text-xs font-medium uppercase tracking-wider mb-4 block"
                style={{ color: "#64748b" }}
              >
                Find me on
              </span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 rounded-xl flex items-center justify-center hover:text-accent hover:-translate-y-1 transition-all duration-300"
                    style={{
                      background: "rgba(255, 255, 255, 0.06)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "#94a3b8",
                    }}
                  >
                    <social.icon className="text-lg" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Message Form ── */}
          <motion.form
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-3xl p-8 md:p-10 flex flex-col"
            style={{
              background: "rgba(255, 255, 255, 0.04)",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-2"
            >
              Send a Message
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="mb-8"
              style={{ color: "#94a3b8" }}
            >
              I&apos;ll get back to you as soon as possible.
            </motion.p>

            {/* Name field */}
            <motion.div variants={itemVariants} className="mb-5">
              <label
                htmlFor="contact-name"
                className="text-xs font-medium uppercase tracking-wider mb-2 block"
                style={{ color: "#64748b" }}
              >
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="John Doe"
                required
                className="w-full px-4 py-3 rounded-xl text-white outline-none transition-all duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255, 79, 110, 0.5)";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(255, 79, 110, 0.15)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </motion.div>

            {/* Email field */}
            <motion.div variants={itemVariants} className="mb-5">
              <label
                htmlFor="contact-email"
                className="text-xs font-medium uppercase tracking-wider mb-2 block"
                style={{ color: "#64748b" }}
              >
                Your Email
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="john@example.com"
                required
                className="w-full px-4 py-3 rounded-xl text-white outline-none transition-all duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255, 79, 110, 0.5)";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(255, 79, 110, 0.15)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </motion.div>

            {/* Message field */}
            <motion.div variants={itemVariants} className="mb-6 flex-1">
              <label
                htmlFor="contact-message"
                className="text-xs font-medium uppercase tracking-wider mb-2 block"
                style={{ color: "#64748b" }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                placeholder="Tell me about your project..."
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl text-white outline-none transition-all duration-300 resize-none"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255, 79, 110, 0.5)";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(255, 79, 110, 0.15)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </motion.div>

            {/* Submit button */}
            <motion.button
              variants={itemVariants}
              type="submit"
              className="group relative w-full py-3.5 rounded-xl text-white font-semibold text-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              style={{
                background:
                  "linear-gradient(135deg, #ff4f6e, #e63d5a)",
                boxShadow: "0 8px 24px rgba(255, 79, 110, 0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 12px 32px rgba(255, 79, 110, 0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(255, 79, 110, 0.25)";
              }}
            >
              Send Message
              <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </motion.button>
          </motion.form>
        </div>

        {/* ── Bottom decorative line ── */}
        <div className="mt-16 flex items-center gap-4">
          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)",
            }}
          />
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "#475569" }}
          >
            © {new Date().getFullYear()} Aniket Mandal
          </span>
          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
};
