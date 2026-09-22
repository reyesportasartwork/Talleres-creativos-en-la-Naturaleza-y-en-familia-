import React, { useState } from 'react';
import { TreePine, Heart, Mail, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const [email, setEmail] = useState('');
  const [parentName, setParentName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#F0EFEA] text-[#1D1B1B] pt-14 pb-10 border-t border-[#E5E2DC]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Newsletter Sign-up Box (Creative Spanish Tips for Parents) */}
        <div
          id="newsletter-section"
          className="mb-14 bg-white border border-[#E5E2DC] rounded-[40px] p-6 sm:p-10 shadow-xs relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Value Proposition */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="pill text-xs py-1 px-3">
                  Para Madres y Padres Creativos
                </span>
                <span className="font-sans text-xs text-[#666]">
                  Boletín gratuito de The Creative Forest
                </span>
              </div>

              <h3 className="font-gaegu text-3xl sm:text-4xl font-bold text-[#1D1B1B] leading-tight mb-3">
                Consejos creativos para conectar a tus hijos con el español
              </h3>

              <p className="font-sans text-base sm:text-lg text-[#555] leading-relaxed mb-4">
                Recibe ideas prácticas de Reyes: juegos de palabras ilustrados, detonantes de conversación para la sobremesa, actividades artísticas para hacer en casa y recomendaciones de álbumes en español.
              </p>

              <div className="flex flex-wrap items-center gap-3 font-sans text-xs text-[#666]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E86A33]" />
                  <span>Ideas de 5-10 minutos</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E86A33]" />
                  <span>Homeschool & Bilingües</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E86A33]" />
                  <span>Sin fichas aburridas</span>
                </span>
              </div>
            </div>

            {/* Sign-up Form or Confirmation */}
            <div className="lg:col-span-5 bg-[#F8F7F4] border border-[#E5E2DC] rounded-[32px] p-6 shadow-xs">
              {isSubmitted ? (
                <div id="newsletter-success-state" className="text-center py-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFC947]/30 text-[#E86A33] flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-7 h-7 text-[#E86A33]" />
                  </div>
                  <h4 className="font-gaegu text-2xl font-bold text-[#1D1B1B] mb-1">
                    ¡Bienvenido/a a la comunidad!
                  </h4>
                  <p className="font-sans text-sm text-[#555] leading-relaxed mb-3">
                    Te enviaremos los próximos consejos de español creativo a <strong>{email}</strong>.
                  </p>
                  <p className="font-sans text-xs text-[#E86A33] font-semibold">
                    ✦ Revisa tu bandeja de entrada en unos instantes.
                  </p>
                </div>
              ) : (
                <form id="newsletter-form" onSubmit={handleNewsletterSubmit} className="space-y-3.5">
                  <div>
                    <label
                      htmlFor="newsletter-parent-name"
                      className="block font-sans text-xs font-bold text-[#1D1B1B] mb-1 uppercase tracking-wider"
                    >
                      Tu nombre (opcional)
                    </label>
                    <input
                      id="newsletter-parent-name"
                      type="text"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="Ej. María o Carlos"
                      className="w-full px-4 py-2.5 rounded-full bg-white border border-[#E5E2DC] text-base text-[#1D1B1B] placeholder:text-[#888] focus:outline-hidden focus:border-[#E86A33]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="newsletter-email"
                      className="block font-sans text-xs font-bold text-[#1D1B1B] mb-1 uppercase tracking-wider"
                    >
                      Tu correo electrónico *
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu-email@ejemplo.com"
                      className="w-full px-4 py-2.5 rounded-full bg-white border border-[#E5E2DC] text-base text-[#1D1B1B] placeholder:text-[#888] focus:outline-hidden focus:border-[#E86A33]"
                    />
                  </div>

                  <button
                    type="submit"
                    id="newsletter-submit-btn"
                    disabled={isSubmitting}
                    className="btn-accent w-full text-xl py-2.5 px-5 rounded-full mt-2"
                  >
                    {isSubmitting ? (
                      <span>Suscribiendo...</span>
                    ) : (
                      <>
                        <span>Recibir Consejos Creativos</span>
                        <Send className="w-4 h-4 text-white ml-1" />
                      </>
                    )}
                  </button>

                  <p className="font-sans text-[11px] text-[#777] text-center leading-tight">
                    Cero spam · Puedes cancelar cuando quieras con un solo clic.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Links and Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#E5E2DC]">
          
          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-full bg-[#E86A33] text-white flex items-center justify-center">
                <TreePine className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="block font-gaegu text-2xl font-bold leading-none text-[#1D1B1B]">
                  {BRAND_INFO.subBrand}
                </span>
                <span className="block font-sans text-xs text-[#666]">
                  por {BRAND_INFO.educator}
                </span>
              </div>
            </div>

            <p className="font-sans text-sm text-[#555] leading-relaxed max-w-md mb-3">
              Español creativo para niños a través de historias, arte, dibujo, ciencia y naturaleza. Una alternativa viva pensada para familias homeschool y hogares bilingües.
            </p>

            <div className="font-sans text-xs text-[#E86A33] font-semibold italic">
              "El niño no solo aprende español. Utiliza el español para crear."
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 font-sans text-xs">
            <h4 className="font-bold uppercase tracking-wider text-[#1D1B1B] mb-3">
              Explora el proyecto
            </h4>
            <ul className="space-y-2 font-gaegu text-xl">
              <li>
                <a href="#newsletter-section" className="text-[#E86A33] hover:underline">
                  ✦ Newsletter con Tips
                </a>
              </li>
              <li>
                <a href="#propuesta" className="text-[#1D1B1B] hover:text-[#E86A33]">
                  ✦ La Propuesta
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-[#1D1B1B] hover:text-[#E86A33]">
                  ✦ Cómo Funciona
                </a>
              </li>
              <li>
                <a href="#metodo" className="text-[#1D1B1B] hover:text-[#E86A33]">
                  ✦ El Método CREAR
                </a>
              </li>
              <li>
                <a href="#club-lectura" className="text-[#1D1B1B] hover:text-[#E86A33]">
                  ✦ Club YouTube
                </a>
              </li>
              <li>
                <a href="#sobre-reyes" className="text-[#1D1B1B] hover:text-[#E86A33]">
                  ✦ Sobre Reyes Portas
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#1D1B1B] mb-3">
              Contacto con Reyes
            </h4>
            <p className="font-sans text-sm text-[#555] leading-relaxed mb-4">
              ¿Tienes preguntas sobre el acompañamiento o el club de lectura? Escríbeme directamente:
            </p>
            <button
              type="button"
              id="footer-contact-reyes-btn"
              onClick={onOpenContact}
              className="btn-accent text-lg py-2 px-5 rounded-full inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Contactar con Reyes</span>
            </button>
          </div>

        </div>

        {/* Natural SEO Keywords Row */}
        <div className="py-4 border-b border-[#E5E2DC] text-xs font-sans text-[#777] flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center">
          <span className="font-semibold text-[#1D1B1B]">Temas clave:</span>
          <span>Spanish for kids</span>
          <span>•</span>
          <span>Spanish through art</span>
          <span>•</span>
          <span>Spanish homeschool</span>
          <span>•</span>
          <span>creative Spanish for children</span>
          <span>•</span>
          <span>learn Spanish through stories</span>
          <span>•</span>
          <span>Spanish reading for kids</span>
        </div>

        {/* Variation 4 Exact Copyright Signature */}
        <div className="text-center pt-8 font-sans text-sm text-[#666] opacity-80">
          <p>© 2026 The Creative Forest · Reyes Portas</p>
        </div>

      </div>
    </footer>
  );
};
