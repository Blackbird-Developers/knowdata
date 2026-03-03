import React, { useState, useEffect } from 'react';
import {
  Menu, X, ArrowRight,
  Cpu, Users, CheckCircle2,
  Settings, TrendingUp,
  Zap, Target, Lightbulb, Trophy,
  Phone, Mail, MessageSquare, Briefcase, ChevronRight, Check,
  AlertCircle, BookOpen, Brain, Shield, BarChart3, RefreshCw,
  Building2, Eye, Layers, ChevronDown
} from 'lucide-react';

/* KNOWDATA.IE - RESTRUCTURED SITE
   Pages: Home, Services, AI Transformation, Workday Solution Architecture,
          Approach, About, Insights, Contact
*/

// --- 1. ANIMATION COMPONENTS ---

const AITransformAnim = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full text-[#059669]" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="aiGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
      </linearGradient>
    </defs>
    <circle cx="200" cy="150" r="50" fill="url(#aiGrad)" stroke="currentColor" strokeWidth="2" className="animate-pulse" />
    <text x="200" y="155" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold">AI</text>
    {/* Orbiting nodes */}
    <g className="animate-[spin_15s_linear_infinite]" style={{ transformOrigin: "200px 150px" }}>
      <circle cx="200" cy="60" r="16" fill="white" stroke="currentColor" strokeWidth="2" />
      <text x="200" y="64" textAnchor="middle" fill="currentColor" fontSize="8">Strategy</text>
      <path d="M200 100 L200 76" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
    </g>
    <g className="animate-[spin_20s_linear_infinite_reverse]" style={{ transformOrigin: "200px 150px" }}>
      <circle cx="310" cy="150" r="16" fill="white" stroke="currentColor" strokeWidth="2" />
      <text x="310" y="154" textAnchor="middle" fill="currentColor" fontSize="8">Integrate</text>
      <path d="M250 150 L294 150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
    </g>
    <g className="animate-[spin_18s_linear_infinite]" style={{ transformOrigin: "200px 150px" }}>
      <circle cx="90" cy="150" r="16" fill="white" stroke="currentColor" strokeWidth="2" />
      <text x="90" y="154" textAnchor="middle" fill="currentColor" fontSize="8">Optimise</text>
      <path d="M150 150 L106 150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
    </g>
    <g className="animate-[spin_22s_linear_infinite_reverse]" style={{ transformOrigin: "200px 150px" }}>
      <circle cx="200" cy="240" r="16" fill="white" stroke="currentColor" strokeWidth="2" />
      <text x="200" y="244" textAnchor="middle" fill="currentColor" fontSize="8">Change</text>
      <path d="M200 200 L200 224" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
    </g>
    <circle r="3" fill="currentColor" className="animate-ping" opacity="0.5">
      <animateMotion path="M200,100 C260,100 260,200 200,200 C140,200 140,100 200,100" dur="6s" repeatCount="indefinite" />
    </circle>
  </svg>
);

const WorkdayAnim = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full text-[#059669]" xmlns="http://www.w3.org/2000/svg">
    <circle cx="200" cy="150" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="200" cy="150" r="30" fill="currentColor" opacity="0.1" className="animate-pulse" />
    <text x="200" y="147" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="bold">Workday</text>
    <text x="200" y="160" textAnchor="middle" fill="currentColor" fontSize="8">HCM</text>
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

// --- 3. NAVBAR ---

const Navbar = ({ onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleNav = (view) => {
    onNavigate(view);
    setIsOpen(false);
    setServicesOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-white/95 backdrop-blur-md py-4 border-b border-slate-200 shadow-sm' : 'bg-white/95 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none py-4 lg:py-6 border-b lg:border-b-0 border-slate-200'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={() => handleNav('home')} className="block cursor-pointer bg-transparent border-none p-0">
          <img
            src="https://knowdata.ie/assets/Screenshot%202025-10-17%20at%2011.56.43_1760698746447-BDxWxUXy.png"
            alt="Knowdata Logo"
            className="h-12 w-auto object-contain"
          />
        </button>

        <div className="hidden lg:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button onClick={() => handleNav('services')} className="text-sm font-medium text-slate-600 hover:text-[#059669] transition-colors flex items-center gap-1">
                Services <ChevronDown className="w-3 h-3" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50">
                  <button onClick={() => handleNav('ai-transformation')} className="w-full text-left px-4 py-3 text-sm text-slate-600 hover:text-[#059669] hover:bg-slate-50 transition-colors flex items-center gap-3">
                    <Brain className="w-4 h-4 text-[#059669]" /> AI Transformation
                  </button>
                  <button onClick={() => handleNav('workday-architecture')} className="w-full text-left px-4 py-3 text-sm text-slate-600 hover:text-[#059669] hover:bg-slate-50 transition-colors flex items-center gap-3">
                    <Settings className="w-4 h-4 text-[#059669]" /> Workday Solution Architecture
                  </button>
                </div>
              )}
            </div>
            <button onClick={() => handleNav('approach')} className="text-sm font-medium text-slate-600 hover:text-[#059669] transition-colors">Approach</button>
            <button onClick={() => handleNav('about')} className="text-sm font-medium text-slate-600 hover:text-[#059669] transition-colors">About</button>
            <button onClick={() => handleNav('insights')} className="text-sm font-medium text-slate-600 hover:text-[#059669] transition-colors">Insights</button>
          </nav>
          <Button variant="glow" className="py-2 px-6 text-sm" onClick={() => handleNav('contact')}>Contact Us</Button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-slate-900 relative z-50">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed left-0 right-0 top-[80px] bottom-0 bg-white z-40 p-6 flex flex-col space-y-6 lg:hidden overflow-y-auto min-h-[calc(100vh-80px)]">
          <button onClick={() => handleNav('services')} className="text-xl font-bold text-slate-900 hover:text-[#059669] text-left">Services</button>
          <button onClick={() => handleNav('ai-transformation')} className="text-lg text-slate-600 hover:text-[#059669] text-left pl-4">AI Transformation</button>
          <button onClick={() => handleNav('workday-architecture')} className="text-lg text-slate-600 hover:text-[#059669] text-left pl-4">Workday Solution Architecture</button>
          <button onClick={() => handleNav('approach')} className="text-xl font-bold text-slate-900 hover:text-[#059669] text-left">Approach</button>
          <button onClick={() => handleNav('about')} className="text-xl font-bold text-slate-900 hover:text-[#059669] text-left">About</button>
          <button onClick={() => handleNav('insights')} className="text-xl font-bold text-slate-900 hover:text-[#059669] text-left">Insights</button>
          <Button variant="glow" className="w-full" onClick={() => handleNav('contact')}>Contact Us</Button>
        </div>
      )}
    </header>
  );
};

// --- 4. HOME PAGE SECTIONS ---

const Hero = ({ onNavigate }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 0%, #ecfdf5 0%, #ffffff 60%)" }}
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
            AI Strategy & Workday Solutions
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
          Reimagine How Your <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] to-[#047857]">
            Organisation Operates
          </span>
        </h1>

        <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          We guide organisations through AI transformation and Workday solution architecture that delivers measurable business progression. Not building on broken processes — reimagining them entirely.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" onClick={() => onNavigate('services')}>Explore Our Services</Button>
          <Button variant="glow" onClick={() => onNavigate('approach')}>Our Approach</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 border-t border-slate-200 pt-12">
          {[
            { label: "Enterprise Implementations", value: "100+" },
            { label: "Active Markets", value: "4" },
            { label: "Client Satisfaction", value: "99%" },
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

const Differentiator = ({ onNavigate }) => {
  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute right-[-10%] top-[20%] w-[600px] h-[600px] rounded-full bg-[#059669] blur-[150px]" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading align="left" sub="Why KnowData" title={<>Using AI to <span className="text-[#059669]">Reimagine</span>, Not Rebuild</>} />
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              We help companies define and build their Agentic Strategy. Creating a mind shift away from siloed solutions into collaborative solutions that input into the wider teams and drive enterprise-wide progression.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 mr-4 min-w-[24px]"><Brain className="text-[#059669]" /></div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">AI-Driven Transformation</h4>
                  <p className="text-slate-600">AI is the enabler, not the end goal. Every engagement is measured by business impact — improved efficiency, enhanced decision-making, competitive advantage.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-4 min-w-[24px]"><Settings className="text-[#059669]" /></div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Workday Solution Architecture</h4>
                  <p className="text-slate-600">Robust, secure, and efficient HCM implementations that scale with your business and support your long-term strategic vision.</p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Button variant="glow" onClick={() => onNavigate('services')}>
                View Our Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
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

const ServicePillarsOverview = ({ onNavigate }) => {
  const pillars = [
    {
      id: "ai-transformation",
      icon: <Brain className="w-8 h-8" />,
      title: "AI Transformation",
      subtitle: "Service Pillar 1",
      desc: "We guide organisations through AI transformation that delivers measurable business progression — enterprise-wide implementations that fundamentally improve how your organisation operates, decides, and competes.",
      features: ["AI Strategy Definition", "End-to-End Integration", "Change Management", "Continuous Optimisation"],
      animation: <AITransformAnim />
    },
    {
      id: "workday-architecture",
      icon: <Settings className="w-8 h-8" />,
      title: "Workday Solution Architecture",
      subtitle: "Service Pillar 2",
      desc: "We architect Workday technical and functional solutions that scale with your business. Delivering robust, secure, and efficient HCM implementations that support your long-term strategic vision while optimising day-one operations.",
      features: ["Deployment Architecture", "Tenant Optimisation", "Integration Architecture", "AI-Enhanced Workday"],
      animation: <WorkdayAnim />
    }
  ];

  return (
    <section className="bg-white py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          sub="Our Services"
          title={<>Two Pillars of <br /><span className="text-[#059669]">Enterprise Transformation</span></>}
          className="mb-24"
        />

        <div className="space-y-32">
          {pillars.map((pillar, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

              <div className="w-full lg:w-1/2 group perspective">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50 h-[400px] hover:shadow-2xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-[#059669]/5" />
                  <div className="absolute inset-0 p-8 flex items-center justify-center">
                    <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-700">
                      {pillar.animation}
                    </div>
                  </div>
                  <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#059669] blur-[80px] opacity-10 z-20 pointer-events-none" />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="bg-[#059669]/10 border border-[#059669]/20 p-4 rounded-xl text-[#059669]">
                    {pillar.icon}
                  </div>
                  <span className="text-[#059669] font-bold tracking-widest uppercase text-sm border-l-2 border-[#059669]/30 pl-4 py-1">
                    {pillar.subtitle}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-[1.1]">
                  {pillar.title}
                </h3>

                <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-xl">
                  {pillar.desc}
                </p>

                <ul className="space-y-4 mb-10">
                  {pillar.features.map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-[#059669] mr-3 shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="glow" className="group" onClick={() => onNavigate(pillar.id)}>
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

// --- 5. AI TRANSFORMATION PAGE ---

const AITransformationPage = ({ onNavigate }) => {
  const phases = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Assessment & Strategy",
      desc: "Identifying high-impact AI opportunities aligned with business objectives alongside a new unambiguous AI strategy."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Integration",
      desc: "Seamlessly embedding AI into existing enterprise systems to maximise value without disrupting operations."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Change Management",
      desc: "Ensuring organisational adoption through leadership engagement and comprehensive training programmes."
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Continuous Optimisation",
      desc: "Monitoring performance and refining implementations for sustained value and competitive advantage."
    }
  ];

  return (
    <div className="pt-28 md:pt-20 animate-fade-in bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-slate-900 py-32 text-center text-white relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradientAI" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#059669" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <g stroke="url(#lineGradientAI)" strokeWidth="1.5" fill="none" strokeLinecap="round">
            <path d="M-100,400 C300,200 500,600 900,400 S1540,200 1540,400" />
            <path d="M-100,600 C200,700 600,500 1000,600 S1540,500 1540,600" />
            <path d="M-100,200 C400,300 800,100 1200,200 S1540,300 1540,200" />
          </g>
        </svg>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 p-6 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-sm text-[#059669]">
              <Brain className="w-20 h-20" />
            </div>
          </div>
          <div className="inline-block mb-4">
            <span className="bg-[#059669]/20 text-[#059669] text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider">Service Pillar 1</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">AI Transformation</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We guide organisations through AI transformation that delivers measurable business progression — enterprise-wide implementations that fundamentally improve how your organisation operates, decides, and competes.
          </p>
        </div>
      </div>

      {/* Focus Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#059669] font-bold uppercase tracking-widest text-sm mb-2 block">Our Focus</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Organisational Progression Through AI</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We focus on organisational progression: improved efficiency, enhanced decision-making, and competitive advantage. AI is the enabler, not the end goal. Every engagement is measured by business impact.
              </p>
              <div className="space-y-4">
                {["Improved operational efficiency", "Enhanced decision-making capabilities", "Sustainable competitive advantage", "Measurable business outcomes"].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-[#059669] mr-3" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-50 aspect-[4/3] group">
              <div className="absolute inset-0 p-8 flex items-center justify-center">
                <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-700">
                  <AITransformAnim />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End-to-End Approach */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">AI End-to-End Transformation</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our comprehensive approach encompasses every stage of your AI journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#059669] transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#059669]/10 rounded-xl flex items-center justify-center text-[#059669] mb-6 group-hover:bg-[#059669] group-hover:text-white transition-colors">
                  {phase.icon}
                </div>
                <div className="text-sm text-[#059669] font-bold mb-2 uppercase tracking-wider">Phase {i + 1}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{phase.title}</h3>
                <p className="text-slate-600 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Define AI Strategy Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Define Your AI Company Strategy</h2>
              <p className="text-xl text-slate-600">
                Moving away from siloed solutions into collaborative approaches that drive enterprise-wide value.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <TrendingUp className="w-8 h-8 text-[#059669]" />, title: "Business Impact", desc: "Every initiative is measured by tangible business outcomes, not technology metrics." },
                { icon: <Users className="w-8 h-8 text-[#059669]" />, title: "Collaborative Solutions", desc: "Breaking down silos to create AI strategies that input into and elevate wider teams." },
                { icon: <Lightbulb className="w-8 h-8 text-[#059669]" />, title: "Agentic Strategy", desc: "Helping companies define and build their Agentic Strategy for autonomous AI operations." }
              ].map((item, i) => (
                <div key={i} className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#059669] py-20 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Ready to Define Your AI Strategy?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Let's discuss how AI can drive measurable progression for your organisation.</p>
          <Button variant="simple" className="bg-white text-[#059669] hover:bg-slate-100 hover:text-[#047857] px-8 py-4" onClick={() => onNavigate('contact')}>
            Get in Touch
          </Button>
        </div>
      </section>

      {/* Back Link */}
      <div className="bg-white py-12 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <button onClick={() => onNavigate('services')} className="text-[#059669] font-bold hover:underline flex items-center justify-center mx-auto text-lg group">
            <ArrowRight className="w-5 h-5 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" /> Back to All Services
          </button>
        </div>
      </div>
    </div>
  );
};

// --- 6. WORKDAY SOLUTION ARCHITECTURE PAGE ---

const WorkdayArchitecturePage = ({ onNavigate }) => {
  const services = [
    { icon: <Building2 className="w-6 h-6" />, title: "Initial Deployment Architecture", desc: "Designing secure, scalable Workday implementations from the ground up." },
    { icon: <RefreshCw className="w-6 h-6" />, title: "Tenant Optimisation", desc: "Auditing and improving existing Workday configurations for performance and efficiency." },
    { icon: <Layers className="w-6 h-6" />, title: "Integration Architecture", desc: "Designing and implementing robust integrations with third-party applications." },
    { icon: <Shield className="w-6 h-6" />, title: "Security & Compliance", desc: "Establishing security models and ensuring regulatory compliance." },
    { icon: <Settings className="w-6 h-6" />, title: "Business Process Design", desc: "Mapping workflows and optimising business processes within Workday." },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Reporting & Analytics", desc: "Creating data structures and reporting frameworks for actionable insights." },
    { icon: <Brain className="w-6 h-6" />, title: "AI-Enhanced Workday", desc: "Integrating AI capabilities to extend Workday's native functionality." }
  ];

  return (
    <div className="pt-28 md:pt-20 animate-fade-in bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-slate-900 py-32 text-center text-white relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradientWD" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#059669" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <g stroke="url(#lineGradientWD)" strokeWidth="1.5" fill="none" strokeLinecap="round">
            <path d="M-100,400 C300,200 500,600 900,400 S1540,200 1540,400" />
            <path d="M-100,600 C200,700 600,500 1000,600 S1540,500 1540,600" />
          </g>
        </svg>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 p-6 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-sm text-[#059669]">
              <Settings className="w-20 h-20" />
            </div>
          </div>
          <div className="inline-block mb-4">
            <span className="bg-[#059669]/20 text-[#059669] text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider">Service Pillar 2</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Workday Solution Architecture</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We architect Workday technical and functional solutions that scale with your business. Delivering robust, secure, and efficient HCM implementations that support your long-term strategic vision while optimising day-one operations.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Workday Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive Workday solution architecture services covering every aspect of your HCM journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#059669] transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#059669]/10 rounded-xl flex items-center justify-center text-[#059669] mb-6 group-hover:bg-[#059669] group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white aspect-[4/3] group">
              <div className="absolute inset-0 p-8 flex items-center justify-center">
                <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-700">
                  <WorkdayAnim />
                </div>
              </div>
            </div>
            <div>
              <span className="text-[#059669] font-bold uppercase tracking-widest text-sm mb-2 block">Expertise</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Technical & Functional Excellence</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our team combines deep Workday technical knowledge with functional expertise across HCM and Financials. We don't just implement — we architect solutions that align with your business strategy.
              </p>
              <div className="space-y-4">
                {[
                  "Scalable architecture supporting business growth",
                  "Secure implementations meeting regulatory requirements",
                  "Optimised day-one operations for immediate value",
                  "Long-term strategic vision alignment"
                ].map((item, i) => (
                  <div key={i} className="flex items-center p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                    <Trophy className="w-5 h-5 text-[#059669] mr-3" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#059669] py-20 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimise Your Workday Environment?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Whether you're a new or current Workday customer, let's discuss your architecture needs.</p>
          <Button variant="simple" className="bg-white text-[#059669] hover:bg-slate-100 hover:text-[#047857] px-8 py-4" onClick={() => onNavigate('contact')}>
            Start a Conversation
          </Button>
        </div>
      </section>

      {/* Back Link */}
      <div className="bg-white py-12 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <button onClick={() => onNavigate('services')} className="text-[#059669] font-bold hover:underline flex items-center justify-center mx-auto text-lg group">
            <ArrowRight className="w-5 h-5 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" /> Back to All Services
          </button>
        </div>
      </div>
    </div>
  );
};

// --- 7. APPROACH PAGE ---

const ApproachPage = ({ onNavigate }) => {
  const steps = [
    {
      num: "01",
      title: "Understand",
      desc: "We start by deeply understanding your organisation's current state, challenges, and strategic objectives. No assumptions — just thorough discovery.",
      icon: <Eye className="w-8 h-8" />
    },
    {
      num: "02",
      title: "Strategise",
      desc: "We define a clear, unambiguous strategy aligned with your business goals. Whether it's AI transformation or Workday architecture, every recommendation is grounded in measurable outcomes.",
      icon: <Target className="w-8 h-8" />
    },
    {
      num: "03",
      title: "Implement",
      desc: "We execute with precision, seamlessly embedding solutions into your existing enterprise systems. Our team works collaboratively with your people, not in isolation.",
      icon: <Layers className="w-8 h-8" />
    },
    {
      num: "04",
      title: "Optimise",
      desc: "We don't walk away after go-live. We monitor performance, refine implementations, and ensure sustained value through continuous optimisation.",
      icon: <RefreshCw className="w-8 h-8" />
    }
  ];

  return (
    <div className="pt-28 md:pt-20 animate-fade-in bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-[#059669] text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#059669] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Approach</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            We reimagine, not rebuild. Our methodology ensures that every engagement delivers measurable business progression through collaborative, enterprise-wide solutions.
          </p>
        </div>
      </div>

      {/* Steps */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-16">
              {steps.map((step, idx) => (
                <div key={idx} className={`flex flex-col md:flex-row items-start gap-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-[#059669]/10 rounded-2xl flex items-center justify-center text-[#059669] border border-[#059669]/20">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl font-bold text-slate-100">{step.num}</span>
                      <h3 className="text-3xl font-bold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Our Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Brain className="w-8 h-8 text-[#059669]" />, title: "Reimagine, Don't Rebuild", desc: "We don't build on broken processes. We reimagine how your organisation can operate with AI at its core." },
                { icon: <Users className="w-8 h-8 text-[#059669]" />, title: "Collaborative, Not Siloed", desc: "Solutions that break down barriers and create collaborative inputs into wider teams across your enterprise." },
                { icon: <TrendingUp className="w-8 h-8 text-[#059669]" />, title: "Measured by Impact", desc: "Every engagement is measured by business impact. We focus on progression, not just delivery." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                  <div className="w-16 h-16 bg-[#059669]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#059669] py-20 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Let's discuss how our approach can drive measurable outcomes for your organisation.</p>
          <Button variant="simple" className="bg-white text-[#059669] hover:bg-slate-100 hover:text-[#047857] px-8 py-4" onClick={() => onNavigate('contact')}>
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

// --- 8. ABOUT PAGE ---

const AboutPage = ({ onNavigate }) => {
  return (
    <div className="pt-28 md:pt-20 animate-fade-in bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-[#059669] text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#059669] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About KnowData</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            We're a consulting firm helping organisations harness the power of AI and Workday to drive real, measurable business progression.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#059669] font-bold uppercase tracking-widest text-sm mb-2 block">Our Mission</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Driving Organisational Progression</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  At KnowData, we believe AI should be used to reimagine how organisations operate — not to build on broken processes. We help companies define and build their Agentic Strategy, moving away from siloed thinking into collaborative, enterprise-wide solutions.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our team brings deep expertise across AI strategy, Workday technical architecture, and functional consulting to help both new and current Workday customers achieve their strategic goals.
                </p>
              </div>
              <div className="relative">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-10 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#059669 1px, transparent 1px), linear-gradient(90deg, #059669 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                  <div className="relative z-10 space-y-8">
                    {[
                      { value: "100+", label: "Enterprise Implementations" },
                      { value: "4", label: "Active Markets" },
                      { value: "99%", label: "Client Satisfaction" }
                    ].map((stat, i) => (
                      <div key={i} className="flex items-center gap-6">
                        <div className="text-4xl font-bold text-[#059669] min-w-[80px]">{stat.value}</div>
                        <div className="text-slate-600 font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <Brain className="w-8 h-8 text-[#059669]" />, title: "Innovation", desc: "Using AI to reimagine, not just automate. We push boundaries to deliver transformative outcomes." },
              { icon: <Users className="w-8 h-8 text-[#059669]" />, title: "Collaboration", desc: "Breaking down silos to build solutions that serve the entire organisation, not just individual teams." },
              { icon: <TrendingUp className="w-8 h-8 text-[#059669]" />, title: "Impact", desc: "Every engagement is measured by business outcomes. We focus on progression, not just project delivery." },
              { icon: <Shield className="w-8 h-8 text-[#059669]" />, title: "Trust", desc: "We build lasting partnerships with our clients through transparency, integrity, and consistent delivery." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center">
                <div className="w-16 h-16 bg-[#059669]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Market */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Who We Work With</h2>
            <p className="text-xl text-slate-600 mb-12">
              We partner with organisations that are open to new vision and provision — helping those who may be adverse to change embrace AI-driven transformation.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <div className="w-12 h-12 bg-[#059669]/10 rounded-xl flex items-center justify-center text-[#059669] mx-auto mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">New Workday Customers</h3>
                <p className="text-slate-600">Organisations looking to implement Workday with a robust, future-proof architecture from day one.</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <div className="w-12 h-12 bg-[#059669]/10 rounded-xl flex items-center justify-center text-[#059669] mx-auto mb-4">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Current Workday Customers</h3>
                <p className="text-slate-600">Organisations seeking to optimise, extend, and enhance their existing Workday environment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#059669] py-20 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">We'd love to learn about your organisation and discuss how we can help drive progression.</p>
          <Button variant="simple" className="bg-white text-[#059669] hover:bg-slate-100 hover:text-[#047857] px-8 py-4" onClick={() => onNavigate('contact')}>
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

// --- 9. INSIGHTS PAGE ---

const InsightsPage = ({ onNavigate }) => {
  const insights = [
    {
      category: "AI Strategy",
      title: "Using AI to Reimagine, Not Rebuild: A New Approach to Enterprise Transformation",
      excerpt: "Why building on broken processes limits your AI potential, and how a reimagined strategy delivers exponential value.",
      date: "Coming Soon"
    },
    {
      category: "Workday",
      title: "Scaling Workday Architecture for Global Operations",
      excerpt: "Best practices for designing Workday tenant architecture that supports growth across multiple regions and business units.",
      date: "Coming Soon"
    },
    {
      category: "AI Strategy",
      title: "Defining Your Agentic Strategy: A Guide for Enterprise Leaders",
      excerpt: "How to build an Agentic Strategy that moves your organisation from siloed AI projects to enterprise-wide transformation.",
      date: "Coming Soon"
    },
    {
      category: "Change Management",
      title: "From Resistance to Adoption: Leading AI Change in Your Organisation",
      excerpt: "Practical frameworks for ensuring organisational buy-in and sustainable adoption of AI-driven processes.",
      date: "Coming Soon"
    },
    {
      category: "Workday",
      title: "AI-Enhanced Workday: Extending Native Functionality",
      excerpt: "Exploring how AI capabilities can be integrated into Workday to unlock new levels of automation and insight.",
      date: "Coming Soon"
    },
    {
      category: "Industry Trends",
      title: "The Future of Collaborative Enterprise Solutions",
      excerpt: "Why the next wave of enterprise technology will prioritise cross-team collaboration over siloed department solutions.",
      date: "Coming Soon"
    }
  ];

  return (
    <div className="pt-28 md:pt-20 animate-fade-in bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-[#059669] text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#059669] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Insights</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Thought leadership on AI transformation, Workday architecture, and enterprise strategy.
          </p>
        </div>
      </div>

      {/* Insights Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {insights.map((insight, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-[#059669] transition-all duration-300 group flex flex-col">
                <div className="h-2 bg-[#059669]" />
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#059669] uppercase tracking-wider bg-[#059669]/10 px-3 py-1 rounded-full">{insight.category}</span>
                    <span className="text-xs text-slate-400">{insight.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#059669] transition-colors leading-tight">{insight.title}</h3>
                  <p className="text-slate-600 leading-relaxed flex-grow">{insight.excerpt}</p>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <span className="text-[#059669] font-medium text-sm flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" /> Read Article
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Stay Informed</h2>
            <p className="text-lg text-slate-600 mb-8">Get the latest insights on AI strategy and Workday architecture delivered to your inbox.</p>
            <Button variant="primary" onClick={() => onNavigate('contact')}>
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- 10. CONTACT PAGE ---

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

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(phone) || /^\+?[\d\s-]{7,}$/.test(phone.replace(/\s/g, ''));

  const validateStep = (currentStep) => {
    const newErrors = {};
    let isValid = true;

    if (currentStep === 1) {
      if (!formData.service) { newErrors.service = 'Please select a service to continue.'; isValid = false; }
    }
    if (currentStep === 2) {
      if (!formData.budget) { newErrors.budget = 'Please select an estimated budget.'; isValid = false; }
      if (!formData.description || formData.description.length < 10) { newErrors.description = 'Please provide a brief description (min 10 characters).'; isValid = false; }
    }
    if (currentStep === 3) {
      if (!formData.name.trim()) { newErrors.name = 'Name is required.'; isValid = false; }
      if (!formData.company.trim()) { newErrors.company = 'Company name is required.'; isValid = false; }
      if (!formData.email.trim()) { newErrors.email = 'Email is required.'; isValid = false; }
      else if (!validateEmail(formData.email)) { newErrors.email = 'Please enter a valid email address.'; isValid = false; }
      if (!formData.phone.trim()) { newErrors.phone = 'Phone number is required.'; isValid = false; }
      else if (!validatePhone(formData.phone)) { newErrors.phone = 'Please enter a valid phone number.'; isValid = false; }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => { if (validateStep(step)) setStep(step + 1); };
  const handleBack = () => { setErrors({}); setStep(step - 1); };
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }));
  };

  const services = [
    { id: 'ai-transformation', label: 'AI Transformation', icon: <Brain className="w-6 h-6"/> },
    { id: 'workday-architecture', label: 'Workday Solution Architecture', icon: <Settings className="w-6 h-6"/> },
    { id: 'ai-strategy', label: 'AI Strategy Consulting', icon: <Lightbulb className="w-6 h-6"/> },
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
                <span className={`text-xs mt-2 uppercase tracking-wide font-medium ${step >= i ? 'text-slate-900' : 'text-slate-400'}`}>
                  {i === 1 ? 'Service' : i === 2 ? 'Details' : 'Contact'}
                </span>
              </div>
            ))}
          </div>
          <div className="h-1 bg-slate-200 rounded-full w-full relative overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-[#059669] transition-all duration-500 ease-out" style={{ width: `${((step - 1) / 2) * 100}%` }} />
          </div>
        </div>

        {/* Card Container */}
        <div className="bg-white w-full max-w-2xl rounded-3xl shadow-xl border border-slate-200 p-8 md:p-12 relative overflow-hidden">

          {/* Step 1 */}
          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">How can we help?</h2>
              <p className="text-slate-500 mb-8">Select the service you are interested in.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((s) => (
                  <button key={s.id} onClick={() => { handleChange('service', s.id); setErrors({}); }}
                    className={`p-6 rounded-xl border-2 text-left transition-all duration-200 hover:border-[#059669]/50 hover:bg-[#059669]/5 group relative ${
                      formData.service === s.id ? 'border-[#059669] bg-[#059669]/5 ring-1 ring-[#059669]' : 'border-slate-100 bg-slate-50'
                    }`}>
                    <div className={`${formData.service === s.id ? 'text-[#059669]' : 'text-slate-400 group-hover:text-[#059669]'} mb-3`}>{s.icon}</div>
                    <span className={`font-bold text-lg ${formData.service === s.id ? 'text-[#059669]' : 'text-slate-700'}`}>{s.label}</span>
                    {formData.service === s.id && (
                      <div className="absolute top-4 right-4 w-6 h-6 bg-[#059669] rounded-full flex items-center justify-center text-white"><Check className="w-4 h-4" /></div>
                    )}
                  </button>
                ))}
              </div>
              {errors.service && (
                <div className="mt-4 flex items-center text-red-500 text-sm font-medium animate-pulse"><AlertCircle className="w-4 h-4 mr-2" />{errors.service}</div>
              )}
              <div className="pt-8 flex justify-end">
                <Button onClick={handleNext}>Next Step <ChevronRight className="w-4 h-4 ml-2" /></Button>
              </div>
            </div>
          )}

          {/* Step 2 */}
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
                      <button key={b} onClick={() => handleChange('budget', b)}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                          formData.budget === b ? 'bg-[#059669] text-white border-[#059669]' : 'bg-white text-slate-600 border-slate-200 hover:border-[#059669]'
                        }`}>{b}</button>
                    ))}
                  </div>
                  {errors.budget && <div className="mt-2 text-red-500 text-xs font-medium flex items-center"><AlertCircle className="w-3 h-3 mr-1" /> {errors.budget}</div>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Project Description</label>
                  <textarea rows={4} value={formData.description} onChange={(e) => handleChange('description', e.target.value)}
                    className={`w-full p-4 rounded-xl bg-slate-50 border focus:ring-1 outline-none transition-all resize-none ${
                      errors.description ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-[#059669] focus:ring-[#059669]'
                    }`} placeholder="Briefly describe your project goals and requirements..." />
                  {errors.description && <div className="mt-2 text-red-500 text-xs font-medium flex items-center"><AlertCircle className="w-3 h-3 mr-1" /> {errors.description}</div>}
                </div>
                <div className="pt-4 flex justify-end">
                  <Button onClick={handleNext}>Next Step <ChevronRight className="w-4 h-4 ml-2" /></Button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3 */}
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
                      <input type="text" value={formData.name} onChange={(e) => handleChange('name', e.target.value)}
                        className={`w-full pl-10 p-3 rounded-lg bg-slate-50 border outline-none focus:ring-1 transition-all ${
                          errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-[#059669] focus:ring-[#059669]'
                        }`} placeholder="John Doe" />
                    </div>
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Company</label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                      <input type="text" value={formData.company} onChange={(e) => handleChange('company', e.target.value)}
                        className={`w-full pl-10 p-3 rounded-lg bg-slate-50 border outline-none focus:ring-1 transition-all ${
                          errors.company ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-[#059669] focus:ring-[#059669]'
                        }`} placeholder="Acme Inc." />
                    </div>
                    {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                      <input type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)}
                        className={`w-full pl-10 p-3 rounded-lg bg-slate-50 border outline-none focus:ring-1 transition-all ${
                          errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-[#059669] focus:ring-[#059669]'
                        }`} placeholder="john@example.com" />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                      <input type="tel" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)}
                        className={`w-full pl-10 p-3 rounded-lg bg-slate-50 border outline-none focus:ring-1 transition-all ${
                          errors.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-[#059669] focus:ring-[#059669]'
                        }`} placeholder="+353 ..." />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>
                <div className="pt-6 flex justify-end">
                  <Button onClick={handleNext}>Submit Request</Button>
                </div>
              </div>
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div className="animate-fade-in text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-[#059669]" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Sent!</h2>
              <p className="text-slate-600 mb-8 max-w-md mx-auto">
                Thank you for reaching out. Our team will review your project details and get back to you within 24 hours.
              </p>
              <Button variant="simple" onClick={() => onNavigate('home')}>Return to Home</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- 11. FOOTER ---

const Footer = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <img src="https://knowdata.ie/assets/Screenshot%202025-10-17%20at%2011.56.43_1760698746447-BDxWxUXy.png" alt="Knowdata Logo" className="h-14 w-auto object-contain mb-6" />
            <p className="text-slate-600">Guiding organisations through AI transformation and Workday solution architecture for measurable business progression.</p>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-slate-600">
              <li><button onClick={() => onNavigate('ai-transformation')} className="hover:text-[#059669] transition-colors">AI Transformation</button></li>
              <li><button onClick={() => onNavigate('workday-architecture')} className="hover:text-[#059669] transition-colors">Workday Solution Architecture</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-slate-600">
              <li><button onClick={() => onNavigate('approach')} className="hover:text-[#059669] transition-colors">Approach</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-[#059669] transition-colors">About</button></li>
              <li><button onClick={() => onNavigate('insights')} className="hover:text-[#059669] transition-colors">Insights</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-[#059669] transition-colors">Home</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Get in Touch</h4>
            <p className="text-slate-600 mb-4">Dublin, Ireland</p>
            <a href="mailto:info@knowdata.ie" className="text-slate-900 hover:text-[#059669] transition-colors block font-medium mb-6">info@knowdata.ie</a>
            <Button variant="glow" className="w-full" onClick={() => onNavigate('contact')}>Contact Us</Button>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Knowdata.ie. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0"><button onClick={() => onNavigate('contact')} className="hover:text-[#059669] bg-transparent border-none p-0 cursor-pointer text-slate-500">Privacy Policy</button><button onClick={() => onNavigate('contact')} className="hover:text-[#059669] bg-transparent border-none p-0 cursor-pointer text-slate-500">Terms</button></div>
        </div>
      </div>
    </footer>
  );
};

// --- 12. PAGE VIEW COMPONENTS ---

const HomePage = ({ onNavigate }) => (
  <>
    <Hero onNavigate={onNavigate} />
    <Differentiator onNavigate={onNavigate} />
    <ServicePillarsOverview onNavigate={onNavigate} />
  </>
);

const ServicesPage = ({ onNavigate }) => (
  <div className="pt-28 md:pt-20 animate-fade-in">
    <div className="bg-slate-50 py-24 text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">Our Services</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Two core pillars of expertise: AI-driven organisational transformation and Workday solution architecture. Together, they deliver enterprise-wide progression.
        </p>
      </div>
    </div>
    <ServicePillarsOverview onNavigate={onNavigate} />
    <div className="bg-[#059669] py-20 text-center text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Ready to transform your organisation?</h2>
        <Button variant="simple" className="bg-white text-[#059669] hover:bg-slate-100 hover:text-[#047857] px-8 py-4" onClick={() => onNavigate('contact')}>
          Get Started Today
        </Button>
      </div>
    </div>
  </div>
);

// --- 13. MAIN APP COMPONENT ---

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch(currentView) {
      case 'contact':
        return <ContactPage onNavigate={setCurrentView} />;
      case 'services':
        return <ServicesPage onNavigate={setCurrentView} />;
      case 'ai-transformation':
        return <AITransformationPage onNavigate={setCurrentView} />;
      case 'workday-architecture':
        return <WorkdayArchitecturePage onNavigate={setCurrentView} />;
      case 'approach':
        return <ApproachPage onNavigate={setCurrentView} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentView} />;
      case 'insights':
        return <InsightsPage onNavigate={setCurrentView} />;
      case 'home':
      default:
        return <HomePage onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="font-sans antialiased bg-white text-slate-900 selection:bg-[#059669] selection:text-white">
      <Navbar onNavigate={setCurrentView} currentView={currentView} />
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
