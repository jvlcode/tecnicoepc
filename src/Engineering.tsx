// Engineering.tsx
// React + TypeScript + Tailwind CSS + Framer Motion + Lucide Icons

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, ArrowUpRight, HelpCircle } from "lucide-react";
import Footer from "./components/Footer";
import Header from "./components/Header";

const services = [
  "Conceptual design",
  "Full field development planning",
  "FEED studies",
  "Permit support services",
  "Detailed engineering",
  "Construction/fabrication management",
  "Start-up and commissioning",
  "Production optimization analysis",
  "Decommissioning, abandonment and removal engineering",
  "Procurement assistance",
  "Project controls and business optimization support",
  "Complete project cost tracking",
  "Owner's engineering support",
  "Equipment and fabrication inspection",
  "Budgetary project planning estimates",
];

export default function Engineering() {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased selection:bg-[#0B6C98] selection:text-white min-h-screen">
        <Header/>
      {/* ================= INTRO ================= */}
      <section className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16 pt-24 pb-20">
        <div className="max-w-5xl space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#0B6C98]/10 border border-[#0B6C98]/20 px-3 py-1.5 rounded-xl text-[10px] font-bold text-[#0B6C98] uppercase tracking-widest shadow-inner"
          >
            <Sparkles size={12} className="animate-pulse text-[#0B6C98]" />
            Efficiency & Optimization Architecture
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight"
          >
            How The Right Technical Solution Saves You <br />
            <span className="bg-gradient-to-r from-[#0B6C98] via-sky-600 to-cyan-700 bg-clip-text text-transparent">
              Time, Money, and Headaches
            </span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl space-y-6 text-slate-600 text-base sm:text-lg font-medium leading-relaxed"
          >
            <p>
              Our integrated team of engineers, designers, and project managers work collaboratively to complete 
              your project safely, on time, and within budget. We aggressively cross-train our engineers and 
              designers to reduce the overall number of people required to execute your project, resulting in 
              fewer man-hours and faster project execution.
            </p>
            <p className="text-slate-500 text-sm sm:text-base font-normal">
              Tecnico EPC has the ability to support your project from beginning to end for both greenfield 
              installations and existing asset optimization configurations.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="px-6 sm:px-8 lg:px-16 pb-24 max-w-[1800px] mx-auto">
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-200/50 overflow-hidden">
          <div className="grid lg:grid-cols-12 items-stretch">

            {/* LEFT IMAGE */}
            <div className="lg:col-span-5 relative min-h-[450px] lg:min-h-[750px] bg-slate-950 group overflow-hidden">
              <img
                src={import.meta.env.BASE_URL + "image15.png"}
                alt="Engineering Blueprint Draft Layout"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 contrast-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10">
                <span className="text-[10px] uppercase font-bold tracking-widest text-sky-400 block mb-1">Capabilities Guide</span>
                <p className="text-white text-xs sm:text-sm font-bold">Comprehensive engineering spectrum engineered for rigorous operational compliance metrics.</p>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-slate-50/50">
              <div className="space-y-2 mb-10">
                <span className="text-[11px] font-black tracking-[0.2em] text-[#0B6C98] uppercase">Scope of Work</span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Services Portfolio
                </h2>
                <div className="h-1 w-12 bg-[#0B6C98] rounded-full mt-2" />
              </div>

              <div className="grid sm:grid-cols-1 gap-3.5">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: index * 0.02, duration: 0.4 }}
                    className="flex items-start gap-4 p-3 bg-white border border-slate-200/60 rounded-xl hover:border-[#0B6C98]/30 transition-colors shadow-sm group"
                  >
                    <div className="w-5 h-5 rounded-md bg-sky-50 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:bg-[#0B6C98]/10 transition-colors">
                      <CheckCircle2 className="text-[#0B6C98]" size={14} />
                    </div>
                    <div className="flex-1 flex items-center justify-between gap-2">
                      <p className="text-slate-700 text-sm sm:text-base font-semibold group-hover:text-slate-900 transition-colors">
                        {service}
                      </p>
                      <span className="text-[10px] text-slate-400 font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:inline">
                        ID // 0{index + 1}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= ENGINEERING BANNER ================= */}
      <section className="relative h-[450px] sm:h-[550px] overflow-hidden bg-slate-950 flex items-center justify-center">
        {/* BACKGROUND IMAGE */}
        <img
          src="/images/engineering-banner.jpg"
          alt="Heavy Industrial Engineering Banner Infrastructure"
          className="absolute inset-0 w-full h-full object-cover filter brightness-50 contrast-[1.05]"
        />

        {/* MODERN OVERLAYS */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950/50" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(14,165,233,0.15)_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

        {/* TITLE */}
        <div className="relative z-10 text-center px-6">
          <motion.h2
            initial={{ opacity: 0, scale: 0.93 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-white text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter uppercase select-none filter drop-shadow-2xl"
          >
            Engineering
          </motion.h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#0B6C98] to-cyan-400 mx-auto mt-6 rounded-full" />
        </div>
      </section>

      {/* ================= SOLVE RIGHT PROBLEMS ================= */}
      <section className="px-6 sm:px-8 lg:px-16 py-28 max-w-[1800px] mx-auto">
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-200/50 overflow-hidden">
          <div className="grid lg:grid-cols-12 items-center">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-20 space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-extrabold tracking-[0.2em] text-[#0B6C98] uppercase bg-sky-50 px-3 py-1.5 rounded-md inline-block">
                  Core Mission Strategy
                </span>
                <p className="text-sm font-bold text-sky-700 tracking-wider uppercase mt-3">
                  We solve the right problems
                </p>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                Engineering The <br />
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-[#0B6C98] bg-clip-text text-transparent">Safest, Most Effective</span> <br />
                Outcome for Your Project
              </h2>
              
              <div className="h-1 w-16 bg-[#0B6C98] rounded-full" />
              
              <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed max-w-xl">
                By aligning analytical risk matrices with physical blueprint definitions, our engineering output guarantees lower overhead across complex deployment pipelines.
              </p>

              <div className="pt-4">
                <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl inline-flex items-center gap-2 transition-all shadow-md group">
                  Consultation Request
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="lg:col-span-6 relative h-[450px] lg:min-h-[650px] w-full self-stretch bg-slate-100">
              <img
                src={import.meta.env.BASE_URL + "image16.png"}
                alt="Industrial Engineering Team Collaboration Operations"
                className="absolute inset-0 w-full h-full object-cover filter brightness-95 contrast-[1.01]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent hidden lg:block" />
            </div>

          </div>
        </div>
      </section>

      {/* ================= BRAND TRUST SUB-FOOTER INTERMEDIATE ================= */}
      <section className="bg-slate-100 py-16 border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-3">
          <HelpCircle size={28} className="text-[#0B6C98] mx-auto opacity-80" />
          <h3 className="text-xl font-black text-slate-900 tracking-tight">Full Lifecycle Execution Framework</h3>
          <p className="text-slate-500 font-medium text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Tecnico EPC leverages over 40 years of precision engineering, capital budgeting parameters, and comprehensive construction management to safely guide industrial corporate assets.
          </p>
        </div>
      </section>
            
        <Footer/>
    </div>
  );
}