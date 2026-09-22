import React, { useState } from 'react';
import { BookOpen, Palette, Compass, Sparkles, MessageCircle } from 'lucide-react';
import { PROPOSAL_PILLARS } from '../data/content';

export const ProposalSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const getIcon = (id: string) => {
    switch (id) {
      case 'read':
        return <BookOpen className="w-6 h-6 text-[#E86A33]" />;
      case 'speak':
        return <MessageCircle className="w-6 h-6 text-[#E86A33]" />;
      case 'create':
        return <Palette className="w-6 h-6 text-[#E86A33]" />;
      case 'imagine':
        return <Sparkles className="w-6 h-6 text-[#E86A33]" />;
      case 'explore':
        return <Compass className="w-6 h-6 text-[#E86A33]" />;
      default:
        return <BookOpen className="w-6 h-6 text-[#E86A33]" />;
    }
  };

  return (
    <section
      id="propuesta"
      className="py-16 md:py-24 bg-white text-[#1D1B1B]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Variation 4 Headline and Intro */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="mb-3">
            <span className="pill shadow-xs">
              Nuestra Propuesta Pedagógica
            </span>
          </div>

          <h2 className="section-title text-center">
            El niño no solo aprende; crea.
          </h2>

          <p className="text-body text-center text-lg sm:text-xl text-[#444444] max-w-2xl mx-auto">
            Nuestro método transforma el aprendizaje de idiomas en una aventura. En lugar de fichas mecánicas, utilizamos:
          </p>
        </div>

        {/* 3 Core Pillars in Variation 4 HTML Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-16">
          <div className="p-8 rounded-[36px] bg-[#F8F7F4] border border-[#E5E2DC] transition-all hover:shadow-md hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-[#FFC947]/30 flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-[#E86A33]" />
            </div>
            <h3 className="font-gaegu text-3xl font-bold text-[#1D1B1B] mb-2">
              Cuentos & Lectura
            </h3>
            <p className="font-sans text-base sm:text-lg text-[#555555] leading-relaxed">
              Historias ilustradas que despiertan la curiosidad innata por las palabras y estructuran el lenguaje con emoción, ritmo y contexto visual natural.
            </p>
          </div>

          <div className="p-8 rounded-[36px] bg-[#F8F7F4] border border-[#E5E2DC] transition-all hover:shadow-md hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-[#FFC947]/30 flex items-center justify-center mb-4">
              <Palette className="w-6 h-6 text-[#E86A33]" />
            </div>
            <h3 className="font-gaegu text-3xl font-bold text-[#1D1B1B] mb-2">
              Arte & Dibujo
            </h3>
            <p className="font-sans text-base sm:text-lg text-[#555555] leading-relaxed">
              Pintura, cómic e ilustración como puentes orgánicos de comprensión para retener nuevo vocabulario sin memorización forzada.
            </p>
          </div>

          <div className="p-8 rounded-[36px] bg-[#F8F7F4] border border-[#E5E2DC] transition-all hover:shadow-md hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-[#FFC947]/30 flex items-center justify-center mb-4">
              <Compass className="w-6 h-6 text-[#E86A33]" />
            </div>
            <h3 className="font-gaegu text-3xl font-bold text-[#1D1B1B] mb-2">
              Exploración & Naturaleza
            </h3>
            <p className="font-sans text-base sm:text-lg text-[#555555] leading-relaxed">
              Investigamos el entorno real, observamos botánica y animales para ampliar el registro lingüístico con sentido práctico y científico.
            </p>
          </div>
        </div>

        {/* Extended 5-Pillar Tabs with Detailed Exploration */}
        <div className="bg-[#F8F7F4] rounded-[40px] p-6 sm:p-10 border border-[#E5E2DC]">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
            <h4 className="font-gaegu text-2xl sm:text-3xl text-[#1D1B1B] font-bold">
              Las 5 Dimensiones del Acompañamiento
            </h4>
            <span className="font-sans text-xs text-[#666] font-medium">
              Haz clic para explorar cada dimensión
            </span>
          </div>

          {/* Pill Selector */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {PROPOSAL_PILLARS.map((pillar, idx) => (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setSelectedPillar(idx)}
                className={`px-4 py-2 rounded-full font-gaegu text-xl transition-all cursor-pointer ${
                  selectedPillar === idx
                    ? 'bg-[#E86A33] text-white shadow-sm scale-105'
                    : 'bg-white text-[#1D1B1B] border border-[#E5E2DC] hover:border-[#E86A33]'
                }`}
              >
                {pillar.title}
              </button>
            ))}
          </div>

          {/* Active Pillar Card */}
          <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-[#E5E2DC] flex flex-col sm:flex-row items-start gap-6">
            <div className="w-14 h-14 rounded-full bg-[#FFC947]/20 flex items-center justify-center shrink-0">
              {getIcon(PROPOSAL_PILLARS[selectedPillar].id)}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#E86A33]">
                  {PROPOSAL_PILLARS[selectedPillar].subtitle}
                </span>
                <span className="text-[#888]">·</span>
                <span className="font-sans text-xs text-[#666]">
                  Pilar {selectedPillar + 1} de 5
                </span>
              </div>
              <h5 className="font-gaegu text-3xl text-[#1D1B1B] font-bold mb-2">
                {PROPOSAL_PILLARS[selectedPillar].title}
              </h5>
              <p className="font-sans text-base sm:text-lg text-[#555] leading-relaxed mb-3">
                {PROPOSAL_PILLARS[selectedPillar].description}
              </p>
              <div className="p-4 rounded-2xl bg-[#F8F7F4] border border-[#E5E2DC] font-sans text-sm text-[#444]">
                <strong className="text-[#E86A33]">En la práctica:</strong> {PROPOSAL_PILLARS[selectedPillar].detailedBenefit}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
