import React from 'react';
import { Sparkles, Palette, Compass, MessageSquare, BookOpen, PenTool, Lightbulb, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface WhatKidsCanDoSectionProps {
  creationsBanner?: string;
}

export const WhatKidsCanDoSection: React.FC<WhatKidsCanDoSectionProps> = ({
  creationsBanner = '/Captura de pantalla 2026-09-22 195801.png',
}) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS.whatKidsCanDo;

  const activities = [
    {
      id: 'personajes',
      icon: <Palette className="w-5 h-5 text-[#E86A33]" />,
      title: language === 'es' ? 'Crear Personajes' : 'Create Characters',
      desc: language === 'es'
        ? 'Dar forma a héroes, criaturas mágicas y amigos animales describiendo rasgos físicos y emociones.'
        : 'Give life to heroes, magical creatures, and animal companions by describing their features and quirks.',
      example: language === 'es' ? 'Un zorro astrónomo que busca constelaciones.' : 'An astronomer fox searching for constellations.',
    },
    {
      id: 'historias',
      icon: <BookOpen className="w-5 h-5 text-[#E86A33]" />,
      title: language === 'es' ? 'Inventar Historias' : 'Invent Stories',
      desc: language === 'es'
        ? 'Tejer tramas, conflictos divertidos y desenlaces inesperados usando conectores temporales.'
        : 'Weave plots, playful conflicts, and unexpected endings using storytelling connectors in Spanish.',
      example: language === 'es' ? 'El misterio de la llave escondida en el roble.' : 'The mystery of the key hidden inside the oak tree.',
    },
    {
      id: 'dibujar',
      icon: <PenTool className="w-5 h-5 text-[#E86A33]" />,
      title: language === 'es' ? 'Dibujar e Ilustrar' : 'Draw & Illustrate',
      desc: language === 'es'
        ? 'Lápices, acuarelas y rotuladores para plasmar escenas mientras nombran colores y texturas.'
        : 'Pencils, watercolors, and markers to sketch scenes while naming shades and textures in Spanish.',
      example: language === 'es' ? 'Un mapa del tesoro con anotaciones en español.' : 'A pirate treasure map with handwritten Spanish notes.',
    },
    {
      id: 'experimentos',
      icon: <Lightbulb className="w-5 h-5 text-[#E86A33]" />,
      title: language === 'es' ? 'Experimentos Ligeros' : 'Gentle Science',
      desc: language === 'es'
        ? 'Juegos con luz, agua, sombras o mezclas para aprender vocabulario de acción y causa-efecto.'
        : 'Play with light, water, shadows, and color mixtures to learn cause-and-effect vocabulary.',
      example: language === 'es' ? 'Pigmentos naturales con cúrcuma y remolacha.' : 'Natural paint pigments made from beets and turmeric.',
    },
    {
      id: 'naturaleza',
      icon: <Compass className="w-5 h-5 text-[#E86A33]" />,
      title: language === 'es' ? 'Explorar la Naturaleza' : 'Nature Journaling',
      desc: language === 'es'
        ? 'Observación botánica y animal: formas de hojas, huellas de aves y ciclos de estaciones.'
        : 'Botanical and wildlife observation: leaf shapes, bird tracks, and changing seasons.',
      example: language === 'es' ? 'Cuaderno de campo sobre insectos del jardín.' : 'A garden field journal about local insects.',
    },
    {
      id: 'conversar',
      icon: <MessageSquare className="w-5 h-5 text-[#E86A33]" />,
      title: language === 'es' ? 'Conversación Espontánea' : 'Natural Conversation',
      desc: language === 'es'
        ? 'Charlas amenas guiadas por Reyes sin juicios ni exámenes donde el niño habla con libertad.'
        : 'Warm, judgment-free conversations guided by Reyes where the child speaks with complete freedom.',
      example: language === 'es' ? 'Debatir qué poder tendría su animal favorito.' : 'Debating which superpower their favorite animal would have.',
    },
    {
      id: 'escribir',
      icon: <Sparkles className="w-5 h-5 text-[#E86A33]" />,
      title: language === 'es' ? 'Escritura Creativa' : 'Creative Writing',
      desc: language === 'es'
        ? 'Tiras de cómic, cartas ilustradas y pequeños versos con significado para ellos.'
        : 'Short comic strips, illustrated letters, and playful rhyming verses that matter to them.',
      example: language === 'es' ? 'Una carta secreta para un explorador del bosque.' : 'A secret letter addressed to a forest explorer.',
    },
    {
      id: 'proyectos',
      icon: <Heart className="w-5 h-5 text-[#E86A33]" />,
      title: language === 'es' ? 'Mini Proyectos' : 'Mini Projects',
      desc: language === 'es'
        ? 'Creaciones que se construyen a lo largo de varias sesiones generando orgullo y continuidad.'
        : 'Creations developed across multiple sessions, building authentic pride and continuity.',
      example: language === 'es' ? 'Un mini-libro encuadernado a mano.' : 'A hand-bound mini storybook.',
    },
  ];

  return (
    <section
      id="que-puede-hacer"
      className="py-16 md:py-24 bg-[#F8F7F4] text-[#1D1B1B]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="mb-3">
            <span className="pill shadow-xs">
              {t.badge[language]}
            </span>
          </div>
          <h2 className="section-title text-center text-[#1D1B1B]">
            {t.title[language]}
          </h2>
          <p className="text-body text-center text-lg sm:text-xl text-[#555] max-w-2xl mx-auto">
            {t.subtitle[language]}
          </p>
        </div>

        {/* Banner de lo Creado en el Taller */}
        <div className="mb-12 bg-white border-2 border-[#E5E2DC] rounded-[36px] sm:rounded-[44px] p-5 sm:p-7 shadow-xs overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[#E86A33] text-xs font-bold font-sans uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                <span>{language === 'es' ? 'Galería Visual del Taller' : 'Studio Visual Gallery'}</span>
              </div>
              <h3 className="font-gaegu text-3xl sm:text-4xl font-bold text-[#1D1B1B]">
                {language === 'es' ? 'Lo Creado en The Creative Forest' : 'Created in The Creative Forest'}
              </h3>
            </div>
            <span className="font-sans text-xs bg-[#2D4030]/10 text-[#2D4030] font-bold px-3.5 py-1.5 rounded-full shrink-0">
              {language === 'es' ? 'Proyectos Reales de Alumnos' : 'Real Student Projects'}
            </span>
          </div>

          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E5E2DC] shadow-xs group bg-[#FAF8F5]">
            <img
              src={encodeURI(creationsBanner)}
              alt="Lo creado por Reyes en The Creative Forest"
              onError={(e) => {
                e.currentTarget.src = '/creaciones_banner.png';
              }}
              className="w-full h-auto max-h-[340px] object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
            />
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#666] text-center mt-3">
            {language === 'es'
              ? 'Muestras de los proyectos artísticos, cuentos y cuadernos ilustrados elaborados por los niños durante las sesiones de inmersión creativa.'
              : 'Samples of art projects, storybooks, and illustrated journals created by children during creative immersion sessions.'}
          </p>
        </div>

        {/* 8 Grid items in Variation 4 Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {activities.map((item, index) => (
            <div
              key={item.id}
              className="bg-white border border-[#E5E2DC] rounded-[30px] p-6 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFC947]/30 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-gaegu text-xl font-bold text-[#888]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-gaegu text-2xl font-bold text-[#1D1B1B] leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-[#555] leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F0EFEA] font-sans text-xs text-[#666]">
                <strong className="text-[#E86A33]">
                  {language === 'es' ? 'Ejemplo:' : 'Example:'}
                </strong>{' '}
                {item.example}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
