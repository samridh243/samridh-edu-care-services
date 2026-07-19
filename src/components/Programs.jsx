import { useState, useEffect } from 'react';
import { PROGRAMS_DATA } from '../data';
import {
  Clock, ArrowUpRight, GraduationCap,
  Cpu, Monitor, FlaskConical, BookOpen, Briefcase,
  TrendingUp, Code2, Microscope, BookMarked, Wrench, Zap,
} from 'lucide-react';

const ICON_MAP = {
  Cpu, Monitor, FlaskConical, BookOpen, Briefcase,
  TrendingUp, Code2, Microscope, GraduationCap, BookMarked, Wrench, Zap,
};

/* Subtle accent colour per degree type */
const DEGREE_ACCENT = {
  'Degrees':           { bg: 'bg-blue-50',    text: 'text-blue-600',   border: 'border-blue-100',   badge: 'bg-blue-100 text-blue-700'   },
  'Postgraduate':      { bg: 'bg-violet-50',  text: 'text-violet-600', border: 'border-violet-100', badge: 'bg-violet-100 text-violet-700'},
  'Open Schooling':    { bg: 'bg-emerald-50', text: 'text-emerald-600',border: 'border-emerald-100',badge: 'bg-emerald-100 text-emerald-700'},
  'Diplomas & Skills': { bg: 'bg-amber-50',   text: 'text-amber-600',  border: 'border-amber-100',  badge: 'bg-amber-100 text-amber-700'  },
};
const DEFAULT_ACCENT = { bg: 'bg-slate-50', text: 'text-slate-600', border: 'border-slate-100', badge: 'bg-slate-100 text-slate-700' };

const categories = ['All', 'Degrees', 'Postgraduate', 'Open Schooling', 'Diplomas & Skills'];

export default function Programs() {
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const handleFilterEvent = (e) => {
      if (e.detail) {
        setFilter(e.detail);
        document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('set-program-filter', handleFilterEvent);
    return () => window.removeEventListener('set-program-filter', handleFilterEvent);
  }, []);

  const filteredPrograms = PROGRAMS_DATA.filter((prog) =>
    filter === 'All' ? true : prog.degree === filter
  );

  return (
    <section className="py-20 bg-amity-light-bg relative overflow-hidden" id="programs">
      {/* Decorative lines - Desktop */}
      <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80" preserveAspectRatio="none" viewBox="0 0 1440 800">
        <path fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" d="M1440,50 C1000,250 400,150 0,550" />
        <path fill="none" stroke="#e2e8f0" strokeWidth="2" opacity="0.8" d="M1440,150 C900,450 500,350 0,750" />
      </svg>



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amity-navy bg-white px-3 py-1.5 rounded-full border border-slate-200">
            Counseling Catalog 2026-27
          </span>
          <h2 className="font-display mt-6 font-extrabold text-2xl sm:text-3xl lg:text-4xl text-amity-navy tracking-tight">
            Popular Streams &amp; Programs
          </h2>
          <p className="font-sans text-slate-600 text-base sm:text-lg">
            Explore government-recognized degrees, open schooling streams, and job-oriented vocational skills with complete academic and counseling support.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12" id="program-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? 'bg-amity-navy text-white shadow-lg shadow-amity-navy/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-amity-navy border border-slate-200'
              }`}
            >
              {cat === 'All' ? 'All Offerings' : cat}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="programs-grid">
          {filteredPrograms.map((prog) => {
            const IconComponent = ICON_MAP[prog.icon] || GraduationCap;
            const accent = DEGREE_ACCENT[prog.degree] || DEFAULT_ACCENT;

            return (
              <div
                key={prog.id}
                className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col animate-fade-in-up"
              >
                <div className="p-6 flex-grow flex flex-col">

                  {/* Top row: degree badge + icon */}
                  <div className="flex items-start justify-between mb-5">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full ${accent.badge}`}>
                      {prog.degree}
                    </span>

                    {/* Small animated icon — top right */}
                    <div className={`w-16 h-16 rounded-2xl ${accent.bg} ${accent.border} border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`${accent.text} animate-icon-float`} strokeWidth={1.75} style={{ width: '36px', height: '36px' }} />
                    </div>
                  </div>

                  {/* Meta: duration + department */}
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amity-gold" />
                      {prog.duration}
                    </span>
                    <span className="w-px h-3 bg-slate-200" />
                    <span className="truncate">{prog.department}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-slate-900 text-base leading-snug mb-2 group-hover:text-amity-navy transition-colors">
                    {prog.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-slate-500 text-xs leading-relaxed line-clamp-3 mb-4">
                    {prog.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mt-auto">
                    {prog.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] font-semibold text-slate-600">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${accent.text.replace('text-', 'bg-')}`} />
                        {hl}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card footer */}
                <div className={`border-t ${accent.border} px-6 py-4`}>
                  <a
                    href="#apply"
                    className={`text-xs font-bold ${accent.text} hover:underline flex items-center gap-1 group/link`}
                  >
                    Inquire about this stream
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 bg-white rounded-2xl p-8 border border-slate-200/60 shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="text-left space-y-1">
            <h4 className="font-display font-bold text-slate-900 text-lg">Looking for other courses, drop-out support, or counseling details?</h4>
            <p className="text-slate-500 text-sm">We provide end-to-end guidance for working professionals and special fast-track batches.</p>
          </div>
          <a
            href="#apply"
            className="whitespace-nowrap bg-amity-navy hover:bg-amity-navy-light text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all"
          >
            Get Free Assistance
          </a>
        </div>

      </div>
    </section>
  );
}
