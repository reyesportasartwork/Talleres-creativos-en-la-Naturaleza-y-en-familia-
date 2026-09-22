import React, { useState } from 'react';
import { ArrowRight, Sparkles, Palette, PenTool, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { InteractiveSketchArea } from './InteractiveSketchArea';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [showSketchpad, setShowSketchpad] = useState(false);

  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#F8F7F4] text-[#1D1B1B]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Variation 4 Gold Pill Badge */}
        <div className="mb-4">
          <span className="pill shadow-xs">
            Creative Spanish Studio
          </span>
        </div>

        {/* Hero Title in Gaegu Font (Variation 4) */}
        <h1
          id="hero-headline"
          className="text-5xl sm:text-6xl md:text-7xl font-bold font-gaegu text-[#1D1B1B] leading-[1.05] tracking-tight mb-4"
        >
          {BRAND_INFO.subBrand}
        </h1>

        {/* Secondary Title / Tagline */}
        <div className="mb-4">
          <span className="font-gaegu text-2xl sm:text-3xl text-[#E86A33] font-bold">
            Spanish through stories, art & imagination
          </span>
        </div>

        {/* Subtitle / Value Proposition in Plus Jakarta Sans */}
        <p
          id="hero-subtitle"
          className="text-body max-w-2xl mx-auto mb-8 text-lg sm:text-xl text-[#444444]"
        >
          Español para niños a través de historias, arte, naturaleza y creatividad. Proyecto educativo de{' '}
          <strong className="text-[#1D1B1B] font-semibold">{BRAND_INFO.educator}</strong> para familias homeschool y bilingües.
        </p>

        {/* Navigation Quick Links (Variation 4 Header Links) */}
        <div className="nav-links flex justify-center gap-6 sm:gap-8 mb-8 flex-wrap">
          <a href="#propuesta" className="nav-link">
            La Propuesta
          </a>
          <a href="#metodo" className="nav-link">
            Método CREAR
          </a>
          <a href="#club-lectura" className="nav-link">
            Club YouTube
          </a>
          <a href="#sobre-reyes" className="nav-link">
            Sobre Reyes
          </a>
        </div>

        {/* Primary & Interactive Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            type="button"
            id="hero-primary-cta"
            onClick={onOpenContact}
            className="btn-accent text-2xl py-3 px-8 shadow-md"
          >
            <span>¡Quiero Conoceros!</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => setShowSketchpad(!showSketchpad)}
            className="btn-secondary text-xl py-2.5 px-6 shadow-xs flex items-center gap-2"
          >
            <Palette className="w-5 h-5 text-[#E86A33]" />
            <span>{showSketchpad ? 'Ocultar Pizarra' : 'Dibujar en el Taller'}</span>
          </button>
        </div>

        {/* Core Value Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 font-sans text-xs sm:text-sm text-[#666666]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#E86A33]" />
            <span>Niños de 6 a 12 años</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#E86A33]" />
            <span>Familias Homeschool & Bilingües</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#E86A33]" />
            <span>Educación Viva y Personalizada</span>
          </span>
        </div>

        {/* Interactive Sketchpad Dropdown in Variation 4 Card Style */}
        {showSketchpad && (
          <div className="mt-10 p-6 sm:p-8 bg-white border border-[#E5E2DC] rounded-[36px] shadow-sm animate-in fade-in zoom-in-95 duration-200 text-left">
            <div className="flex items-center justify-between mb-4 border-b border-[#F0EFEA] pb-3">
              <div className="flex items-center gap-2">
                <span className="pill text-xs py-1 px-3">
                  Taller Creativo Interactivo
                </span>
                <span className="font-gaegu text-xl text-[#1D1B1B] font-bold">
                  Boceto del Día en Español
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowSketchpad(false)}
                className="text-xs text-[#666] hover:text-[#1D1B1B] underline font-sans"
              >
                Cerrar pizarra
              </button>
            </div>
            <InteractiveSketchArea />
          </div>
        )}

      </div>
    </section>
  );
};
