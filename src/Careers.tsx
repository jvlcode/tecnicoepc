// Premium Tecnico EPC Careers.tsx
// React + TypeScript + Tailwind CSS + Framer Motion + Lucide Icons

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, FileText, Mail, Briefcase, Info } from "lucide-react";
import Header from "./components/Header";

export default function Careers() {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased selection:bg-[#0B6C98] selection:text-white scroll-smooth min-h-screen flex flex-col justify-between">
      
      {/* HEADER NAVBAR */}
      <Header />

      {/* INDUSTRIAL CANVASS HERO ARCHITECTURE */}
      <section className="relative h-[45vh] min-h-[320px] w-full overflow-hidden bg-slate-950 flex items-center justify-start pb-6">
        {/* Cinematic Background Canvas Layer matching Home.tsx */}
        <div className="absolute inset-0 z-0 bg-cover bg-center origin-bottom pointer-events-none filter brightness-[0.75] contrast-[1.08] saturate-[1.2]" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1600')" }}
        />
        
        {/* Geometric Blueprints Grid Lattice */}
        <div className="absolute inset-0 z-10 bg-[radial-gradient(rgba(14,165,233,0.15)_1.5px,transparent_1.5px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)] pointer-events-none" />
        
        {/* Light Shield Dark Shadow Gradient Coatings */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-95"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-transparent opacity-90"></div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-20 mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/20 px-3 py-1.5 rounded-xl text-[10px] font-bold text-sky-300 uppercase tracking-widest shadow-inner">
              <Sparkles size={11} className="text-sky-400 animate-pulse" />
              Talent & Culture Matrix
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-none uppercase">
              Careers <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-[#0B6C98] bg-clip-text text-transparent">With Us</span>
            </h1>
            
            <div className="h-1.5 w-14 bg-gradient-to-r from-[#0B6C98] to-sky-400 rounded-full"></div>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
              Engineered for brilliance. Build global structural blueprints and join teams executing complex engineering pipelines for cross-border infrastructure assets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE VACANCIES CONTROL CONTAINER */}
      <main className="py-24 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 flex-grow items-start">
        
        {/* Left Column: Job Board Status Panel (Spans 7 Columns) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="space-y-2">
            <span className="text-xs font-extrabold tracking-widest text-[#0B6C98] uppercase bg-sky-50 px-3 py-1.5 rounded-md inline-block">
              Open Positions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 uppercase">
              Job Openings
            </h2>
          </div>

          {/* EMPTY STATE CONSOLE WINDOW */}
          <div className="bg-white border border-slate-200/80 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-slate-100/70 relative overflow-hidden group">
            {/* Ambient Border Glow Tracker */}
            <div className="absolute inset-0 border border-sky-500/0 group-hover:border-sky-500/10 rounded-[2rem] transition-colors duration-500 pointer-events-none" />
            
            <div className="flex flex-col items-center text-center space-y-6 max-w-md mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shadow-inner group-hover:scale-105 group-hover:bg-sky-50 group-hover:text-[#0B6C98] transition-all duration-300">
                <Briefcase size={28} strokeWidth={1.5} />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-wide">
                  Currently No Jobs Available!
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  Our talent metrics are fully assigned at this lifecycle segment. We are not processing active project requisitions at this exact moment.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50/60 border border-amber-200/60 rounded-xl text-amber-800 text-xs font-semibold">
                <Info size={14} className="flex-shrink-0" />
                Pipeline status updated daily.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Spontaneous Application Processing Hub (Spans 5 Columns) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-5 lg:sticky lg:top-28 space-y-6"
        >
          <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-6 sm:p-8 text-white relative overflow-hidden shadow-2xl shadow-slate-950/20">
            {/* High-Tech Blueprint Aesthetic Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30 pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0B6C98]/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#0B6C98]/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <FileText size={18} />
                </div>
                <h3 className="text-xl font-black tracking-tight text-white uppercase">
                  Spontaneous Application
                </h3>
                <p className="text-xs font-medium text-slate-400 leading-relaxed">
                  Are you an expert in Basic & Detailed Engineering, Procurement Logistics, or Enterprise Asset Management (EAM)? Submit your portfolio to our global parsing matrix.
                </p>
              </div>

              {/* Informative Action Card List */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 bg-slate-950/50 border border-slate-800 p-4 rounded-xl">
                  <div className="p-1.5 rounded-lg bg-slate-900 text-slate-400 font-mono text-[10px] font-bold">01</div>
                  <p className="text-xs font-semibold text-slate-300">Attach complete engineering design portfolio summaries alongside your industrial reference log.</p>
                </div>
                <div className="flex items-start gap-3 bg-slate-950/50 border border-slate-800 p-4 rounded-xl">
                  <div className="p-1.5 rounded-lg bg-slate-900 text-slate-400 font-mono text-[10px] font-bold">02</div>
                  <p className="text-xs font-semibold text-slate-300">Format curriculum datasets in clear PDF structures to clear compliance checking algorithms.</p>
                </div>
              </div>

              {/* Direct Mail System Trigger */}
              <div className="pt-4">
                <a
                  href="mailto:careers@tecnicoepc.com?subject=Spontaneous%20Engineering%20Application%20-%20Tecnico%20EPC"
                  className="w-full inline-flex justify-center bg-gradient-to-r from-[#0B6C98] to-sky-600 hover:from-sky-600 hover:to-[#0B6C98] border border-sky-400/20 text-white px-6 py-4 rounded-xl text-xs font-extrabold items-center gap-3 group shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 uppercase tracking-wider"
                >
                  <Mail size={14} />
                  <span>Transmit Application CV</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </main>

      {/* FOOTER ANCHOR BLOCK */}
      <footer className="bg-slate-950 border-t border-slate-900 overflow-hidden relative">
        {/* Realistic asphalt/divider structural design replication from Home.tsx */}
        <div className="w-full h-10 bg-slate-900 border-t border-slate-800 relative flex flex-col justify-center shadow-[inset_0_10px_20px_rgba(0,0,0,0.6)]">
          <div className="w-full border-t-2 border-dashed border-yellow-500/20 h-0"></div>
        </div>

        <div className="bg-slate-950 text-slate-500 text-xs py-6 relative z-40 border-t border-slate-900/60">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="font-medium text-slate-400 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Tecnico EPC Projects Global Pvt. Limited. All Rights Reserved.
            </div>
            <div className="flex gap-6 text-slate-500 font-bold tracking-wide">
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Charter</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}