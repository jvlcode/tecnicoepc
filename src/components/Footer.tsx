import { motion } from "framer-motion";

export default function Footer() {
    return <footer id="contact" className="bg-slate-950 border-t border-slate-900 overflow-hidden relative">
        
        {/* Info Deck */}
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
          
          {/* Neon Grid Mesh Glow Base */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(11,108,152,0.1)_0%,transparent_50%)] pointer-events-none" />

          {/* Layer 1: Vector Line-art City Block Skyline Silhouette */}
          <div className="absolute inset-x-0 bottom-16 h-36 flex justify-around items-end opacity-10 pointer-events-none select-none px-8">
            <div className="w-12 h-24 bg-sky-400 rounded-t-lg"></div>
            <div className="w-20 h-36 bg-sky-300 rounded-t-xl hidden sm:block"></div>
            <div className="w-16 h-14 bg-sky-400 rounded-t-md"></div>
            <div className="w-24 h-28 bg-sky-500 rounded-t-xl hidden md:block"></div>
            <div className="w-14 h-20 bg-sky-300 rounded-t-md"></div>
          </div>

          {/* Layer 2: Central Floating Core Brand Monument */}
          <div className="absolute left-1/2 bottom-20 transform -translate-x-1/2 z-30">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-300 border-4 border-slate-950 text-slate-950 px-12 py-3.5 text-xl font-black tracking-widest rounded-2xl shadow-[0_20px_40px_rgba(234,179,8,0.25)] text-center uppercase cursor-pointer"
            >
              TECNICO
            </motion.div>
          </div>

          {/* Layer 3: Lane A - Car Cross Loop (Westbound) */}
          <motion.div
            className="absolute bottom-5 text-4xl pointer-events-none select-none z-20 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            animate={{ x: ["-10vw", "110vw"] }}
            transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
          >
           <img height={80} width={80} src="https://cdn-icons-png.flaticon.com/512/3085/3085330.png" alt="" />
          </motion.div>

          {/* Layer 4: Lane B - Cyclist Cross Loop (Eastbound) */}
          <motion.div
            className="absolute bottom-5 text-3xl pointer-events-none select-none z-20 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            animate={{ x: ["110vw", "-10vw"] }}
            transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
          >
            🚴
          </motion.div>

          {/* Layer 5: Realistic Dual-Lane Asphalt Structural Base */}
          <div className="w-full h-16 bg-slate-900 border-t border-slate-800 relative flex flex-col justify-center shadow-[inset_0_10px_20px_rgba(0,0,0,0.6)]">
            {/* Reflective Yellow Dotted Center Line Divider */}
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
}