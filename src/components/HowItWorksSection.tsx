import React from 'react';
import { HOW_IT_WORKS_STEPS, CLASSROOM_CASES } from '../data/content';
import { Lightbulb, CheckCircle2 } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  return (
    <section
      id="como-funciona"
      className="py-16 md:py-24 bg-white text-[#1D1B1B]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="mb-3">
            <span className="pill shadow-xs">
              El Proceso en la Práctica
            </span>
          </div>
          <h2 className="section-title text-center text-[#1D1B1B]">
            Cómo Funciona una Experiencia Viva
          </h2>
          <p className="text-body text-center text-lg sm:text-xl text-[#555] max-w-2xl mx-auto">
            De la chispa de curiosidad del niño al desarrollo de habilidades narrativas y orales.
          </p>
        </div>

        {/* 5 Organic Steps in Variation 4 Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 mb-16">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-[#F8F7F4] border border-[#E5E2DC] rounded-[28px] p-6 flex flex-col justify-between transition-all hover:shadow-xs"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FFC947] text-[#1D1B1B] font-bold font-gaegu text-xl flex items-center justify-center mb-3">
                  0{step.stepNumber}
                </div>
                <h3 className="font-gaegu text-2xl font-bold text-[#1D1B1B] leading-tight mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-[#555] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Real Classroom Cases Box */}
        <div className="bg-[#EFECE6] rounded-[40px] p-8 sm:p-12 border border-[#E5E2DC]">
          <div className="flex items-center gap-2 mb-3">
            <span className="pill text-xs py-1 px-3">
              Casos Reales de Aula
            </span>
            <span className="font-sans text-xs text-[#666] font-medium">
              Flexibilidad Pedagógica
            </span>
          </div>

          <h3 className="font-gaegu text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D1B1B] leading-tight mb-3">
            El método se adapta al niño, nunca el niño al temario
          </h3>

          <p className="font-sans text-base sm:text-lg text-[#555] leading-relaxed mb-8 max-w-3xl">
            Cada niño tiene universos propios que lo apasionan. En lugar de imponer fichas fijas, Reyes utiliza sus intereses para desbloquear el español:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CLASSROOM_CASES.map((caso) => (
              <div
                key={caso.id}
                className="bg-white rounded-[32px] p-6 sm:p-8 border border-[#E5E2DC] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-sans text-xs font-bold text-[#E86A33] uppercase tracking-wider">
                      {caso.studentProfile}
                    </span>
                    <span className="font-sans text-xs bg-[#F8F7F4] text-[#666] px-2.5 py-1 rounded-full border border-[#E5E2DC]">
                      Caso de aula
                    </span>
                  </div>
                  <h4 className="font-gaegu text-2xl sm:text-3xl font-bold text-[#1D1B1B] leading-tight mb-2">
                    {caso.title}
                  </h4>
                  <p className="font-sans text-sm sm:text-base text-[#555] leading-relaxed mb-4">
                    {caso.challengeAndHook}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0EFEA] font-sans text-sm text-[#333]">
                  <strong className="text-[#E86A33]">Resultado:</strong> {caso.creativeOutcome}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
