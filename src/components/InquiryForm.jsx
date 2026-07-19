import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Calendar, ArrowRight, CheckCircle2, ShieldAlert, Sparkles, Loader2, AlertCircle } from 'lucide-react';

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function InquiryForm() {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    programInterested: '',
    level: '',
    state: 'Odisha',
    city: 'Berhampur',
  });

  const [submitted, setSubmitted]   = useState(false);
  const [isLoading, setIsLoading]   = useState(false);
  const [sendError, setSendError]   = useState('');
  const [errors, setErrors]         = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim())
      newErrors.name = 'Please provide your full name';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = 'Enter a valid email address';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/[^\d]/g, '')))
      newErrors.phone = 'Provide a valid 10-digit mobile number';
    if (!form.level)
      newErrors.level = 'Please select program level';
    if (!form.programInterested)
      newErrors.programInterested = 'Specify stream or course of interest';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSendError('');
    if (!validate()) return;

    setIsLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.name,
          from_email:   form.email,
          phone:        form.phone,
          level:        form.level,
          program:      form.programInterested,
          state:        form.state,
          city:         form.city,
          reply_to:     form.email,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setSubmitted(true);
    } catch (err) {
      console.error('EmailJS error:', err);
      setSendError('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setForm({
      name: '',
      email: '',
      phone: '',
      programInterested: '',
      level: '',
      state: 'Odisha',
      city: 'Berhampur',
    });
    setSubmitted(false);
    setSendError('');
    setErrors({});
  };

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden" id="apply">
      {/* Background graphic elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amity-gold/10 rounded-full blur-3xl -mr-16 -mt-16 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-amity-navy/5 rounded-full blur-3xl -ml-16 -mb-16 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── Information & Trust column (Left) ── */}
          <div className="lg:col-span-5 space-y-8" id="inquiry-info">
            <div className="space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amity-navy bg-amity-gold/25 border border-amity-gold/40 px-3 py-1.5 rounded-full w-fit">
                Counseling Admissions 2026-27
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-amity-navy tracking-tight leading-tight">
                Connect with Berhampur's Trusted Advising Team
              </h2>
              <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
                Take the right step towards your career goals. Complete our quick inquiry form to receive dedicated admission support, scholarship counseling, and tailored academic programs.
              </p>
            </div>

            {/* Quick deadlines/dates */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 space-y-4">
              <h3 className="font-display font-bold text-slate-900 text-base flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-amity-gold" />
                <span>Admission Counseling Details:</span>
              </h3>
              <div className="space-y-3 divide-y divide-slate-100">
                <div className="flex justify-between items-center pt-2 first:pt-0 text-right text-wrap">
                  <span className="text-xs font-bold text-slate-700">Counseling Registration</span>
                  <span className="text-xs font-bold text-red-500 bg-red-50 px-2.5 py-1 rounded-md">Admissions Active</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="text-xs font-bold text-slate-700">Scholarship Eligibility Support</span>
                  <span className="text-xs font-semibold text-slate-500">Free Assessment</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="text-xs font-bold text-slate-700">Flexible Batches Intake</span>
                  <span className="text-xs font-semibold text-slate-500">Contact Counselor</span>
                </div>
              </div>
            </div>

            {/* Direct Support links */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center space-x-3.5">
                <div className="p-3 bg-amity-navy text-white rounded-full">
                  <Phone className="w-5 h-5 text-amity-gold" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-widest">Counseling Helpline</h4>
                  <a href="tel:+919938003551" className="text-sm font-bold text-slate-900 hover:text-amity-navy transition-colors">
                    +91 9938003551
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5">
                <div className="p-3 bg-amity-navy text-white rounded-full">
                  <Mail className="w-5 h-5 text-amity-gold" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-widest">Office Mail Support</h4>
                  <a href="mailto:contact@samridheducareservices.com" className="text-sm font-bold text-slate-900 hover:text-amity-navy transition-colors">
                    contact@samridheducareservices.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Interactive Form column (Right) ── */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-slate-100" id="inquiry-form-container">
            {!submitted ? (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5 animate-fade-in"
                noValidate
              >
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900">
                    Admission Inquiry Form
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill in details below to book your free counseling call.{' '}
                    <span className="text-red-500">*</span> fields are mandatory.
                  </p>
                </div>

                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="inq-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="inq-name"
                    type="text"
                    required
                    placeholder="e.g. Priyaranjan Sahu"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-red-300 focus:ring-red-100 focus:border-red-500'
                        : 'border-slate-200 focus:ring-amity-gold/20 focus:border-amity-gold'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-500 font-bold flex items-center space-x-1">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="inq-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="inq-email"
                      type="email"
                      required
                      placeholder="e.g. priya@gmail.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-red-300 focus:ring-red-100 focus:border-red-500'
                          : 'border-slate-200 focus:ring-amity-gold/20 focus:border-amity-gold'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-500 font-bold flex items-center space-x-1">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="inq-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Mobile Number (10 digit) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-3.5 text-slate-400 text-sm font-medium">+91</span>
                      <input
                        id="inq-phone"
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="9938003551"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, '') })}
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border bg-slate-50 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.phone
                            ? 'border-red-300 focus:ring-red-100 focus:border-red-500'
                            : 'border-slate-200 focus:ring-amity-gold/20 focus:border-amity-gold'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[11px] text-red-500 font-bold flex items-center space-x-1">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Level */}
                <div className="space-y-1.5">
                  <label htmlFor="inq-level" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Program Stream <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="inq-level"
                    required
                    value={form.level}
                    onChange={(e) => setForm({ ...form, level: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-slate-800 text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.level
                        ? 'border-red-300 focus:ring-red-100 focus:border-red-500'
                        : 'border-slate-200 focus:ring-amity-gold/20 focus:border-amity-gold'
                    }`}
                  >
                    <option value="">-- Choose Category --</option>
                    <option value="Undergraduate Degrees">Undergraduate Degrees (BTech, BBA, BCA, BSc, BPharma, BEd, BA, BCom)</option>
                    <option value="Postgraduate">Postgraduate Degrees (MBA, MTech, MCA, MSc, MA, MEd)</option>
                    <option value="Open Schooling (NIOS)">Open Schooling NIOS (10th &amp; 12th Board / +2 Streams)</option>
                    <option value="Diploma & ITI">Diplomas &amp; ITI (Polytechnic, ITI Trades)</option>
                  </select>
                  {errors.level && (
                    <p className="text-[11px] text-red-500 font-bold flex items-center space-x-1">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>{errors.level}</span>
                    </p>
                  )}
                </div>

                {/* Specific course */}
                <div className="space-y-1.5">
                  <label htmlFor="inq-program" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Specific Course of Interest <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="inq-program"
                    type="text"
                    required
                    placeholder="e.g. MBA Specialization, NIOS 12th Science, B.Ed"
                    value={form.programInterested}
                    onChange={(e) => setForm({ ...form, programInterested: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.programInterested
                        ? 'border-red-300 focus:ring-red-100 focus:border-red-500'
                        : 'border-slate-200 focus:ring-amity-gold/20 focus:border-amity-gold'
                    }`}
                  />
                  {errors.programInterested && (
                    <p className="text-[11px] text-red-500 font-bold flex items-center space-x-1">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>{errors.programInterested}</span>
                    </p>
                  )}
                </div>

                {/* City & State */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="inq-state" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">State</label>
                    <input
                      id="inq-state"
                      type="text"
                      placeholder="Odisha"
                      value={form.state}
                      onChange={(e) => setForm({ ...form, state: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amity-gold/20 focus:border-amity-gold transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="inq-city" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">City</label>
                    <input
                      id="inq-city"
                      type="text"
                      placeholder="Berhampur"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amity-gold/20 focus:border-amity-gold transition-all"
                    />
                  </div>
                </div>

                {/* Send error banner */}
                {sendError && (
                  <div className="flex items-start space-x-2.5 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-xs font-medium">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{sendError}</span>
                  </div>
                )}

                {/* Submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-amity-gold hover:bg-amity-gold-hover disabled:opacity-70 disabled:cursor-not-allowed text-amity-navy font-black text-xs sm:text-sm uppercase tracking-widest py-3 px-5 sm:py-4 sm:px-6 rounded-xl shadow-[0_5px_15px_rgba(255,199,44,0.3)] hover:shadow-[0_8px_25px_rgba(255,199,44,0.5)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Get Free Counseling Call</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* ── Success Message ── */
              <div className="text-center py-10 px-4 space-y-6 flex flex-col items-center justify-center animate-fade-in-scale">
                <div className="p-4 bg-green-50 text-green-500 rounded-full border border-green-200 shadow-sm animate-bounce">
                  <CheckCircle2 className="w-12 h-12" />
                </div>

                <div className="space-y-2">
                  <div className="inline-flex items-center space-x-1 px-3 py-1 bg-amity-navy text-amity-gold text-xs font-bold uppercase tracking-wider rounded-full">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Counseling Ticket Raised</span>
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 leading-tight">
                    Thank You, {form.name.split(' ')[0]}!
                  </h3>
                  <p className="text-slate-500 text-sm max-w-md mx-auto">
                    Your inquiry regarding{' '}
                    <strong>{form.programInterested} ({form.level})</strong> has been registered
                    successfully. A senior education counselor will contact you on{' '}
                    <strong>+91 {form.phone}</strong> and via <strong>{form.email}</strong>{' '}
                    within 12 hours.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={resetForm}
                    className="text-xs font-bold text-amity-navy hover:text-amity-navy-light underline cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
