"use client";

import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSent(true);
        setFormData({ name: "", email: "", budget: "", message: "" });
        setTimeout(() => setIsSent(false), 5000);
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="flex flex-col pt-12 border-t border-border">
      <h2 className="text-[4rem] sm:text-[5rem] lg:text-[7rem] font-black font-sora leading-[0.9] tracking-tighter uppercase mb-20 text-center">
        <span className="block text-white">Let's Work</span>
        <span className="block text-[#333333]">Together</span>
      </h2>

      <div className="max-w-xl mx-auto w-full">
        <form className="flex flex-col gap-6" onSubmit={handleSend}>
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name *"
              className="flex-1 bg-transparent border-b border-[#333333] pb-4 px-2 text-white placeholder-muted focus:outline-none focus:border-primary transition-colors text-lg"
              required
              disabled={isLoading}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email *"
              className="flex-1 bg-transparent border-b border-[#333333] pb-4 px-2 text-white placeholder-muted focus:outline-none focus:border-primary transition-colors text-lg"
              required
              disabled={isLoading}
            />
          </div>
          
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-[#333333] pb-4 px-2 text-white placeholder-muted focus:outline-none focus:border-primary transition-colors text-lg mt-4 appearance-none cursor-pointer"
            disabled={isLoading}
          >
            <option value="" disabled className="text-black">Project Budget (Optional)</option>
            <option value="$50 - $200" className="text-black">$50 - $200</option>
            <option value="$200 - $500" className="text-black">$200 - $500</option>
            <option value="$500 - $1000" className="text-black">$500 - $1000</option>
            <option value="$1000 to above" className="text-black">$1000+ to above</option>
          </select>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            rows={4}
            className="w-full bg-transparent border-b border-[#333333] pb-4 px-2 text-white placeholder-muted focus:outline-none focus:border-primary transition-colors text-lg mt-4 resize-none"
            required
            disabled={isLoading}
          />

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <button 
            type="submit" 
            disabled={isLoading}
            className="bg-primary text-white font-bold text-lg uppercase tracking-widest py-6 rounded-full mt-8 hover:bg-[#e64a2e] transition-colors w-full disabled:opacity-50"
          >
            {isLoading ? "Sending..." : isSent ? "Message Sent Successfully!" : "Send Message"}
          </button>
        </form>
      </div>

      {/* Footer minimal */}
      <footer className="mt-32 pt-8 border-t border-[#222222] flex flex-col sm:flex-row justify-between items-center text-muted font-medium text-sm gap-4 pb-12">
        <p>© {new Date().getFullYear()} Sikandar Abbas. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://github.com/Sikandar-7" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
            <Github size={20} /> <span className="hidden sm:inline">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/sikandar-abbas-572b04287" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
            <Linkedin size={20} /> <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a href="mailto:sikandar8sa@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
            <Mail size={20} /> <span className="hidden sm:inline">Email</span>
          </a>
        </div>
      </footer>
    </section>
  );
}
