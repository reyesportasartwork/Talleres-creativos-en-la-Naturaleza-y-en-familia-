import React from 'react';
import { REYES_BIO } from '../data/content';
import { Palette, CheckCircle2, Heart } from 'lucide-react';

export const AboutReyesSection: React.FC = () => {
  return (
    <section
      id="sobre-reyes"
      className="py-16 md:py-24 bg-white text-[#1D1B1B]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Column / Studio Portrait Area from Variation 4 */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm bg-[#F8F7F4] border border-[#E5E2DC] rounded-[40px] p-8 shadow-xs flex flex-col items-center text-center">
              
              <div className="w-28 h-28 rounded-full bg-[#FFC947]/30 flex items-center justify-center mb-5 text-[#E86A33]">
                <Palette className="w-14 h-14 text-[#E86A33]" />
              </div>

              <span className="pill text-xs py-1 px-3 mb-2">
                La Profe & Artista
              </span>

              <h3 className="font-gaegu text-4xl font-bold text-[#1D1B1B] leading-none mb-1">
                {REYES_BIO.name}
              </h3>
              
              <p className="font-sans text-xs text-[#E86A33] font-bold uppercase tracking-wider mb-6">
                {REYES_BIO.role}
              </p>

              <div className="w-full border-2 border-dashed border-[#E5E2DC] rounded-[24px] p-4 bg-white mb-4">
                <span className="font-sans text-[11px] uppercase tracking-wider text-[#888] block mb-1">
                  [ FOTOGRAFÍA REAL DE REYES ]
                </span>
                <p className="font-sans text-xs text-[#666] italic leading-tight">
                  Espacio para retrato fotográfico real en el taller creativo con materiales artísticos.
                </p>
              </div>

              <div className="text-xs font-sans text-[#777] flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#E86A33]" />
                <span>Pedagogía respetuosa y no directiva</span>
              </div>

            </div>
          </div>

          {/* Bio Content Column */}
          <div className="lg:col-span-7">
            <div className="mb-3">
              <span className="pill shadow-xs">
                Sobre la Educadora
              </span>
            </div>

            <h2 className="section-title text-left text-[#1D1B1B]">
              Una mirada que une arte, infancia y lenguaje
            </h2>

            <p className="font-sans text-lg sm:text-xl text-[#333] leading-relaxed mb-6 font-medium">
              {REYES_BIO.philosophy}
            </p>

            <div className="space-y-3 mb-8 font-sans text-base text-[#555] leading-relaxed">
              <p>
                Reyes combina su práctica artística personal con años de trabajo directo con niños en diversos contextos educativos y familiares.
              </p>
              <p>
                Entiende el aprendizaje como un territorio de exploración donde el error no se penaliza, sino que se convierte en el inicio de una nueva historia.
              </p>
            </div>

            {/* Disciplines Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-[#E5E2DC]">
              {REYES_BIO.disciplines.map((disc: string, i: number) => (
                <div key={i} className="flex items-start gap-2.5 font-sans text-sm text-[#333]">
                  <CheckCircle2 className="w-4 h-4 text-[#E86A33] shrink-0 mt-0.5" />
                  <span>{disc}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
