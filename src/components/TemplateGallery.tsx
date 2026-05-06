import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layout, ShieldCheck, Zap, ArrowRight, Wrench, Flame } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const templates = [
  {
    id: 'plumber',
    name: 'The Plumber Elite',
    theme: 'Urgency & Local Authority',
    colors: ['#0a0a0a', '#b87333', '#FFFFFF'],
    description: 'A high-converting emergency blueprint for local plumbing heroes. Features instant click-to-call zones, dynamic area coverage maps, live Google reviews integration, and a sub-second mobile load speed designed for customer urgency.',
    image: 'https://picsum.photos/seed/plumbing/800/600',
    icon: <Wrench className="w-5 h-5" />,
    accent: '#b87333'
  },
  {
    id: 'electrician',
    name: 'The Voltage Safety Pro',
    theme: 'Safety, Tech & Flat-Rate Pricing',
    colors: ['#050505', '#00f3ff', '#FFFFFF'],
    description: 'Designed for premium electrical contractors. Built to showcase technical safety credentials, upfront flat-rate pricing matrices, live technician dispatch maps, and absolute compliance guarantee badges.',
    image: 'https://picsum.photos/seed/electrician/800/600',
    icon: <Zap className="w-5 h-5" />,
    accent: '#00f3ff'
  },
  {
    id: 'hvac',
    name: 'The Climate Comfort HQ',
    theme: 'Comfort, Rebates & Financing',
    colors: ['#0a0a0a', '#F97316', '#FFFFFF'],
    description: 'Built for residential heating & air conditioning market leaders. Focuses on seasonal HVAC tune-up schedules, instant state & federal energy rebate calculators, custom equipment financing blocks, and 24/7 dispatcher routing.',
    image: 'https://picsum.photos/seed/hvac/800/600',
    icon: <Flame className="w-5 h-5" />,
    accent: '#F97316'
  }
];

export default function TemplateGallery() {
  const [activeTab, setActiveTab] = useState(templates[0].id);
  const activeTemplate = templates.find(t => t.id === activeTab)!;

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 md:space-y-8 text-center lg:text-left">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mx-auto lg:mx-0 max-w-lg">
            Choose Your <span className="text-[#b87333]">Foundational</span> Blueprint.
          </h2>
          <p className="text-white/60 mx-auto lg:mx-0 max-w-md text-sm md:text-base">
            SITEFORGE templates aren't just skins—they're pre-engineered lead generation machines built for the specific psychology of plumbing customers.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 max-w-xl mx-auto lg:mx-0">
          {templates.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={cn(
                "group flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-2xl border transition-all duration-500 text-left relative overflow-hidden",
                activeTab === t.id 
                  ? "bg-white/5 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.02)]" 
                  : "bg-transparent border-white/5 hover:border-white/10"
              )}
            >
              <div 
                className={cn(
                  "p-2 md:p-3 rounded-xl transition-all duration-500",
                  activeTab === t.id ? "scale-110" : "opacity-40 grayscale"
                )}
                style={{ backgroundColor: `${t.accent}20`, color: t.accent }}
              >
                {t.icon}
              </div>
              
              <div className="flex-1">
                <h4 className={cn(
                  "font-bold text-sm md:text-base transition-colors",
                  activeTab === t.id ? "text-white" : "text-white/40 group-hover:text-white/60"
                )}>
                  {t.name}
                </h4>
                <p className={cn(
                  "text-[9px] md:text-[10px] uppercase tracking-widest font-mono mt-1",
                  activeTab === t.id ? "opacity-100" : "opacity-40"
                )} style={{ color: t.accent }}>
                  {t.theme}
                </p>
              </div>

              {activeTab === t.id && (
                <motion.div 
                  layoutId="active-bg"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-[#b87333]" 
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="relative aspect-video sm:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -20 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="absolute inset-0"
          >
            <img 
              src={activeTemplate.image} 
              alt={activeTemplate.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            
            {/* Content box info */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-10 md:right-10 p-4 md:p-8 rounded-xl md:rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10">
              <p className="text-white/90 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 font-medium line-clamp-3 md:line-clamp-none">
                "{activeTemplate.description}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {activeTemplate.colors.map((c, i) => (
                    <div key={i} className="w-3 h-3 md:w-4 md:h-4 rounded-full border border-white/20" style={{ backgroundColor: c }} />
                  ))}
                </div>
                <button className="flex items-center gap-2 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest hover:text-[#00f3ff] transition-colors">
                  View Demo <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Industrial Frame Corners */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#b87333]/40" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#00f3ff]/40" />
      </div>
    </div>
  );
}
