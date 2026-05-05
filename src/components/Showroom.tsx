import { motion } from 'motion/react';
import ZoloCore from './ZoloCore';
import ProductCard from './ProductCard';
import TemplateGallery from './TemplateGallery';
import ForgeBot from './ForgeBot';
import Pipeline from './Pipeline';
import { Zap, Bot, Layout, ArrowDown, ChevronRight, PhoneOff, CalendarClock, TrendingUp } from 'lucide-react';

export default function Showroom() {
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
              <span className="text-[#00f3ff] text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] md:tracking-[0.5em] font-bold">Industrial Software Engine</span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight lg:leading-none">
                SITE<span className="text-[#b87333]">FORGE</span>
              </h1>
            </div>
            
            <p className="text-base md:text-xl text-white/70 mx-auto lg:mx-0 max-w-xl leading-relaxed">
              We build the digital infrastructure for the backbone of America. 
              High-velocity landing pages, full-scale business HQs, and <span className="text-[#00f3ff] font-bold">Zolo AI</span>—your 24/7 Operations Manager.
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
          </div>

          <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#050505] border border-white/10 shadow-2xl relative overflow-hidden group">
            {/* Dashboard Mockup Component would go here */}
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs font-mono uppercase text-white/50">Live Feed: Zolo-1-Alpha</span>
                </div>
                <div className="px-3 py-1 bg-white/5 rounded text-[10px] font-mono text-[#00f3ff]">DISPATCHING_MODULE</div>
              </div>
              
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
            
            {/* Visual Flair */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f3ff]/5 blur-[60px] pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Template Toggle Section */}
      <section className="py-32 px-4 md:px-12">
        <div className="container mx-auto">
          <TemplateGallery />
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
