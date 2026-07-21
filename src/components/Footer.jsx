import {
  Instagram,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import data from "../data.json";
import logo from "../../assets/logo-footer.png";

export default function Footer({ onOpenLegal }) {
  const year = new Date().getFullYear();

  const links = {
    services: [
      { label: "Trusted Academic Counseling", href: "#apply" },
      { label: "Scholarship Schemes Support", href: "#apply" },
      { label: "End-to-End Admission Guide", href: "#apply" },
      { label: "Support for Dropouts", href: "#apply" },
      { label: "Flexible Work-Friendly Timing", href: "#apply" },
    ],
  };

  return (
    <footer
      className="bg-amity-navy-dark text-slate-300 font-sans"
      id="academic-footer"
    >
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Samridh Edu Care Services"
                className="h-20 md:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105"
                loading="lazy"
                draggable={false}
              />
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
              Samridh Edu Care Services is Berhampur's trusted educational
              counseling and admission support provider. We deliver flexible,
              reliable, and government-recognized academic routes for students,
              dropouts, and busy professionals.
            </p>

            {/* Direct addresses */}
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-amity-gold shrink-0 mt-0.5" />
                <span>{data.contact.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amity-gold shrink-0" />
                <a
                  href={`tel:${data.contact.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {data.contact.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amity-gold shrink-0" />
                <a
                  href={`mailto:${data.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {data.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Counseling, support and minimal tag data (Combining previously columns 2, 3 & 4) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Core Services */}
              <div className="space-y-4">
                <h5 className="font-display font-bold text-white text-sm uppercase tracking-wider border-b border-white/5 pb-2">
                  Counseling & Support
                </h5>
                <ul className="space-y-2.5 text-xs font-light">
                  {links.services.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={item.href}
                        className="hover:text-amity-gold hover:underline transition-all flex items-center space-x-1"
                      >
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Channel */}
              <div className="space-y-4">
                <h5 className="font-display font-bold text-white text-sm uppercase tracking-wider border-b border-white/5 pb-2">
                  Connect With Us
                </h5>
                <p className="text-slate-400 text-xs font-light">
                  Follow us for direct alerts, admission timelines, and student
                  spotlights.
                </p>
                <a
                  href={data.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2.5 px-4 py-2.5 bg-transparent border border-slate-500 hover:border-amity-gold text-slate-300 hover:text-amity-gold rounded-lg transition-all duration-300 hover:scale-105 text-sm font-semibold"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Follow us on Instagram</span>
                </a>
              </div>
            </div>

            {/* Sub-section displaying minimal data of former columns 2 and 3 under columns */}
            <div className="pt-6 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                  Popular Higher Degrees
                </span>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  MBA, MTech, MCA, BTech, BCA, B.Ed, B.Pharma, BBA & B.Com
                  Honours.
                </p>
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                  Schooling & Vocations
                </span>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  NIOS 10th & 12th Board, +2 streams (Science, Arts, Commerce),
                  Diploma Polytechnic, and skill ITI trades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright line */}
      <div className="bg-amity-navy-dark border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-500 space-y-4 md:space-y-0">
          <div>
            <span>
              © {year} Samridh Edu Care Services. All rights reserved.
              Registered Educational counseling center in Berhampur.
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => onOpenLegal("privacy")}
              className="hover:text-slate-300 transition-colors bg-transparent border-none p-0 cursor-pointer text-[11px]"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal("terms")}
              className="hover:text-slate-300 transition-colors bg-transparent border-none p-0 cursor-pointer text-[11px]"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal("disclaimer")}
              className="hover:text-slate-300 transition-colors bg-transparent border-none p-0 cursor-pointer text-[11px]"
            >
              Disclaimer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
