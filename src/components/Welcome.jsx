import { CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Welcome() {
  const credentials = [
    {
      title: 'Government Recognized',
      desc: 'All certification options and boards (e.g. NIOS, UGC, NCTE, PCI approved) are government-recognized.',
    },
    {
      title: 'No Age Limits',
      desc: 'Perfect for dropouts and working professionals. Flexible timing ensures you learn at your own pace.',
    },
    {
      title: 'Strategic Tie-Ups',
      desc: 'Direct partnerships with leading colleges and universities in Berhampur and neighboring educational hubs.',
    },
  ];

  return (
    <section className="py-20 bg-white" id="welcome-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visuals column */}
          <div className="lg:col-span-5 relative" id="welcome-media">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?auto=format&fit=crop&w=800&q=80"
                alt="Samridh Campus Counseling"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amity-navy/80 via-transparent to-transparent"></div>
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200/50 shadow-lg flex items-center space-x-3">
                <div className="p-2 bg-amity-navy text-amity-gold rounded-lg">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">Samridh Edu Care Services</h4>
                  <p className="text-slate-500 text-xs">Berhampur's Trusted Counseling Hub</p>
                </div>
              </div>
            </div>

            {/* Decorative colored grid behind main image */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-amity-gold/15 rounded-lg -z-10 hidden md:block"></div>
            <div className="absolute -bottom-6 -right-6 w-44 h-44 bg-amity-navy/5 rounded-lg -z-10 hidden md:block"></div>
          </div>

          {/* Texts column */}
          <div className="lg:col-span-7 space-y-6" id="welcome-text">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amity-navy border-l-4 border-amity-gold pl-3">
              Trusted Educational Counseling & Guidance
            </span>
            
            <h2 className="font-display mt-6 font-extrabold text-2xl sm:text-3xl lg:text-4xl text-amity-navy tracking-tight leading-tight">
              Bridging the Gap to Your Desired Academic Future
            </h2>
            
            <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed">
              At Samridh Edu Care Services, we provide expert counseling, streamlined direct admissions, and scholarship guidance. We help students, working professionals, and school dropouts choose the right path and gain hassle-free admissions with leading colleges in Berhampur.
            </p>
            
            <p className="font-sans text-slate-500 text-sm leading-relaxed">
              Whether you need to finish your intermediate studies (+2 Science/Arts/Commerce) via NIOS open schooling, pursue technical professional degrees (B.Tech, BCA, MCA, B.Pharma), or enroll in professional courses like B.Ed and MBA, our experienced team provides end-to-end guidance and reliable admission support.
            </p>

            <div className="border-t border-slate-100 pt-6 mt-6">
              <h3 className="font-display font-bold text-slate-900 text-base mb-4">Why Families & Students Trust Us:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {credentials.map((cred, index) => (
                  <div key={index} className="space-y-1.5 p-4 rounded-xl hover:bg-slate-50/80 transition-colors">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-amity-gold" />
                      <h4 className="font-display font-bold text-slate-900 text-xs uppercase tracking-wide">
                        {cred.title}
                      </h4>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {cred.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="#apply"
                className="bg-amity-navy hover:bg-amity-navy-light text-white font-bold text-xs sm:text-sm px-5 py-3 sm:px-6 sm:py-3.5 rounded-full hover:shadow-lg transition-all text-center"
              >
                Get Free Counseling Session
              </a>
              <a
                href="#advantage"
                className="text-amity-navy hover:text-amity-navy-light font-bold text-xs sm:text-sm py-3 px-5 sm:py-3.5 sm:px-6 border border-slate-200 rounded-full hover:bg-slate-50 transition-all text-center"
              >
                Learn More About Our Support
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
