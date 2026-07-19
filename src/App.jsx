import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Welcome from './components/Welcome';
import Programs from './components/Programs';
import Advantage from './components/Advantage';
import Faq from './components/Faq';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';


export default function App() {
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalType, setLegalType] = useState(null);

  const handleOpenLegal = (type) => {
    setLegalType(type);
    setIsLegalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-800 flex flex-col font-sans">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow overflow-x-hidden">
        {/* Large Rotating Hero Banner */}
        <Hero />

        {/* Quick Stats Strip */}
        <Stats />

        {/* Credibility and Welcome Section */}
        <Welcome />

        {/* Program Cards Showcase (Graduate, PG, PhD) */}
        <Programs />

        {/* Amity Advantage Grid & Alumni Milestones */}
        <Advantage />

        {/* Frequently Asked Questions */}
        <Faq />

        {/* Conversion Focused Admissions Inquiry Hub */}
        <InquiryForm />
      </main>

      {/* Comprehensive Academic Footer */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Legal documents overlay modal */}
      <LegalModal
        isOpen={isLegalOpen}
        type={legalType}
        onClose={() => setIsLegalOpen(false)}
      />
    </div>
  );
}
