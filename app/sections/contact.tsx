"use client";

import { SectionHeading } from "@/app/components/sectionHeading";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export const Contact = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-gray-50 to-white">
      <SectionHeading
        headingPrimary="My"
        headingAccent="Contact"
        subHeading="Get in Touch"
      />
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="flex flex-col gap-6 justify-center">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-accent text-xl" />
              <span className="text-gray-700 font-medium">+1 234 567 8901</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-accent text-xl" />
              <span className="text-gray-700 font-medium">
                your.email@example.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-accent text-xl" />
              <span className="text-gray-700 font-medium">
                123 Main St, City, Country
              </span>
            </div>
            {/* Social Accounts */}
            <div className="flex gap-5 mt-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-dark transition-colors text-2xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-dark transition-colors text-2xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-dark transition-colors text-2xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
          {/* Message Form */}
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <textarea
              placeholder="Your Message"
              rows={6}
              className="px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition resize-none"
              required
            />
            <button
              type="submit"
              className="bg-accent text-white font-semibold py-3 rounded-lg shadow-md hover:bg-accent/90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
