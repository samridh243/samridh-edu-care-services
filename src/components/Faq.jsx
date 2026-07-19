import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "What services does Samridh Edu Care Services provide?",
    answer: "We are Berhampur's trusted educational counseling center. We offer expert academic counseling, end-to-end admission guidance, specialized support for schooling dropouts, and assistance in finding recognized undergraduate, postgraduate, PhD, and vocational courses."
  },
  {
    question: "Are the programs and boards you recommend government-recognized?",
    answer: "Absolutely. We only suggest government-recognized boards (such as NIOS for 10th & 12th standards) and UGC/AICTE/DEC-approved universities for higher education. All certificates and degrees are fully valid for government jobs, higher studies, and global opportunities."
  },
  {
    question: "How do you help dropouts complete their high school education?",
    answer: "We provide comprehensive counseling and hand-holding support for dropouts to enroll in the National Institute of Open Schooling (NIOS) for 10th (Secondary) and 12th (Senior Secondary) boards. We assist with registration, study material guidance, and exam preparation resources."
  },
  {
    question: "Can working professionals enroll in these educational programs?",
    answer: "Yes, one of our core specialties is finding flexible, work-friendly academic routes. We guide working professionals toward recognized weekend, distance, or online learning options that allow them to upgrade their qualifications without pausing their careers."
  },
  {
    question: "Do you offer support for scholarship schemes?",
    answer: "Yes, we actively guide eligible students through various government, state, and institutional scholarship schemes to help reduce the financial burden of higher education."
  },
  {
    question: "What is the fee or cost for your counseling services?",
    answer: "Our initial counseling session is completely free. We sit down with the student and parents to understand their career goals, financial budget, and past education to chart the perfect pathway at no upfront cost."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50 font-sans" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amity-navy bg-white px-3 py-1.5 rounded-full border border-slate-200 inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-amity-gold" />
            Common Doubts Resolved
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-amity-navy tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Got questions? We have answers. Explore our most popular queries to understand how we can help you accelerate your academic journey.
          </p>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 py-4 sm:p-6 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-slate-900 text-sm sm:text-base hover:text-amity-navy transition-colors">
                    {item.question}
                  </span>
                  <div className="shrink-0 p-1 bg-slate-50 rounded-full border border-slate-100 text-slate-500">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-amity-navy" />
                    ) : (
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                    )}
                  </div>
                </button>

                <div
                  className={`accordion-grid ${isOpen ? 'open' : 'closed'}`}
                >
                  <div className="accordion-inner">
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-slate-100/60">
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-4">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick bottom CTA card */}
        <div className="mt-12 text-center bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm max-w-2xl mx-auto">
          <h4 className="font-display font-bold text-slate-900 text-base sm:text-lg">Still have questions?</h4>
          <p className="text-slate-500 text-xs sm:text-sm mt-1 mb-4">
            Our expert educational counselors are ready to help you with personalized guidance.
          </p>
          <a
            href="#apply"
            className="inline-flex items-center space-x-2 bg-amity-navy hover:bg-amity-navy-light text-white font-bold text-xs sm:text-sm px-5 py-2.5 sm:px-6 sm:py-3 rounded-full transition-all"
          >
            Enquiry with a Counselor
          </a>
        </div>

      </div>
    </section>
  );
}
