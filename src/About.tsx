// Premium Tecnico EPC About.tsx
// React + TypeScript + Tailwind CSS + Framer Motion + Lucide Icons

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Leaf,
  Coins,
  Users,
  Smile,
  MessageSquare,
  Briefcase,
  Globe2,
  Layers
} from "lucide-react";
import Header from "./components/Header";

export default function About() {

  // Core metrics array
  const metrics = [
    { value: "10+", label: "Years in Business", icon: <Briefcase size={20} /> },
    { value: "15+", label: "Countries Served", icon: <Globe2 size={20} /> },
    { value: "50+", label: "Turnkey Products/Solutions", icon: <Layers size={20} /> },
  ];

  // Values array utilizing semantic corporate content mapped to lucide icons
  const values = [
    {
      title: "Ethics",
      desc: "We conduct our business in an uncompromisingly ethical and legal way. Trust and integrity form the absolute foundation of our team architecture.",
      icon: <ShieldCheck className="text-sky-400" size={24} />,
    },
    {
      title: "Stewardship",
      desc: "We remain deeply principled when it comes to the safety of our staff, our partners, and the global environments we modify.",
      icon: <Leaf className="text-emerald-400" size={24} />,
    },
    {
      title: "Profitability",
      desc: "We sustain commercial viability deliberately. Financial health ensures our durability and persistent capacity to innovate.",
      icon: <Coins className="text-amber-400" size={24} />,
    },
    {
      title: "Respect",
      desc: "We enforce an absolute zero-tolerance policy for toxic behavior. We build spaces defined by dignity, inclusion, and mutual appreciation.",
      icon: <Users className="text-indigo-400" size={24} />,
    },
    {
      title: "Work Environment",
      desc: "We curate a happy, optimally challenged collective workforce where engineers feel connected to macro-level impact, not just a paycheck.",
      icon: <Smile className="text-pink-400" size={24} />,
    },
    {
      title: "Communication",
      desc: "Radical clarity and transparent tracking drive our internal synergy, turning collaborative technical outputs into a critical market advantage.",
      icon: <MessageSquare className="text-teal-400" size={24} />,
    },
  ];

  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased selection:bg-[#0B6C98] selection:text-white scroll-smooth">

      {/* HEADER NAVBAR */}
      <Header/>
      {/* MINIMALIST ARCHITECTURAL HERO BANNER */}
      <AboutSection/>

      {/* PROFILE & STRATEGY SECTION */}
      <section className="py-28 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">

        {/* Left Column: Bold Visual Imagery Stack */}
        <div className="lg:col-span-6 relative group">
          <div className="absolute -inset-4 bg-gradient-to-br from-[#0B6C98]/10 to-sky-500/5 rounded-[2.5rem] blur-xl transform group-hover:scale-102 transition-transform duration-500"></div>
<div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/10] bg-slate-900 group">
  <img
    src={import.meta.env.BASE_URL + "image11.jpg"}
    alt="Heavy Industry Plant and Design Asset"
    className="w-full h-full object-cover object-top transform group-hover:scale-103 transition-transform duration-700 ease-out brightness-95 -translate-y-30"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
</div>


          {/* Metrics Panel Inserted Directly as Floating UI Element */}
          <div className="absolute -bottom-8 left-6 right-6 bg-white border border-slate-200/80 p-6 rounded-2xl shadow-xl shadow-slate-200/50 grid grid-cols-3 gap-2 divide-x divide-slate-100">
            {metrics.map((metric, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center px-2">
                <div className="text-[#0B6C98] mb-1.5 opacity-80">{metric.icon}</div>
                <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">{metric.value}</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Narrative Content Grid */}
        <div className="lg:col-span-6 space-y-6 pt-8 lg:pt-0">
          <div className="space-y-3">
            <span className="text-xs font-black tracking-widest text-[#0B6C98] uppercase bg-sky-50 px-3 py-1.5 rounded-md inline-block">
              Operations Matrix
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
              Engineering & Consulting <br />for Oil & Gas
            </h2>
            <div className="h-1.5 w-14 bg-gradient-to-r from-[#0B6C98] to-sky-400 rounded-full"></div>
          </div>

          <div className="space-y-4 text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
            <p>
              <span className="text-slate-900 font-extrabold">Tecnico EPC</span> provides premium engineering and consulting services to the oil and gas industry. Our services include project management, design engineering, risk management, technical documentation, and maintenance management solutions.
            </p>
            <p className="bg-white border border-slate-200/60 p-5 rounded-2xl shadow-sm text-slate-700 italic border-l-4 border-l-[#0B6C98]">
              "We believe the formula for success is solid and simple. It starts with a highly focused corporate philosophy committed to innovative solutions in the world’s most challenging environments."
            </p>
            <p>
              Backed by a seasoned team of professionals dedicated to quality and client satisfaction, we operate as a multidisciplinary framework that speaks your language and understands your unique operational issues. This gives us the competitive edge to deliver projects on-budget, on-time, every time across the <span className="text-[#0B6C98] font-bold">upstream, midstream, downstream, LNG, and petrochemical lifecycle.</span>
            </p>
          </div>
        </div>
      </section>

      {/* MISSION VISION HIGH-GLOW SECTION */}
      <section className="py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0B6C98]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <div className="space-y-2">
            <span className="text-xs font-black tracking-[0.2em] text-sky-400 uppercase bg-slate-950/80 border border-slate-800 px-3 py-1.5 rounded-md inline-block">
              Corporate Creed
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">Our Mission</h2>
          </div>

          <blockquote className="text-xl sm:text-3xl font-extrabold text-slate-100 tracking-tight leading-snug max-w-3xl mx-auto">
            “Our mission is to be <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-100 font-black">really good at what we do</span>, to provide exceptional value to our customers, to provide a challenging, positive work experience for our staff, and to be profitable all while maintaining a high standard of ethics and conduct.”
          </blockquote>

          <div className="flex justify-center items-center gap-3">
            <div className="h-px w-12 bg-slate-700"></div>
            <div className="w-2 h-2 rounded-full bg-[#0B6C98]" />
            <div className="h-px w-12 bg-slate-700"></div>
          </div>
        </div>
      </section>

      {/* CORE VALUES INTERACTIVE GLOWING GRID */}
      <section className="py-32 bg-slate-950 text-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16 text-center space-y-3">
            <span className="text-xs font-black tracking-[0.2em] text-sky-400 uppercase bg-sky-950/60 border border-sky-800/50 px-3 py-1.5 rounded-md inline-block">
              Corporate Standards
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              The Values That <span className="bg-gradient-to-r from-white via-slate-300 to-[#0B6C98] bg-clip-text text-transparent">Govern Our Execution</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="group p-8 rounded-3xl border border-slate-900 bg-slate-900/50 backdrop-blur-sm flex flex-col space-y-4 hover:border-slate-800 hover:bg-slate-900 transition-all duration-300 shadow-xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center shadow-inner group-hover:bg-[#0B6C98]/10 group-hover:border-[#0B6C98]/30 transition-colors">
                  {val.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-white tracking-tight group-hover:text-sky-400 transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed group-hover:text-slate-300 transition-colors">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLY-ATTRACTIVE CITY TRAFFIC FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative z-20 flex flex-col md:flex-row justify-between items-start gap-8 border-b border-slate-900">
          <div className="space-y-2">
            <div className="font-black text-3xl tracking-tight text-white">
              TECNICO <span className="text-[#0B6C98] font-light">EPC</span>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-sky-400/80 bg-sky-950/50 border border-sky-900/50 px-2.5 py-1 rounded-md inline-block">Engineering Excellence Operations</div>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
            Engineering and Management Consultancy specializing in high-compliance infrastructure setups, basic and detailed blueprints execution cycles globally.
          </p>
        </div>

        {/* PARALLAX CITY TRAFFIC INFRASTRUCTURE DESIGN LAYER */}
        <div className="relative h-64 w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-end">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(11,108,152,0.1)_0%,transparent_50%)] pointer-events-none" />

          <div className="absolute inset-x-0 bottom-16 h-36 flex justify-around items-end opacity-10 pointer-events-none select-none px-8">
            <div className="w-12 h-24 bg-sky-400 rounded-t-lg"></div>
            <div className="w-20 h-36 bg-sky-300 rounded-t-xl hidden sm:block"></div>
            <div className="w-16 h-14 bg-sky-400 rounded-t-md"></div>
            <div className="w-24 h-28 bg-sky-500 rounded-t-xl hidden md:block"></div>
            <div className="w-14 h-20 bg-sky-300 rounded-t-md"></div>
          </div>

          <div className="absolute left-1/2 bottom-20 transform -translate-x-1/2 z-30">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-300 border-4 border-slate-950 text-slate-950 px-12 py-3.5 text-xl font-black tracking-widest rounded-2xl shadow-[0_20px_40px_rgba(234,179,8,0.25)] text-center uppercase cursor-pointer"
            >
              TECNICO
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-5 text-4xl pointer-events-none select-none z-20 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            animate={{ x: ["-10vw", "110vw"] }}
            transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
          >
            <img height={80} width={80} src="https://cdn-icons-png.flaticon.com/512/3085/3085330.png" alt="Industrial Asset" />
          </motion.div>

          <motion.div
            className="absolute bottom-5 text-3xl pointer-events-none select-none z-20 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            animate={{ x: ["110vw", "-10vw"] }}
            transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
          >
            🚴
          </motion.div>

          <div className="w-full h-16 bg-slate-900 border-t border-slate-800 relative flex flex-col justify-center shadow-[inset_0_10px_20px_rgba(0,0,0,0.6)]">
            <div className="w-full border-t-2 border-dashed border-yellow-500/40 h-0"></div>
          </div>
        </div>

        {/* BOTTOM METADATA LEGAL ROW */}
        <div className="bg-slate-950 text-slate-500 text-xs py-6 relative z-40 border-t border-slate-900">
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


 function AboutSection() {
  return (
    <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
      
      {/* 1. ANIMATED BLUEPRINT GRID BASE */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(rgba(14,165,233,0.08)_1.5px,transparent_1.5px)] [background-size:32px_32px] pointer-events-none" 
      />

      {/* 2. AMBIENT DRIFTING GLOW ORBS (Fluid/Energy Mimicry) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none mix-blend-screen opacity-40">
        {/* Left Teal Glowing Field */}
        <motion.div
          animate={{
            x: [-40, 40, -40],
            y: [-20, 30, -20],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-[#0B6C98]/20 rounded-full blur-[100px]"
        />

        {/* Right Sky Blue Glowing Field */}
        <motion.div
          animate={{
            x: [40, -30, 40],
            y: [30, -20, 30],
            scale: [1.1, 0.9, 1.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-sky-500/10 rounded-full blur-[120px]"
        />
      </div>

      {/* 3. FLOATING TELEMETRY PARTICLES (Industrial Data Streams) */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-sky-400"
            style={{
              left: `${20 + i * 22}%`,
              bottom: "-5%",
            }}
            animate={{
              y: ["0vh", "-60vh"],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 8 + i * 3,
              repeat: Infinity,
              delay: i * 2.5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* FOREGROUND CONTENT SECTION (Stays static/crisp over top) */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <span className="text-xs font-extrabold tracking-[0.25em] text-sky-400 uppercase bg-sky-950/60 border border-sky-900/50 px-3 py-1.5 rounded-md inline-block">
            Get To Know Us
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Our <span className="bg-gradient-to-r from-white via-slate-200 to-[#0B6C98] bg-clip-text text-transparent">Company</span>
          </h1>
          
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-medium leading-relaxed">
            Empowering oil and gas endeavors through pioneering technology and tailored solutions, we redefine industry standards at Tecnico.
          </p>
        </motion.div>
      </div>

    </section>
  );
}