// GovernanceFactors.tsx
// React + TypeScript + Tailwind CSS + Framer Motion + Lucide Icons

import { motion } from "framer-motion";
import {
  Users,
  BadgeDollarSign,
  Building2,
  Calculator,
  ShieldCheck,
  Scale,
  Landmark,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Sparkles,
  HelpCircle
} from "lucide-react";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function GovernanceFactors() {
  const [activeTab, setActiveTab] = useState<"board" | "pay" | "ownership" | "accounting">("board");

  const boardItems = [
    "Board Diversity & Inclusive Leadership Metrics",
    "Independent Directors & Oversight Structural Ratios",
    "Skill Sets Allocation & Continuous Training Programs",
    "Organizational Resilience Planning Models",
  ];

  const payItems = [
    "Fair & Performance-Driven Compensation Scaffolding",
    "Executive-to-Workforce Wage Ratio Audits",
    "Long-Term Enterprise Goal Equity Alignment",
    "Leadership Financial Transparency Benchmarks",
  ];

  const ownershipItems = [
    "Transparent Ownership Configuration Hierarchies",
    "Shareholder Voting Rights Protective Frameworks",
    "Anti-Takeover Defense Strategic Protocols",
    "Institutional Control Alignment Matrices",
  ];

  const accountingItems = [
    "Rigorous Financial Reporting & Accurate Disclosures",
    "Independent Third-Party Auditing Safeguards",
    "Internal Financial Control System Maintenance",
    "Tax Transparency & Cross-Border Reporting Metrics",
  ];

  const corporateStructure = [
    { title: "Business Ethics Strategy", icon: <ShieldCheck className="text-[#0B6C98]" size={18} /> },
    { title: "Anti-Competitive Controls", icon: <Scale className="text-amber-500" size={18} /> },
    { title: "Tax Transparency Baseline", icon: <Landmark className="text-sky-400" size={18} /> },
    { title: "Anti-Corruption Frameworks", icon: <ShieldCheck className="text-emerald-400" size={18} /> },
    { title: "Financial System Stability", icon: <TrendingUp className="text-rose-400" size={18} /> },
  ];

  const businessImpacts = [
    {
      title: "Management Effectiveness",
      icon: <Briefcase className="text-[#0B6C98]" size={18} />,
      description: "Robust governance structures minimize systemic exposure to operational mismanagement, costly scandals, and reputational failures.",
    },
    {
      title: "Workforce Productivity",
      icon: <Users className="text-sky-400" size={18} />,
      description: "Inclusive governance ecosystems systematically increase employee commitment, workspace performance markers, and strategic productivity.",
    },
    {
      title: "Investor Confidence",
      icon: <TrendingUp className="text-amber-400" size={18} />,
      description: "Uncompromising accounting transparency and absolute leadership accountability build verifiable market trust and private capital confidence.",
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
        <div className="absolute inset-0 z-10 bg-[radial-gradient(rgba(245,158,11,0.1)_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-95"></div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-400/20 px-3 py-1.5 rounded-xl text-[10px] font-bold text-amber-300 uppercase tracking-widest shadow-inner">
              <Sparkles size={11} className="text-amber-400 animate-pulse" />
              ESG Scope & Impact
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Understanding ESG: <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-amber-400 bg-clip-text text-transparent">Governance Factors</span>
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
            <p className="text-sm font-bold text-sky-700 uppercase tracking-wider">Sustainable Frameworks & Corporate Ethics</p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-none">
              Creating Sustainable Value
            </h2>
            <div className="h-1.5 w-14 bg-gradient-to-r from-[#0B6C98] to-amber-400 rounded-full"></div>
          </div>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            The governance segment of ESG encompasses corporate board compositions, management structures, corporate policies, internal standards, transparent disclosures, and precise auditing frameworks.
          </p>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Modern institutional stakeholders demand clear, empirical assurance that leadership networks are executionally diverse, structurally accountable, radically transparent, and ethically responsible.
          </p>
        </div>

        <div className="lg:col-span-6 relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#0B6C98]/10 to-amber-400/10 rounded-[2.5rem] blur-lg transition-transform duration-500 group-hover:scale-105"></div>
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] bg-slate-950 border border-slate-800">
            <img 
              src={`${import.meta.env.BASE_URL + "image14.png"}`}
              alt="Corporate Governance Framework Asset Execution" 
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10">
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 block mb-1">Ecosystem Audit</span>
              <p className="text-white text-sm font-bold">Operational Architecture Mapping Across Institutional Controls</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE ESG THEME TABS */}
      <section className="py-32 bg-slate-950 text-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Sticky Sidebar Navigation */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-black tracking-[0.2em] text-amber-400 uppercase bg-amber-950/60 border border-amber-800/50 px-3 py-1.5 rounded-md inline-block">
                  Governance Themes
                </span>
                <h2 className="text-4xl font-black tracking-tight text-white leading-none">
                  Core Framework <br />
                  <span className="bg-gradient-to-r from-white via-slate-200 to-[#0B6C98] bg-clip-text text-transparent">Classifications</span>
                </h2>
              </div>
              
              {/* Vertical Switch Options */}
              <div className="flex flex-col gap-3 pt-4">
                {[
                  { id: "board", label: "Board Diversity & Resilience", icon: <Users size={16} /> },
                  { id: "pay", label: "Executive Remuneration Structures", icon: <BadgeDollarSign size={16} /> },
                  { id: "ownership", label: "Ownership & Control Hierarchies", icon: <Building2 size={16} /> },
                  { id: "accounting", label: "Accounting & Disclosure Controls", icon: <Calculator size={16} /> }
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
                {activeTab === "board" && boardItems.map((feat, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 bg-slate-950/40 border border-slate-900 rounded-xl group hover:border-amber-500/20 transition-colors">
                    <CheckCircle2 className="text-amber-400 mt-0.5 flex-shrink-0" size={18} />
                    <p className="text-slate-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors">{feat}</p>
                  </div>
                ))}
                {activeTab === "pay" && payItems.map((feat, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 bg-slate-950/40 border border-slate-900 rounded-xl group hover:border-sky-500/20 transition-colors">
                    <CheckCircle2 className="text-[#0B6C98] mt-0.5 flex-shrink-0" size={18} />
                    <p className="text-slate-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors">{feat}</p>
                  </div>
                ))}
                {activeTab === "ownership" && ownershipItems.map((feat, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 bg-slate-950/40 border border-slate-900 rounded-xl group hover:border-emerald-500/20 transition-colors">
                    <CheckCircle2 className="text-emerald-400 mt-0.5 flex-shrink-0" size={18} />
                    <p className="text-slate-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors">{feat}</p>
                  </div>
                ))}
                {activeTab === "accounting" && accountingItems.map((feat, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 bg-slate-950/40 border border-slate-900 rounded-xl group hover:border-blue-500/20 transition-colors">
                    <CheckCircle2 className="text-blue-400 mt-0.5 flex-shrink-0" size={18} />
                    <div className="space-y-1">
                      <p className="text-slate-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors">{feat}</p>
                      {i === 0 && <span className="text-[10px] text-blue-400/80 block font-bold tracking-widest uppercase">Essential market acceleration positioning</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE STRUCTURE AND ETHICS SECTION */}
      <section className="bg-slate-100 py-28 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-extrabold tracking-widest text-[#0B6C98] uppercase bg-sky-50 px-3 py-1.5 rounded-md inline-block">
              Compliance Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Corporate Structure & Ethics
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
              Responsible, high-integrity governance demands active vigilance across absolute operational ethics, antitrust frameworks, cross-border financial transparency, and structural asset stability.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {corporateStructure.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -4 }}
                className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col items-center text-center space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm">
                  {item.icon}
                </div>
                <h4 className="text-slate-800 font-bold text-sm tracking-tight leading-tight">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGIC IMPACTS MODULE (OLD BUSINESS IMPACTS) */}
      <section className="bg-slate-900 py-28 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-extrabold tracking-widest text-amber-400 uppercase bg-amber-950/50 border border-amber-900/50 px-3 py-1.5 rounded-md inline-block">
              Market Value Transmission
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Strategic Impacts <br />On Corporate Assets
            </h2>
            <p className="text-slate-400 font-medium text-sm sm:text-base leading-relaxed">
              Governance configurations directly drive leadership precision, performance metrics, mitigative hazard models, employee retention index scaling, and long-term private equity access horizons.
            </p>
            
            {/* KPI STATS INLINED MATRIX */}
            <div className="grid grid-cols-3 gap-4 pt-6 text-left">
              <div className="border-l-2 border-amber-400 pl-4">
                <div className="text-2xl font-black text-white">95%</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Accountability</div>
              </div>
              <div className="border-l-2 border-sky-400 pl-4">
                <div className="text-2xl font-black text-white">80%</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Confidence</div>
              </div>
              <div className="border-l-2 border-emerald-400 pl-4">
                <div className="text-2xl font-black text-white">100%</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Compliance</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-3xl space-y-4 border border-slate-800 shadow-2xl">
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
            Tecnico EPC leverages over 40 years of high-compliance engineering and consultancy across heavy industrial layouts to guide your corporate Governance baseline.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION ACCENT BLOCK */}
      <section className="bg-gradient-to-r from-[#0B6C98] to-sky-800 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Ready to Optimize Your Governance Alignment?
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