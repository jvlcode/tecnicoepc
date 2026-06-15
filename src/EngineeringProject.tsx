// EngineeringProjectsPage.tsx
// React + TypeScript + Tailwind CSS + Framer Motion + Lucide Icons

import { motion } from "framer-motion";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  Factory,
  Settings,
  Layers
} from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Data Structure Mapping All 7 Enterprise Project Configurations
const projectsData = [
  {
    title: "Onshore Oil & Gas Processing Facility",
    location: "Anchor Point, AK, USA",
    image: import.meta.env.BASE_URL + "image22.png", // Dynamically driven via base path configuration
    description:
      "Complete engineering and construction management for a 20 oil production and 10 water injection well facility on the Kenai Peninsula. Rated at a daily operating threshold of 10,000 BOPD, 10,000 BWPD, and 15 MMSCFD, utilizing complex reciprocating compression train loops, glycol dehydration units, and truck-loading automation matrix systems.",
    equipment: [
      "3-Phase Separators & Coalescers",
      "Glycol Dehydration & Fuel Gas Skids",
      "High/Low Reciprocating Compressors",
      "LACT Units & Bi-Directional Provers",
      "Wonderware Process Control Systems",
      "Microturbine Power Generators",
    ],
    services: [
      "Process & Mechanical Piping Design",
      "Civil & Structural Foundation Design",
      "E&I Engineering & Control Systems",
      "Fabrication Inspection, QC & Procurement",
      "Commissioning & Operations Training",
    ],
  },
  {
    title: "Natural Gas Compressor Station",
    location: "Reeves County, TX, USA",
    image: import.meta.env.BASE_URL + "image23.png",
    description:
      "Full-scope engineering and design execution for a compact four-acre compressor facility with advanced integration. Engineered with foundational separation, high-pressure compression runs, and customized dehydration systems securely sized to baseline 40 MMSCFD with active provisions for modular site expansions.",
    equipment: [
      "Reciprocating Compressors",
      "Inlet & Filter Separators",
      "Dehydration Process Packages",
      "Custody Metering & Fuel Gas Skids",
      "Pipeline Pig Receivers & Launchers",
      "API Certified Storage Tanks",
    ],
    services: [
      "Project Management & Controls",
      "Process Architecture Engineering",
      "Mechanical & High-Pressure Piping Design",
      "Civil Engineering & Grading Design",
      "Electrical & Instrumentation Engineering",
      "Strategic Procurement Support",
    ],
  },
  {
    title: "Pipeline Meter Stations",
    location: "West Texas, USA",
    image:  import.meta.env.BASE_URL + "image24.png",
    description:
      "Advanced engineering, validation, and layout support for multiple custom pipeline meter stations deployed regionally and nationally. Design pathways meticulously account for complex hot tap architectures, pipeline riser integration, right-of-way (ROW) compliance mapping, and geotechnical analysis following high-tier DOT mandates.",
    equipment: [
      "Custody Transfer Meter Runs",
      "RTD Environmental Buildings",
      "Bi-Directional Flow Controls",
      "Pig Launchers & Receivers",
      "Horizontal Directional Drilling (HDD)",
      "Pipeline Lateral Configurations",
    ],
    services: [
      "Multi-Disciplinary Construction Drawings",
      "Permit & ROW Mapping Layouts",
      "Geotechnical Investigation Support",
      "Topographical Survey Support",
      "Mechanical Piping Design",
    ],
  },
  {
    title: "Pipeline Pump Station",
    location: "Dunn County, ND, USA",
    image:  import.meta.env.BASE_URL + "image25.png",
    description:
      "Structural engineering design and system optimization for a high-output produced water pump station built over a one-acre operational footprint. Directs technical routing loops through 3,000-barrel combined capacity storage layouts, delivering highly specialized booster pump discharges calibrated to 450 BPH at 400 PSIG.",
    equipment: [
      "1,000 BBLS Water Storage Tanks",
      "High-Pressure Booster Pumps",
      "Reinforced Water Pump Building",
      "Automated Facility Heat Tracing Panels",
    ],
    services: [
      "Civil Foundation & Structural Design",
      "Electrical & Instrumentation Schematics",
      "Construction SOW Framework Matrix",
      "Geotechnical Subsurface Investigation",
      "Mechanical Piping Architecture",
    ],
  },
  {
    title: "Gas Plant Repurposing",
    location: "Amarillo, TX, USA",
    image:  import.meta.env.BASE_URL + "image26.png",
    description:
      "Execution of a detailed FEED study and fast-track brownfield engineering matrix to successfully isolate, bypass, and abandon legacy cryogenic treatment sections. Upgraded the asset's active process machinery to meet new transactional client requirements, managing variable toxic feed streams containing up to 300 PPM H2S and 2% CO2.",
    equipment: [
      "Amine Contactor Systems",
      "Amine Regeneration Exchanges",
      "Industrial Water Chiller Packages",
      "High-Accuracy LACT Unit Arrays",
      "Gas Sales Fiscal Metering",
      "Forced-Draft Air Coolers",
    ],
    services: [
      "FEED Study to Detailed Engineering",
      "Civil Grading & Structural Remodeling",
      "Brownfield Workpack Development",
      "Onsite Construction & Field Engineering",
      "Operational Hot-Bypass Strategy Planning",
    ],
  },
  {
    title: "Compressor Station Rehabilitation",
    location: "Potter County, PA, USA",
    image: import.meta.env.BASE_URL + "image27.png",
    description:
      "Comprehensive multi-phase rehabilitation strategy spanning Pre-FEED, FEED, and structural detailed design to return a key regional compressor station back into active regulatory compliance. Overhauled above-ground yard manifolds, engineered full molecular sieve dehydration replacements, and converted critical actuator lines.",
    equipment: [
      "Molecular Sieve Towers",
      "Valve Switching Skids & Coolers",
      "Instrument Air Packages",
      "ESD / PSD / BDV Safety Systems",
      "Operator Console HMI Interfaces",
      "Explosion-Proof MCC & Switchgear",
    ],
    services: [
      "Pre-FEED, FEED & Detailed Engineering",
      "Blowdown, Vent & Gas Dispersion Studies",
      "Valve Actuator Conversion Engineering",
      "HMI System Relocation & Integration",
      "Onsite Construction Field Support",
    ],
  },
];

export default function EngineeringProject() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-[#0B6C98] selection:text-white">
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[600px] bg-slate-950 flex items-center overflow-hidden">
        <img
          src={import.meta.env.BASE_URL + "image21.png"}
          alt="Engineering Industrial Portfolio Banner"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.35] contrast-[1.05]"
        />
        
        {/* Architectural Visual Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(14,165,233,0.15)_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-30 pointer-events-none z-10" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl space-y-6"
          >
           
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-none">
             Engineering Project 
            </h1>
           
          </motion.div>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-28">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-extrabold tracking-[0.2em] text-[#0B6C98] uppercase bg-sky-50 px-3 py-1.5 rounded-md inline-block">
              Integrated Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              How The Right Technical Solution Saves You <br className="hidden lg:inline" />
              Time, Money & Headaches
            </h2>
            <div className="h-1 w-16 bg-[#0B6C98] rounded-full mt-4" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 text-slate-600 text-base sm:text-lg font-medium leading-relaxed pt-2">
            <p>
              Our integrated team of specialized engineers, facility designers, and senior project managers collaborate dynamically to execute challenging infrastructure installations safely, on schedule, and under asset budgetary parameters.
            </p>
            <p className="text-slate-500 font-normal">
              Leveraging strict multidisciplinary engineering control processes, we actively isolate design risk profiles, streamline complex field integration sequences, and maximize production lifespan efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* ================= DYNAMIC PROJECTS MATRIX ================= */}
      <section className="bg-white border-y border-slate-200/60 py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="space-y-40">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image Composition Blocks */}
                <div className="relative group sticky top-24">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-[#0B6C98]/10 to-sky-500/5 rounded-3xl blur-lg transition-transform duration-500 group-hover:scale-[1.01]"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white aspect-[4/3]">
                    <img
                      src={project.image} // Dynamic framework image mapping token override
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    />
                    {/* Floating badge for location tagging */}
                    <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700/50 flex items-center gap-2 text-white shadow-lg">
                      <MapPin size={14} className="text-sky-400" />
                      <span className="text-xs font-bold tracking-wide">{project.location}</span>
                    </div>
                  </div>
                </div>

                {/* Technical Specification Summaries */}
                <div className="space-y-6 lg:pt-2">
                  <div>
                    <span className="text-[11px] font-black text-sky-600 uppercase tracking-widest bg-sky-50 px-2.5 py-1 rounded-md">
                      Case Study {index < 9 ? `0${index + 1}` : index + 1}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                    {project.description}
                  </p>

                  <div className="h-px bg-slate-100 my-4" />

                  {/* Systems & Equipment Mapping Component */}
                  <div className="space-y-3">
                    <h4 className="font-extrabold text-xs text-slate-900 tracking-wider uppercase flex items-center gap-2">
                      <Factory size={15} className="text-[#0B6C98]" />
                      Systems & Equipment Configuration
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.equipment.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/80 text-slate-700 text-xs font-semibold shadow-xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Engineering Scope Matrix Components */}
                  <div className="space-y-3 pt-2">
                    <h4 className="font-extrabold text-xs text-slate-900 tracking-wider uppercase flex items-center gap-2">
                      <Settings size={15} className="text-emerald-600" />
                      Engineering Scope Executed
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                      {project.services.map((service) => (
                        <div
                          key={service}
                          className="flex items-center gap-2.5 text-slate-600 group"
                        >
                          <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                          <span className="text-xs sm:text-sm font-semibold group-hover:text-slate-900 transition-colors">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION SECTION ================= */}
      <section className="bg-slate-950 text-white py-28 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0B6C98]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/20 px-3 py-1.5 rounded-xl text-[10px] font-bold text-sky-400 uppercase tracking-widest">
            <Layers size={12} />
            Execution Excellence
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Ready To Start Your Next <br /> Engineering Project?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            From industrial FEED feasibility studies to structural construction and field commissioning support, we deliver complex lifecycle infrastructure solutions.
          </p>
          <div className="pt-4">
            <button className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#0B6C98] hover:bg-[#09577b] text-white rounded-xl font-bold tracking-wide text-sm shadow-lg shadow-sky-950/50 transition-all active:scale-98">
              Contact Us
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ================= FOOTER COMPONENT ================= */}
      <Footer />
    </div>
  );
}