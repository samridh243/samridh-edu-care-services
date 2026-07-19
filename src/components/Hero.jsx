import { useState, useEffect } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Calendar,
  Users,
} from "lucide-react";
import { HERO_SLIDES } from "../data";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  // Track the key of the current slide to re-trigger the CSS text animation
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
      setAnimKey((k) => k + 1);
    }, 7000); // Rotate every 7s
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setAnimKey((k) => k + 1);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    setAnimKey((k) => k + 1);
  };

  const handleDot = (index) => {
    setCurrent(index);
    setAnimKey((k) => k + 1);
  };

  return (
    <div className="relative w-full overflow-hidden bg-amity-navy h-[600px] md:h-[700px] lg:h-[750px]">
      {/* Background Slides — CSS opacity + scale transition (all rendered, only active is visible) */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
            index === current
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105 pointer-events-none"
          }`}
        >
          {/* Photo background */}
          <img
            src={slide.image}
            alt={slide.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform scale-102 filter brightness-[0.4] saturate-[0.85]"
          />
          {/* Gradient overlays to guarantee superb text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-amity-navy-dark/90 via-amity-navy-dark/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-amity-navy-dark/95 via-transparent to-black/35"></div>
        </div>
      ))}

      {/* Floating fast facts/quick items on the left/right side depending on screen size */}
      <div className="absolute z-30 hidden lg:flex flex-col space-y-4 xl:space-y-6 right-6 left-auto top-1/4 xl:left-6 xl:right-auto xl:top-1/3">
        <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/10">
          <GraduationCap className="w-5 h-5 text-amity-gold" />
          <span className="text-white text-xs font-semibold tracking-wider uppercase">
            Direct College Tie-ups
          </span>
        </div>
        <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/10">
          <Calendar className="w-5 h-5 text-amity-gold" />
          <span className="text-white text-xs font-semibold tracking-wider uppercase">
            Counseling Active 2026
          </span>
        </div>
        <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/10">
          <Users className="w-5 h-5 text-amity-gold" />
          <span className="text-white text-xs font-semibold tracking-wider uppercase">
            No Learning Age Limit
          </span>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-3xl pt-20">
          {/* Re-mounting via key re-triggers the CSS keyframe animation on each slide change */}
          <div key={animKey} className="space-y-6 animate-hero-text-in">
            {/* Highlight Pill */}
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amity-gold/25 border border-amity-gold/40 text-amity-gold text-xs font-extrabold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-amity-gold animate-ping"></span>
              <span>{HERO_SLIDES[current].highlightText}</span>
            </span>

            {/* Title with Outfit display font */}
            <h1 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1]">
              {HERO_SLIDES[current].title.split(".").map((word, index, arr) => (
                <span key={index} className="block">
                  {word}
                  {index < arr.length - 1 && (
                    <span className="text-amity-gold">.</span>
                  )}
                </span>
              ))}
            </h1>

            {/* Description */}
            <p className="font-sans text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-light">
              {HERO_SLIDES[current].subtitle}
            </p>

            {/* Conversion Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="#apply"
                className="bg-amity-gold hover:bg-amity-gold-hover text-amity-navy font-bold text-xs sm:text-base px-5 py-3 sm:px-8 sm:py-4 rounded-full shadow-[0_5px_18px_rgba(255,199,44,0.4)] hover:shadow-[0_8px_24px_rgba(255,199,44,0.6)] hover:scale-105 transition-all duration-300 uppercase tracking-wider text-center"
              >
                Enquiry Now
              </a>
              <a
                href="#programs"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white font-bold text-xs sm:text-base px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-full hover:scale-105 transition-all duration-300 uppercase tracking-wider text-center flex items-center justify-center space-x-2"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-amity-gold" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-10 sm:right-12 sm:left-auto sm:translate-x-0 z-35 flex items-center space-x-4">
        {/* Navigation buttons */}
        <button
          onClick={handlePrev}
          className="hidden sm:block p-3 rounded-full border border-white/20 bg-black/15 backdrop-blur-sm text-white hover:bg-white hover:text-amity-navy transition-all cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="hidden sm:block p-3 rounded-full border border-white/20 bg-black/15 backdrop-blur-sm text-white hover:bg-white hover:text-amity-navy transition-all cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Indicators */}
        <div className="flex space-x-2 sm:pl-4">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDot(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === current ? "w-8 bg-amity-gold" : "w-2.5 bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Decorative Wave border linking to statistics */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amity-navy-dark to-transparent pointer-events-none"></div>
    </div>
  );
}
