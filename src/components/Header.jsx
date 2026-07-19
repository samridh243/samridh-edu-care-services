import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Award,
  FileText,
  Globe,
  PhoneCall,
} from "lucide-react";

import data from "../data.json";
import logo from "../../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    {
      name: "Courses",
      dropdown: [
        "Undergraduate Degrees",
        "Postgraduate Degrees",
        "Open Schooling (NIOS)",
        "Diploma & ITI Studies",
        "Skill-Based Courses",
      ],
    },
    {
      name: "Admissions & Services",
      dropdown: [
        "Admission Process 2026",
        "Scholarship Assistance",
        "Career Guidance",
        "Trusted Counseling",
        "College Tie-Ups",
      ],
    },
    {
      name: "Flexible Schooling",
      dropdown: [
        "NIOS 10th & 12th",
        "+2 Science/Arts/Commerce",
        "Support for School Dropouts",
        "Working Professionals Support",
      ],
    },
  ];

  const handleDropdownToggle = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const handleSubLinkClick = (subItem) => {
    setIsOpen(false);
    setActiveDropdown(null);

    // Map subItem string to exact filter in Programs component
    let filter = null;
    if (["Undergraduate Degrees", "Degrees"].includes(subItem)) {
      filter = "Degrees";
    } else if (["Postgraduate Degrees", "Postgraduate"].includes(subItem)) {
      filter = "Postgraduate";
    } else if (
      [
        "Open Schooling (NIOS)",
        "NIOS 10th & 12th",
        "+2 Science/Arts/Commerce",
        "Support for School Dropouts",
      ].includes(subItem)
    ) {
      filter = "Open Schooling";
    } else if (
      [
        "Diploma & ITI Studies",
        "Skill-Based Courses",
        "Working Professionals Support",
      ].includes(subItem)
    ) {
      filter = "Diplomas & Skills";
    }

    if (filter) {
      const event = new CustomEvent("set-program-filter", { detail: filter });
      window.dispatchEvent(event);
    } else {
      // If it's an admissions/services sublink, let's scroll to the respective section
      if (
        [
          "Admission Process 2026",
          "Scholarship Assistance",
          "Career Guidance",
        ].includes(subItem)
      ) {
        const el = document.getElementById("apply");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else if (["Trusted Counseling", "College Tie-Ups"].includes(subItem)) {
        const el = document.getElementById("advantage");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <>
      {/* Top Banner Alert (Credential-building for Samridh) */}
      <div
        className="bg-amity-navy-dark text-slate-100 text-xs py-2 px-4 border-b border-white/10 hidden md:block"
        id="top-bar"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 lg:gap-0">
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4">
            <span className="flex items-center space-x-1 justify-center">
              <Award className="w-3.5 h-3.5 text-amity-gold shrink-0" />
              <span>Government Recognized Certifications</span>
            </span>
            <span className="hidden sm:inline h-3 w-[1px] bg-white/20"></span>
            <span className="flex items-center space-x-1 justify-center">
              <Globe className="w-3.5 h-3.5 text-amity-gold shrink-0" />
              <span>Direct Tie-ups with Leading Colleges in Berhampur</span>
            </span>
          </div>
          <div className="flex items-center justify-center lg:justify-end space-x-4 font-medium">
            <a
              href="#apply"
              className="hover:text-amity-gold transition-colors"
            >
              Scholarship Aid
            </a>
            <span className="text-white/25">|</span>
            <a
              href="#apply"
              className="hover:text-amity-gold transition-colors"
            >
              Career Guidance
            </a>
            <span className="text-white/25">|</span>
            <a
              href={`tel:${data.contact.phone}`}
              className="hover:text-amity-gold transition-colors flex items-center space-x-1"
            >
              <PhoneCall className="w-3 h-3 text-amity-gold" />
              <span>{data.contact.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className="bg-white shadow-md py-3 border-b border-slate-100 sticky top-0 z-50"
        id="main-navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo area */}
            <a
              href="#"
              className="flex items-center"
              aria-label="Samridh Edu Care Services"
            >
              <img
                src={logo}
                alt="Samridh Edu Care Services"
                className="h-16 sm:h-18 w-auto object-contain"
                loading="eager"
                draggable={false}
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center space-x-8"
              id="desktop-nav"
            >
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="flex items-center space-x-1 font-medium text-sm text-amity-navy hover:text-amity-navy-light py-2 cursor-pointer transition-colors"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {/* Standard hover dropdown */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 mt-2 bg-white rounded-lg shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 z-50">
                    <div className="p-2 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <button
                          key={subItem}
                          onClick={() => handleSubLinkClick(subItem)}
                          className="w-full text-left block px-4 py-2.5 text-xs text-slate-700 hover:bg-slate-50 hover:text-amity-navy rounded-md font-medium transition-colors cursor-pointer"
                        >
                          {subItem}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <a
                href="#advantage"
                className="font-medium text-sm text-amity-navy hover:text-amity-navy-light py-2 transition-colors"
              >
                Our Advantage
              </a>
              <a
                href="#faq"
                className="font-medium text-sm text-amity-navy hover:text-amity-navy-light py-2 transition-colors"
              >
                FAQs
              </a>
            </nav>

            {/* Desktop CTAs */}
            <div
              className="hidden sm:flex items-center space-x-4"
              id="header-ctas"
            >
              <a
                href="#apply"
                className="bg-amity-gold hover:bg-amity-gold-hover text-amity-navy font-bold text-sm px-6 py-2.5 rounded-full shadow-[0_4px_14px_rgba(255,199,44,0.35)] hover:shadow-[0_6px_20px_rgba(255,199,44,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wider text-center"
                id="apply-btn-header"
              >
                Enquiry Now
              </a>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex items-center space-x-4 lg:hidden">
              <a
                href="#apply"
                className="bg-amity-gold hover:bg-amity-gold-hover text-amity-navy font-bold text-xs px-4 py-2 rounded-full uppercase tracking-wider"
              >
                Enquiry
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-amity-navy"
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel — CSS max-height transition */}
        <div
          className={`lg:hidden bg-white border-b border-slate-100 overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
          }`}
          id="mobile-nav-panel"
        >
          <div className="px-4 pt-2 pb-6 space-y-4 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="border-b border-slate-100 pb-2"
              >
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className="flex justify-between items-center w-full py-2 text-left font-bold text-slate-800 text-sm focus:outline-none"
                >
                  <span>{item.name}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === item.name && (
                  <div className="pl-4 py-2 space-y-2">
                    {item.dropdown.map((subItem) => (
                      <button
                        key={subItem}
                        onClick={() => handleSubLinkClick(subItem)}
                        className="w-full text-left block py-1.5 text-xs text-slate-600 hover:text-amity-navy font-medium cursor-pointer"
                      >
                        {subItem}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#advantage"
              onClick={() => setIsOpen(false)}
              className="block py-2 font-bold text-slate-800 text-sm border-b border-slate-100"
            >
              Our Advantage
            </a>
            <a
              href="#faq"
              onClick={() => setIsOpen(false)}
              className="block py-2 font-bold text-slate-800 text-sm border-b border-slate-100"
            >
              FAQs
            </a>
            <div className="pt-4 flex flex-col space-y-3">
              <a
                href={`tel:${data.contact.phone}`}
                className="flex items-center justify-center space-x-2 border border-slate-200 py-3 rounded-lg text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>Call Support</span>
              </a>
              <a
                href="#apply"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center bg-amity-navy text-white py-3 rounded-lg font-bold text-sm hover:bg-amity-navy-light transition-colors uppercase tracking-wider"
              >
                <span>Enquiry Now 2026</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
