// EnvironmentalFactors.tsx
// React + TypeScript + Tailwind CSS + Framer Motion + Lucide Icons

import { motion } from "framer-motion";
import {
  Leaf,
  Trees,
  Recycle,
  Globe2,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  HelpCircle
} from "lucide-react";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function EnvironmentalFactors() {
  const [activeTab, setActiveTab] = useState<"climate" | "natural" | "pollution" | "opportunity">("climate");

  const climateItems = [
    "Reducing greenhouse gases (GHG)",
    "Decreasing carbon emissions and fossil fuel use",
    "Renewable energy solutions",
    "Improving carbon efficiency",
    "Environmental impact financing",
    "Climate change vulnerability",
  ];

  const naturalItems = [
    "Conserving water resources",
    "Responsible sourcing",
    "Protecting biodiversity",
    "Eliminating deforestation",
    "Responsible land use",
  ];

  const pollutionItems = [
    "Reducing solid waste",
    "Reducing toxic emissions",
    "Water pollution reduction",
    "Packaging waste reduction",
    "Electronic waste management",
  ];

  const opportunityItems = [
    "Clean technology adoption",
    "Green building practices",
    "Improving energy efficiency",
  ];

  const businessImpacts = [
    {
      title: "Investment",
      icon: <TrendingUp className="text-[#0B6C98]" size={18} />,
      description: "Environmental performance helps investors assess long-term risks and sustainability commitments.",
    },
    {
      title: "Opportunity Analysis",
      icon: <Globe2 className="text-sky-400" size={18} />,
      description: "Environmental factors influence mergers, acquisitions, expansion projects, and new ventures.",
    },
    {
      title: "Risk Avoidance",
      icon: <ShieldCheck className="text-amber-400" size={18} />,
      description: "Companies reduce exposure to regulatory penalties, environmental incidents, and reputational damage.",
    },
  ];

  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased selection:bg-[#0B6C98] selection:text-white scroll-smooth">
      
      {/* HEADER NAVBAR */}
      <Header />

      {/* MODERN SPLIT HERO SECTION */}
      <section id="home" className="relative h-[65vh] min-h-[500px] w-full overflow-hidden bg-slate-950 flex items-end pb-16">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center origin-bottom pointer-events-none filter brightness-75 contrast-[1.05]"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL + "image12.png"})` }}
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
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-400/20 px-3 py-1.5 rounded-xl text-[10px] font-bold text-emerald-300 uppercase tracking-widest shadow-inner">
              <Sparkles size={11} className="text-emerald-400 animate-pulse" />
              ESG Scope & Impact
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Understanding ESG: <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-[#0B6C98] bg-clip-text text-transparent">Environmental Factors</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* VALUE CREATION SECTION (OLD SUMMARY) */}
      <section className="py-28 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center relative border-b border-slate-200/50">
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-extrabold tracking-widest text-[#0B6C98] uppercase bg-sky-50 px-3 py-1.5 rounded-md inline-block">
              Stewardship Matrix
            </span>
            <p className="text-sm font-bold text-sky-700 uppercase tracking-wider">Nature & Ecosystem Integration</p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-none">
              Creating Sustainable Value
            </h2>
            <div className="h-1.5 w-14 bg-gradient-to-r from-[#0B6C98] to-emerald-400 rounded-full"></div>
          </div>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            The environmental pillar focuses on how a corporate entity acts as an active steward of nature. It evaluates how operations scale resource consumption and manage real impact markers across your entire infrastructure setup.
          </p>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Responsible and effective oversight is no longer purely a regulatory obligation; it is an increasingly crucial mechanism for protecting and maximizing long-term enterprise valuation metrics.
          </p>
        </div>

        <div className="lg:col-span-6 relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#0B6C98]/10 to-emerald-400/10 rounded-[2.5rem] blur-lg transition-transform duration-500 group-hover:scale-105"></div>
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] bg-slate-950 border border-slate-800">
            <img 
              src={`${import.meta.env.BASE_URL + "image9.png"}` }
              alt="Sustainable Infrastructure Asset Execution" 
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10">
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 block mb-1">Ecosystem Audit</span>
              <p className="text-white text-sm font-bold">Operational Impact Mapping Across Complete Value Chains</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE ESG THEME TABS */}
      <section className="py-32 bg-slate-950 text-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Sticky Sidebar Navigation */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-black tracking-[0.2em] text-emerald-400 uppercase bg-emerald-950/60 border border-emerald-800/50 px-3 py-1.5 rounded-md inline-block">
                  Environmental Themes
                </span>
                <h2 className="text-4xl font-black tracking-tight text-white leading-none">
                  Core Framework <br />
                  <span className="bg-gradient-to-r from-white via-slate-200 to-[#0B6C98] bg-clip-text text-transparent">Classifications</span>
                </h2>
              </div>
              
              {/* Vertical Switch Options */}
              <div className="flex flex-col gap-3 pt-4">
                {[
                  { id: "climate", label: "Climate Change Parameters", icon: <Globe2 size={16} /> },
                  { id: "natural", label: "Natural Resource Assets", icon: <Trees size={16} /> },
                  { id: "pollution", label: "Pollution & Waste Controls", icon: <Recycle size={16} /> },
                  { id: "opportunity", label: "Environmental Opportunities", icon: <Leaf size={16} /> }
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
                {activeTab === "climate" && climateItems.map((feat, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 bg-slate-950/40 border border-slate-900 rounded-xl group hover:border-sky-500/20 transition-colors">
                    <CheckCircle2 className="text-[#0B6C98] mt-0.5 flex-shrink-0" size={18} />
                    <p className="text-slate-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors">{feat}</p>
                  </div>
                ))}
                {activeTab === "natural" && naturalItems.map((feat, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 bg-slate-950/40 border border-slate-900 rounded-xl group hover:border-emerald-500/20 transition-colors">
                    <CheckCircle2 className="text-emerald-400 mt-0.5 flex-shrink-0" size={18} />
                    <p className="text-slate-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors">{feat}</p>
                  </div>
                ))}
                {activeTab === "pollution" && pollutionItems.map((feat, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 bg-slate-950/40 border border-slate-900 rounded-xl group hover:border-red-500/20 transition-colors">
                    <CheckCircle2 className="text-rose-400 mt-0.5 flex-shrink-0" size={18} />
                    <p className="text-slate-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors">{feat}</p>
                  </div>
                ))}
                {activeTab === "opportunity" && opportunityItems.map((feat, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 bg-slate-950/40 border border-slate-900 rounded-xl group hover:border-amber-500/20 transition-colors">
                    <CheckCircle2 className="text-amber-400 mt-0.5 flex-shrink-0" size={18} />
                    <div className="space-y-1">
                      <p className="text-slate-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors">{feat}</p>
                      {i === 0 && <span className="text-[10px] text-amber-400/80 block font-bold tracking-widest uppercase">Essential market acceleration positioning</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* KNOWLEDGE REPOSITORY MODULE (OLD BUSINESS IMPACTS) */}
      <section className="bg-slate-100 py-28 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-extrabold tracking-widest text-emerald-600 uppercase bg-emerald-50 px-3 py-1.5 rounded-md inline-block">
              Market Value Transmission
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Strategic Impacts <br />On Corporate Assets
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
              Environmental considerations directly scale institutional asset allocation vectors, private capital terms, risk engineering protocols, and sustainable deployment horizons.
            </p>
          </div>

          <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-3xl space-y-4 shadow-xl shadow-slate-900/10">
            {businessImpacts.map((factor, i) => (
              <div key={i} className="bg-slate-900 p-5 rounded-2xl border border-slate-800/80 flex items-center justify-between group cursor-pointer hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800">{factor.icon}</div>
                  <div className="max-w-xl">
                    <h4 className="text-white font-bold text-sm sm:text-base">{factor.title}</h4>
                    <p className="text-xs text-slate-400 font-medium mt-0.5 leading-relaxed">{factor.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL SUPPORT INTERMEDIATE */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <HelpCircle size={32} className="text-[#0B6C98] mx-auto mb-4 opacity-90" />
          <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Full-Service Sustainability Framework Architecture</h3>
          <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Tecnico EPC leverages over 40 years of high-compliance engineering and consultancy across heavy industrial layouts to guide your corporate Environmental baseline.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION ACCENT BLOCK */}
      <section className="bg-gradient-to-r from-[#0B6C98] to-sky-800 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Ready to Optimize Your Environmental Alignment?
          </h2>
          <button className="bg-white text-[#0B6C98] hover:bg-slate-50 border border-transparent font-black text-sm px-8 py-4 rounded-xl inline-flex items-center gap-3 transition-all transform hover:-translate-y-0.5 shadow-xl shadow-black/10 group">
            Contact Our ESG Team
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>

      {/* HIGHLY-ATTRACTIVE FOOTER */}
      <Footer />

    </div>
  );
}