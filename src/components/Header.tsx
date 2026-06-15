import { useState } from "react";
import { NavLink } from "react-router-dom"; 
import { Menu, X } from "lucide-react"; 

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fully updated layout array reflecting your exact HTML input structure
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    {
      name: "Services",
      path: "/services",
      submenu: [
        { 
          name: "Sustainability Consulting", 
          path: "/sustainability-consulting",
          hasNested: true,
          nestedMenu: [
            { name: "Environmental Factor", path: "/environmental-factors" },
            { name: "Social Factors", path: "/social-factors" },
            { name: "Governance Factors", path: "/governance-factors" }
          ]
        },
        { name: "Engineering", path: "/engineering" },
        { name: "Enterprise Asset Management", path: "/enterprise-asset-management" },
        { name: "Risk Management", path: "/risk-management" },
      ],
    },
    {
      name: "Projects",
      path: "/projects",
      submenu: [
        { name: "Engineering Projects", path: "/engineering-project" },
        { name: "Data Management Project", path: "/data-management-project" },
        { name: "Risk Management Project", path: "/risk-management-project" }
      ]
    },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const socialLinks = [
    { 
      name: "Twitter",
      url: "https://twitter.com", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
        </svg>
      )
    },
    { 
      name: "Instagram",
      url: "https://instagram.com", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      )
    },
    { 
      name: "Facebook", 
      url: "https://facebook.com", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ) 
    },
  ];

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-xl z-50 border-b border-slate-200/50 transition-all">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        
        {/* Left Side: Logo */}
        <div className="flex items-center gap-3 group cursor-pointer flex-1 justify-start">
          <div className="relative p-1.5 bg-gradient-to-br from-white to-slate-100 rounded-xl border border-slate-200 shadow-sm group-hover:shadow-md transition-all duration-300">
            <img
              src="https://www.tecnicoepc.com/wp-content/uploads/2023/02/download-49.jpeg"
              alt="Tecnico EPC Logo"
              className="h-11 w-auto object-contain mix-blend-multiply"
            />
          </div>
          <div>
            <div className="font-black text-2xl tracking-tight bg-gradient-to-r from-slate-900 via-[#0B6C98] to-slate-900 bg-clip-text text-transparent">Tecnico EPC</div>
            <div className="text-[9px] uppercase font-bold tracking-widest text-slate-400">Engineering Excellence</div>
          </div>
        </div>

        {/* Center: Main Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-bold text-sm text-slate-600 relative mx-auto h-full">
          {navItems.map((item) => (
            <div key={item.name} className="relative group flex items-center h-full">
              <NavLink
                to={item.path}
                className={({ isActive }) => `
                  hover:text-[#0B6C98] transition-colors relative py-1 flex items-center gap-1
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#0B6C98] after:transition-all after:duration-300
                  ${isActive && item.path === window.location.pathname
                    ? "text-[#0B6C98] after:w-full"
                    : "after:w-0 hover:after:w-full"}
                `}
              >
                <span>{item.name}</span>
                {item.submenu && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-400 group-hover:text-[#0B6C98] transition-transform duration-300 group-hover:rotate-180"><path d="m6 9 6 6 6-6"/></svg>
                )}
              </NavLink>

              {/* LEVEL 1: Submenu Dropdown Container */}
              {item.submenu && (
                <div className="absolute left-0 top-[calc(100%-10px)] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:top-full transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1) w-64 z-50 pt-2">
                  <div className="bg-white/95 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-xl border border-slate-100 p-2">
                    <ul className="flex flex-col gap-0.5">
                      {item.submenu.map((sub) => (
                        <li key={sub.name} className="relative group/sub">
                          <NavLink
                            to={sub.path}
                            className="group/item relative flex items-center justify-between px-4 py-3 rounded-lg text-slate-600 font-semibold text-xs transition-all duration-300 hover:text-[#0B6C98] overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-slate-100/50 scale-x-0 origin-left group-hover/item:scale-x-100 transition-transform duration-300 ease-out -z-10" />
                            
                            <div className="flex items-center gap-1.5 transition-transform duration-300 transform group-hover/item:translate-x-1">
                              <span className="w-1 h-1 rounded-full bg-[#0B6C98] scale-0 group-hover/item:scale-100 transition-transform duration-200" />
                              <span>{sub.name}</span>
                            </div>

                            {/* Arrow if Level 2 exists */}
                            {sub.hasNested && (
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-400 group-hover/item:text-[#0B6C98] transition-transform group-hover/item:translate-x-0.5"><path d="m9 18 6-6-6-6"/></svg>
                            )}
                          </NavLink>

                          {/* LEVEL 2: Nested Submenu (e.g., Environmental, Social, Governance) */}
                          {sub.hasNested && (
                            <div className="absolute left-[calc(100%-10px)] top-0 opacity-0 pointer-events-none group-hover/sub:opacity-100 group-hover/sub:pointer-events-auto group-hover/sub:left-full transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1) w-56 pl-2">
                              <div className="bg-white/95 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-xl border border-slate-100 p-2">
                                <ul className="flex flex-col gap-0.5">
                                  {sub.nestedMenu.map((nestedItem) => (
                                    <li key={nestedItem.name}>
                                      <NavLink
                                        to={nestedItem.path}
                                        className="group/nested relative block px-4 py-2.5 rounded-md text-slate-600 font-semibold text-[11px] transition-all duration-300 hover:text-[#0B6C98] overflow-hidden"
                                      >
                                        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-slate-100/50 scale-x-0 origin-left group-hover/nested:scale-x-100 transition-transform duration-300 ease-out -z-10" />
                                        <div className="flex items-center gap-1.5 transition-transform duration-300 transform group-hover/nested:translate-x-1">
                                          <span className="w-1 h-1 rounded-full bg-[#0B6C98] scale-0 group-hover/nested:scale-100 transition-transform duration-200" />
                                          <span>{nestedItem.name}</span>
                                        </div>
                                      </NavLink>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side: Social Icons */}
        <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="p-2 text-slate-500 hover:text-[#0B6C98] hover:bg-slate-50 rounded-lg transition-all"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors border border-slate-200/50"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Flyout Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-slate-200 shadow-2xl px-6 py-6 md:hidden flex flex-col gap-4 max-h-[85vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.name} className="flex flex-col">
              <NavLink
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-slate-700 hover:text-[#0B6C98] py-2 border-b border-slate-50"
              >
                {item.name}
              </NavLink>
              
              {/* Mobile Level 1 Submenu */}
              {item.submenu && (
                <div className="pl-4 flex flex-col border-l border-slate-100 mt-1 gap-1">
                  {item.submenu.map((sub) => (
                    <div key={sub.name} className="flex flex-col">
                      <NavLink
                        to={sub.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-sm font-semibold text-slate-500 hover:text-[#0B6C98] py-1.5 transition-colors"
                      >
                        {sub.name}
                      </NavLink>
                      
                      {/* Mobile Level 2 Nested Submenu */}
                      {sub.hasNested && (
                        <div className="pl-4 flex flex-col border-l border-slate-200/60 mt-0.5 gap-0.5">
                          {sub.nestedMenu.map((nestedItem) => (
                            <NavLink
                              key={nestedItem.name}
                              to={nestedItem.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-xs font-medium text-slate-400 hover:text-[#0B6C98] py-1"
                            >
                              {nestedItem.name}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Social Icons for Mobile Panel */}
          <div className="flex items-center gap-6 pt-4 border-t border-slate-100 justify-center">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="p-2 text-slate-500 hover:text-[#0B6C98] transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}