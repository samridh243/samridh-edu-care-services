import { School, Building2, BookOpen, Map, Globe, Award, Users, ShieldCheck } from 'lucide-react';
import { STATS_ITEMS } from '../data';

const iconMap = {
  School: School,
  Building2: Building2,
  BookOpen: BookOpen,
  Map: Map,
  Globe: Globe,
  Award: Award,
  Users: Users,
  ShieldCheck: ShieldCheck,
};

export default function Stats() {
  return (
    <div className="relative -mt-1 z-30 bg-amity-navy border-t border-white/10 overflow-hidden" id="stats-ribbon">
      {/* Subtle curvy lines background - Hidden on mobile to prevent stretching */}
      <svg className="hidden md:block absolute inset-0 w-full h-full opacity-10 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1440 100">
        <path fill="none" stroke="#FFC72C" strokeWidth="1" d="M0,50 C320,150 420,-50 720,50 C1020,150 1120,-50 1440,50" />
        <path fill="none" stroke="#ffffff" strokeWidth="0.5" d="M0,70 C400,180 500,-20 900,70 C1300,160 1350,-20 1440,70" />
      </svg>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 divide-y-0 divide-x-0 md:divide-x divide-white/10">
          {STATS_ITEMS.map((stat, idx) => {
            const IconComponent = iconMap[stat.icon] || School;
            return (
              <div
                key={stat.id}
                className={`flex flex-col items-center justify-center text-center px-4 transition-transform duration-300 hover:-translate-y-1 ${
                  idx === 0 ? 'md:pl-0' : 'md:pl-6'
                }`}
              >
                <div className="p-3 bg-white/5 rounded-full border border-white/10 mb-3 text-amity-gold">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="font-display font-black text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 font-sans text-slate-300 text-xs sm:text-sm font-medium tracking-wide max-w-[160px]">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
