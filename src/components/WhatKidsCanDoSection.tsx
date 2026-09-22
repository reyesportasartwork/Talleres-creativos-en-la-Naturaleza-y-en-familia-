import React from 'react';
import { WHAT_KIDS_CAN_DO } from '../data/content';
import { Sparkles, Palette, Compass, MessageSquare, BookOpen, PenTool, Lightbulb, Heart } from 'lucide-react';

export const WhatKidsCanDoSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'personajes':
        return <Palette className="w-5 h-5 text-[#E86A33]" />;
      case 'historias':
        return <BookOpen className="w-5 h-5 text-[#E86A33]" />;
      case 'dibujar':
        return <PenTool className="w-5 h-5 text-[#E86A33]" />;
      case 'experimentos':
        return <Lightbulb className="w-5 h-5 text-[#E86A33]" />;
      case 'naturaleza':
        return <Compass className="w-5 h-5 text-[#E86A33]" />;
      case 'conversar':
        return <MessageSquare className="w-5 h-5 text-[#E86A33]" />;
      case 'escribir':
        return <Sparkles className="w-5 h-5 text-[#E86A33]" />;
      case 'proyectos':
        return <Heart className="w-5 h-5 text-[#E86A33]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#E86A33]" />;
    }
  };

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
              Acción & Creación Tangible
            </span>
          </div>
          <h2 className="section-title text-center text-[#1D1B1B]">
            Qué Puede Hacer el Niño en Creative Spanish
          </h2>
          <p className="text-body text-center text-lg sm:text-xl text-[#555] max-w-2xl mx-auto">
            Cada sesión concluye con una creación viva, no con una hoja de ejercicios vacía.
          </p>
        </div>

        {/* 8 Grid items in Variation 4 Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHAT_KIDS_CAN_DO.map((item, index) => (
            <div
              key={item.id}
              className="bg-white border border-[#E5E2DC] rounded-[30px] p-6 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFC947]/30 flex items-center justify-center">
                    {getIcon(item.id)}
                  </div>
                  <span className="font-gaegu text-xl font-bold text-[#888]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-gaegu text-2xl font-bold text-[#1D1B1B] leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-[#555] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F0EFEA] font-sans text-xs text-[#666]">
                <strong className="text-[#E86A33]">Ejemplo:</strong> {item.example}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
