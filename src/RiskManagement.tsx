// RiskManagementPage.tsx
// React + TypeScript + Tailwind CSS + Framer Motion + Lucide Icons

import { motion } from "framer-motion";
import { 
  Sparkles, 
  CheckCircle2, 
  Activity, 
  FileCheck, 
  ArrowRight,
  Settings,
  ClipboardList
} from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const leftServicesList = [
  "HSE program development and implementation",
  "PSM and RMP support",
  "Assessment and gap analysis",
  "Training needs analysis",
  "On-site safety support",
  "Emergency response exercise facilitation",
  "Pre/post-acquisition due diligence",
  "PHA revalidation",
  "PHA, HAZID, HAZOP facilitation",
  "Industry and corporate initiatives",
];

const rightServicesList = [
  "Procedures, publications, and training",
  "Technical training programs",
  "Skills progression program development",
  "Incident investigation",
  "Ongoing support for unstaffed positions",
  "Regulatory expertise",
  "Content maintenance & document control",
  "Objective performance monitoring",
];

const implementationSteps = [
  "Program document development",
  "Gap analysis of facilities and organizations",
  "Implementation plan and schedule",
  "Presentation and training",
  "Development of program content (P&IDs, PFDs, SFDs, SSS)",
  "Procedures and hazard analyses",
  "Design reviews of safety systems",
  "Content maintenance after implementation",
  "Management of Change (MOC) program",
  "Periodic internal audits and revalidation",
];

export default function RiskManagementPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-[#0B6C98] selection:text-white">
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[550px] bg-slate-950 flex items-center overflow-hidden">
        {/* Background Image utilizing exact asset paths matching design blueprint tokens */}
        <img
          src={import.meta.env.BASE_URL + "image20.png"}
          alt="Risk Management"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.4] contrast-[1.05]"
        />
        
        {/* Modern Graphic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(14,165,233,0.15)_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/20 px-3 py-1.5 rounded-xl text-[10px] font-bold text-sky-400 uppercase tracking-widest shadow-inner">
              <Sparkles size={11} className="animate-pulse" />
              Strategic Optimization Control
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Risk <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-[#0B6C98] bg-clip-text text-transparent">Management</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-28 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-extrabold tracking-[0.2em] text-[#0B6C98] uppercase bg-sky-50 px-3 py-1.5 rounded-md inline-block">
              Operations Architecture
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 mt-2">
              We help you achieve safety and compliance
            </h2>
            <div className="h-1 w-12 bg-[#0B6C98] rounded-full mt-3" />
          </div>
          
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            Managing Corporate Enterprise Risk — ensuring your organization meets safety standards while protecting people, assets, and the environment.
          </p>
        </div>

        {/* Right Positioned Image Block with Modern Frame Accent */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#0B6C98]/10 to-sky-400/10 rounded-3xl blur-lg transition-transform duration-500 group-hover:scale-[1.02]"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white aspect-[4/3]">
            <img
              src={import.meta.env.BASE_URL + "image19.png"}
              alt="Safety and Compliance"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
            />
          </div>
        </div>
      </section>

   

      {/* ================= SERVICES SECTION ================= */}
      <section className="bg-white border-y border-slate-200/60 py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          
          <div className="max-w-4xl space-y-4 mb-16">
            <span className="text-xs font-extrabold tracking-[0.2em] text-sky-600 uppercase">
              System Integration Spectrum
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* COLUMN 1: LEFT SERVICES LIST */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-inner">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0B6C98] shadow-sm">
                  <Settings size={18} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">HSE & Analysis</h3>
              </div>
              
              <div className="space-y-3">
                {leftServicesList.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.02 }}
                    className="flex items-start gap-3 text-slate-600 group"
                  >
                    <CheckCircle2 size={16} className="text-[#0B6C98] mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base font-semibold group-hover:text-slate-900 transition-colors">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* COLUMN 2: RIGHT SERVICES LIST */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-inner">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-600 shadow-sm">
                  <Activity size={18} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">Operations & Oversight</h3>
              </div>
              
              <div className="space-y-3">
                {rightServicesList.map((support, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.02 }}
                    className="flex items-start gap-3 text-slate-600 group"
                  >
                    <div className="w-4 h-4 rounded-full bg-sky-100 flex items-center justify-center mt-1 flex-shrink-0">
                      <ArrowRight size={10} className="text-sky-700" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold group-hover:text-slate-900 transition-colors">
                      {support}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= EXTRA IMPLEMENTATION SECTION ================= */}
      <section className="bg-slate-50 py-28 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="max-w-3xl space-y-3 mb-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shadow-sm">
                <ClipboardList size={18} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Thorough, Effective Implementation
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {implementationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="bg-white border border-slate-200/60 rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-all group"
              >
                <div className="w-5 h-5 rounded-md bg-emerald-50 flex items-center justify-center mt-0.5 flex-shrink-0 text-emerald-600">
                  <FileCheck size={13} />
                </div>
                <p className="text-slate-700 font-semibold text-sm sm:text-base leading-snug group-hover:text-slate-900 transition-colors">
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HIGH-END FOOTER ================= */}
      <Footer />
    </div>
  );
}