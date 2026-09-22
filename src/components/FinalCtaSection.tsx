import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenContact: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="contacto-final"
      className="py-16 md:py-24 bg-[#F8F7F4] text-[#1D1B1B]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Variation 4 CTA Card: padding: 4rem; background: #EEE; border-radius: 40px; text-align: center; */}
        <div className="p-8 sm:p-16 bg-[#EFECE6] border border-[#E5E2DC] rounded-[40px] text-center shadow-xs">
          
          <div className="mb-3">
            <span className="pill shadow-xs">
              Primer Encuentro
            </span>
          </div>

          <h3 className="section-title text-center text-4xl sm:text-5xl md:text-6xl mb-4">
            ¿Listo para empezar?
          </h3>

          <p className="text-body max-w-xl mx-auto mb-8 text-lg sm:text-xl text-[#444444]">
            Cuéntame qué temas le apasionan a tu hijo/a y diseñemos una ruta creativa para su bilingüismo.
          </p>

          <button
            type="button"
            onClick={onOpenContact}
            className="btn-ink text-2xl py-3.5 px-8 rounded-full inline-flex items-center gap-2 shadow-md"
          >
            <span>Contactar con Reyes</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-sans text-[#777]">
            <span>✓ Sin compromiso</span>
            <span>·</span>
            <span>✓ Conversación directa con Reyes</span>
            <span>·</span>
            <span>✓ Propuesta adaptada a su edad</span>
          </div>

        </div>

      </div>
    </section>
  );
};
