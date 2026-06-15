// Premium Tecnico EPC Services.tsx
// React + TypeScript + Tailwind CSS + Framer Motion + Lucide Icons

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Leaf, 
  ShieldCheck, 
  Building2, 
  Factory, 
  TrendingUp, 
  CheckCircle2, 
  HelpCircle,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Services() {
  const [activeTab, setActiveTab] = useState<"enterprise" | "facility" | "private">("enterprise");

  const enterprisePrograms = [
    "Prepare a gap analysis of current sustainability plans",
    "Assist during rating agency score updates",
    "Optimize ESG rankings through reporting and program development",
    "Review ESG score reports and metrics from rating agencies",
    "Develop peer groups for industry benchmarking",
    "Provide engineering solutions for environmental programs",
    "Provide lifecycle project management & startup commissioning support"
  ];

  const facilityPrograms = [
    "Develop greenhouse gas (GHG) reporting programs matching regulatory rules",
    "Assess Scope 1 and Scope 2 emissions at corporate and field levels",
    "Determine clear facility optimization opportunities to reduce energy consumption",
    "Implement target configurations for flare reduction",
    "Deploy advanced pipeline and facility leak detection mechanisms",
    "Integrate next-gen industrial site safety and water stewardship plans",
  ];

  const privatePrograms = [
    "Review existing legacy frameworks and deliver improvement compliance roadmaps",
    "Isolate data fields required for transparent reporting as a public corporation",
    "Perform extensive mock gap analysis prior to official regulatory auditing windows",
    "Conduct precise peer group analysis to structure competitive market positioning",
    "Liaise with ranking entities to draft preliminary mock ESG score reports"
  ];

  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased selection:bg-[#0B6C98] selection:text-white scroll-smooth">
      
      {/* HEADER NAVBAR */}
      <Header/>

      {/* MODERN SPLIT HERO HERO SECTION */}
      <section id="home" className="relative h-[65vh] min-h-[500px] w-full overflow-hidden bg-slate-950 flex items-end pb-16">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center origin-bottom pointer-events-none filter brightness-75 contrast-[1.05]"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=1800')` }}
        />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(rgba(14,165,233,0.12)_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-95"></div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/20 px-3 py-1.5 rounded-xl text-[10px] font-bold text-sky-300 uppercase tracking-widest shadow-inner">
              <Sparkles size={11} className="text-sky-400 animate-pulse" />
              Strategic Optimization Framework
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Sustainability <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-[#0B6C98] bg-clip-text text-transparent">Consulting Matrix</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* VALUE CREATION SECTION */}
      <section className="py-28 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center relative border-b border-slate-200/50">
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-extrabold tracking-widest text-[#0B6C98] uppercase bg-sky-50 px-3 py-1.5 rounded-md inline-block">
              Risk Mitigation
            </span>
            <p className="text-sm font-bold text-sky-700 uppercase tracking-wider">Managing ESG Risks</p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-none">
              Creating Sustainable Value
            </h2>
            <div className="h-1.5 w-14 bg-gradient-to-r from-[#0B6C98] to-sky-400 rounded-full"></div>
          </div>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            Tecnico EPC is uniquely positioned to maximize your corporate Sustainability and ESG pathways, combining over <span className="text-slate-900 font-extrabold">40 years of engineering consultancy</span> with high-compliance tactical blueprints across heavy infrastructure setups.
          </p>
        </div>

        <div className="lg:col-span-6 relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#0B6C98]/10 to-sky-400/10 rounded-[2.5rem] blur-lg transition-transform duration-500 group-hover:scale-105"></div>
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] bg-slate-950 border border-slate-800">
            <img 
              src="/image9.png" 
              alt="Sustainable Grid System Architecture" 
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10">
              <span className="text-[10px] uppercase font-bold tracking-widest text-sky-400 block mb-1">Industrial Benchmark</span>
              <p className="text-white text-sm font-bold">Comprehensive ESG Operational Integration Matrix</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PROBLEM RESOLUTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
            Enhancing ESG Performance by Solving The Right Problems
          </h2>
          <div className="w-16 h-1 bg-[#0B6C98] mx-auto rounded-full" />
          <div className="grid sm:grid-cols-3 gap-6 pt-8 text-left">
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-2">
              <div className="text-xs font-bold text-[#0B6C98]">01 / INTEGRITY</div>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">Working for the common good is strategic business acceleration, protecting asset valuation metrics.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-2">
              <div className="text-xs font-bold text-[#0B6C98]">02 / TIMING</div>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">Meaningful, lasting performance upgrades rely entirely on knowing the exact execution plays to make and when.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-2">
              <div className="text-xs font-bold text-[#0B6C98]">03 / ANALYTICS</div>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">Our teams dissect physical site fields, benchmark metrics against global peers, and output clear field plans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE ESG PROGRAM TABS */}
      <section className="py-32 bg-slate-950 text-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0B6C98]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Sticky Sidebar Navigation */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-black tracking-[0.2em] text-sky-400 uppercase bg-sky-950/60 border border-sky-800/50 px-3 py-1.5 rounded-md inline-block">
                  Target Deployments
                </span>
                <h2 className="text-4xl font-black tracking-tight text-white leading-none">
                  How We Boost <br />
                  <span className="bg-gradient-to-r from-white via-slate-200 to-[#0B6C98] bg-clip-text text-transparent">Your Performance</span>
                </h2>
              </div>
              
              {/* Vertical Switch Options */}
              <div className="flex flex-col gap-3 pt-4">
                {[
                  { id: "enterprise", label: "Enterprise-Wide Programs", icon: <Building2 size={16} /> },
                  { id: "facility", label: "Facility-Based Programs", icon: <Factory size={16} /> },
                  { id: "private", label: "Private Firms with Public Plans", icon: <TrendingUp size={16} /> }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-3 px-5 py-4 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 border text-left ${
                      activeTab === tab.id
                        ? "bg-[#0B6C98] border-transparent text-white shadow-xl shadow-[#0B6C98]/10"
                        : "bg-slate-900/50 border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700"
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Features List Container */}
            <div className="lg:col-span-8 w-full bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <div className="grid gap-3">
                {activeTab === "enterprise" && enterprisePrograms.map((feat, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 bg-slate-950/40 border border-slate-900 rounded-xl group hover:border-sky-500/20 transition-colors">
                    <CheckCircle2 className="text-[#0B6C98] mt-0.5 flex-shrink-0" size={18} />
                    <p className="text-slate-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors">{feat}</p>
                  </div>
                ))}
                {activeTab === "facility" && facilityPrograms.map((feat, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 bg-slate-950/40 border border-slate-900 rounded-xl group hover:border-emerald-500/20 transition-colors">
                    <CheckCircle2 className="text-emerald-400 mt-0.5 flex-shrink-0" size={18} />
                    <p className="text-slate-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors">{feat}</p>
                  </div>
                ))}
                {activeTab === "private" && privatePrograms.map((feat, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 bg-slate-950/40 border border-slate-900 rounded-xl group hover:border-amber-500/20 transition-colors">
                    <CheckCircle2 className="text-amber-400 mt-0.5 flex-shrink-0" size={18} />
                    <div className="space-y-1">
                      <p className="text-slate-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors">{feat}</p>
                      {i === 0 && <span className="text-[10px] text-amber-400/80 block font-bold tracking-widest uppercase">Essential pre-IPO capital alignment positioning</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRIVATE COMPANIES STRATEGY ROW */}
      <section className="py-28 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-extrabold tracking-widest text-amber-600 uppercase bg-amber-50 px-3 py-1.5 rounded-md inline-block">
              Pre-Market Asset Preparation
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
              For Private Companies <br />With Public Plans
            </h2>
          </div>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            If your firm is currently working toward an initial public offering (IPO), or actively sourcing strategic private institutional investors, the time to solidify audited ESG records is right now. Tecnico EPC coordinates every critical gap metrics milestone to assure you reach optimal asset valuation thresholds.
          </p>
        </div>
        <div className="lg:col-span-5 relative group">
          <div className="absolute -inset-4 bg-slate-200 rounded-[2.5rem] blur-xl opacity-50 transition-all group-hover:opacity-80" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-[16/11] bg-slate-900">
            <img 
              src="/image10.png" 
              alt="Corporate Analytics Review Sessions" 
              className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* KNOWLEDGE REPOSITORY MODULE */}
      <section className="bg-slate-100 py-28 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Learn More About <br />E, S, and G
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
              Environmental, Social, and Governance factors operate as the baseline keys to evaluating long-term operational sustainability. 
            </p>
          </div>

          <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-3xl space-y-4 shadow-xl shadow-slate-900/10">
            {[
              { title: "Environmental Factor", desc: "Carbon optimization, flare parameters, fugitive leak tracing, water stewardship metrics.", icon: <Leaf className="text-emerald-400" size={18} /> },
              { title: "Social Factor", desc: "Site infrastructure safety standard alignment, workforce balance, surrounding neighborhood stewardship.", icon: <Sparkles className="text-sky-400" size={18} /> },
              { title: "Governance Factor", desc: "Rigorous technical parameter auditing, full policy transparency frameworks, risk matrices.", icon: <ShieldCheck className="text-amber-400" size={18} /> }
            ].map((factor, i) => (
              <div key={i} className="bg-slate-900 p-5 rounded-2xl border border-slate-800/80 flex items-center justify-between group cursor-pointer hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800">{factor.icon}</div>
                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-base">{factor.title}</h4>
                    <p className="text-xs text-slate-400 font-medium">{factor.desc}</p>
                  </div>
                </div>
                <ChevronRight className="text-slate-600 group-hover:text-white transform group-hover:translate-x-0.5 transition-all" size={16} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL SUPPORT INTERMEDIATE */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <HelpCircle size={32} className="text-[#0B6C98] mx-auto mb-4 opacity-90" />
          <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">A Full-Service Resource for Sustainability Support</h3>
          <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Tecnico EPC is uniquely qualified to steer your corporate Environmental framework, combining years of execution metrics with highly disciplined engineering talent.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION ACCENT BLOCK */}
      <section className="bg-gradient-to-r from-[#0B6C98] to-sky-800 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Ready To Optimize Your Global ESG Performance?
          </h2>
          <button className="bg-white text-[#0B6C98] hover:bg-slate-50 border border-transparent font-black text-sm px-8 py-4 rounded-xl inline-flex items-center gap-3 transition-all transform hover:-translate-y-0.5 shadow-xl shadow-black/10 group">
            Initiate Consultation 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>

      {/* HIGHLY-ATTRACTIVE CITY TRAFFIC FOOTER */}
      <Footer/>

    </div>
  );
}