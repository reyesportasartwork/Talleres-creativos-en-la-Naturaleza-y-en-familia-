import React from 'react';
import { TRUST_CREDENTIALS } from '../data/content';
import { ShieldCheck, Heart } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section
      id="confianza"
      className="py-16 md:py-20 bg-[#F8F7F4] text-[#1D1B1B]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="mb-3">
            <span className="pill shadow-xs">
              Confianza & Transparencia
            </span>
          </div>
          <h2 className="section-title text-center text-[#1D1B1B]">
            Acompañamiento Auténtico
          </h2>
          <p className="text-body text-center text-lg text-[#555]">
            Un proyecto independiente fundado en la calidez humana y el respeto a la infancia.
          </p>
        </div>

        {/* Trust Cards Grid in Variation 4 Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {TRUST_CREDENTIALS.slice(0, 3).map((signal, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E2DC] rounded-[32px] p-8 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FFC947]/30 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-[#E86A33]" />
                </div>
                <h3 className="font-gaegu text-2xl font-bold text-[#1D1B1B] mb-2">
                  {signal.title}
                </h3>
                <p className="font-sans text-sm text-[#555] leading-relaxed">
                  {signal.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical disclaimer / Child safety guarantee */}
        <div className="bg-[#EFECE6] border border-[#E5E2DC] rounded-[28px] p-6 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-2 font-sans text-xs uppercase tracking-wider text-[#E86A33] font-bold">
            <Heart className="w-4 h-4 text-[#E86A33]" />
            <span>Compromiso ético con las familias</span>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#666] leading-relaxed">
            Priorizamos la protección de datos de los menores y sus familias. Las sesiones se desarrollan en entornos digitales seguros, sin grabaciones públicas no autorizadas, respetando el ritmo y la privacidad de cada hogar.
          </p>
        </div>

      </div>
    </section>
  );
};
