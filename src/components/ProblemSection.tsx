import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section
      id="el-problema"
      className="py-16 md:py-24 bg-[#F8F7F4] text-[#1D1B1B]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Pill */}
        <div className="text-center mb-4">
          <span className="pill shadow-xs">
            La realidad de muchas familias
          </span>
        </div>

        {/* Question heading in Gaegu */}
        <h2
          id="problem-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-gaegu text-[#1D1B1B] text-center max-w-3xl mx-auto leading-tight mb-4 font-bold"
        >
          ¿Tu hijo está aprendiendo español pero necesitas una forma más creativa de mantenerlo conectado con el idioma?
        </h2>

        {/* Empathetic explanation in Plus Jakarta Sans */}
        <p className="text-base sm:text-lg text-[#555555] text-center max-w-2xl mx-auto leading-relaxed mb-12 font-sans">
          Muchas familias homeschool y hogares bilingües comparten la misma inquietud:{' '}
          <strong className="text-[#1D1B1B] font-semibold">
            el niño necesita practicar español, pero las clases tradicionales con fichas mecánicas y memorización no despiertan su asombro.
          </strong>{' '}
          Cuando el aprendizaje se vuelve rígido o descontextualizado, el idioma se percibe como una tarea en lugar de una herramienta viva para imaginar.
        </p>

        {/* Comparison card grid in Variation 4 Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Traditional friction */}
          <div
            id="traditional-approach-card"
            className="p-8 rounded-[36px] bg-white border border-[#E5E2DC] shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="font-gaegu text-2xl sm:text-3xl font-bold text-[#1D1B1B]">
                  El enfoque convencional
                </h3>
              </div>
              <ul className="space-y-3 font-sans text-sm sm:text-base text-[#666666] leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold select-none">•</span>
                  <span>Listas descontextualizadas de vocabulario y fichas repetitivas.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold select-none">•</span>
                  <span>Temarios cerrados donde el niño no puede aportar sus universos de interés.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold select-none">•</span>
                  <span>Foco en la corrección gramatical inmediata que frena la espontaneidad oral.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Creative Spanish approach */}
          <div
            id="creative-spanish-card"
            className="p-8 rounded-[36px] bg-[#EFECE6] border border-[#E5E2DC] shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-[#FFC947]/40 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#E86A33]" />
                </div>
                <h3 className="font-gaegu text-2xl sm:text-3xl font-bold text-[#1D1B1B]">
                  Creative Spanish con Reyes
                </h3>
              </div>
              <ul className="space-y-3 font-sans text-sm sm:text-base text-[#333333] leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E86A33] font-bold select-none">✓</span>
                  <span>El español es el medio para dibujar, inventar historias y experimentar.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E86A33] font-bold select-none">✓</span>
                  <span>Partimos de las pasiones del niño (dinosaurios, cómics, botánica, inventos).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#E86A33] font-bold select-none">✓</span>
                  <span>Acompañamiento respetuoso donde el error es un detonante creativo.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
