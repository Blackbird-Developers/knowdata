import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowRight, 
  BarChart3, Cpu, Users, Globe, CheckCircle2, 
  Clock, Rocket, UserCheck,
  GitBranch, Settings, TrendingUp, Layout,
  Zap, Activity, MapPin, Server, Smartphone,
  FlaskConical, HeartPulse, Signal, Stethoscope,
  Target, Lightbulb, Trophy, ArrowUpRight, BarChart,
  Phone, Mail, MessageSquare, Briefcase, ChevronRight, Check,
  AlertCircle
} from 'lucide-react';

/* KNOWDATA.IE - REVERTED HOMEPAGE + MULTI-PAGE
   1. Home: Restored to full long-scrolling layout.
   2. Services: Dedicated page (reuse components).
   3. Case Studies: Dedicated page (reuse components).
   4. Service Details: Dedicated landing pages for each service.
   5. Case Study Details: Dedicated landing pages for each case study.
   6. Contact: Multi-step contact form with VALIDATION.
*/

// --- 1. ANIMATION COMPONENTS ---
// ... (Keeping existing animations unchanged)
const PartTimeAnimation = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full text-white" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" strokeDasharray="10 10" className="animate-[spin_20s_linear_infinite]" />
    <g className="origin-center animate-[spin_10s_linear_infinite]">
      <line x1="100" y1="100" x2="100" y2="40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
    </g>
    <g className="origin-center animate-[spin_60s_linear_infinite]">
      <line x1="100" y1="100" x2="140" y2="100" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </g>
    <circle cx="100" cy="100" r="4" fill="currentColor" opacity="0.9" />
    <circle cx="160" cy="40" r="2" fill="currentColor" className="animate-ping" style={{ animationDuration: '3s' }} />
    <circle cx="40" cy="160" r="1.5" fill="currentColor" className="animate-ping" style={{ animationDuration: '4s' }} />
  </svg>
);

const FullTimeAnimation = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full text-white" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-float">
      <path d="M100 30 C100 30 140 90 140 130 C140 160 100 170 100 170 C100 170 60 160 60 130 C60 90 100 30 100 30 Z" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8" />
      <path d="M100 30 C100 30 140 90 140 130 C140 160 100 170 100 170 C100 170 60 160 60 130 C60 90 100 30 100 30 Z" fill="currentColor" opacity="0.05" />
      <circle cx="100" cy="100" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M60 130 L40 160 L65 155" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7" />
      <path d="M140 130 L160 160 L135 155" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7" />
      <path d="M90 175 L100 200 L110 175" fill="currentColor" className="animate-pulse" opacity="0.4" />
    </g>
    <rect x="30" y="20" width="1" height="30" fill="currentColor" opacity="0.3" className="animate-[pulse_1s_infinite]" />
    <rect x="170" y="60" width="1" height="20" fill="currentColor" opacity="0.3" className="animate-[pulse_1.5s_infinite]" />
    <rect x="10" y="100" width="1" height="15" fill="currentColor" opacity="0.3" className="animate-[pulse_2s_infinite]" />
  </svg>
);

const ProjectAnim = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full text-[#059669]" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    <line x1="50" y1="50" x2="350" y2="50" stroke="currentColor" strokeWidth="2" opacity="0.2" />
    <line x1="50" y1="150" x2="350" y2="150" stroke="currentColor" strokeWidth="2" opacity="0.2" />
    <line x1="50" y1="250" x2="350" y2="250" stroke="currentColor" strokeWidth="2" opacity="0.2" />
    <path d="M100 50 C 100 150, 150 50, 200 150" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" className="animate-[dash_3s_linear_infinite]" opacity="0.5" />
    <path d="M200 150 C 250 150, 250 250, 300 250" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" className="animate-[dash_3s_linear_infinite]" opacity="0.5" style={{ animationDelay: '1s' }} />
    <circle cx="100" cy="50" r="8" fill="white" stroke="currentColor" strokeWidth="3" className="animate-[pulse_2s_infinite]" />
    <circle cx="200" cy="150" r="8" fill="white" stroke="currentColor" strokeWidth="3" className="animate-[pulse_2s_infinite]" style={{ animationDelay: '0.5s' }} />
    <circle cx="300" cy="250" r="8" fill="white" stroke="currentColor" strokeWidth="3" className="animate-[pulse_2s_infinite]" style={{ animationDelay: '1s' }} />
    <rect x="120" y="30" width="60" height="40" rx="4" fill="white" stroke="currentColor" strokeWidth="1" opacity="0.8" className="animate-float" style={{ animationDuration: '4s' }} />
    <rect x="220" y="130" width="60" height="40" rx="4" fill="white" stroke="currentColor" strokeWidth="1" opacity="0.8" className="animate-float" style={{ animationDuration: '5s' }} />
  </svg>
);

const ArchitectureAnim = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full text-[#059669]" xmlns="http://www.w3.org/2000/svg">
    <path d="M120 100 C120 80 140 60 170 60 C190 60 210 70 220 85 C230 75 250 75 260 90 C280 90 290 110 280 130 C270 140 130 140 120 130 C110 120 110 110 120 100 Z" 
          fill="none" stroke="currentColor" strokeWidth="2" className="animate-[pulse_4s_infinite]" />
    <g transform="translate(100, 200)">
      <ellipse cx="40" cy="10" rx="30" ry="10" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M10 10 v40 a30 10 0 0 0 60 0 v-40" fill="none" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="40" cy="50" rx="30" ry="10" fill="currentColor" opacity="0.1" />
    </g>
    <g transform="translate(200, 200)">
      <ellipse cx="40" cy="10" rx="30" ry="10" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M10 10 v40 a30 10 0 0 0 60 0 v-40" fill="none" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="40" cy="50" rx="30" ry="10" fill="currentColor" opacity="0.1" />
    </g>
    <circle r="3" fill="currentColor" className="animate-ping">
      <animateMotion path="M170 130 L140 200" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle r="3" fill="currentColor" className="animate-ping">
      <animateMotion path="M230 130 L240 200" dur="2.5s" repeatCount="indefinite" />
    </circle>
  </svg>
);

const AnalysisAnim = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full text-[#059669]" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect x="40" y="40" width="320" height="220" rx="12" fill="white" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <line x1="40" y1="90" x2="360" y2="90" stroke="currentColor" strokeWidth="1" opacity="0.1" />
    <rect x="55" y="55" width="20" height="20" rx="4" fill="currentColor" opacity="0.1" />
    <rect x="85" y="60" width="100" height="10" rx="2" fill="currentColor" opacity="0.1" />
    <g transform="translate(60, 110)">
        <line x1="0" y1="0" x2="280" y2="0" stroke="currentColor" strokeWidth="1" opacity="0.05" />
        <line x1="0" y1="40" x2="280" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.05" />
        <line x1="0" y1="80" x2="280" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.05" />
        <line x1="0" y1="120" x2="280" y2="120" stroke="currentColor" strokeWidth="1" opacity="0.05" />
        <path d="M0,120 L0,100 C40,100 60,60 100,60 S160,90 200,50 S260,20 280,10 V120 Z" 
              fill="url(#areaGradient)" opacity="0">
            <animate attributeName="opacity" from="0" to="1" dur="1s" fill="freeze" />
        </path>
        <path d="M0,100 C40,100 60,60 100,60 S160,90 200,50 S260,20 280,10" 
              fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="350" strokeDashoffset="350">
            <animate attributeName="stroke-dashoffset" from="350" to="0" dur="2s" fill="freeze" />
        </path>
        <circle cx="100" cy="60" r="4" fill="white" stroke="currentColor" strokeWidth="2" opacity="0">
            <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="0.8s" fill="freeze" />
            <animate attributeName="r" values="4;6;4" dur="2s" begin="0.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="50" r="4" fill="white" stroke="currentColor" strokeWidth="2" opacity="0">
            <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1.4s" fill="freeze" />
            <animate attributeName="r" values="4;6;4" dur="2s" begin="1.4s" repeatCount="indefinite" />
        </circle>
    </g>
    <g transform="translate(270, 170)">
        <g opacity="0">
            <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="1.8s" fill="freeze" />
            <circle cx="40" cy="40" r="35" fill="white" stroke="currentColor" strokeWidth="1" opacity="0.9" filter="drop-shadow(0 4px 6px rgb(0 0 0 / 0.1))" />
            <path d="M40,40 L40,10 A30,30 0 0,1 66,25 Z" fill="currentColor" opacity="0.8" />
            <path d="M40,40 L66,25 A30,30 0 0,1 40,70 Z" fill="currentColor" opacity="0.4" />
            <path d="M40,40 L40,70 A30,30 0 1,1 40,10 Z" fill="currentColor" opacity="0.1" />
        </g>
    </g>
    <line x1="60" y1="110" x2="60" y2="230" stroke="currentColor" strokeWidth="2" opacity="0" strokeDasharray="4 2">
        <animate attributeName="x1" values="60;340" dur="3s" repeatCount="indefinite" begin="2s" />
        <animate attributeName="x2" values="60;340" dur="3s" repeatCount="indefinite" begin="2s" />
        <animate attributeName="opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite" begin="2s" />
    </line>
  </svg>
);

const WorkdayAnim = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full text-[#059669]" xmlns="http://www.w3.org/2000/svg">
    <circle cx="200" cy="150" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="200" cy="150" r="30" fill="currentColor" opacity="0.1" className="animate-pulse" />
    <text x="200" y="155" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="bold">HRIS</text>
    <g className="animate-[spin_20s_linear_infinite] origin-center" style={{ transformOrigin: "200px 150px" }}>
      <circle cx="200" cy="50" r="20" fill="white" stroke="currentColor" strokeWidth="2" />
      <path d="M200 110 L200 70" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="300" cy="200" r="20" fill="white" stroke="currentColor" strokeWidth="2" />
      <path d="M235 165 L280 190" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="100" cy="200" r="20" fill="white" stroke="currentColor" strokeWidth="2" />
      <path d="M165 165 L120 190" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
    </g>
    <circle cx="200" cy="50" r="8" fill="currentColor" opacity="0.5" />
    <circle cx="300" cy="200" r="8" fill="currentColor" opacity="0.5" />
    <circle cx="100" cy="200" r="8" fill="currentColor" opacity="0.5" />
  </svg>
);

const DynamicsAnim = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full text-[#059669]" xmlns="http://www.w3.org/2000/svg">
    <rect x="160" y="110" width="80" height="80" rx="8" fill="none" stroke="currentColor" strokeWidth="2" className="animate-[pulse_3s_infinite]" />
    <text x="200" y="155" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold">CRM</text>
    <rect x="60" y="50" width="60" height="40" rx="4" fill="white" stroke="currentColor" strokeWidth="1.5" opacity="0.8">
      <animate attributeName="x" values="60;70;60" dur="4s" repeatCount="indefinite" />
    </rect>
    <path d="M120 70 L160 110" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <rect x="280" y="50" width="60" height="40" rx="4" fill="white" stroke="currentColor" strokeWidth="1.5" opacity="0.8">
      <animate attributeName="x" values="280;270;280" dur="5s" repeatCount="indefinite" />
    </rect>
    <path d="M280 70 L240 110" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <rect x="60" y="210" width="60" height="40" rx="4" fill="white" stroke="currentColor" strokeWidth="1.5" opacity="0.8">
      <animate attributeName="x" values="60;70;60" dur="4.5s" repeatCount="indefinite" />
    </rect>
    <path d="M120 230 L160 190" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <rect x="280" y="210" width="60" height="40" rx="4" fill="white" stroke="currentColor" strokeWidth="1.5" opacity="0.8">
      <animate attributeName="x" values="280;270;280" dur="3.5s" repeatCount="indefinite" />
    </rect>
    <path d="M280 230 L240 190" stroke="currentColor" strokeWidth="1" opacity="0.3" />
  </svg>
);

const MarketingAnim = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full text-[#059669]" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid-marketing" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid-marketing)" />
    
    {/* Bar Chart Growth */}
    <rect x="80" y="220" width="40" height="0" fill="currentColor" opacity="0.6">
        <animate attributeName="height" from="0" to="60" dur="1s" fill="freeze" />
        <animate attributeName="y" from="220" to="160" dur="1s" fill="freeze" />
    </rect>
    <rect x="140" y="220" width="40" height="0" fill="currentColor" opacity="0.7">
        <animate attributeName="height" from="0" to="100" dur="1s" begin="0.2s" fill="freeze" />
        <animate attributeName="y" from="220" to="120" dur="1s" begin="0.2s" fill="freeze" />
    </rect>
    <rect x="200" y="220" width="40" height="0" fill="currentColor" opacity="0.8">
        <animate attributeName="height" from="0" to="140" dur="1s" begin="0.4s" fill="freeze" />
        <animate attributeName="y" from="220" to="80" dur="1s" begin="0.4s" fill="freeze" />
    </rect>
    <rect x="260" y="220" width="40" height="0" fill="currentColor" opacity="0.9">
        <animate attributeName="height" from="0" to="180" dur="1s" begin="0.6s" fill="freeze" />
        <animate attributeName="y" from="220" to="40" dur="1s" begin="0.6s" fill="freeze" />
    </rect>

    {/* Rising Trend Line */}
    <path d="M80 160 L140 120 L200 80 L260 40" fill="none" stroke="#fff" strokeWidth="3" strokeDasharray="300" strokeDashoffset="300" opacity="0.8">
        <animate attributeName="stroke-dashoffset" from="300" to="0" dur="1.5s" begin="1s" fill="freeze" />
    </path>
    
    {/* Target Icon */}
    <circle cx="330" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="2" opacity="0">
        <animate attributeName="opacity" to="1" dur="0.5s" begin="2s" fill="freeze" />
        <animate attributeName="r" values="20;25;20" dur="2s" begin="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="330" cy="40" r="8" fill="currentColor" opacity="0">
        <animate attributeName="opacity" to="0.8" dur="0.5s" begin="2s" fill="freeze" />
    </circle>
  </svg>
);

// --- 2. SHARED UI ELEMENTS ---

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-3 rounded-lg font-bold transition-all duration-300 group relative overflow-hidden cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
   
  const variants = {
    primary: "bg-[#059669] text-white hover:bg-[#047857] hover:shadow-lg border border-transparent disabled:hover:bg-[#059669] disabled:hover:shadow-none",
    glow: "bg-white text-[#059669] border border-[#059669] hover:bg-[#059669] hover:text-white hover:shadow-[0px_0px_20px_0px_rgba(5,150,105,0.3)]",
    simple: "text-slate-900 hover:text-[#059669] font-semibold"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center">
        {children}
      </span>
    </button>
  );
};

const SectionHeading = ({ sub, title, align = 'center', className = "" }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
    {sub && (
      <span className="text-[#059669] font-bold tracking-widest uppercase text-sm mb-4 block">
        {sub}
      </span>
    )}
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-slate-900">
      {title}
    </h2>
  </div>
);

// --- 3. PAGE SECTIONS ---

const Navbar = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNav = (view) => {
    onNavigate(view);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-white/95 backdrop-blur-md py-4 border-b border-slate-200 shadow-sm' : 'bg-white/95 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none py-4 lg:py-6 border-b lg:border-b-0 border-slate-200'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a onClick={() => handleNav('home')} className="block cursor-pointer">
          <img
            src="https://knowdata.ie/assets/Screenshot%202025-10-17%20at%2011.56.43_1760698746447-BDxWxUXy.png"
            alt="Knowdata Logo"
            className="h-12 w-auto object-contain"
          />
        </a>

        <div className="hidden lg:flex items-center space-x-8">
          <nav className="flex space-x-6">
            <button onClick={() => handleNav('services')} className="text-sm font-medium text-slate-600 hover:text-[#059669] transition-colors">Services</button>
            <button onClick={() => handleNav('case-studies')} className="text-sm font-medium text-slate-600 hover:text-[#059669] transition-colors">Case Studies</button>
            <button onClick={() => handleNav('industries')} className="text-sm font-medium text-slate-600 hover:text-[#059669] transition-colors">Industries</button>
          </nav>
          <Button variant="glow" className="py-2 px-6 text-sm" onClick={() => handleNav('contact')}>Contact Us</Button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-slate-900 relative z-50">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-20 bg-white z-40 p-6 flex flex-col space-y-6 lg:hidden overflow-y-auto">
          <button onClick={() => handleNav('services')} className="text-xl font-bold text-slate-900 hover:text-[#059669] text-left">Services</button>
          <button onClick={() => handleNav('case-studies')} className="text-xl font-bold text-slate-900 hover:text-[#059669] text-left">Case Studies</button>
          <button onClick={() => handleNav('industries')} className="text-xl font-bold text-slate-900 hover:text-[#059669] text-left">Industries</button>
          <Button variant="glow" className="w-full" onClick={() => handleNav('contact')}>Contact Us</Button>
        </div>
      )}
    </header>
  );
};

const Hero = ({ onNavigate }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20">
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 0%, #ecfdf5 0%, #ffffff 60%)" 
        }}
      />
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-40" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#059669" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" strokeLinecap="round">
          <path id="neuralPath1" d="M-100,400 C300,200 500,600 900,400 S1540,200 1540,400" />
          <path id="neuralPath2" d="M-100,600 C200,700 600,500 1000,600 S1540,500 1540,600" />
          <path id="neuralPath3" d="M-100,200 C400,300 800,100 1200,200 S1540,300 1540,200" />
          <path d="M400,100 L400,700" opacity="0.3" strokeDasharray="4 6" />
          <path d="M1000,100 L1000,700" opacity="0.3" strokeDasharray="4 6" />
          <path d="M200,300 L600,500" opacity="0.2" />
          <path d="M800,200 L1200,600" opacity="0.2" />
        </g>
        <circle r="4" fill="#059669" filter="url(#glow)">
          <animateMotion dur="15s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear"><mpath href="#neuralPath1" /></animateMotion>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="15s" repeatCount="indefinite" />
        </circle>
        <circle r="3" fill="#059669" opacity="0.6" filter="url(#glow)">
          <animateMotion dur="20s" repeatCount="indefinite" begin="2s" keyPoints="0;1" keyTimes="0;1"><mpath href="#neuralPath2" /></animateMotion>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="20s" repeatCount="indefinite" begin="2s" />
        </circle>
      </svg>
       
      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        <div className="inline-block animate-fade-in-up">
          <span className="bg-[#059669]/10 border border-[#059669]/20 rounded-full px-4 py-1 text-sm text-[#059669] font-semibold mb-6 inline-block">
            Operational Efficiency & Growth
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
          Working with <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">
            Businesses to Grow
          </span>
        </h1>
        
        <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          We help companies unlock growth through operational efficiency and strategic sales & marketing. By connecting you with the right services, including trusted accountants and law firms, we position your business for long term success.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" onClick={() => onNavigate('services')}>Explore Services</Button>
          <Button variant="glow" onClick={() => onNavigate('case-studies')}>View Case Studies</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 border-t border-slate-200 pt-12">
          {[
            { label: "Projects Delivered", value: "100+" },
            { label: "Active Markets", value: "4" },
            { label: "Customer Satisfaction", value: "99%" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-[#059669] font-bold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LogoMarquee = () => {
  const logos = [
    { name: "Microsoft", url: "https://static.wikia.nocookie.net/windows/images/3/33/Microsoft-logo.png/revision/latest?cb=20231201023319" },
    { name: "Workday", url: "https://www.drupal.org/files/Workday-logo.png" },
    { name: "Novartis", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Novartis-Logo.svg/1280px-Novartis-Logo.svg.png" },
    { name: "Oracle", url: "https://cdn-public.softwarereviews.com/production/logos/offerings/7845/original/Oracle-Logo_%283%29.png?1617160291" },
  ];

  return (
    <div className="bg-slate-50 py-12 border-y border-slate-200 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />
      <div className="flex space-x-24 animate-scroll whitespace-nowrap">
        {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
          <div key={idx} className="flex items-center justify-center">
            <img src={logo.url} alt={`${logo.name} Logo`} className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
          </div>
        ))}
      </div>
      <style>{`
        .animate-scroll { animation: scroll 40s linear infinite; }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
};

const Differentiator = () => {
  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute right-[-10%] top-[20%] w-[600px] h-[600px] rounded-full bg-[#059669] blur-[150px]" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading align="left" sub="Why KnowData" title={<>Powered by <span className="text-[#059669]">AI</span> & Strategic Partnerships</>} />
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              We leverage the power of AI to run projects more efficiently, streamline processes, and reduce costs. Automation enables us to provide top talent at affordable rates, ensuring maximum value for your investment.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 mr-4 min-w-[24px]"><Zap className="text-[#059669]" /></div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Efficiency through AI</h4>
                  <p className="text-slate-600">Automating routine tasks to allow our experts to focus on strategy.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-4 min-w-[24px]"><Users className="text-[#059669]" /></div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Partner Network</h4>
                  <p className="text-slate-600">Access to specialised expertise in accounting, legal services, product development, and compliance.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative perspective-1000">
            <div className="bg-white border border-slate-200 rounded-2xl aspect-square relative overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#059669 1px, transparent 1px), linear-gradient(90deg, #059669 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle at center, black, transparent 80%)' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#059669] blur-[60px] opacity-10 animate-pulse" />
                  <div className="w-24 h-24 bg-white border border-[#059669] rounded-full flex items-center justify-center relative z-10 shadow-lg">
                    <Cpu className="w-10 h-10 text-[#059669]" />
                  </div>
                  <div className="absolute inset-[-30px] border border-slate-200 rounded-full animate-[spin_10s_linear_infinite]" />
                  <div className="absolute inset-[-60px] border border-[#059669]/20 rounded-full animate-[spin_15s_linear_infinite_reverse] border-dashed" />
                  <div className="absolute inset-[-90px] border border-slate-100 rounded-full animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-[-90px] animate-[spin_8s_linear_infinite]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#059669] rounded-full shadow-md" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = ({ onNavigate }) => {
  const services = [
    {
      id: "project-management",
      title: "Project Management",
      desc: "End-to-end project delivery with proven methodologies. We ensure your projects are completed on time, within budget, and exceed expectations.",
      list: ["Agile & Waterfall methodologies", "Risk management & mitigation", "Stakeholder communication"],
      icon: <GitBranch className="w-8 h-8" />,
      animation: <ProjectAnim />
    },
    {
      id: "solutions-architecture",
      title: "Solutions Architecture",
      desc: "Design robust, scalable technology solutions that align with your business objectives and drive sustainable growth.",
      list: ["Cloud-native architectures", "AI/ML integration strategies", "Enterprise system design"],
      icon: <Settings className="w-8 h-8" />,
      animation: <ArchitectureAnim />
    },
    {
      id: "performance-marketing",
      title: "Performance Marketing",
      desc: "Drive measurable growth through data-driven paid media strategies, conversion optimisation, and targeted campaigns across key digital channels.",
      list: ["Paid Media Strategy (Google, Meta, TikTok)", "Conversion Rate Optimisation (CRO)", "Email & Social Media Management"],
      icon: <BarChart3 className="w-8 h-8" />,
      animation: <MarketingAnim />
    },
    {
      id: "business-analysis",
      title: "Business Analysis",
      desc: "Transform business requirements into actionable technology solutions with our experienced business analysts.",
      list: ["Requirements gathering & analysis", "Process optimisation", "Digital transformation strategy"],
      icon: <TrendingUp className="w-8 h-8" />,
      animation: <AnalysisAnim />
    },
    {
      id: "workday-hris",
      title: "Workday HRIS",
      desc: "Specialised Workday consulting and implementation services for human resource management system transformation.",
      list: ["Workday implementation & configuration", "HCM, Payroll & Benefits optimisation", "Integration & reporting solutions"],
      icon: <Users className="w-8 h-8" />,
      animation: <WorkdayAnim />
    },
    {
      id: "microsoft-dynamics",
      title: "Microsoft Dynamics",
      desc: "Expert Microsoft Dynamics consulting and implementation services for comprehensive business management solutions.",
      list: ["Dynamics 365 implementation", "CRM & ERP configuration", "Custom integrations & workflows"],
      icon: <Layout className="w-8 h-8" />,
      animation: <DynamicsAnim />
    }
  ];

  return (
    <section id="services" className="bg-white py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          sub="Our Services" 
          title={<>Tailored Solutions for <br /><span className="text-[#059669]">Long Term Success</span></>}
          className="mb-32"
        />

        <div className="space-y-32">
          {services.map((service, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              
              <div className="w-full lg:w-1/2 group perspective">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50 h-[400px] hover:shadow-2xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-[#059669]/5" />
                  <div className="absolute inset-0 p-8 flex items-center justify-center">
                    <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-700">
                      {service.animation}
                    </div>
                  </div>
                  <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#059669] blur-[80px] opacity-10 z-20 pointer-events-none" />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="bg-[#059669]/10 border border-[#059669]/20 p-4 rounded-xl text-[#059669]">
                    {service.icon}
                  </div>
                  <span className="text-[#059669] font-bold tracking-widest uppercase text-sm border-l-2 border-[#059669]/30 pl-4 py-1">
                    What We Do
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-[1.1]">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-xl">
                  {service.desc}
                </p>

                <ul className="space-y-4 mb-10">
                  {service.list.map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-[#059669] mr-3 shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="glow" className="group" onClick={() => onNavigate && onNavigate(`service-${service.id}`)}>
                  Learn More 
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EngagementModels = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading sub="Flexible Models" title="Engagement Options" />
        <p className="text-center text-xl text-slate-600 -mt-10 mb-16 max-w-3xl mx-auto">
          Choose the engagement model that best fits your project needs and budget requirements.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-3xl p-10 relative overflow-hidden group hover:shadow-2xl hover:shadow-slate-500/20 transition-all duration-300">
            <div className="absolute -top-10 -right-10 w-72 h-72 opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity duration-500">
              <PartTimeAnimation />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10 backdrop-blur-sm">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Part-Time Consulting</h3>
              <p className="text-slate-300 mb-8 text-lg leading-relaxed h-20">
                Perfect for ongoing support, strategic guidance, and smaller projects. Access expert consultants as needed.
              </p>
              <ul className="space-y-4 mb-10">
                {["Flexible hourly arrangements", "Strategic advisory services", "Project oversight & guidance", "Cost-effective solution"].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-[#059669] mr-3 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="primary" className="w-full bg-[#059669] text-white hover:bg-[#047857] border-transparent shadow-lg font-bold">
                Learn More
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#059669] to-[#047857] text-white rounded-3xl p-10 relative overflow-hidden group hover:shadow-2xl hover:shadow-[#059669]/40 transition-all duration-300">
            <div className="absolute -top-10 -right-10 w-72 h-72 opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity duration-500">
              <FullTimeAnimation />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10 backdrop-blur-sm">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Full-Time Engagement</h3>
              <p className="text-emerald-100 mb-8 text-lg leading-relaxed h-20">
                Ideal for large-scale transformations and critical projects. Dedicated resources fully committed to your success.
              </p>
              <ul className="space-y-4 mb-10">
                {["Dedicated project teams", "End-to-end project delivery", "Comprehensive project management", "Maximum impact & ROI"].map((item, i) => (
                  <li key={i} className="flex items-center text-emerald-50">
                    <CheckCircle2 className="w-5 h-5 text-white mr-3 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="primary" className="w-full bg-slate-900 text-white hover:bg-slate-800 border-transparent shadow-lg font-bold">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-20px) rotate(2deg); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

const IndustriesSection = ({ onNavigate }) => {
  const industries = [
    { id: "energy-utilities", title: "Energy & Utilities", desc: "Delivering large scale projects including CRM (Salesforce) and ERP Oracle software systems for industry leaders.", icon: <Zap className="w-8 h-8 text-white" /> },
    { id: "pharma", title: "Pharma", desc: "Executing complex web and application projects across European markets for major pharmaceutical companies.", icon: <FlaskConical className="w-8 h-8 text-white" /> },
    { id: "tech", title: "Tech", desc: "Building high-performance marketing websites and digital platforms for global technology giants.", icon: <Cpu className="w-8 h-8 text-white" /> },
    { id: "healthcare", title: "Healthcare", desc: "Specialising in Systems Implementation and complex technical integrations for healthcare organisations.", icon: <HeartPulse className="w-8 h-8 text-white" /> },
    { id: "telecommunications", title: "Telecommunications", desc: "Driving digital transformation through robust systems implementation and technical integrations.", icon: <Signal className="w-8 h-8 text-white" /> },
    { id: "medtech", title: "Medtech", desc: "Supporting medical technology innovation with scalable architecture and data-driven solutions.", icon: <Stethoscope className="w-8 h-8 text-white" /> }
  ];

  return (
    <section id="industries" className="bg-slate-50 py-32 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <SectionHeading sub="Sectors" title="Industries We Serve" align="center" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              onClick={() => onNavigate && onNavigate(`industry-${ind.id}`)}
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-[#059669] hover:shadow-xl transition-all duration-300 group flex flex-col items-start cursor-pointer"
            >
              <div className="bg-[#059669] p-4 rounded-xl shadow-lg shadow-[#059669]/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                {ind.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#059669] transition-colors">{ind.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{ind.desc}</p>
              <div className="mt-auto pt-6 border-t border-slate-100 w-full flex items-center text-[#059669] font-bold text-sm uppercase tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Explore Sector <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudyCard = ({ study, onClick }) => (
  <div onClick={onClick} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl flex flex-col h-full hover:shadow-2xl transition-shadow duration-300 cursor-pointer group">
    <div className="h-48 bg-gradient-to-r from-slate-900 to-slate-800 relative p-8 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#059669]/10 opacity-20" />
      <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/40 transition-colors duration-300" />
      <div className="relative z-10 text-center transform group-hover:scale-105 transition-transform duration-300">
        <div className="inline-block bg-[#059669] text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
          {study.industry}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{study.company}</h3>
        <p className="text-emerald-100 text-sm font-medium">{study.title}</p>
      </div>
    </div>
    <div className="p-8 flex-grow flex flex-col">
      <div className="mb-6">
        <h4 className="flex items-center text-[#059669] font-bold mb-3 uppercase text-xs tracking-wider"><Target className="w-4 h-4 mr-2" /> Objective</h4>
        <p className="text-slate-600 text-sm leading-relaxed">{study.objective}</p>
      </div>
      
      <div className="mt-auto">
        <div className="pt-6 border-t border-slate-100 flex items-center text-[#059669] font-bold text-sm group-hover:translate-x-2 transition-transform duration-300">
          View Case Study <ArrowRight className="ml-2 w-4 h-4" />
        </div>
      </div>
    </div>
  </div>
);

const CaseStudiesSection = ({ onNavigate }) => {
  const allCaseStudies = [
    {
      id: "microsoft",
      company: "Microsoft",
      industry: "Tech",
      title: "Digital Transformation Project",
      objective: "Drive sales growth for newly launched product lines in the Irish market."
    },
    {
      id: "global-healthcare",
      company: "Global Healthcare Org",
      industry: "Healthcare",
      title: "Workday Implementation",
      objective: "Deliver a fully integrated global HR system through Workday to unify data across regions."
    },
    {
      id: "european-telecoms",
      company: "European Telecoms Group",
      industry: "Telecommunications",
      title: "HR Integration Model",
      objective: "Establish a scalable, compliant HR integration model across European markets."
    },
    {
      id: "global-renewable",
      company: "Global Renewable Energy",
      industry: "Infrastructure",
      title: "Unified Workday Environment",
      objective: "Connect global workforce operations and enhance HR data transparency."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-24">
      <SectionHeading sub="Work" title="Detailed Case Studies" align="center" />
      <div className="grid md:grid-cols-2 gap-12">
        {allCaseStudies.map((study, idx) => (
          <CaseStudyCard 
            key={idx} 
            study={study} 
            onClick={() => onNavigate && onNavigate(`case-study-${study.id}`)} 
          />
        ))}
      </div>
    </div>
  );
}

const Footer = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <img src="https://knowdata.ie/assets/Screenshot%202025-10-17%20at%2011.56.43_1760698746447-BDxWxUXy.png" alt="Knowdata Logo" className="h-14 w-auto object-contain mb-6" />
            <p className="text-slate-600">Unlocking growth through operational efficiency and strategic sales & marketing.</p>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Contact</h4>
            <div className="flex items-start space-x-3 mb-4 text-slate-600"><MapPin className="w-5 h-5 text-[#059669] mt-1" /><span>Dublin, Ireland</span></div>
            <a href="mailto:info@knowdata.ie" className="text-slate-900 hover:text-[#059669] transition-colors block font-medium">info@knowdata.ie</a>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Links</h4>
            <ul className="space-y-3 text-slate-600">
              <li><button onClick={() => onNavigate('services')} className="hover:text-[#059669] transition-colors">Services</button></li>
              <li><button onClick={() => onNavigate('case-studies')} className="hover:text-[#059669] transition-colors">Case Studies</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-[#059669] transition-colors">Home</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Stay Connected</h4>
            <Button variant="glow" className="w-full" onClick={() => onNavigate('contact')}>Get in Touch</Button>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Knowdata.ie. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0"><a href="#" className="hover:text-[#059669]">Privacy Policy</a><a href="#" className="hover:text-[#059669]">Terms</a></div>
        </div>
      </div>
    </footer>
  );
};

// --- 4. INDIVIDUAL SERVICE DETAIL COMPONENT ---

const ServiceDetailPage = ({ serviceId, onNavigate }) => {
  // Enhanced Service Data Configuration with extended content
  const serviceData = {
    'project-management': {
      title: "Project Management",
      icon: <GitBranch className="w-16 h-16 text-[#059669]" />,
      shortDesc: "End-to-end project delivery with proven methodologies.",
      fullDesc: "End-to-end project delivery with proven methodologies ensuring your projects are completed on time, within budget, and exceed expectations. Our rigorous approach mitigates risks and keeps stakeholders aligned throughout the lifecycle.",
      features: [
        "Agile & Waterfall methodologies",
        "Risk management & mitigation",
        "Stakeholder communication",
        "Quality assurance & testing",
        "Change management",
        "Resource allocation & optimisation"
      ],
      benefits: [
        "Reduced project delivery time by 30%",
        "Improved stakeholder satisfaction",
        "Enhanced risk mitigation",
        "Better resource utilisation"
      ],
      animation: <ProjectAnim />
    },
    'performance-marketing': {
      title: "Performance Marketing",
      icon: <BarChart3 className="w-16 h-16 text-[#059669]" />,
      shortDesc: "Drive profit and growth with expert paid media and conversion strategies.",
      fullDesc: "Unlock your business's full potential with our comprehensive performance marketing services. We combine strategic consultancy with hands-on management of paid media campaigns across Google, Microsoft, Meta, and TikTok to generate the best possible profit. Our approach integrates email marketing, social media management, and rigorous conversion rate optimisation (CRO) to ensure every cent spent contributes to measurable growth.",
      features: [
        "Paid Media Strategy & Management (Google, Meta, TikTok)",
        "Profit-focused Consultancy",
        "Conversion Rate Optimisation (CRO)",
        "Email Marketing Automation",
        "Social Media Management",
        "Analytics & Performance Reporting"
      ],
      benefits: [
        "Maximised ROI & Profitability",
        "Optimised Ad Spend",
        "Higher Conversion Rates",
        "Scalable Customer Acquisition"
      ],
      animation: <MarketingAnim />
    },
    'solutions-architecture': {
      title: "Solutions Architecture",
      icon: <Settings className="w-16 h-16 text-[#059669]" />,
      shortDesc: "Design robust, scalable technology solutions for sustainable growth.",
      fullDesc: "Design robust, scalable technology solutions that align with your business objectives and drive sustainable growth through innovative architecture. We bridge the gap between complex requirements and technical implementation.",
      features: [
        "Cloud-native architectures",
        "AI/ML integration strategies",
        "Enterprise system design",
        "Microservices architecture",
        "API design & integration",
        "Security architecture"
      ],
      benefits: [
        "Improved system scalability",
        "Enhanced security posture",
        "Reduced operational costs",
        "Future-ready technology stack"
      ],
      animation: <ArchitectureAnim />
    },
    'business-analysis': {
      title: "Business Analysis",
      icon: <TrendingUp className="w-16 h-16 text-[#059669]" />,
      shortDesc: "Transform requirements into actionable tech solutions.",
      fullDesc: "Transform business requirements into actionable technology solutions with our experienced business analysts who bridge the gap between business and technology. We optimize processes and leverage insights for digital transformation.",
      features: [
        "Requirements gathering & analysis",
        "Process optimisation",
        "Digital transformation strategy",
        "Workflow automation",
        "Data analysis & insights",
        "User experience design"
      ],
      benefits: [
        "Streamlined business processes",
        "Improved operational efficiency",
        "Better decision-making capabilities",
        "Enhanced customer experience"
      ],
      animation: <AnalysisAnim />
    },
    'workday-hris': {
      title: "HRIS Technology - Workday",
      icon: <Users className="w-16 h-16 text-[#059669]" />,
      shortDesc: "Specialised Workday integration and consulting experts.",
      fullDesc: "Specialised Workday integration experts delivering comprehensive solutions architecture, seamless integrations, and advanced reporting capabilities for your enterprise HRIS needs.",
      features: [
        "Workday integrations & solutions architecture",
        "Payroll integrations & configurations",
        "Workday Studio development",
        "Orchestration & workflow automation",
        "Advanced reporting & analytics",
        "Enterprise system connectivity"
      ],
      benefits: [
        "Streamlined HR processes",
        "Automated payroll operations",
        "Real-time workforce analytics",
        "Enhanced system integration"
      ],
      animation: <WorkdayAnim />
    },
    'microsoft-dynamics': {
      title: "Microsoft Dynamics",
      icon: <Layout className="w-16 h-16 text-[#059669]" />,
      desc: "Expert Microsoft Dynamics consulting and implementation.",
      fullDesc: "Expert Microsoft Dynamics consulting and implementation services delivering comprehensive business management solutions with seamless CRM and ERP integrations.",
      features: [
        "Dynamics 365 implementation",
        "CRM & ERP configuration",
        "Custom integrations & workflows",
        "Power Platform development",
        "Data migration & integration",
        "User training & support"
      ],
      benefits: [
        "Unified business operations",
        "Enhanced customer relationships",
        "Automated business processes",
        "Improved data insights"
      ],
      animation: <DynamicsAnim />
    }
  };

  const service = serviceData[serviceId];

  if (!service) return <div className="pt-32 text-center">Service not found</div>;

  return (
    <div className="pt-28 md:pt-20 animate-fade-in bg-white min-h-screen">
      {/* 1. Hero Section */}
      <div className="bg-slate-900 py-32 text-center text-white relative overflow-hidden">
        {/* Neural Network Background Animation (Reused from Home) */}
        <svg 
          className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30" 
          viewBox="0 0 1440 800" 
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#059669" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" strokeLinecap="round">
            <path id="neuralPath1" d="M-100,400 C300,200 500,600 900,400 S1540,200 1540,400" />
            <path id="neuralPath2" d="M-100,600 C200,700 600,500 1000,600 S1540,500 1540,600" />
            <path id="neuralPath3" d="M-100,200 C400,300 800,100 1200,200 S1540,300 1540,200" />
            <path d="M400,100 L400,700" opacity="0.3" strokeDasharray="4 6" />
            <path d="M1000,100 L1000,700" opacity="0.3" strokeDasharray="4 6" />
            <path d="M200,300 L600,500" opacity="0.2" />
            <path d="M800,200 L1200,600" opacity="0.2" />
          </g>
          <g fill="#e2e8f0">
            <circle cx="400" cy="275" r="3" />
            <circle cx="900" cy="400" r="3" />
            <circle cx="1200" cy="200" r="3" />
            <circle cx="400" cy="530" r="3" />
            <circle cx="1000" cy="600" r="3" />
          </g>
          <circle r="4" fill="#059669" filter="url(#glow)">
            <animateMotion dur="15s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear"><mpath href="#neuralPath1" /></animateMotion>
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="15s" repeatCount="indefinite" />
          </circle>
          <circle r="3" fill="#059669" opacity="0.6" filter="url(#glow)">
            <animateMotion dur="20s" repeatCount="indefinite" begin="2s" keyPoints="0;1" keyTimes="0;1"><mpath href="#neuralPath2" /></animateMotion>
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="20s" repeatCount="indefinite" begin="2s" />
          </circle>
          <circle r="3" fill="#34d399" opacity="0.5">
            <animateMotion dur="12s" repeatCount="indefinite" begin="5s">
              <mpath href="#neuralPath3" />
            </animateMotion>
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="12s" repeatCount="indefinite" begin="5s" />
          </circle>
        </svg>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 p-6 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-sm text-[#059669]">
              {React.cloneElement(service.icon, { className: "w-20 h-20" })}
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">{service.title}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">{service.shortDesc}</p>
        </div>
      </div>

      {/* 2. Overview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#059669] font-bold uppercase tracking-widest text-sm mb-2 block">Overview</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Empowering your business with expert {service.title}</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {service.fullDesc}
              </p>
              <Button variant="primary" className="px-8 py-4 text-lg">
                Get Started
              </Button>
            </div>
            
            {/* Visual */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-50 aspect-[4/3] group">
                <div className="absolute inset-0 p-8 flex items-center justify-center">
                  <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-700">
                    {service.animation}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Key Features</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our {service.title} service is built on a foundation of comprehensive capabilities designed to drive your success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#059669] transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#059669]/10 rounded-xl flex items-center justify-center text-[#059669] mb-6 group-hover:bg-[#059669] group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature}</h3>
                <p className="text-slate-500 text-sm">We provide expert guidance and execution for {feature.toLowerCase()} to ensure project success.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Business Impact Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -left-20 -top-20 w-72 h-72 bg-[#059669]/10 rounded-full blur-3xl" />
              <div className="grid gap-6 relative z-10">
                 {service.benefits.map((benefit, i) => (
                   <div key={i} className="flex items-center p-6 bg-white border border-slate-100 rounded-xl shadow-lg hover:-translate-y-1 transition-transform duration-300">
                      <div className="bg-[#059669] p-3 rounded-full mr-6 text-white shadow-md">
                        <Trophy className="w-6 h-6" />
                      </div>
                      <span className="text-xl font-bold text-slate-800">{benefit}</span>
                   </div>
                 ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-[#059669] font-bold uppercase tracking-widest text-sm mb-2 block">Value</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Measurable Business Impact</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Investing in {service.title} isn't just about technology—it's about tangible outcomes. We focus on delivering results that matter to your bottom line and operational efficiency.
              </p>
              <ul className="space-y-4 mb-8">
                 <li className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-[#059669] rounded-full mr-3" />
                    <span>ROI-focused delivery</span>
                 </li>
                 <li className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-[#059669] rounded-full mr-3" />
                    <span>Scalable for future growth</span>
                 </li>
                 <li className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-[#059669] rounded-full mr-3" />
                    <span>Industry best practices</span>
                 </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Engagement Models */}
      <EngagementModels />
      
      {/* Back Link */}
      <div className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <button 
            onClick={() => onNavigate('services')} 
            className="text-[#059669] font-bold hover:underline flex items-center justify-center mx-auto text-lg group"
          >
            <ArrowRight className="w-5 h-5 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" /> 
            Back to All Services
          </button>
        </div>
      </div>
    </div>
  );
};

// --- 5. NEW CASE STUDY DETAIL COMPONENT ---

const CaseStudyDetailPage = ({ studyId, onNavigate }) => {
  // Detailed Case Study Data
  const caseStudyData = {
    'microsoft': {
      title: "Digital Transformation Project",
      company: "Microsoft",
      industry: "Tech",
      technology: "Dynamics 365",
      stat: "Sales & Awareness Uplift",
      objective: "Redefine strategic operations and create a roadmap to solidify Microsoft’s values in the Irish market.",
      quote: {
        text: "Digigrow have played a pivotal role in transforming and growing our business. They were able to bring an unprecedented level of quantitative analysis to our business operations which added a whole new dimension to our system... I cannot recommend them highly enough.",
        author: "Colin Chapman",
        role: "Commercial Director, Microsoft Ireland"
      },
      methodology: [
        "Brainstorming: Facilitated meetings with key stakeholders to verbalise strategic options.",
        "Risk Analysis: Quantified positive and negative risks to enable unbiased comparisons.",
        "Strategy Formulation: Dissected possibilities to organically develop the optimum strategic roadmap.",
        "Strategy Implementation: Developed realistic systems involving personnel planning and workflow analysis."
      ],
      results: [
        "Definition of a clear strategic roadmap for short, medium, and long-term goals.",
        "Streamlined business networks and symbiotic partnerships.",
        "Enhanced opportunity investigation and quantitative analysis.",
        "Development of lean, empowered workflows with clear process ownership."
      ],
      placeholderType: 'chart',
      fullDesc: "We worked with the Microsoft Ireland team to clarify, redefine, and reinvent their strategic plan. By facilitating brainstorming with key stakeholders, we solidified the core values acting as the foundation for the business. This led to a strategic roadmap outlining the organization's current position and future priorities, ensuring an aligned vision believed in by the entire team.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070"
    },
    'global-healthcare': {
      title: "Workday Implementation",
      company: "Global Healthcare Org",
      industry: "Healthcare",
      technology: "Workday HRIS",
      stat: "80% Efficiency Gain",
      objective: "Deliver a fully integrated global HR system through Workday to unify data and processes across multiple regions and business units.",
      methodology: [
        "Led the global integrations delivery stream as part of enterprise Workday rollout.",
        "Designed integration framework covering worker data, time tracking, payroll.",
        "Leveraged Workday Studio, custom connectors, and APIs for automation.",
        "Coordinated cross-functional HR and IT teams within an Agile delivery model."
      ],
      results: [
        "Deployed over 50 integrations across core HR, payroll, and benefits.",
        "Achieved 80% improvement in process efficiency through automation.",
        "Enabled real-time visibility of workforce data for leadership.",
        "Standardized processes and aligned data models globally."
      ],
      placeholderType: 'network',
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070"
    },
    'european-telecoms': {
      title: "HR Integration Model",
      company: "European Telecoms Group",
      industry: "Telecommunications",
      technology: "Custom Integrations",
      stat: "25+ Integrations",
      objective: "Establish a scalable and compliant HR integration model across European markets to support multi-country Workday deployment.",
      methodology: [
        "Managed integrations strategy harmonising HR and payroll data flow.",
        "Built a suite of custom APIs to support complex regulatory requirements.",
        "Developed integrations using Workday Studio and EIB tools.",
        "Maintained close collaboration with regional IT teams via Agile methodology."
      ],
      results: [
        "Delivered 25 integrations covering core HR, payroll, and compliance.",
        "Enabled consistent and secure data exchange with payroll vendors.",
        "Established foundation for expansion into new European markets.",
        "Ensured adherence to EU data handling and compliance standards."
      ],
      placeholderType: 'map',
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070"
    },
    'global-renewable': {
      title: "Unified Workday Environment",
      company: "Global Renewable Energy",
      industry: "Infrastructure",
      technology: "Workday Studio",
      stat: "70+ Integrations",
      objective: "Deploy a unified Workday environment that connects global workforce operations and enhances HR data transparency.",
      methodology: [
        "Directed end-to-end global integrations workstream.",
        "Designed comprehensive integration landscape using Workday Studio & APIs.",
        "Managed multiple workflows across time zones using Agile framework.",
        "Conducted detailed testing and validation phases to maintain data quality."
      ],
      results: [
        "Implemented 70+ integrations spanning payroll, time tracking, and analytics.",
        "Delivered a globally standardised HR data ecosystem.",
        "Supported thousands of employees across continents.",
        "Enabled improved workforce reporting and planning."
      ],
      placeholderType: 'dashboard',
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=2070"
    }
  };

  const study = caseStudyData[studyId];

  if (!study) return <div className="pt-32 text-center">Case Study not found</div>;

  return (
    <div className="pt-28 md:pt-20 animate-fade-in bg-white min-h-screen">
      {/* Hero Section - UPDATED TO ERGO STYLE */}
      <section className="relative w-full">
        <div className="container mx-auto px-6 pt-12 lg:pt-24 pb-12">
          <div className="flex flex-col lg:flex-row items-center relative">
            
            {/* Image Area - Prominent on Left/Center */}
            <div className="w-full lg:w-[65%] relative z-0">
               <div className="aspect-[16/10] overflow-hidden rounded-r-3xl lg:rounded-3xl shadow-2xl relative group">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700" 
                  />
                  {/* Subtle tint overlay */}
                  <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply transition-opacity duration-500" />
               </div>
            </div>

            {/* Content Area - Overlapping Card */}
            <div className="w-full lg:w-[45%] lg:-ml-[10%] relative z-10 mt-6 lg:mt-0">
                <div className="bg-white p-8 lg:p-12 shadow-2xl rounded-3xl border border-slate-100">
                    {/* Metadata Header inside card (Optional, similar to 'slide' content in Ergo) */}
                    <div className="flex items-center gap-3 text-sm text-slate-500 font-medium mb-6">
                        <span className="uppercase tracking-widest text-[#059669] font-bold">{study.industry}</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <span>1 MIN READ</span>
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-2">
                        {study.company} <br />
                        <span className="text-slate-500 font-serif italic text-3xl lg:text-4xl block mt-3 font-normal">
                          {study.title}
                        </span>
                    </h1>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* Case Head / Metadata Bar - ERGO STYLE */}
      <div className="border-y border-slate-100 bg-white py-10 mb-16">
          <div className="container mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="border-l-2 border-slate-100 pl-6">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Client</p>
                      <h6 className="text-lg font-bold text-slate-900 leading-tight">{study.company}</h6>
                  </div>
                  <div className="border-l-2 border-slate-100 pl-6">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Sector</p>
                      <h6 className="text-lg font-bold text-slate-900 leading-tight">{study.industry}</h6>
                  </div>
                  <div className="border-l-2 border-slate-100 pl-6">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Technology</p>
                      <h6 className="text-lg font-bold text-slate-900 leading-tight">{study.technology}</h6>
                  </div>
                   <div className="border-l-2 border-slate-100 pl-6">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Posted</p>
                      <h6 className="text-lg font-bold text-slate-900 leading-tight">2025</h6>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8">
            
            {/* Quote Section */}
            {study.quote && (
              <div className="mb-16 bg-slate-50 border-l-4 border-[#059669] p-8 rounded-r-xl italic text-slate-700 relative">
                <p className="text-lg mb-4">"{study.quote.text}"</p>
                <div className="font-bold text-slate-900 not-italic">
                  {study.quote.author} <span className="text-slate-500 font-normal"> - {study.quote.role}</span>
                </div>
              </div>
            )}

            {/* Overview / Challenge Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <Target className="w-8 h-8 text-[#059669] mr-4" /> The Challenge
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed pl-2">
                {study.fullDesc || study.objective}
              </p>
            </div>

            {/* Methodology Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
                <Lightbulb className="w-8 h-8 text-[#059669] mr-4" /> Our Approach
              </h2>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                <ul className="space-y-6">
                  {study.methodology.map((step, i) => (
                    <li key={i} className="flex">
                      <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center border border-slate-200 text-[#059669] font-bold shadow-sm mr-6">
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-lg text-slate-700 leading-relaxed">{step}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Results Section */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
                <Trophy className="w-8 h-8 text-[#059669] mr-4" /> Key Results
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {study.results.map((result, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#059669] mr-4 flex-shrink-0 mt-1" />
                    <p className="text-slate-700 font-medium">{result}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar / Visual Column */}
          <div className="lg:col-span-4 space-y-8">
            {/* Key Stat Card */}
            <div className="bg-[#059669] rounded-3xl p-8 text-white shadow-xl text-center">
              <div className="text-6xl font-bold mb-2 opacity-90">
                 <BarChart3 className="w-16 h-16 mx-auto mb-4" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Key Impact</h3>
              <p className="text-emerald-100 text-lg">{study.stat}</p>
            </div>

            {/* Visual Placeholder */}
            <div className="bg-slate-100 rounded-3xl h-80 flex items-center justify-center border-2 border-dashed border-slate-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-slate-200/50 group-hover:bg-slate-200 transition-colors" />
              <div className="text-center relative z-10 p-6">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-slate-400">
                  {study.placeholderType === 'chart' && <BarChart3 className="w-8 h-8"/>}
                  {study.placeholderType === 'network' && <Globe className="w-8 h-8"/>}
                  {study.placeholderType === 'map' && <MapPin className="w-8 h-8"/>}
                  {study.placeholderType === 'dashboard' && <Layout className="w-8 h-8"/>}
                </div>
                <p className="text-slate-500 font-medium">
                  {study.placeholderType === 'chart' && "Performance Data Visualization"}
                  {study.placeholderType === 'network' && "Global Integration Map"}
                  {study.placeholderType === 'map' && "European Operations Overview"}
                  {study.placeholderType === 'dashboard' && "Unified HR Dashboard"}
                </p>
                <p className="text-slate-400 text-xs mt-2 uppercase tracking-wide">Image Placeholder</p>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-slate-900 rounded-3xl p-8 text-center text-white border border-slate-800">
              <h3 className="font-bold text-xl mb-4">Facing similar challenges?</h3>
              <p className="text-slate-400 mb-6 text-sm">See how we can help your organization achieve these results.</p>
              <Button variant="primary" className="w-full">Contact Us</Button>
            </div>
          </div>

        </div>

        {/* Back Link */}
        <div className="mt-24 pt-12 border-t border-slate-200 text-center">
          <button onClick={() => onNavigate('case-studies')} className="text-[#059669] font-bold hover:underline flex items-center justify-center mx-auto text-lg">
            <ArrowRight className="w-5 h-5 mr-2 rotate-180" /> Back to Case Studies
          </button>
        </div>
      </div>
    </div>
  );
};

// --- 6. INDUSTRY DETAIL PAGE COMPONENT ---

const IndustryDetailPage = ({ industryId, onNavigate }) => {
  // Detailed Industry Data
  const industryData = {
    'energy-utilities': {
      title: "Energy & Utilities",
      icon: <Zap className="w-16 h-16 text-white" />,
      tagline: "Powering the Future of Energy Infrastructure",
      shortDesc: "Delivering large scale projects including CRM (Salesforce) and ERP Oracle software systems for industry leaders.",
      fullDesc: "We partner with leading energy and utility companies to implement robust enterprise systems that drive operational excellence. From Salesforce CRM implementations to comprehensive ERP solutions, our expertise spans the full spectrum of energy sector digital transformation. We understand the unique challenges of the energy sector, including regulatory compliance, asset management, and the transition to renewable energy sources.",
      features: [
        "Salesforce Energy & Utilities Cloud implementation",
        "Oracle ERP and asset management systems",
        "Smart grid and IoT integration solutions",
        "Regulatory compliance and reporting systems",
        "Customer billing and payment platforms",
        "Field service management optimization"
      ],
      benefits: [
        "Streamlined operations across generation, transmission, and distribution",
        "Enhanced customer experience with modern digital platforms",
        "Real-time visibility into asset performance and maintenance",
        "Improved regulatory compliance and reporting accuracy"
      ],
      caseStudies: ['global-renewable'],
      stats: [
        { label: "Enterprise Deployments", value: "50+" },
        { label: "System Integrations", value: "70+" },
        { label: "Efficiency Improvement", value: "60%" }
      ],
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2070"
    },
    'pharma': {
      title: "Pharmaceutical",
      icon: <FlaskConical className="w-16 h-16 text-white" />,
      tagline: "Accelerating Pharma Innovation Through Technology",
      shortDesc: "Executing complex web and application projects across European markets for major pharmaceutical companies.",
      fullDesc: "Our pharmaceutical clients benefit from our deep understanding of the industry's stringent regulatory requirements and complex supply chains. We deliver sophisticated web applications, clinical trial management systems, and enterprise integrations that support drug development, manufacturing, and distribution across global markets. Our solutions ensure compliance with FDA, EMA, and other regulatory bodies while maintaining the agility needed in today's competitive pharma landscape.",
      features: [
        "Clinical trial management systems (CTMS)",
        "Regulatory compliance and documentation platforms",
        "Supply chain and inventory management",
        "Quality management systems (QMS) integration",
        "Patient engagement and adherence platforms",
        "Analytics and reporting for R&D operations"
      ],
      benefits: [
        "Accelerated time-to-market for new drug development",
        "Enhanced regulatory compliance and audit readiness",
        "Improved collaboration across global research teams",
        "Real-time visibility into clinical trial progress"
      ],
      caseStudies: [],
      stats: [
        { label: "European Markets", value: "15+" },
        { label: "Compliance Systems", value: "100%" },
        { label: "Project Success Rate", value: "98%" }
      ],
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=2070"
    },
    'tech': {
      title: "Technology",
      icon: <Cpu className="w-16 h-16 text-white" />,
      tagline: "Building Digital Platforms for Tech Giants",
      shortDesc: "Building high-performance marketing websites and digital platforms for global technology giants.",
      fullDesc: "We work with leading technology companies to create cutting-edge digital experiences that showcase their products and drive customer engagement. From high-performance marketing websites to complex SaaS platforms, our solutions combine stunning design with robust technical architecture. We understand the fast-paced nature of the tech industry and deliver scalable, maintainable solutions that can evolve with your business.",
      features: [
        "High-performance marketing websites and landing pages",
        "SaaS platform development and architecture",
        "Developer portals and documentation sites",
        "Product demo and sandbox environments",
        "API integration and microservices architecture",
        "Performance optimization and CDN implementation"
      ],
      benefits: [
        "Lightning-fast load times and optimal user experience",
        "Scalable architecture supporting millions of users",
        "Seamless integration with existing tech stacks",
        "Modern, responsive design across all devices"
      ],
      caseStudies: ['microsoft'],
      stats: [
        { label: "Global Tech Clients", value: "25+" },
        { label: "Avg. Page Load Time", value: "<2s" },
        { label: "Uptime Guarantee", value: "99.9%" }
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070"
    },
    'healthcare': {
      title: "Healthcare",
      icon: <HeartPulse className="w-16 h-16 text-white" />,
      tagline: "Transforming Healthcare Through Digital Innovation",
      shortDesc: "Specialising in Systems Implementation and complex technical integrations for healthcare organisations.",
      fullDesc: "Healthcare organizations face unique challenges in managing patient data, ensuring regulatory compliance, and coordinating care across multiple systems. We specialize in Workday HRIS implementations, clinical system integrations, and patient engagement platforms that improve operational efficiency while maintaining the highest standards of data security and privacy. Our solutions support better patient outcomes through seamless information flow and improved care coordination.",
      features: [
        "Workday HRIS and workforce management",
        "Electronic Health Record (EHR) integrations",
        "Patient portal and engagement platforms",
        "Healthcare analytics and reporting",
        "HIPAA-compliant data management",
        "Telehealth and remote monitoring systems"
      ],
      benefits: [
        "Improved patient care coordination and outcomes",
        "Enhanced operational efficiency and staff productivity",
        "Robust security and regulatory compliance (HIPAA, GDPR)",
        "Real-time insights into workforce and resource utilization"
      ],
      caseStudies: ['global-healthcare'],
      stats: [
        { label: "Healthcare Deployments", value: "30+" },
        { label: "Efficiency Gain", value: "80%" },
        { label: "Security Compliance", value: "100%" }
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070"
    },
    'telecommunications': {
      title: "Telecommunications",
      icon: <Signal className="w-16 h-16 text-white" />,
      tagline: "Driving Digital Transformation in Telecom",
      shortDesc: "Driving digital transformation through robust systems implementation and technical integrations.",
      fullDesc: "Telecommunications companies operate in one of the most competitive and rapidly evolving industries. We help telecom providers modernize their operations through strategic system implementations and complex integrations. Our expertise spans HR systems, billing platforms, customer service applications, and network management tools. We've successfully delivered multi-country Workday deployments and custom integration solutions that support millions of customers across Europe.",
      features: [
        "Multi-country Workday HRIS deployments",
        "Billing and revenue management systems",
        "Customer service and CRM platforms",
        "Network management and monitoring tools",
        "API development and system integration",
        "Compliance and data governance solutions"
      ],
      benefits: [
        "Consistent operations across multiple European markets",
        "Improved customer service and reduced churn",
        "Scalable infrastructure supporting business growth",
        "Enhanced compliance with regional regulations"
      ],
      caseStudies: ['european-telecoms'],
      stats: [
        { label: "Countries Deployed", value: "12+" },
        { label: "Custom Integrations", value: "25+" },
        { label: "Active Users", value: "2M+" }
      ],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070"
    },
    'medtech': {
      title: "Medical Technology",
      icon: <Stethoscope className="w-16 h-16 text-white" />,
      tagline: "Innovating at the Intersection of Medicine and Technology",
      shortDesc: "Supporting medical technology innovation with scalable architecture and data-driven solutions.",
      fullDesc: "Medical technology companies are at the forefront of healthcare innovation, developing devices and software that save lives and improve patient outcomes. We provide technical expertise to support medtech companies through their growth journey, from startup to enterprise. Our solutions encompass product development platforms, clinical data management, regulatory submission systems, and scalable cloud architectures that support both R&D and commercial operations.",
      features: [
        "Medical device data management and analytics",
        "Regulatory submission and documentation systems",
        "Clinical trial data collection and analysis",
        "Quality management system (QMS) implementation",
        "IoT and connected device platforms",
        "Scalable cloud infrastructure (AWS, Azure, GCP)"
      ],
      benefits: [
        "Accelerated product development and time-to-market",
        "Robust data management for clinical and commercial use",
        "FDA and CE mark compliance support",
        "Scalable architecture supporting global growth"
      ],
      caseStudies: [],
      stats: [
        { label: "Medtech Clients", value: "15+" },
        { label: "FDA Submissions", value: "40+" },
        { label: "Data Accuracy", value: "99.9%" }
      ],
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=2070"
    }
  };

  const industry = industryData[industryId];

  if (!industry) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Industry Not Found</h2>
          <button onClick={() => onNavigate('industries')} className="text-[#059669] hover:underline">
            View All Industries
          </button>
        </div>
      </div>
    );
  }

  // Get related case studies
  const allCaseStudies = {
    'microsoft': {
      id: 'microsoft',
      title: "Digital Transformation Project",
      company: "Microsoft",
      industry: "Tech",
      technology: "Dynamics 365",
      stat: "Sales & Awareness Uplift"
    },
    'global-healthcare': {
      id: 'global-healthcare',
      title: "Workday Implementation",
      company: "Global Healthcare Org",
      industry: "Healthcare",
      technology: "Workday HRIS",
      stat: "80% Efficiency Gain"
    },
    'european-telecoms': {
      id: 'european-telecoms',
      title: "HR Integration Model",
      company: "European Telecoms Group",
      industry: "Telecommunications",
      technology: "Custom Integrations",
      stat: "25+ Integrations"
    },
    'global-renewable': {
      id: 'global-renewable',
      title: "Unified Workday Environment",
      company: "Global Renewable Energy",
      industry: "Infrastructure",
      technology: "Workday Studio",
      stat: "70+ Integrations"
    }
  };

  const relatedCaseStudies = industry.caseStudies.map(id => allCaseStudies[id]).filter(Boolean);

  return (
    <div className="pt-28 md:pt-20 animate-fade-in">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-[#059669] text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#059669] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-[#059669] rounded-2xl shadow-2xl shadow-[#059669]/50 mb-8">
              {industry.icon}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{industry.title}</h1>
            <p className="text-2xl text-slate-200 mb-8">{industry.tagline}</p>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {industry.fullDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {industry.stats && (
        <div className="bg-white py-16 border-b border-slate-200">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {industry.stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-[#059669] mb-2">{stat.value}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Image Section */}
      <div className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <img
              src={industry.image}
              alt={industry.title}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">Our Expertise</h2>
            <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
              Comprehensive solutions tailored to the unique challenges of the {industry.title.toLowerCase()} industry.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {industry.features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-[#059669] flex-shrink-0 mt-1" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">Key Benefits</h2>
            <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
              Transform your operations with solutions designed for measurable impact.
            </p>
            <div className="space-y-6">
              {industry.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-8 bg-white rounded-xl shadow-sm border border-slate-200 hover:border-[#059669] hover:shadow-lg transition-all">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#059669] text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {idx + 1}
                  </div>
                  <p className="text-slate-700 text-lg pt-1">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      {relatedCaseStudies.length > 0 && (
        <div className="bg-white py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">Success Stories</h2>
              <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
                See how we've helped {industry.title.toLowerCase()} organizations achieve their goals.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedCaseStudies.map((study) => (
                  <div
                    key={study.id}
                    onClick={() => onNavigate(`case-study-${study.id}`)}
                    className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-[#059669] hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-sm font-bold text-[#059669] uppercase mb-2">{study.industry}</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#059669] transition-colors">
                          {study.company}
                        </h3>
                      </div>
                      <ArrowUpRight className="w-6 h-6 text-slate-400 group-hover:text-[#059669] transition-colors" />
                    </div>
                    <p className="text-slate-600 mb-4">{study.title}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                      <span className="text-sm text-slate-500">{study.technology}</span>
                      <span className="text-sm font-bold text-[#059669]">{study.stat}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-[#059669] py-24 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your {industry.title} Operations?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="simple"
              className="bg-white text-[#059669] hover:bg-slate-100 hover:text-[#047857] px-8 py-4"
              onClick={() => onNavigate('contact')}
            >
              Start a Conversation
            </Button>
            <Button
              variant="simple"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#059669] px-8 py-4"
              onClick={() => onNavigate('case-studies')}
            >
              View All Case Studies
            </Button>
          </div>
        </div>
      </div>

      {/* Back Link */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <button
            onClick={() => onNavigate('industries')}
            className="text-[#059669] font-bold hover:underline flex items-center justify-center mx-auto text-lg"
          >
            <ArrowRight className="w-5 h-5 mr-2 rotate-180" /> Back to All Industries
          </button>
        </div>
      </div>
    </div>
  );
};

// --- 7. CONTACT PAGE COMPONENT ---

const ContactPage = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    budget: '',
    description: '',
    name: '',
    email: '',
    company: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    // Basic validation: allows +, spaces, dashes, parentheses, numbers. Min length 7.
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone) || /^\+?[\d\s-]{7,}$/.test(phone.replace(/\s/g, ''));
  };

  const validateStep = (currentStep) => {
    const newErrors = {};
    let isValid = true;

    if (currentStep === 1) {
      if (!formData.service) {
        newErrors.service = 'Please select a service to continue.';
        isValid = false;
      }
    }

    if (currentStep === 2) {
      if (!formData.budget) {
        newErrors.budget = 'Please select an estimated budget.';
        isValid = false;
      }
      if (!formData.description || formData.description.length < 10) {
        newErrors.description = 'Please provide a brief description (min 10 characters).';
        isValid = false;
      }
    }

    if (currentStep === 3) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required.';
        isValid = false;
      }
      if (!formData.company.trim()) {
        newErrors.company = 'Company name is required.';
        isValid = false;
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required.';
        isValid = false;
      } else if (!validateEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email address.';
        isValid = false;
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required.';
        isValid = false;
      } else if (!validatePhone(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number.';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setErrors({});
    setStep(step - 1);
  };
  
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field if it exists
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const services = [
    { id: 'project-management', label: 'Project Management', icon: <GitBranch className="w-6 h-6"/> },
    { id: 'performance-marketing', label: 'Performance Marketing', icon: <BarChart3 className="w-6 h-6"/> },
    { id: 'staff-augmentation', label: 'Staff Augmentation', icon: <Users className="w-6 h-6"/> },
    { id: 'consulting', label: 'Strategic Consulting', icon: <Lightbulb className="w-6 h-6"/> },
    { id: 'other', label: 'General Inquiry', icon: <MessageSquare className="w-6 h-6"/> }
  ];

  const budgets = ['< €10k', '€10k - €50k', '€50k - €100k', '€100k+'];

  return (
    <div className="pt-28 md:pt-20 min-h-screen bg-slate-50 flex flex-col">
      <div className="flex-grow container mx-auto px-6 py-12 flex flex-col items-center justify-center">
        
        {/* Progress Bar */}
        <div className="w-full max-w-2xl mb-12">
          <div className="flex justify-between mb-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${
                  step >= i ? 'bg-[#059669] text-white' : 'bg-slate-200 text-slate-400'
                }`}>
                  {step > i ? <Check className="w-5 h-5" /> : i}
                </div>
                <span className={`text-xs mt-2 uppercase tracking-wide font-medium ${
                  step >= i ? 'text-slate-900' : 'text-slate-400'
                }`}>
                  {i === 1 ? 'Service' : i === 2 ? 'Details' : 'Contact'}
                </span>
              </div>
            ))}
          </div>
          <div className="h-1 bg-slate-200 rounded-full w-full relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-[#059669] transition-all duration-500 ease-out"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            />
          </div>
        </div>

        {/* Card Container */}
        <div className="bg-white w-full max-w-2xl rounded-3xl shadow-xl border border-slate-200 p-8 md:p-12 relative overflow-hidden">
          
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">How can we help?</h2>
              <p className="text-slate-500 mb-8">Select the service you are interested in.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { handleChange('service', s.id); setErrors({}); }}
                    className={`p-6 rounded-xl border-2 text-left transition-all duration-200 hover:border-[#059669]/50 hover:bg-[#059669]/5 group relative ${
                      formData.service === s.id ? 'border-[#059669] bg-[#059669]/5 ring-1 ring-[#059669]' : 'border-slate-100 bg-slate-50'
                    }`}
                  >
                    <div className={`${formData.service === s.id ? 'text-[#059669]' : 'text-slate-400 group-hover:text-[#059669]'} mb-3`}>
                      {s.icon}
                    </div>
                    <span className={`font-bold text-lg ${formData.service === s.id ? 'text-[#059669]' : 'text-slate-700'}`}>
                      {s.label}
                    </span>
                    {formData.service === s.id && (
                        <div className="absolute top-4 right-4 w-6 h-6 bg-[#059669] rounded-full flex items-center justify-center text-white">
                            <Check className="w-4 h-4" />
                        </div>
                    )}
                  </button>
                ))}
              </div>
              {errors.service && (
                <div className="mt-4 flex items-center text-red-500 text-sm font-medium animate-pulse">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    {errors.service}
                </div>
              )}
              <div className="pt-8 flex justify-end">
                  <Button onClick={handleNext}>
                    Next Step <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
              </div>
            </div>
          )}

          {/* Step 2: Project Details */}
          {step === 2 && (
            <div className="animate-fade-in">
              <button onClick={handleBack} className="text-slate-400 hover:text-slate-600 mb-6 flex items-center text-sm font-medium">
                <ArrowRight className="w-4 h-4 mr-1 rotate-180" /> Back
              </button>
              
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Project Details</h2>
              <p className="text-slate-500 mb-8">Tell us a bit more about your needs.</p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Estimated Budget</label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        onClick={() => handleChange('budget', b)}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                          formData.budget === b 
                            ? 'bg-[#059669] text-white border-[#059669]' 
                            : 'bg-white text-slate-600 border-slate-200 hover:border-[#059669]'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                  {errors.budget && (
                    <div className="mt-2 text-red-500 text-xs font-medium flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" /> {errors.budget}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Project Description</label>
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    className={`w-full p-4 rounded-xl bg-slate-50 border focus:ring-1 outline-none transition-all resize-none ${
                        errors.description ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-[#059669] focus:ring-[#059669]'
                    }`}
                    placeholder="Briefly describe your project goals and requirements..."
                  />
                  {errors.description && (
                    <div className="mt-2 text-red-500 text-xs font-medium flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" /> {errors.description}
                    </div>
                  )}
                </div>

                <div className="pt-4 flex justify-end">
                  <Button onClick={handleNext}>
                    Next Step <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Contact Info */}
          {step === 3 && (
            <div className="animate-fade-in">
              <button onClick={handleBack} className="text-slate-400 hover:text-slate-600 mb-6 flex items-center text-sm font-medium">
                <ArrowRight className="w-4 h-4 mr-1 rotate-180" /> Back
              </button>

              <h2 className="text-3xl font-bold text-slate-900 mb-2">Contact Info</h2>
              <p className="text-slate-500 mb-8">Where should we send the proposal?</p>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Name</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className={`w-full pl-10 p-3 rounded-lg bg-slate-50 border outline-none focus:ring-1 transition-all ${
                            errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-[#059669] focus:ring-[#059669]'
                        }`}
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Company</label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                      <input 
                        type="text" 
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        className={`w-full pl-10 p-3 rounded-lg bg-slate-50 border outline-none focus:ring-1 transition-all ${
                            errors.company ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-[#059669] focus:ring-[#059669]'
                        }`}
                        placeholder="Acme Inc."
                      />
                    </div>
                    {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className={`w-full pl-10 p-3 rounded-lg bg-slate-50 border outline-none focus:ring-1 transition-all ${
                            errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-[#059669] focus:ring-[#059669]'
                        }`}
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className={`w-full pl-10 p-3 rounded-lg bg-slate-50 border outline-none focus:ring-1 transition-all ${
                            errors.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-[#059669] focus:ring-[#059669]'
                        }`}
                        placeholder="+353 ..."
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="pt-6 flex justify-end">
                  <Button onClick={handleNext}>
                    Submit Request
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <div className="animate-fade-in text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-[#059669]" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Sent!</h2>
              <p className="text-slate-600 mb-8 max-w-md mx-auto">
                Thank you for reaching out. Our team will review your project details and get back to you within 24 hours.
              </p>
              <Button variant="simple" onClick={() => onNavigate('home')}>
                Return to Home
              </Button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

// --- 7. PAGE VIEW COMPONENTS ---

const HomePage = ({ onNavigate }) => (
  <>
    <Hero onNavigate={onNavigate} />
    <LogoMarquee />
    <Differentiator />
    <ServicesSection onNavigate={onNavigate} />
    <EngagementModels />
    <CaseStudiesSection onNavigate={onNavigate} />
    <IndustriesSection onNavigate={onNavigate} />
  </>
);

const ServicesPage = ({ onNavigate }) => (
  <div className="pt-28 md:pt-20 animate-fade-in">
    <div className="bg-slate-50 py-24 text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">Our Expertise</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Comprehensive solutions tailored to your business needs. From strategic planning to technical execution, we are your partners in growth.
        </p>
      </div>
    </div>
    <ServicesSection onNavigate={onNavigate} />
    <EngagementModels />
    <div className="bg-[#059669] py-20 text-center text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Ready to transform your business?</h2>
        <Button variant="simple" className="bg-white text-[#059669] hover:bg-slate-100 hover:text-[#047857] px-8 py-4" onClick={() => onNavigate('contact')}>
          Get Started Today
        </Button>
      </div>
    </div>
  </div>
);

const CaseStudiesPage = ({ onNavigate }) => (
  <div className="pt-28 md:pt-20 animate-fade-in">
    <div className="bg-slate-900 py-24 text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[#059669]/10 opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-5xl font-bold mb-6">Success Stories</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          See how we've helped leading organizations across industries achieve measurable impact through technology and strategy.
        </p>
      </div>
    </div>
    <CaseStudiesSection onNavigate={onNavigate} />
  </div>
);

const IndustriesPage = ({ onNavigate }) => {
  const industries = [
    {
      id: "energy-utilities",
      title: "Energy & Utilities",
      desc: "Delivering large scale projects including CRM (Salesforce) and ERP Oracle software systems for industry leaders.",
      icon: <Zap className="w-12 h-12 text-white" />,
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "pharma",
      title: "Pharmaceutical",
      desc: "Executing complex web and application projects across European markets for major pharmaceutical companies.",
      icon: <FlaskConical className="w-12 h-12 text-white" />,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "tech",
      title: "Technology",
      desc: "Building high-performance marketing websites and digital platforms for global technology giants.",
      icon: <Cpu className="w-12 h-12 text-white" />,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "healthcare",
      title: "Healthcare",
      desc: "Specialising in Systems Implementation and complex technical integrations for healthcare organisations.",
      icon: <HeartPulse className="w-12 h-12 text-white" />,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "telecommunications",
      title: "Telecommunications",
      desc: "Driving digital transformation through robust systems implementation and technical integrations.",
      icon: <Signal className="w-12 h-12 text-white" />,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "medtech",
      title: "Medical Technology",
      desc: "Supporting medical technology innovation with scalable architecture and data-driven solutions.",
      icon: <Stethoscope className="w-12 h-12 text-white" />,
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-28 md:pt-20 animate-fade-in">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-[#059669] text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#059669] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <Target className="w-5 h-5" />
              <span className="text-sm font-medium">Industry Expertise</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              From energy to healthcare, we bring deep industry knowledge and technical excellence to solve your most complex challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {industries.map((industry) => (
              <div
                key={industry.id}
                onClick={() => onNavigate(`industry-${industry.id}`)}
                className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-[#059669] hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Industry Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-[#059669] p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {industry.icon}
                    </div>
                  </div>
                </div>

                {/* Industry Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#059669] transition-colors">
                      {industry.title}
                    </h3>
                    <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-[#059669] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {industry.desc}
                  </p>
                  <div className="flex items-center text-[#059669] font-medium text-sm group-hover:underline">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Industry-Specific Expertise
            </h2>
            <p className="text-lg text-slate-600">
              We don't just understand technology—we understand your industry. Our team combines technical excellence with deep domain knowledge to deliver solutions that address your unique challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center">
              <div className="w-16 h-16 bg-[#059669] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-[#059669]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Deep Domain Knowledge</h3>
              <p className="text-slate-600">
                Our consultants have worked extensively in your industry and understand the specific regulations, challenges, and opportunities you face.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center">
              <div className="w-16 h-16 bg-[#059669] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-[#059669]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Proven Track Record</h3>
              <p className="text-slate-600">
                We've delivered successful projects for leading organizations across all the industries we serve, with measurable results.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center">
              <div className="w-16 h-16 bg-[#059669] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-[#059669]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Future-Ready Solutions</h3>
              <p className="text-slate-600">
                Our solutions are built for scale and adaptability, ensuring they can grow and evolve with your business and industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#059669] py-24 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our industry expertise can help you achieve your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="simple"
              className="bg-white text-[#059669] hover:bg-slate-100 hover:text-[#047857] px-8 py-4"
              onClick={() => onNavigate('contact')}
            >
              Contact Us Today
            </Button>
            <Button
              variant="simple"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#059669] px-8 py-4"
              onClick={() => onNavigate('case-studies')}
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    if (currentView.startsWith('service-')) {
      const serviceId = currentView.replace('service-', '');
      return <ServiceDetailPage serviceId={serviceId} onNavigate={setCurrentView} />;
    }

    if (currentView.startsWith('case-study-')) {
      const studyId = currentView.replace('case-study-', '');
      return <CaseStudyDetailPage studyId={studyId} onNavigate={setCurrentView} />;
    }

    if (currentView.startsWith('industry-')) {
      const industryId = currentView.replace('industry-', '');
      return <IndustryDetailPage industryId={industryId} onNavigate={setCurrentView} />;
    }

    switch(currentView) {
      case 'contact':
        return <ContactPage onNavigate={setCurrentView} />;
      case 'services':
        return <ServicesPage onNavigate={setCurrentView} />;
      case 'case-studies':
        return <CaseStudiesPage onNavigate={setCurrentView} />;
      case 'industries':
        return <IndustriesPage onNavigate={setCurrentView} />;
      case 'home':
      default:
        return <HomePage onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="font-sans antialiased bg-white text-slate-900 selection:bg-[#059669] selection:text-white">
      <Navbar onNavigate={setCurrentView} />
      <main>
        {renderView()}
      </main>
      <Footer onNavigate={setCurrentView} />
      <style>{`
        .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}