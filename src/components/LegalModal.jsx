import { useState, useEffect } from 'react';
import { X, ShieldCheck, FileText, HelpCircle } from 'lucide-react';
import data from '../data.json';

export default function LegalModal({ isOpen, type, onClose }) {
  const [visible, setVisible] = useState(false);

  // Manage a short delay for entry/exit CSS transitions
  useEffect(() => {
    if (isOpen) {
      // Small rAF delay ensures the DOM paints with opacity-0 before we flip to opacity-100
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  if (!isOpen && !visible) return null;
  if (!type) return null;

  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      icon: <ShieldCheck className="w-6 h-6 text-amity-gold" />,
      subtitle: 'How we manage and protect your educational counseling information.',
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p className="font-semibold text-slate-800">Effective Date: July 19, 2026</p>
          <p>
            At <strong>Samridh Edu Care Services</strong>, your privacy is paramount. We collect basic information from our website inquiry form (such as your name, mobile phone number, email address, current city/state, and program of interest) to provide tailored educational counseling, university matching advice, and registration assistance.
          </p>
          <h4 className="font-display font-bold text-slate-900 text-sm mt-4">1. Information We Collect</h4>
          <p>
            We collect the contact and academic interest information you actively submit to us via our online contact portals. We also maintain records of the programs, open-schooling courses, or streams you inquire about.
          </p>
          <h4 className="font-display font-bold text-slate-900 text-sm mt-4">2. How We Use Your Data</h4>
          <p>
            Your information is strictly used for counselor callbacks, admissions guidance, documentation assistance under legal boards, and answering state university program queries. We do not sell or rent your contact details to third-party marketing companies.
          </p>
          <h4 className="font-display font-bold text-slate-900 text-sm mt-4">3. Data Retention &amp; Security</h4>
          <p>
            We implement industry-standard database and communication encryption measures to keep student inquiries safe. Information is stored in password-protected records accessible only to authorized admissions counselors.
          </p>
          <h4 className="font-display font-bold text-slate-900 text-sm mt-4">4. Your Rights</h4>
          <p>
            You may request at any time to update, verify, or permanently delete your contact data from our active calling schedules. Contact us directly at <a href={`mailto:${data.contact.email}`} className="text-amity-navy font-bold hover:underline">{data.contact.email}</a> for inquiries.
          </p>
        </div>
      ),
    },
    terms: {
      title: 'Terms of Service',
      icon: <FileText className="w-6 h-6 text-amity-gold" />,
      subtitle: 'Agreement regarding counselor advisement and student representation.',
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p className="font-semibold text-slate-800">Effective Date: July 19, 2026</p>
          <p>
            By submitting an inquiry or engaging with <strong>Samridh Edu Care Services</strong>, you agree to these Terms of Service. Please read them carefully.
          </p>
          <h4 className="font-display font-bold text-slate-900 text-sm mt-4">1. Scope of Services</h4>
          <p>
            We provide pre-admission guidance, board preparation counseling, counseling documentation organizing, and student support. Admissions are finalized based on guidelines issued by respective universities, colleges, and central/state education boards (e.g., NIOS, UGC, PCI, NCTE).
          </p>
          <h4 className="font-display font-bold text-slate-900 text-sm mt-4">2. Accurate Representations</h4>
          <p>
            Students are solely responsible for presenting authentic previous educational documents (such as matriculation certificates, high school mark sheets, and proof of residence) for open-schooling (+2 streams) or direct college enrollments. Any forged document submission will result in immediate termination of counseling.
          </p>
          <h4 className="font-display font-bold text-slate-900 text-sm mt-4">3. Fee and Financial Policies</h4>
          <p>
            Advisory fees, board registration costs, and university tuition expenses are communicated during enrollment counseling. Installments must align with standard state university schedules. Any refunds depend strictly on the formal policies of the respective educational boards and universities.
          </p>
          <h4 className="font-display font-bold text-slate-900 text-sm mt-4">4. Academic Outcomes</h4>
          <p>
            While we provide extensive training materials, dropout coaching, and practical exam schedules, passing examinations or securing university diplomas depends entirely on the student's individual academic performance and attendance.
          </p>
        </div>
      ),
    },
    disclaimer: {
      title: 'Disclaimer',
      icon: <HelpCircle className="w-6 h-6 text-amity-gold" />,
      subtitle: 'Official legal clarify statement regarding college affiliations.',
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <h4 className="font-display font-bold text-slate-900 text-sm">Educational counseling status</h4>
          <p>
            <strong>Samridh Edu Care Services</strong> is a registered, independent educational consulting hub and private counseling provider located in Berhampur, Odisha. We are <strong>not</strong> a direct board, college, or university. We do not independently issue, print, or award degrees, diplomas, or school certificates.
          </p>
          <h4 className="font-display font-bold text-slate-900 text-sm mt-4">Affiliations and Accreditations</h4>
          <p>
            All degrees (B.Tech, MBA, MCA, B.Ed, B.Pharma) and school certificates (NIOS 10th &amp; 12th) highlighted on this website are awarded exclusively by government-authorized, UGC-recognized, and NCTE/PCI/NCVT-approved colleges, state universities, or national boards. Our counseling center assists in coordinating direct enrollment and exam application preparation.
          </p>
          <h4 className="font-display font-bold text-slate-900 text-sm mt-4">Website Content Accuracy</h4>
          <p>
            While we maintain accurate program durations, syllabus structures, and criteria for scholarships, university guidelines are subject to change by respective institutional administrations. Information provided here is for general counseling awareness and should be verified with final admission letters.
          </p>
        </div>
      ),
    },
  };

  const selected = contentMap[type];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop — CSS fade */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Modal Card — CSS scale + fade */}
      <div
        className={`relative bg-white rounded-2xl shadow-2xl border border-slate-100 max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden z-10
          transition-all duration-300 ease-out
          ${visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2'}`}
      >
        {/* Header */}
        <div className="bg-slate-50 p-6 border-b border-slate-100 flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-amity-navy text-white rounded-xl shadow-sm">
              {selected.icon}
            </div>
            <div>
              <h3 className="font-display font-extrabold text-lg text-slate-900">
                {selected.title}
              </h3>
              <p className="text-slate-500 text-xs mt-0.5">
                {selected.subtitle}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/50 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto max-h-[55vh] border-b border-slate-100">
          {selected.body}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 flex items-center justify-between text-xs text-slate-400">
          <span>Samridh Edu Care Services — Trusted counseling since 2016</span>
          <button
            onClick={onClose}
            className="bg-amity-navy hover:bg-amity-navy-light text-white font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
