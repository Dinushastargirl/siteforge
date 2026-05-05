import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface ProductCardProps {
  tier: string;
  title: string;
  description: string;
  features: string[];
  accentColor?: string;
  isFeatured?: boolean;
}

export default function ProductCard({ tier, title, description, features, accentColor = "#b87333", isFeatured }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={cn(
        "relative p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 group transition-all duration-500 overflow-hidden",
        isFeatured && "border-[#00f3ff]/30 shadow-[0_0_50px_rgba(0,243,255,0.05)]"
      )}
    >
      {/* Accent Background Glow */}
      <div 
        className="absolute -top-20 -right-20 w-40 h-40 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"
        style={{ backgroundColor: accentColor }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <span 
            className="text-[10px] uppercase tracking-[0.3em] font-mono font-bold"
            style={{ color: accentColor }}
          >
            {tier}
          </span>
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
            <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-white" />
          </div>
        </div>

        <h3 className="text-3xl font-bold text-white mb-4 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
          {title}
        </h3>
        
        <p className="text-white/60 text-sm mb-8 leading-relaxed max-w-[90%]">
          {description}
        </p>

        <ul className="space-y-4 mb-10">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 group/item">
              <CheckCircle2 
                className="w-5 h-5 mt-0.5 shrink-0 opacity-40 group-hover/item:opacity-100 transition-opacity" 
                style={{ color: accentColor }}
              />
              <span className="text-sm text-white/80 group-hover/item:text-white transition-colors">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <button 
          className="w-full py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300 relative overflow-hidden"
          style={{ backgroundColor: `${accentColor}1A`, color: accentColor, border: `1px solid ${accentColor}33` }}
        >
          <span className="relative z-10 transition-colors group-hover:text-white">Configure Infrastructure</span>
          <div 
            className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
            style={{ backgroundColor: accentColor }}
          />
        </button>
      </div>

      {/* Industrial Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </motion.div>
  );
}
