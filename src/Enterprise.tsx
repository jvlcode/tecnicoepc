// EnterpriseAssetPage.tsx
// React + TypeScript + Tailwind CSS + Framer Motion + Lucide Icons

import { motion } from "framer-motion";
import { 
  Settings, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles 
} from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const keyServices = [
  "Identify Asset Integrity tasks",
  "Identify regulatory requirements",
  "Conduct RCM/RBI and criticality studies",
  "Collect and structure equipment data",
  "Develop maintenance strategies and procedures",
  "Design reports and KPIs",
  "Optimize PM structure",
  "Recommend work efficiencies",
];

const systemSupport = [
  "CMMS selection and implementation",
  "RCM / RBI / CMP integration",
  "Data migration and implementation",
  "User support and training",
  "Support data management of change",
];

export default function EnterpriseAssetPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-[#0B6C98] selection:text-white">
      <Header/>
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[550px] bg-slate-950 flex items-center overflow-hidden">
        {/* Background Image with modern brightness and contrast treatments */}
        <img
          src={import.meta.env.BASE_URL + "image18.png"}
          alt="Enterprise Asset Management"
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
              Enterprise Asset <br />
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
              We solve the right problems
            </h2>
            <div className="h-1 w-12 bg-[#0B6C98] rounded-full mt-3" />
          </div>
          
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            Asset Integrity and Compliance Assurance — ensuring your complex plant operations 
            systematically meet regulatory requirements while aggressively optimizing performance output thresholds.
          </p>
        </div>

        {/* Right Positioned Image Block with Modern Frame Accent */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#0B6C98]/10 to-sky-400/10 rounded-3xl blur-lg transition-transform duration-500 group-hover:scale-[1.02]"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white aspect-[4/3]">
            <img
              src={import.meta.env.BASE_URL + "image17.png"}
              alt="Compliance Assurance Verification"
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
              Translating Mechanical Integrity <br className="hidden sm:inline" />
              into Maintenance Systems
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base max-w-3xl leading-relaxed">
              Tecnicoe helps clients meet strict plant and facility maintenance program 
              requirements to fundamentally improve production line efficiency and ensure absolute regional compliance safety markers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* COLUMN 1: KEY SERVICES */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-inner">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0B6C98] shadow-sm">
                  <Settings size={18} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">Key Services</h3>
              </div>
              
              <div className="space-y-3">
                {keyServices.map((service, index) => (
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

            {/* COLUMN 2: SYSTEM SUPPORT */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-inner">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-600 shadow-sm">
                  <Database size={18} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">System Support</h3>
              </div>
              
              <div className="space-y-3">
                {systemSupport.map((support, index) => (
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

      {/* ================= HIGH-END FOOTER ================= */}
     <Footer/>

    </div>
  );
}