// Premium Tecnico EPC Contact.tsx
// React + TypeScript + Tailwind CSS + Framer Motion + Lucide Icons

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles, Mail, ChevronRight } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased selection:bg-[#0B6C98] selection:text-white scroll-smooth">
      
      {/* HEADER NAVBAR */}
      <Header/>

      {/* DARK HERO BANNER */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(14,165,233,0.08)_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-70" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/20 px-3 py-1 rounded-xl text-[10px] font-bold text-sky-300 uppercase tracking-widest">
            <Sparkles size={11} className="text-sky-400 animate-pulse" />
            Global Operations Desk
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Let's Work Together</h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md font-medium">
            Reach out through our direct pipeline channel or drop your parameters via the consultation dashboard below.
          </p>
        </div>
      </section>

      {/* CORE SPLIT HUB: EMAIL CONTEXT CARD + FORM LAYOUT */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-12 items-start relative">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(11,108,152,0.03)_2px,transparent_2px)] [background-size:24px_24px] pointer-events-none" />

        {/* LEFT COLUMN: DIRECT INBOUND CHANNEL CONNECTORS */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0B6C98]/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-105" />
            
            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-[#0B6C98]">
                <Mail size={18} />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest block">Direct Inbox Routing</span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">Reach us via:</h3>
              </div>
              <a 
                href="mailto:tecnico@gmail.com" 
                className="inline-flex items-center gap-2 text-white hover:text-sky-400 font-extrabold text-base sm:text-lg tracking-wide border-b border-dashed border-slate-700 hover:border-sky-400 pb-0.5 transition-colors group/link"
              >
                tecnico@gmail.com
                <ChevronRight size={16} className="text-slate-500 group-hover/link:text-sky-400 transform group-hover/link:translate-x-0.5 transition-all" />
              </a>
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed pt-2">
                All external inquiries routed to this point are systematically logged and cataloged under project alignment frameworks.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: MODERNIZED REGISTRATION CONTAINER */}
        <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-100/50 relative overflow-hidden">
          
          {isSubmitted && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-white/95 z-20 flex flex-col items-center justify-center p-6 text-center space-y-3"
            >
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 border border-emerald-100 shadow-sm">
                <Mail size={20} />
              </div>
              <h3 className="text-lg font-black text-slate-900">Transmission Successful</h3>
              <p className="text-xs text-slate-500 font-medium max-w-xs">
                Your parameters have been passed over to our internal management stack.
              </p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">First Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your first name"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs sm:text-sm focus:bg-white focus:border-[#0B6C98] focus:ring-4 focus:ring-[#0B6C98]/5 focus:outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Last Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your last name"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs sm:text-sm focus:bg-white focus:border-[#0B6C98] focus:ring-4 focus:ring-[#0B6C98]/5 focus:outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs sm:text-sm focus:bg-white focus:border-[#0B6C98] focus:ring-4 focus:ring-[#0B6C98]/5 focus:outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Message Parameters</label>
              <textarea
                rows={4}
                required
                placeholder="Write your message..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs sm:text-sm focus:bg-white focus:border-[#0B6C98] focus:ring-4 focus:ring-[#0B6C98]/5 focus:outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0B6C98] hover:bg-sky-800 text-white font-black text-xs uppercase tracking-wider py-4 rounded-xl inline-flex items-center justify-center gap-2 shadow-lg shadow-[#0B6C98]/10 hover:shadow-xl transition-all transform hover:-translate-y-0.5 group cursor-pointer"
            >
              Send Message
              <Send size={13} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </form>
        </div>
      </section>

      {/* HIGHLY-ATTRACTIVE CITY TRAFFIC FOOTER */}
    <Footer/>

    </div>
  );
}