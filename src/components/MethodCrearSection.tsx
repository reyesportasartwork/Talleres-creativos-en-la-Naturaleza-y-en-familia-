import React, { useState } from 'react';
import { METHOD_CREAR_STEPS } from '../data/content';
import { CheckCircle2 } from 'lucide-react';

export const MethodCrearSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section
      id="metodo"
      className="py-16 md:py-24 bg-white text-[#1D1B1B]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="mb-3">
            <span className="pill shadow-xs">
              Pedagogía Propia
            </span>
          </div>
          <h2 className="section-title text-center text-[#1D1B1B]">
            El Método CREAR
          </h2>
          <p className="text-body text-center text-lg sm:text-xl text-[#555] max-w-2xl mx-auto mb-2">
            Un marco didáctico artesanal y orgánico desarrollado a través de la práctica docente continua con niños.
          </p>
          <span className="text-xs font-sans text-[#888] block">
            [ Enfoque pedagógico propio en continuo desarrollo y enriquecimiento ]
          </span>
        </div>

        {/* 7 Areas Selector in Variation 4 Pill Style */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {METHOD_CREAR_STEPS.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.letter}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-gaegu text-xl sm:text-2xl transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#E86A33] text-white shadow-sm scale-105'
                    : 'bg-[#F8F7F4] text-[#1D1B1B] border border-[#E5E2DC] hover:border-[#E86A33]'
                }`}
              >
                <span className={`w-6 h-6 rounded-full text-xs font-sans font-bold flex items-center justify-center ${
                  isSelected ? 'bg-white text-[#E86A33]' : 'bg-[#1D1B1B] text-white'
                }`}>
                  {step.letter}
                </span>
                <span>{step.word}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase in Variation 4 Card Style */}
        <div className="bg-[#F8F7F4] border border-[#E5E2DC] rounded-[40px] p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8">
              <div className="flex items-center gap-2 mb-2 font-sans text-xs uppercase tracking-wider text-[#E86A33] font-bold">
                <span>Área 0{activeStep + 1} de 7</span>
                <span>•</span>
                <span>Fase del Método CREAR</span>
              </div>
              <h3 className="font-gaegu text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D1B1B] leading-tight mb-3">
                {METHOD_CREAR_STEPS[activeStep].letter} — {METHOD_CREAR_STEPS[activeStep].title}
              </h3>
              <p className="font-sans text-base sm:text-lg text-[#555] leading-relaxed mb-4">
                {METHOD_CREAR_STEPS[activeStep].description}
              </p>
            </div>

            <div className="md:col-span-4 bg-white border border-[#E5E2DC] rounded-[30px] p-6 shadow-xs">
              <span className="font-sans text-xs uppercase tracking-wider font-bold text-[#1D1B1B] block mb-2">
                Objetivo pedagógico:
              </span>
              <p className="font-sans text-sm sm:text-base text-[#333] leading-relaxed font-semibold mb-4">
                {METHOD_CREAR_STEPS[activeStep].howItWorks}
              </p>
              <div className="font-sans text-xs text-[#E86A33] flex items-center gap-2 pt-3 border-t border-[#F0EFEA]">
                <CheckCircle2 className="w-4 h-4 text-[#E86A33] shrink-0" />
                <span>Aplicado en cada encuentro con Reyes</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
