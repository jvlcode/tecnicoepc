// Premium Tecnico EPC Home.tsx
// React + TypeScript + Tailwind CSS + Framer Motion + Lucide Icons

import { useRef} from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronRight,  Sparkles } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {

  
const industries = [
  {
    title: "Oil & Gas",
    subtitle: "Upstream & Downstream Engineering",
    image: import.meta.env.BASE_URL + "image5.png"
  },
  {
    title: "Renewables",
    subtitle: "Process Optimization & Distillation",
    image: import.meta.env.BASE_URL + "image8.png"
  },
  {
    title: "Petrochemical",
    subtitle: "Complex Polymer & Chemical Units",
    image: import.meta.env.BASE_URL + "image7.png"
  },
  {
    title: "Water Treatment",
    subtitle: "Industrial Effluent & Desalination",
    image: import.meta.env.BASE_URL + "image4.png"
  }
];


  const services = [
    "Engineering Consultancy",
    "Procurement Management",
    "Training Services",
    "Skilled Manpower Supply",
    "Construction Support",
  ];

  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased selection:bg-[#0B6C98] selection:text-white scroll-smooth">
      
      {/* HEADER NAVBAR */}
      <Header/>

      {/* MODERN SPLIT HERO SECTION — IMAGE AS PRIMARY ATTRACTION */}
     <HeroSection/>

     {/* OVERVIEW SECTION */}
<section id="about" className="py-28 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center relative border-t border-slate-100">
  
  {/* Left Column: Image with Modern Accents (Spans 6 cols on large screens) */}
  <div className="lg:col-span-6 relative group">
    {/* Decorative Background Element */}
    <div className="absolute -inset-4 bg-gradient-to-tr from-[#0B6C98]/10 to-sky-400/10 rounded-[2.5rem] blur-lg transform group-hover:scale-105 transition-transform duration-500"></div>
    
    {/* Main Image Container */}
    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
      <img 
        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200" 
        alt="Oil and Gas Engineering Facility" 
        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent"></div>
    </div>
    
    {/* Floating Experience/Stat Badge */}
    <div className="absolute -bottom-6 -right-4 bg-white p-4 sm:p-6 rounded-2xl shadow-xl shadow-slate-200/80 border border-slate-100 hidden sm:flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-[#0B6C98]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-10.5h16.5M2.25 15.75h18.5m-18-10.5h16.5M14 3h4c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0 1 12.5 7.5v-3C12.5 3.67 13.17 3 14 3Z" />
        </svg>
      </div>
      <div>
        <p className="text-2xl font-black text-slate-900">EPC</p>
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Global Projects</p>
      </div>
    </div>
  </div>

  {/* Right Column: Content (Spans 6 cols on large screens) */}
  <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
    <div className="space-y-4">
      <span className="text-xs font-extrabold tracking-widest text-[#0B6C98] uppercase bg-sky-50 px-3 py-1.5 rounded-md inline-block">
        Corporate Profile
      </span>
      <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
        Welcome To Our Company
      </h2>
      <div className="h-1.5 w-14 bg-gradient-to-r from-[#0B6C98] to-sky-400 rounded-full"></div>
    </div>

    <div className="bg-white border border-slate-200/60 rounded-3xl p-8 shadow-xl shadow-slate-100/70">
      <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
        <span className="text-slate-900 font-extrabold">Tecnico EPC Projects Global Pvt. Limited</span> is an Engineering and Management Consultancy specializing in comprehensive services for the Oil & Gas, Refining, Petrochemical, and Water Treatment industries. Their expertise lies in both Basic and Detailed Engineering.
      </p>
    </div>
  </div>

</section>

      {/* INDUSTRIES GLOWING GRID */}
     {/* INDUSTRIES SECTION */}
{/* REDESIGNED INDUSTRIES SECTION */}
<section id="industries" className="py-32 bg-slate-950 text-slate-100 relative overflow-hidden">
  
  {/* Modern High-Tech Background Gradients */}
  <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0B6C98]/10 rounded-full blur-[120px] pointer-events-none"></div>
  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"></div>
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="grid lg:grid-cols-12 gap-16 items-start">
      
      {/* Left Column: Sticky Section Typography (Spans 4 Columns) */}
      <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
        <div className="space-y-3">
          <span className="text-xs font-black tracking-[0.2em] text-sky-400 uppercase bg-sky-950/60 border border-sky-800/50 px-3 py-1.5 rounded-md inline-block">
            Market Segments
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-none">
            Industries <br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-[#0B6C98] bg-clip-text text-transparent">
              We Serve
            </span>
          </h2>
        </div>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-medium">
          Delivering specialized engineering matrices and comprehensive technical consultation across critical heavy-industry sectors worldwide.
        </p>
        <div className="hidden lg:block h-px w-20 bg-gradient-to-r from-[#0B6C98] to-transparent"></div>
      </div>

      {/* Right Column: Interactive Visual Cards Grid (Spans 8 Columns) */}
      <div className="lg:col-span-8 grid sm:grid-cols-2 gap-8">
        {industries.map((ind, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -8 }}
            className="group relative h-[380px] rounded-3xl overflow-hidden border border-slate-800/80 bg-slate-900 flex flex-col justify-end p-6 cursor-pointer shadow-2xl transition-all duration-300"
          >
            {/* Ambient Card Border Hover Glow */}
            <div className="absolute inset-0 border border-sky-500/0 group-hover:border-sky-500/30 rounded-3xl transition-colors duration-500 z-30 pointer-events-none" />

            {/* Permanent High-Resolution Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={ind.image}
                alt={ind.title}
                className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out grayscale-[30%] group-hover:grayscale-0"
              />
              {/* Dynamic Industrial Multi-Layer Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10 opacity-90 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            </div>

            {/* Top Floating Badge Indicator */}
            <div className="absolute top-6 left-6 z-20 w-10 h-10 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/50 flex items-center justify-center font-mono font-black text-sky-400 text-xs shadow-lg group-hover:bg-[#0B6C98] group-hover:text-white group-hover:border-transparent transition-all duration-300">
              0{idx + 1}
            </div>

            {/* Bottom Glassmorphism Content Area */}
            <div className="relative z-20 space-y-4 bg-slate-950/40 backdrop-blur-[4px] p-5 rounded-2xl border border-white/5 group-hover:border-sky-500/10 group-hover:bg-slate-950/70 transition-all duration-300">
              <div className="space-y-1">
                <h3 className="font-black text-2xl text-white tracking-tight group-hover:text-sky-400 transition-colors duration-200">
                  {ind.title}
                </h3>
                <p className="text-xs font-semibold text-slate-400 group-hover:text-slate-300 transition-colors">
                  {ind.subtitle}
                </p>
              </div>

              {/* Action Button Link */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-800/60 group-hover:border-sky-900/50 transition-colors text-xs font-bold text-sky-400/0 group-hover:text-sky-400 transition-all duration-300">
                <span className="transform translate-x-2 group-hover:translate-x-0 transition-transform duration-300">
                  Explore Capabilities
                </span>
                <div className="p-2 bg-slate-900/90 rounded-lg border border-slate-700/60 text-slate-300 group-hover:bg-[#0B6C98] group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-md">
                  <ChevronRight size={14} />
                </div>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </div>
  </div>
</section>

      {/* ADDITIONAL SERVICES PLATFORM */}
      <section id="services" className="py-28 max-w-5xl mx-auto px-6">
        <div className="mb-14 text-center space-y-2">
          <span className="text-xs font-extrabold tracking-widest text-[#0B6C98] uppercase bg-sky-50 px-3 py-1.5 rounded-md inline-block">Core Capabilities</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">Additional Services</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((srv) => (
            <div 
              key={srv} 
              className="flex items-center justify-between p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-[#0B6C98] hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#0B6C98] to-sky-400 group-hover:scale-125 transition-transform duration-300" />
                <span className="font-extrabold text-base text-slate-800 group-hover:text-slate-900 transition-colors tracking-tight">{srv}</span>
              </div>
              <ChevronRight size={16} className="text-slate-300 group-hover:text-[#0B6C98] transform group-hover:translate-x-0.5 transition-all" />
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLY-ATTRACTIVE CITY TRAFFIC FOOTER */}
      <Footer/>

    </div>
  );
}

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position metrics purely for this component's viewport frame
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Layer 1: Cinematic Background Image Parallax Space
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  
  // Layer 2: Decoupled Floating Text Card Parallax (Creates physical space depth)
  const yPanel = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const opacityPanel = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative h-[90vh] min-h-[650px] w-full overflow-hidden bg-slate-950 flex items-end pb-12 lg:pb-16"
    >
      
      {/* 1. CINEMATIC BACKGROUND CANVAS — GRADED FOR DEEP SEA INFRASTRUCTURE */}
      <motion.div 
        style={{ 
          y: yImage, 
          scale: scaleImage,
    backgroundImage: `url('${import.meta.env.BASE_URL}image3.png')`

        }}
        className="absolute inset-0 z-0 bg-cover bg-center origin-bottom pointer-events-none filter brightness-90 contrast-[1.08] saturate-[1.2] hue-rotate-[4deg]"
      />
      
      {/* 2. INDUSTRIAL GEOMETRIC LATTICE (Adds structural blueprint aesthetics) */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(rgba(14,165,233,0.15)_1.5px,transparent_1.5px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_bottom_left,black_20%,transparent_75%)] pointer-events-none" />

      {/* 3. LIGHT-SHIELD SHADOW COATINGS (Guarantees zero legibility loss across screen scales) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-95"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/60 via-slate-900/10 to-transparent opacity-80"></div>

      {/* 4. CONTENT ALIGNMENT CORE */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
        
        {/* MULTI-DIMENSIONAL FLOATING GLASS PANEL */}
        <motion.div 
          style={{ y: yPanel, opacity: opacityPanel }}
          className="max-w-md md:max-w-xl bg-slate-950/[0.15] backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-[32px] space-y-5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] relative group overflow-hidden"
        >
          {/* Internal Border Accent Glow Tracker */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-100 group-hover:scale-105 transition-transform duration-500 pointer-events-none" />
          
          <div className="space-y-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/20 px-3 py-1.5 rounded-xl text-[10px] font-bold text-sky-300 uppercase tracking-widest shadow-inner"
            >
              <Sparkles size={11} className="text-sky-400 animate-pulse" />
              Engineering • Procurement • Construction
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-[1.32] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
            >
              To Provide Quality, Time Innovative & Cost Effective Engineering Solution To Achieve Client Satisfaction
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
            >
              Engineering and Management Consultancy specializing in Oil & Gas, Refining, Petrochemical and Water Treatment industries.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-2 relative z-10"
          >
            <a 
              href="#services"
              className="inline-flex bg-gradient-to-r from-[#0B6C98] to-sky-600 hover:from-sky-600 hover:to-[#0B6C98] border border-sky-400/30 text-white px-6 py-3 rounded-xl text-xs font-bold items-center gap-3 group shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Explore Services 
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}