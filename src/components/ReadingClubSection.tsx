import React from 'react';
import { Youtube, ExternalLink, ArrowRight } from 'lucide-react';

interface ReadingClubSectionProps {
  onOpenContact: () => void;
}

export const ReadingClubSection: React.FC<ReadingClubSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="club-lectura"
      className="py-16 md:py-24 bg-[#F8F7F4] text-[#1D1B1B]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white border border-[#E5E2DC] rounded-[40px] p-8 sm:p-12 shadow-xs relative overflow-hidden">
          
          <div className="max-w-3xl">
            {/* Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="pill text-xs py-1 px-3">
                Puerta de Entrada Gratuita
              </span>
              <span className="text-xs font-sans text-[#666]">
                The Creative Forest en YouTube
              </span>
            </div>

            <h2 className="font-gaegu text-4xl sm:text-5xl md:text-6xl font-bold text-[#1D1B1B] leading-none mb-4">
              Club de Lectura en YouTube
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#555] leading-relaxed mb-6">
              Una forma accesible para que las familias descubran cómo un álbum ilustrado en español se convierte en un detonante creativo, sin compromiso previo.
            </p>

            {/* The 4-Step Formula from Variation 4 */}
            <div className="bg-[#F8F7F4] border border-[#E5E2DC] rounded-[28px] p-5 sm:p-6 mb-6">
              <span className="font-sans text-xs uppercase tracking-wider text-[#E86A33] font-bold block mb-3">
                Nuestra fórmula en cada episodio:
              </span>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-gaegu text-xl sm:text-2xl font-bold text-[#1D1B1B]">
                <span className="px-4 py-1.5 rounded-full bg-white border border-[#E5E2DC]">1. CUENTO</span>
                <span className="text-[#E86A33]">→</span>
                <span className="px-4 py-1.5 rounded-full bg-[#FFC947]/30 border border-[#E5E2DC]">2. PALABRAS</span>
                <span className="text-[#E86A33]">→</span>
                <span className="px-4 py-1.5 rounded-full bg-white border border-[#E5E2DC]">3. CONVERSACIÓN</span>
                <span className="text-[#E86A33]">→</span>
                <span className="px-4 py-1.5 rounded-full bg-[#E86A33]/15 border border-[#E5E2DC]">4. CREACIÓN</span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#777] leading-relaxed mb-8">
              ✦ En los vídeos se exploran ideas, vocabulario y propuestas prácticas para hacer en casa. No requiere la lectura mecánica de libros enteros y respeta escrupulosamente los derechos de autor.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent text-xl py-3 px-6 rounded-full flex items-center gap-2"
              >
                <Youtube className="w-5 h-5 text-white" />
                <span>Ver el Club en YouTube</span>
                <ExternalLink className="w-4 h-4 ml-0.5 opacity-80" />
              </a>

              <button
                type="button"
                onClick={onOpenContact}
                className="btn-ink text-xl py-3 px-6 rounded-full flex items-center gap-2"
              >
                <span>Acompañamiento Personalizado</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
