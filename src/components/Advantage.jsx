import { School, Users, Award, ShieldCheck, Quote, Globe } from 'lucide-react';
import { AMITY_ADVANTAGES, TESTIMONIALS } from '../data';

const iconMap = {
  School: School,
  Users: Users,
  Award: Award,
  ShieldCheck: ShieldCheck,
};

export default function Advantage() {
  return (
    <section className="py-20 bg-white" id="advantage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amity-navy border-l-4 border-amity-gold pl-3">
              The Samridh Counseling Model
            </span>
            <h2 className="font-display mt-6 font-extrabold text-2xl sm:text-3xl lg:text-4xl text-amity-navy tracking-tight">
              The Samridh Advantage
            </h2>
            <p className="font-sans text-slate-600 text-base sm:text-lg max-w-2xl">
              Why do thousands of aspiring professionals and students choose Samridh Edu Care Services? Our dedicated counseling, end-to-end documentation assistance, and college tie-ups ensure a stress-free admission experience.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Government Recognized Board Support</span>
            </div>
          </div>
        </div>

        {/* Advantage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20" id="advantage-grid">
          {AMITY_ADVANTAGES.map((adv) => {
            const IconComponent = iconMap[adv.icon] || Globe;
            return (
              <div
                key={adv.title}
                className="group p-6 bg-slate-50 hover:bg-amity-navy rounded-2xl border border-slate-100 hover:border-amity-navy shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Top line with Icon & Metric */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-white text-amity-navy group-hover:bg-white/10 group-hover:text-amity-gold rounded-xl shadow-sm transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-display font-black text-2xl text-slate-300 group-hover:text-amity-gold/40 transition-colors">
                      {adv.metric}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-slate-900 group-hover:text-white text-base leading-tight transition-colors">
                      {adv.title}
                    </h3>
                    <p className="font-sans text-slate-500 group-hover:text-slate-300 text-xs sm:text-sm leading-relaxed transition-colors">
                      {adv.description}
                    </p>
                  </div>
                </div>

                {/* Decorative border accent */}
                <div className="w-12 h-1 bg-amity-gold group-hover:w-full mt-6 rounded transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-to-br from-amity-navy-dark to-amity-navy rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl" id="student-success">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          {/* Background vector accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/2 rounded-full -mr-32 -mt-32 z-0"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amity-gold/3 rounded-full -ml-32 -mb-32 z-0"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side info */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amity-gold bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                Alumni Milestones
              </span>
              <h3 className="font-display mt-6 font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
                Our Guided Students Excel Across Industries
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                From working professionals seeking high-quality masters degrees to dropouts restarting high school matriculation, our candidates build successful futures.
              </p>
              <div className="pt-2">
                <a
                  href="#apply"
                  className="inline-flex items-center space-x-2 bg-amity-gold hover:bg-amity-gold-hover text-amity-navy font-bold text-[10px] sm:text-xs uppercase tracking-wider px-4 py-2.5 sm:px-6 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <span>Build Your Success Story</span>
                </a>
              </div>
            </div>

            {/* Testimonials Carousel/Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {TESTIMONIALS.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="p-1 bg-amity-gold/20 text-amity-gold rounded-lg w-fit">
                      <Quote className="w-5 h-5" />
                    </div>
                    <p className="font-sans text-slate-200 text-xs sm:text-sm italic leading-relaxed">
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="flex items-center space-x-3 pt-6 border-t border-white/10 mt-6">
                    <div className="w-8 h-8 rounded-full bg-amity-gold/20 border border-amity-gold/40 flex items-center justify-center shrink-0">
                      <span className="text-amity-gold font-bold text-xs">{t.author.charAt(0)}</span>
                    </div>
                    <h4 className="font-display font-bold text-white text-xs sm:text-sm">
                      {t.author}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
