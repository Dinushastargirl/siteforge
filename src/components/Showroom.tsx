import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ZoloCore from './ZoloCore';
import ProductCard from './ProductCard';
import TemplateGallery from './TemplateGallery';
import ForgeBot from './ForgeBot';
import Pipeline from './Pipeline';
import { 
  Zap, Bot, Layout, ArrowDown, ChevronRight, PhoneOff, CalendarClock, TrendingUp,
  Users, TrendingDown, ShieldCheck, DollarSign, Calculator, Award, ArrowRight, UserCheck,
  MapPin, Star
} from 'lucide-react';

export default function Showroom() {
  const [jobValue, setJobValue] = useState<number>(350);
  const [missedCalls, setMissedCalls] = useState<number>(10);
  const [currentSetup, setCurrentSetup] = useState<'none' | 'slow' | 'social'>('none');
  const [zoloTab, setZoloTab] = useState<'logs' | 'chat'>('chat');

  const getLeakFactor = () => {
    switch (currentSetup) {
      case 'none': return 1.0;
      case 'slow': return 0.75;
      case 'social': return 0.50;
      default: return 1.0;
    }
  };

  const monthlyLeak = Math.round(jobValue * missedCalls * getLeakFactor());
  const annualLeak = Math.round(monthlyLeak * 12);
  const zoloRecovery = Math.round(monthlyLeak * 0.85);

  return (
    <main className="bg-[#050505] min-h-screen text-white overflow-x-hidden selection:bg-[#00f3ff]/30">
      <Pipeline />
      <ForgeBot />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 md:px-12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full bg-[#b87333]/5 blur-[80px] md:blur-[120px]" />
          <div className="absolute bottom-[10%] right-[5%] w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full bg-[#00f3ff]/5 blur-[80px] md:blur-[120px]" />
          
          {/* Scanning Lines Effect */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>

        <div className="container mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            <div className="space-y-2">
              <span className="text-[#00f3ff] text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] md:tracking-[0.5em] font-bold">HEAVY-DUTY WEBSITES FOR LOCAL TRADES</span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight lg:leading-none">
                SITE<span className="text-[#b87333]">FORGE</span>
              </h1>
            </div>
            
            <p className="text-base md:text-xl text-white/70 mx-auto lg:mx-0 max-w-xl leading-relaxed">
              We build high-converting, industrial-grade websites for hard-working USA business owners. 
              Get more local jobs, dominate Google, and automate bookings with <span className="text-[#00f3ff] font-bold">Zolo AI</span>—your 24/7 Virtual Office Assistant.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4 md:pt-6">
              <button className="w-full sm:w-auto px-8 py-4 md:py-5 bg-[#b87333] hover:bg-[#a0622a] text-white font-bold rounded-xl flex items-center justify-center gap-3 group transition-all shadow-[0_0_30px_rgba(184,115,51,0.2)]">
                Launch Showroom <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 md:py-5 bg-white/5 border border-white/10 hover:border-white/20 text-white font-bold rounded-xl transition-all">
                Book a Demo
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[300px] sm:h-[400px] lg:h-[500px] order-first lg:order-last"
          >
            <ZoloCore />
            <div className="absolute -bottom-4 lg:-bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-xl px-4 md:px-6 py-2 md:py-3 rounded-2xl whitespace-nowrap">
              <div className="w-2 h-2 rounded-full bg-[#00f3ff] animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-white/60">Zolo System: <span className="text-white">Active</span></span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hidden md:block"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* The Pain Points Section */}
      <section className="py-16 md:py-24 px-4 md:px-12 bg-[#080808]">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-4">
              <PhoneOff className="w-8 h-8 md:w-10 md:h-10 text-red-500/50" />
              <h3 className="text-xl md:text-2xl font-bold">Dying Leads?</h3>
              <p className="text-white/50 text-sm">Your phone rings while your hands are full. Leads die in your voicemail. That's thousands of dollars vanishing.</p>
            </div>
            <div className="space-y-4">
              <CalendarClock className="w-8 h-8 md:w-10 md:h-10 text-orange-500/50" />
              <h3 className="text-xl md:text-2xl font-bold">Manual Dispatch?</h3>
              <p className="text-white/50 text-sm">Texting techs manually at 2 AM? You're a business owner, not a 24-hour switchboard operator.</p>
            </div>
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-[#00f3ff]/50" />
              <h3 className="text-xl md:text-2xl font-bold">Stagnant Growth?</h3>
              <p className="text-white/50 text-sm">Without infrastructure, you hit a ceiling. SITEFORGE builds the engine that scales without your manual labor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Hard Truths Section */}
      <section className="py-20 md:py-32 px-4 md:px-12 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] rounded-full bg-[#00f3ff] blur-[80px]" />
          <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-[#b87333] blur-[80px]" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24 space-y-4">
            <span className="text-[#00f3ff] text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] font-bold">No Jargon. No Agency Fluff.</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">The Cold Hard Truth About Your <span className="italic text-[#b87333]">Digital Front Door.</span></h2>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Many local business owners believe they don't need a website because they run on "word-of-mouth." Here is why relying on yesterday's methods is costing you thousands in silent losses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-[#080808] border border-white/5 hover:border-[#b87333]/30 transition-all duration-500 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-[#b87333]/10 text-[#b87333] w-fit">
                  <Users className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold">1. Word of Mouth is Now Digital</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    When a loyal client refers you, the very first thing that new lead does is search your name on Google. If they find no website, or a broken, outdated page, they assume you've gone out of business or aren't professional—and they call your competitor instead.
                  </p>
                </div>
              </div>
              <div className="pt-6 text-xs font-mono text-[#b87333]/70 uppercase tracking-wider border-t border-white/5 mt-6">
                Silent Referral Loss: 40%+
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-[#080808] border border-white/5 hover:border-[#00f3ff]/30 transition-all duration-500 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-[#00f3ff]/10 text-[#00f3ff] w-fit">
                  <TrendingDown className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold">2. Competitors Hijack Your Name</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Search your business name on Google right now. If you don't own that top organic space with a fast, professional website, Google allows competitors to buy ads directly on your business name. They are literally stealing your hard-earned reputation and routing your calls to themselves.
                  </p>
                </div>
              </div>
              <div className="pt-6 text-xs font-mono text-[#00f3ff]/70 uppercase tracking-wider border-t border-white/5 mt-6">
                Brand Hijack Rate: Critical
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-[#080808] border border-white/5 hover:border-white/20 transition-all duration-500 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-white/5 text-white/60 w-fit">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold">3. Social Media is Leased Land</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Building your business reputation solely on a Facebook Page, Yelp, or Nextdoor means you are building on land you don't own. One sudden algorithm shift, bad review filter, or policy change can lock your profile and wipe out your online presence overnight. A custom SiteForge site is 100% yours.
                  </p>
                </div>
              </div>
              <div className="pt-6 text-xs font-mono text-white/40 uppercase tracking-wider border-t border-white/5 mt-6">
                Asset Security: 100% Owned
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tiers Section */}
      <section className="py-20 md:py-32 px-4 md:px-12 relative">
        <div className="container mx-auto">
          <div className="mb-12 md:mb-20 text-center space-y-4">
            <span className="text-[#b87333] text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] font-bold">Product Infrastructure</span>
            <h2 className="text-3xl md:text-6xl font-bold tracking-tight">Three Paths to <span className="italic text-[#00f3ff]">Domination.</span></h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            <ProductCard 
              tier="T1: The Magnet"
              title="Conversion Landing Page"
              description="A precision-engineered, single-shot site designed to catch high-intent search traffic and turn it into urgent calls."
              features={[
                "Extreme Performance: < 1s Load",
                "Conversion Optimized CTA Zones",
                "Live Direct-Dial Integration",
                "Lead Mirroring to SMS/Email"
              ]}
              accentColor="#b87333"
            />
            <ProductCard 
              tier="T2: The HQ"
              title="Digital Headquarters"
              description="A full-scale multi-page ecosystem. Local SEO powerhouse that builds absolute authority in your service area."
              features={[
                "Service-Specific SEO Blueprints",
                "Interactive Area-Coverage Maps",
                "Customer Review Aggregator",
                "The 'Triple-Threat' Design System"
              ]}
              accentColor="#ffffff"
            />
            <ProductCard 
              tier="T3: Zolo AI"
              title="Automated Assistant"
              isFeatured
              description="The centerpiece. An AI Operations Manager that lives on your site and handles the heavy lifting of running a shop."
              features={[
                "Autonomous Dispatch Dispatching",
                "Instant Smart-Quote Generation",
                "24/7 Crisis Call Routing",
                "Automated Post-Ops Follow-up"
              ]}
              accentColor="#00f3ff"
            />
          </div>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section className="py-20 md:py-32 px-4 md:px-12 bg-[#080808] border-t border-b border-white/5 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#b87333]/5 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 right-10 w-[300px] h-[300px] rounded-full bg-[#00f3ff]/5 blur-[100px] pointer-events-none" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-[#b87333] text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] font-bold">Interactive Audit</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">The Cost of Doing <span className="italic text-[#00f3ff]">Nothing.</span></h2>
            <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Every missed call or search listing you don't own is a job sent straight to your competition. Move the sliders to see how much revenue is leaking from your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
            {/* Input Side */}
            <div className="lg:col-span-7 bg-white/[0.02] border border-white/5 p-6 md:p-10 rounded-3xl flex flex-col justify-between space-y-8 backdrop-blur-xl">
              {/* Sliders Container */}
              <div className="space-y-8">
                {/* Current Setup Tabs */}
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-widest font-mono text-white/50">Your Current Digital Setup</label>
                  <div className="grid grid-cols-3 gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
                    <button 
                      onClick={() => setCurrentSetup('none')}
                      className={`py-2 px-3 rounded-lg text-xs font-bold uppercase transition-all whitespace-nowrap ${currentSetup === 'none' ? 'bg-[#b87333] text-white shadow-lg' : 'text-white/40 hover:text-white/60'}`}
                    >
                      No Website
                    </button>
                    <button 
                      onClick={() => setCurrentSetup('slow')}
                      className={`py-2 px-3 rounded-lg text-xs font-bold uppercase transition-all whitespace-nowrap ${currentSetup === 'slow' ? 'bg-[#b87333] text-white shadow-lg' : 'text-white/40 hover:text-white/60'}`}
                    >
                      Slow/Old Site
                    </button>
                    <button 
                      onClick={() => setCurrentSetup('social')}
                      className={`py-2 px-3 rounded-lg text-xs font-bold uppercase transition-all whitespace-nowrap ${currentSetup === 'social' ? 'bg-[#b87333] text-white shadow-lg' : 'text-white/40 hover:text-white/60'}`}
                    >
                      Social Only
                    </button>
                  </div>
                </div>

                {/* Job Value Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-mono text-white/60 uppercase tracking-widest text-xs">Average Ticket Value</span>
                    <span className="text-[#b87333] font-mono font-bold text-lg">${jobValue}</span>
                  </div>
                  <input 
                    type="range" 
                    min="100" 
                    max="2000" 
                    step="50"
                    value={jobValue} 
                    onChange={(e) => setJobValue(Number(e.target.value))}
                    className="w-full accent-[#b87333] bg-white/10 h-2 rounded-lg cursor-pointer appearance-none"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-white/30">
                    <span>$100</span>
                    <span>$1,000</span>
                    <span>$2,000+</span>
                  </div>
                </div>

                {/* Missed Calls Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-mono text-white/60 uppercase tracking-widest text-xs">Missed Calls/Leads per Month</span>
                    <span className="text-[#00f3ff] font-mono font-bold text-lg">{missedCalls} calls</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="50" 
                    step="1"
                    value={missedCalls} 
                    onChange={(e) => setMissedCalls(Number(e.target.value))}
                    className="w-full accent-[#00f3ff] bg-white/10 h-2 rounded-lg cursor-pointer appearance-none"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-white/30">
                    <span>1 call/mo</span>
                    <span>25 calls</span>
                    <span>50+ calls/mo</span>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-white/50 leading-relaxed flex items-center gap-3">
                <Calculator className="w-5 h-5 text-[#b87333] shrink-0" />
                <span>This formula is based on real industry data. USA trade and contracting businesses miss an average of 42% of inbound calls. 85% of clients hang up and call the next competitor.</span>
              </div>
            </div>

            {/* Results Side */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#101010] to-[#050505] border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group">
              {/* Corner industrial borders */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20" />

              <div className="space-y-8 relative z-10">
                <h3 className="text-lg font-bold font-mono uppercase tracking-widest text-white/40 border-b border-white/5 pb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#b87333]" /> Monthly Leakage Report
                </h3>

                {/* Leak metric */}
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Estimated Revenue Leaking</span>
                  <div className="text-4xl md:text-5xl font-black text-red-500 flex items-baseline gap-1 tracking-tighter">
                    ${monthlyLeak.toLocaleString()}
                    <span className="text-sm font-mono uppercase tracking-normal text-white/30 font-medium">/mo</span>
                  </div>
                  <p className="text-xs text-white/40">
                    That is <span className="text-red-400 font-bold">${annualLeak.toLocaleString()}/year</span> lost directly to competitors.
                  </p>
                </div>

                {/* Recovery metric */}
                <div className="space-y-2 p-5 rounded-2xl bg-[#00f3ff]/5 border border-[#00f3ff]/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#00f3ff]/80 font-bold">Recovered with SiteForge + Zolo AI</span>
                  <div className="text-3xl md:text-4xl font-black text-[#00f3ff] flex items-baseline gap-1 tracking-tighter">
                    +${zoloRecovery.toLocaleString()}
                    <span className="text-xs font-mono uppercase text-[#00f3ff]/50 font-medium">/mo</span>
                  </div>
                  <p className="text-[11px] text-white/60 leading-relaxed font-light">
                    By claiming your Google ranking and letting <span className="text-[#00f3ff] font-bold">Zolo AI</span> instantly capture and schedule missed calls, you plug the leak and secure this back into your pocket.
                  </p>
                </div>
              </div>

              {/* ROI CTA */}
              <div className="space-y-4 pt-8 relative z-10 border-t border-white/5 mt-8 lg:mt-0">
                <div className="flex justify-between items-center text-xs font-mono text-white/40">
                  <span>PAYBACK_PERIOD</span>
                  <span className="text-green-400 font-bold uppercase tracking-wider">
                    {monthlyLeak > 1000 ? "Immediate (< 2 Weeks)" : "Less than 30 Days"}
                  </span>
                </div>
                <button className="w-full py-4 bg-[#b87333] hover:bg-[#a0622a] text-white font-bold rounded-xl flex items-center justify-center gap-3 group transition-all shadow-[0_0_30px_rgba(184,115,51,0.2)] text-sm uppercase tracking-widest">
                  Claim Your Setup Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Zero-Stress Onboarding Section */}
      <section className="py-20 md:py-32 px-4 md:px-12 relative overflow-hidden border-b border-white/5 bg-[#050505]">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute top-[10%] left-[20%] w-[250px] h-[250px] rounded-full bg-[#b87333] blur-[80px]" />
        </div>

        <div className="container mx-auto relative z-10 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
            <span className="text-[#00f3ff] text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] font-bold">Simple & Stress-Free</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">From Kickoff to Calls in <span className="italic text-[#b87333]">5 Days.</span></h2>
            <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              You have a business to run. We don't expect you to write copywriting, choose fonts, or deal with hosting. We manage 100% of the heavy lifting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Connecting visual pipeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-[#b87333]/10 via-[#00f3ff]/20 to-[#b87333]/10 z-0 hidden md:block -translate-y-12" />

            <div className="space-y-6 relative z-10 p-6 md:p-8 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-[#b87333]/30 transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <span className="text-5xl font-black text-white/10 font-mono">01</span>
                <span className="px-3 py-1 bg-[#b87333]/10 border border-[#b87333]/30 text-[#b87333] rounded-md font-mono text-[10px] font-bold uppercase tracking-widest">Day 1</span>
              </div>
              <h3 className="text-xl font-bold text-white">The 15-Min Kickoff Call</h3>
              <p className="text-white/50 text-xs md:text-sm leading-relaxed font-light">
                No endless corporate meetings or paperwork. We jump on a 15-minute call. You tell us about your service area, high-ticket jobs, and typical lead profile. We handle all copy, research, and technical maps for you.
              </p>
            </div>

            <div className="space-y-6 relative z-10 p-6 md:p-8 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-[#00f3ff]/30 transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <span className="text-5xl font-black text-white/10 font-mono">02</span>
                <span className="px-3 py-1 bg-[#00f3ff]/10 border border-[#00f3ff]/30 text-[#00f3ff] rounded-md font-mono text-[10px] font-bold uppercase tracking-widest">Days 2 - 4</span>
              </div>
              <h3 className="text-xl font-bold text-white">We Code Your Engine</h3>
              <p className="text-white/50 text-xs md:text-sm leading-relaxed font-light">
                We custom hand-code your platform to ensure sub-second loading speeds. We deploy high-converting call CTA zones, embed reviews, optimize your localized Google SEO, and calibrate Zolo AI for your specific services.
              </p>
            </div>

            <div className="space-y-6 relative z-10 p-6 md:p-8 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/20 transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <span className="text-5xl font-black text-white/10 font-mono">03</span>
                <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 rounded-md font-mono text-[10px] font-bold uppercase tracking-widest">Day 5</span>
              </div>
              <h3 className="text-xl font-bold text-white">Flip the Switch</h3>
              <p className="text-white/50 text-xs md:text-sm leading-relaxed font-light">
                We link your custom domain, connect Zolo AI to your scheduling calendar, set up dynamic lead notifications to your SMS, and activate the servers. Your high-velocity digital storefront is now live and capturing proprietary jobs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zolo Deep Dive */}
      <section className="py-20 md:py-32 px-4 md:px-12 bg-white/5 relative border-y border-white/10">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-8 md:space-y-10">
            <div className="space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#00f3ff]/10 rounded-full border border-[#00f3ff]/20">
                <Bot className="w-4 h-4 text-[#00f3ff]" />
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#00f3ff]">Machine Intelligence</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Meet Zolo. Your <span className="text-[#00f3ff]">24/7</span> Ops Manager.</h2>
              <p className="text-white/60 text-base md:text-lg">
                Zolo doesn't just "talk." Zolo acts. Integrated directly into your CRM and dispatch board, Zolo handles the mundane so you can handle the expansion.
              </p>
            </div>

            <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
              {[
                { title: "Automate Scheduling", desc: "Zolo checks tech availability and inserts jobs directly into your calendar.", icon: <Zap className="w-5 h-5" /> },
                { title: "Regulate Dispatching", desc: "Zolo routes techs based on location, skill-set, and priority.", icon: <Bot className="w-5 h-5" /> },
                { title: "Post-Job Mastery", desc: "Zolo sends invoices and requests reviews immediately after job completion.", icon: <Layout className="w-5 h-5" /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 md:gap-6 group">
                  <div className="p-3 md:p-4 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#00f3ff]/30 transition-colors shrink-0 h-fit text-[#00f3ff]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 md:mb-2">{item.title}</h4>
                    <p className="text-white/50 text-xs md:text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>          <div className="p-6 md:p-8 rounded-3xl bg-[#050505] border border-white/10 shadow-2xl relative overflow-hidden group flex flex-col justify-between min-h-[550px]">
            {/* Visual Flair */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f3ff]/5 blur-[60px] pointer-events-none" />

            <div className="space-y-6">
              {/* Tabs selector */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 flex-wrap gap-4">
                <div className="flex gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
                  <button 
                    onClick={() => setZoloTab('chat')}
                    className={`py-1.5 px-3 rounded-lg text-[10px] font-bold uppercase transition-all cursor-pointer whitespace-nowrap ${zoloTab === 'chat' ? 'bg-[#00f3ff]/20 text-[#00f3ff] border border-[#00f3ff]/30 shadow-md' : 'text-white/40 hover:text-white/60'}`}
                  >
                    💬 2 AM Dispatch Sim
                  </button>
                  <button 
                    onClick={() => setZoloTab('logs')}
                    className={`py-1.5 px-3 rounded-lg text-[10px] font-bold uppercase transition-all cursor-pointer whitespace-nowrap ${zoloTab === 'logs' ? 'bg-[#b87333]/20 text-[#b87333] border border-[#b87333]/30 shadow-md' : 'text-white/40 hover:text-white/60'}`}
                  >
                    🟢 Central Logs
                  </button>
                </div>
                <div className="px-3 py-1 bg-white/5 rounded text-[10px] font-mono text-[#00f3ff]">ZOLO_ACTIVE: [TRUE]</div>
              </div>

              {/* Chat Simulation Content */}
              {zoloTab === 'chat' && (
                <div className="space-y-4 max-h-[380px] overflow-y-auto scrollbar-thin">
                  {/* SMS Header */}
                  <div className="text-center pb-2 border-b border-white/5 text-[9px] font-mono text-white/30 uppercase tracking-widest">
                    Wednesday, 2:14 AM — Emergency Booking Active
                  </div>

                  {/* Message exchange */}
                  <div className="space-y-4 text-xs">
                    {/* Customer 1 */}
                    <div className="flex flex-col items-start space-y-1">
                      <span className="text-[9px] font-mono text-white/30 ml-2">CUSTOMER</span>
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 max-w-[85%] text-white/90 rounded-tl-none leading-relaxed font-light">
                        Hey, my water heater just burst in my basement! Water is spraying everywhere, can you send someone out ASAP?! 
                      </div>
                    </div>

                    {/* Zolo Response 1 */}
                    <div className="flex flex-col items-end space-y-1">
                      <span className="text-[9px] font-mono text-[#00f3ff] mr-2">ZOLO AI (YOUR OPS MANAGER)</span>
                      <div className="p-3.5 rounded-2xl bg-[#00f3ff]/10 border border-[#00f3ff]/30 text-white max-w-[85%] rounded-tr-none leading-relaxed font-light">
                        Oh no, basement floods are a serious emergency! I have our high-priority emergency technician, Mark, available in your area. He can be at your door in 25 minutes. Should I lock in this emergency dispatch for you?
                      </div>
                    </div>

                    {/* Customer 2 */}
                    <div className="flex flex-col items-start space-y-1">
                      <span className="text-[9px] font-mono text-white/30 ml-2">CUSTOMER</span>
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 max-w-[85%] text-white/90 rounded-tl-none leading-relaxed font-light">
                        Yes please! How much is the emergency callout fee?
                      </div>
                    </div>

                    {/* Zolo Response 2 */}
                    <div className="flex flex-col items-end space-y-1">
                      <span className="text-[9px] font-mono text-[#00f3ff] mr-2">ZOLO AI</span>
                      <div className="p-3.5 rounded-2xl bg-[#00f3ff]/10 border border-[#00f3ff]/30 text-white max-w-[85%] rounded-tr-none leading-relaxed font-light">
                        Our emergency dispatch and diagnostics fee is $89, which is 100% waived if we do the repair tonight. What is your address so I can route Mark's truck?
                      </div>
                    </div>

                    {/* Customer 3 */}
                    <div className="flex flex-col items-start space-y-1">
                      <span className="text-[9px] font-mono text-white/30 ml-2">CUSTOMER</span>
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 max-w-[85%] text-white/90 rounded-tl-none leading-relaxed font-light">
                        142 Oak Drive. Please tell him to hurry!
                      </div>
                    </div>

                    {/* Zolo Response 3 */}
                    <div className="flex flex-col items-end space-y-1">
                      <span className="text-[9px] font-mono text-[#b87333] mr-2">ZOLO AI</span>
                      <div className="p-3.5 rounded-2xl bg-[#b87333] text-white max-w-[85%] rounded-tr-none shadow-lg leading-relaxed font-bold">
                        Mark is on his way to 142 Oak Drive! He is loaded with a replacement unit and is tracked on GPS. Tech #04 is now active. I'll text you when he's 5 minutes out. 🟢
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Logs Content */}
              {zoloTab === 'logs' && (
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-white/5 border-l-2 border-[#00f3ff]">
                      <p className="text-xs font-mono text-[#00f3ff] mb-1">08:24:12 - INBOUND CALL</p>
                      <p className="text-sm font-bold">Emergency Pipe Burst @ 42 Garden St.</p>
                      <p className="text-[10px] text-white/40 mt-1">Zolo identified 'Emergency' intent. Tech #04 Routed.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border-l-2 border-green-500 opacity-60">
                      <p className="text-xs font-mono text-green-500 mb-1">08:20:01 - JOB COMPLETION</p>
                      <p className="text-sm font-bold">Bathroom Remodel Check-out</p>
                      <p className="text-[10px] text-white/40 mt-1">Zolo sent 5-star review request + Invoice #882.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border-l-2 border-[#b87333] opacity-40">
                      <p className="text-xs font-mono text-[#b87333] mb-1">07:45:55 - LEAD CAPTURED</p>
                      <p className="text-sm font-bold">New Quote Request: Water Heater Service</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <div className="flex justify-between items-center text-xs font-mono mb-4 text-white/40">
                      <span>SYSTEM_LOAD</span>
                      <span>12%</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '12%' }}
                        className="h-full bg-[#00f3ff]" 
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Template Toggle Section */}
      <section className="py-32 px-4 md:px-12">
        <div className="container mx-auto">
          <TemplateGallery />
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 md:py-32 px-4 md:px-12 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute top-[30%] left-[5%] w-[350px] h-[350px] rounded-full bg-[#00f3ff] blur-[100px]" />
          <div className="absolute bottom-[30%] right-[5%] w-[350px] h-[350px] rounded-full bg-[#b87333] blur-[100px]" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 md:mb-24 space-y-4">
            <span className="text-[#b87333] text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] font-bold">Proof In The Dirt</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Engineered for Real-World <span className="italic text-[#00f3ff]">Cash Flow.</span></h2>
            <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              We don't measure website success in "clicks" or "impressions." We measure it in cold, hard, local dispatch revenue.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            {/* Case Study 1: APEX Plumbing */}
            <div className="p-8 md:p-10 rounded-3xl bg-white/[0.01] border border-white/10 flex flex-col justify-between relative overflow-hidden group hover:border-[#b87333]/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#b87333]/5 blur-[50px]" />
              
              <div className="space-y-8">
                {/* Header */}
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[#b87333] text-xs font-mono uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5" /> Houston, TX
                    </div>
                    <h3 className="text-2xl font-black text-white">Apex Plumbing & Drain</h3>
                  </div>
                  <div className="px-3 py-1 bg-[#b87333]/10 border border-[#b87333]/30 text-[#b87333] rounded-md font-mono text-[9px] font-bold uppercase tracking-widest">
                    T1: THE PLUMBER ELITE
                  </div>
                </div>

                {/* Problem & Solution split */}
                <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-white/5 text-xs">
                  <div className="space-y-2">
                    <span className="text-white/40 uppercase font-mono text-[10px] tracking-wider block">THE INEFFICIENCY</span>
                    <p className="text-white/70 leading-relaxed font-light">
                      Trapped on a bloated WordPress site loading in 6.4 seconds. Missing 15+ inbound emergency calls every single month because calls went unanswered at night.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[#b87333] uppercase font-mono text-[10px] tracking-wider block">THE REPAIR</span>
                    <p className="text-white/70 leading-relaxed font-light">
                      Fitted with our lightning-fast Plumber Elite Blueprint, local Google SEO capture zones, and Zolo AI configured to auto-schedule emergency calls.
                    </p>
                  </div>
                </div>

                {/* Real Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-center">
                    <span className="text-[9px] font-mono uppercase text-white/40">MOBILE SPEED</span>
                    <p className="text-lg md:text-xl font-black text-white mt-1">0.8s</p>
                  </div>
                  <div className="text-center border-x border-white/10">
                    <span className="text-[9px] font-mono uppercase text-white/40">CALLS CAPTURED</span>
                    <p className="text-lg md:text-xl font-black text-green-400 mt-1">+14/mo</p>
                  </div>
                  <div className="text-center">
                    <span className="text-[9px] font-mono uppercase text-[#b87333]">EXTRA CASH</span>
                    <p className="text-lg md:text-xl font-black text-[#b87333] mt-1">+$8,400</p>
                  </div>
                </div>
              </div>

              {/* Quote from Terry */}
              <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
                <div className="flex gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />)}
                </div>
                <p className="text-white/60 text-xs italic font-light leading-relaxed">
                  "I used to wake up to 3 missed voicemails every night from desperate homeowners with burst pipes. They didn't wait—they just called my competitor. Now, Zolo AI instantly catches and books them directly into my ServiceTitan calendar while I'm asleep. The setup literally paid for itself in 3 days."
                </p>
                <div className="text-[10px] font-mono text-white/40 uppercase">
                  — <span className="text-white font-bold">Terry Vance</span>, Founder @ Apex Plumbing
                </div>
              </div>
            </div>

            {/* Case Study 2: VANGUARD Electrical */}
            <div className="p-8 md:p-10 rounded-3xl bg-white/[0.01] border border-white/10 flex flex-col justify-between relative overflow-hidden group hover:border-[#00f3ff]/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f3ff]/5 blur-[50px]" />
              
              <div className="space-y-8">
                {/* Header */}
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[#00f3ff] text-xs font-mono uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5" /> Chicago, IL
                    </div>
                    <h3 className="text-2xl font-black text-white">Vanguard Electrical</h3>
                  </div>
                  <div className="px-3 py-1 bg-[#00f3ff]/10 border border-[#00f3ff]/30 text-[#00f3ff] rounded-md font-mono text-[9px] font-bold uppercase tracking-widest">
                    T2: THE VOLTAGE PRO
                  </div>
                </div>

                {/* Problem & Solution split */}
                <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-white/5 text-xs">
                  <div className="space-y-2">
                    <span className="text-white/40 uppercase font-mono text-[10px] tracking-wider block">THE INEFFICIENCY</span>
                    <p className="text-white/70 leading-relaxed font-light">
                      Paying massive $120/lead fees to home improvement platforms that sold the exact same lead to 5 other contractors. Trapped on Page 3 of Google search.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[#00f3ff] uppercase font-mono text-[10px] tracking-wider block">THE REPAIR</span>
                    <p className="text-white/70 leading-relaxed font-light">
                      Fitted with our Voltage Safety Blueprint and localized trade-SEO mapping to completely capture Page 1 rankings organically and bypass lead brokers.
                    </p>
                  </div>
                </div>

                {/* Real Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-center">
                    <span className="text-[9px] font-mono uppercase text-white/40">GOOGLE SEO</span>
                    <p className="text-lg md:text-xl font-black text-white mt-1">#2 Rank</p>
                  </div>
                  <div className="text-center border-x border-white/10">
                    <span className="text-[9px] font-mono uppercase text-white/40">LEAD COST</span>
                    <p className="text-lg md:text-xl font-black text-green-400 mt-1">$0.00</p>
                  </div>
                  <div className="text-center">
                    <span className="text-[9px] font-mono uppercase text-[#00f3ff]">EXTRA CASH</span>
                    <p className="text-lg md:text-xl font-black text-[#00f3ff] mt-1">+$12,500</p>
                  </div>
                </div>
              </div>

              {/* Quote from Jason */}
              <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
                <div className="flex gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />)}
                </div>
                <p className="text-white/60 text-xs italic font-light leading-relaxed">
                  "We completely turned off our shared lead platform accounts. Our SiteForge blueprint ranks page #1 organically for all high-ticket commercial electrical keywords in Chicago. Customers call us directly because our site is professional and fast. Zero shared leads, zero monthly ad spend."
                </p>
                <div className="text-[10px] font-mono text-white/40 uppercase">
                  — <span className="text-white font-bold">Jason Blake</span>, Founder @ Vanguard
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Creator / Anti-Agency Section */}
      <section className="py-20 md:py-32 px-4 md:px-12 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#00f3ff] blur-[120px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#b87333] blur-[120px]" />
        </div>

        <div className="container mx-auto relative z-10 max-w-6xl">
          <div className="text-center mb-16 md:mb-24 space-y-4">
            <span className="text-[#00f3ff] text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] font-bold">Why Partner With Us?</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">The Anti-Agency <span className="italic text-[#b87333]">Manifesto.</span></h2>
            <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              We don't do bloated retainers, stock-template layouts, or automated phone trees. We build heavy-duty software machinery that operates with absolute integrity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Left Side: Personal Letter */}
            <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl flex flex-col justify-between space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00f3ff]/5 blur-[40px]" />
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#b87333] to-[#00f3ff] flex items-center justify-center font-bold text-white shadow-lg text-lg">
                    D
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      Dinusha <span className="text-xs font-mono font-medium py-1 px-2.5 bg-[#00f3ff]/10 text-[#00f3ff] rounded-full border border-[#00f3ff]/20">Principal Builder</span>
                    </h4>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-green-400 uppercase mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Direct text / call lines open to trades
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-white/70 text-sm leading-relaxed font-light">
                  <p>
                    Most digital agencies want to put you on a $1,500/month "management fee" contract, install a slow WordPress theme, outsource your code to overseas freelancers, and then stop picking up your calls when something breaks.
                  </p>
                  <p>
                    <strong>I hate that.</strong> And as a contractor or local shop owner, you don't have the time or budget for that corporate runaround.
                  </p>
                  <p>
                    At SiteForge, you partner directly with me—the architect. I hand-code your platform from scratch in clean React and Tailwind. If you ever have a question or need an emergency change, you text my personal mobile number. Your business isn't a support ticket. It's a mission.
                  </p>
                </div>
              </div>

              {/* Hand-written signature visual */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-mono uppercase text-white/40 tracking-widest">Signed & Committed</p>
                  <p className="text-xl font-bold font-serif italic text-white/90 mt-1 select-none tracking-wide text-amber-500">Dinusha</p>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-[#b87333]">
                  <UserCheck className="w-4 h-4 text-[#b87333]" /> Direct Partner Status
                </div>
              </div>
            </div>

            {/* Right Side: Guarantees */}
            <div className="flex flex-col justify-between space-y-6">
              {[
                {
                  title: "1.5-Second Speed Guarantee",
                  desc: "If your landing page doesn't load in under 1.5 seconds, it's 100% free. Speed is the difference between a booking and a bounced user. We write pure, high-performance code with zero slow plugins or database lag.",
                  metric: "COMPILATION_LOAD: < 1.2s",
                  accent: "#b87333"
                },
                {
                  title: "Absolute Asset Ownership",
                  desc: "No locking you in or holding your domain hostage. You own 100% of the custom React source code, assets, and databases. If you ever decide to walk away, we pack up your server files and hand them to you in a zip file. No exit penalties.",
                  metric: "OWNER_LIABILITY: 0%",
                  accent: "#ffffff"
                },
                {
                  title: "Heavy-Duty Codebase",
                  desc: "We build for durability. No generic drag-and-drop page builders that leak security or break during core updates. SiteForge code is clean, solid steel, and hosted on ultra-secure server infrastructure built to handle extreme traffic peaks.",
                  metric: "UPTIME: 99.99%",
                  accent: "#00f3ff"
                }
              ].map((g, i) => (
                <div 
                  key={i}
                  className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative group overflow-hidden"
                >
                  <div 
                    className="absolute top-0 left-0 bottom-0 w-[3px] transition-transform origin-bottom"
                    style={{ backgroundColor: g.accent }}
                  />
                  
                  <div className="space-y-2 max-w-md">
                    <h4 className="text-lg font-bold text-white flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: g.accent }} /> {g.title}
                    </h4>
                    <p className="text-white/50 text-xs leading-relaxed font-light">{g.desc}</p>
                  </div>

                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-[9px] font-mono uppercase tracking-widest shrink-0" style={{ color: g.accent }}>
                    {g.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 md:px-12 border-t border-white/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <h2 className="text-4xl font-black tracking-tighter">SITE<span className="text-[#b87333]">FORGE</span></h2>
            <div className="flex flex-wrap justify-center gap-8 text-xs font-mono uppercase tracking-widest text-white/40">
              <a href="#" className="hover:text-[#00f3ff] transition-colors">Infrastructure</a>
              <a href="#" className="hover:text-[#00f3ff] transition-colors">Zolo Core</a>
              <a href="#" className="hover:text-[#00f3ff] transition-colors">Tactical Plans</a>
              <a href="#" className="hover:text-[#00f3ff] transition-colors">Book Demo</a>
            </div>
          </div>
          <div className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] font-mono text-white/30 tracking-widest uppercase">
            <span>© 2026 SITEFORGE INDUSTRIAL SYSTEMS</span>
            <div className="flex gap-6 mt-4 md:mt-0">
              <span>LAT: 37.7749</span>
              <span>LNG: -122.4194</span>
              <span>SYS_STABLE: [OK]</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
