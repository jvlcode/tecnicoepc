// RiskManagementProjectsPage.tsx
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

// Data Structure Mapping All 3 Risk Management Project Configurations
const projectsData = [
  {
    title: "PSM Program Development (29 CFR 1910.119)",
    location: "West Texas, USA",
   image: import.meta.env.BASE_URL + "image29.png",
    description:
      "Regulatory oversight evaluation and full-scope implementation of a total Process Safety Management (PSM) program for an onshore liquid handling facility. Designed and authored complete compliance frameworks, operational forms, and workforce training modules strictly aligning with OSHA 29 CFR 1910.119 standards.",
    equipment: [
      "Process Safety Information (PSI)",
      "Process Hazard Analysis (PHA)",
      "Pre-Startup Safety Reviews (PSSR)",
      "Mechanical Integrity Frameworks",
      "Management of Change (MOC) Forms",
      "Emergency Planning & Response",
    ],
    services: [
      "Employee Participation & Training Plans",
      "Hot Work Permit System Integration",
      "Incident Investigation Protocols",
      "Compliance Audit Matrix Structuring",
      "Contractor Management Programs",
    ],
  },
  {
    title: "Acquisition Due Diligence Support",
    location: "West Texas, USA",
    image: import.meta.env.BASE_URL + "image30.png",
    description:
      "High-level midstream asset transaction technical due diligence for an infrastructure package comprising a pipeline gathering system, nine field compressor stations, and an active gas processing plant. Performed deep-dive verification of design calculations, mechanical integrity backlogs, and regulatory exposure risks.",
    equipment: [
      "Pipeline Gathering Networks",
      "9 Field Compressor Stations",
      "Cryogenic Process Plant Assets",
      "ProMax Process Simulation Models",
      "Pipeline MAOP Verified Calculations",
      "NACE Corrosion Monitoring Systems",
    ],
    services: [
      "Asset Design Specification Audits",
      "Mechanical Integrity Health Reviews",
      "Regulatory Compliance Risk Gap Analysis",
      "NACE Standard Asset Life Validations",
      "Executive Investment Advisory Reporting",
    ],
  },
  {
    title: "Multi-Standard PSM & CMMS Development",
    location: "Southeast New Mexico, USA",
    image: import.meta.env.BASE_URL + "image31.png",
    description:
      "Cross-functional design of a unified safety management architecture integrating OSHA 14-element PSM protocols with DOT pipeline specifications (49 CFR 192 & 195). Established an asset-wide Computerized Maintenance Management System (CMMS) alongside structural integrity execution routines.",
    equipment: [
      "ASME Pressure Vessels & Tanks",
      "API 570 Regulated Piping Systems",
      "Relief Systems & Vent Devices",
      "Emergency Shutdown (ESD) Systems",
      "Automated Process Control Loops",
      "High-Pressure Facility Pumps",
    ],
    services: [
      "49 CFR 192/195 DOT Subpart Alignment",
      "CMMS Core Strategy & Maintenance Setup",
      "Operational & Maintenance Procedure Design",
      "State & Municipal Regulatory Cross-Mapping",
      "PSSR, MOC & Incident Response Systems",
    ],
  },
];

export default function RiskManagementProject() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-[#0B6C98] selection:text-white">
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[600px] bg-slate-950 flex items-center overflow-hidden">
        <img
          src={import.meta.env.BASE_URL + "image18.png"}
          alt="Process Safety Management and Risk Engineering"
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
              Risk Management 
            </h1>

          </motion.div>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-28">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-extrabold tracking-[0.2em] text-[#0B6C98] uppercase bg-sky-50 px-3 py-1.5 rounded-md inline-block">
              Operational Precision
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
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    />
                    {/* Floating location badge */}
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
                      Regulated Elements & Systems Focus
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
                      Assurance Scope & Protocols
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
            Risk Asset Management
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