import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ProposalSection } from './components/ProposalSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhatKidsCanDoSection } from './components/WhatKidsCanDoSection';
import { MethodCrearSection } from './components/MethodCrearSection';
import { ReadingClubSection } from './components/ReadingClubSection';
import { AboutReyesSection } from './components/AboutReyesSection';
import { TrustSection } from './components/TrustSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenContact = () => {
    setContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setContactModalOpen(false);
  };

  return (
    <div id="landing-page-root" className="min-h-screen flex flex-col bg-[#F8F7F4] text-[#1D1B1B]">
      
      {/* Primary Navigation in Variation 4 Style */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        
        {/* Section 1: Hero (Variation 4 Header with Pill, Gaegu Title, Value Proposition & CTA) */}
        <Hero onOpenContact={handleOpenContact} />

        {/* Section 2: El Problema (Addressing parents warmly) */}
        <ProblemSection />

        {/* Section 3: La Propuesta (Variation 4 "El niño no solo aprende; crea." + Cuentos, Arte, Exploración) */}
        <ProposalSection />

        {/* Section 4: Cómo Funciona (Process & Flexible Real Classroom Cases) */}
        <HowItWorksSection />

        {/* Section 5: Qué Puede Hacer el Niño (Concrete Activities) */}
        <WhatKidsCanDoSection />

        {/* Section 6: Mi Enfoque (El Método CREAR) */}
        <MethodCrearSection />

        {/* Section 7: Club de Lectura en YouTube (Free Entryway) */}
        <ReadingClubSection onOpenContact={handleOpenContact} />

        {/* Section 8: Sobre Reyes (Visual artist & Child Educator) */}
        <AboutReyesSection />

        {/* Section 9: Confianza (Credentials & Child Safety Guarantee) */}
        <TrustSection />

        {/* Section 10: CTA Final (Variation 4 Card with 40px rounded corners & Contactar con Reyes) */}
        <FinalCtaSection onOpenContact={handleOpenContact} />

        {/* Footer with Newsletter for Parents & Variation 4 Copyright Signature */}
        <Footer onOpenContact={handleOpenContact} />

      </main>

      {/* Interactive Contact Dialog */}
      <ContactModal isOpen={contactModalOpen} onClose={handleCloseContact} />
    </div>
  );
}
