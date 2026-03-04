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
    <section className="w-full py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden" id="contact">
      {/* Decorative background blur blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-80 h-80 bg-accent/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          headingPrimary="My"
          headingAccent="Contact"
          subHeading="Let's create something together"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          {/* Contact Information */}
          <div className="flex flex-col space-y-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">Get in Touch</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Have a project in mind, looking for a collaboration, or just want to say hi? Feel free to reach out. I'm always open to discussing new projects and creative ideas.
            </p>

            <div className="space-y-6 mt-4">
              <div className="flex items-center group cursor-pointer">
                <div className="flex items-center justify-center w-14 h-14 bg-white rounded-xl shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 text-accent">
                  <FaPhoneAlt size={20} />
                </div>
                <div className="ml-6">
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-lg text-gray-800 font-semibold group-hover:text-accent transition-colors">+1 (234) 567-890</p>
                </div>
              </div>

              <div className="flex items-center group cursor-pointer">
                <div className="flex items-center justify-center w-14 h-14 bg-white rounded-xl shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 text-accent">
                  <FaEnvelope size={20} />
                </div>
                <div className="ml-6">
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Email</p>
                  <p className="text-lg text-gray-800 font-semibold group-hover:text-accent transition-colors">hello@example.com</p>
                </div>
              </div>

              <div className="flex items-center group cursor-pointer">
                <div className="flex items-center justify-center w-14 h-14 bg-white rounded-xl shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 text-accent">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div className="ml-6">
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Location</p>
                  <p className="text-lg text-gray-800 font-semibold group-hover:text-accent transition-colors">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-4">Follow Me</p>
              <div className="flex gap-4">
                <a href="#" className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm text-gray-600 hover:text-white hover:bg-gray-800 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <FaGithub size={20} />
                </a>
                <a href="#" className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm text-gray-600 hover:text-white hover:bg-blue-600 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm text-gray-600 hover:text-white hover:bg-sky-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="How can I help you?"
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your message goes here..."
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 placeholder:text-gray-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl shadow-lg shadow-accent/30 transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
