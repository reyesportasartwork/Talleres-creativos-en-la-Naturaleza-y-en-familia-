import React, { useState } from 'react';
import { X, Send, CheckCircle2, TreePine } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    parentName: '',
    parentEmail: '',
    childAge: '7-8',
    familyContext: 'homeschool',
    interests: ['reading-club', 'online-classes'],
    childPassions: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      id="contact-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="contact-modal-container"
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#F8F7F4] text-[#1D1B1B] border border-[#E5E2DC] rounded-[40px] shadow-2xl p-6 sm:p-10 animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          type="button"
          id="close-contact-modal"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white border border-[#E5E2DC] text-[#1D1B1B] hover:text-[#E86A33] transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation state */
          <div id="contact-success-state" className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#FFC947]/30 text-[#E86A33] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-[#E86A33]" />
            </div>

            <div className="mb-2">
              <span className="pill text-xs py-1 px-3">
                ¡Mensaje Recibido!
              </span>
            </div>

            <h3 className="font-gaegu text-4xl font-bold text-[#1D1B1B] mb-2">
              ¡Muchas gracias, {formData.parentName || 'familia'}!
            </h3>

            <p className="font-sans text-base sm:text-lg text-[#555] leading-relaxed max-w-md mx-auto mb-6">
              He recibido tus notas con mucho cariño. Reyes Portas te responderá personalmente a <strong className="text-[#1D1B1B] underline">{formData.parentEmail || 'tu email'}</strong> para conocer más sobre tu hijo/a y valorar juntos una propuesta a su medida.
            </p>

            <div className="p-5 rounded-[24px] bg-white border border-[#E5E2DC] text-left text-xs font-sans text-[#555] max-w-md mx-auto mb-8">
              <span className="font-bold text-[#E86A33] block mb-1 uppercase tracking-wider">
                ¿Qué pasará ahora?
              </span>
              <ul className="space-y-1.5 text-xs text-[#666]">
                <li>1. Reyes lee con atención los intereses de tu hijo/a.</li>
                <li>2. Recibirás respuesta directa en 24-48 horas.</li>
                <li>3. Sin presión: solo escucha y orientación pedagógica honesta.</li>
              </ul>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="btn-accent text-xl py-3 px-8 rounded-full"
            >
              Volver a la página
            </button>
          </div>
        ) : (
          /* Form state */
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#E86A33] text-white flex items-center justify-center">
                <TreePine className="w-4 h-4 text-white" />
              </div>
              <span className="pill text-xs py-0.5 px-2.5">
                Contacto Directo con Reyes
              </span>
            </div>

            <h3 className="font-gaegu text-4xl font-bold text-[#1D1B1B] leading-none mb-2">
              Cuéntame sobre tu hijo/a
            </h3>

            <p className="font-sans text-sm sm:text-base text-[#555] leading-relaxed mb-6">
              Un primer contacto sin compromiso para explorar cómo conectar a tu hijo/a con el español a través del arte y las historias.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Parent Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-sans text-xs font-bold text-[#1D1B1B] mb-1 uppercase tracking-wider">
                    Tu nombre *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="Ej. Carmen Álvarez"
                    className="w-full px-4 py-2.5 rounded-full bg-white border border-[#E5E2DC] text-base text-[#1D1B1B] placeholder:text-[#888] focus:outline-hidden focus:border-[#E86A33]"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs font-bold text-[#1D1B1B] mb-1 uppercase tracking-wider">
                    Tu correo electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.parentEmail}
                    onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                    placeholder="ejemplo@correo.com"
                    className="w-full px-4 py-2.5 rounded-full bg-white border border-[#E5E2DC] text-base text-[#1D1B1B] placeholder:text-[#888] focus:outline-hidden focus:border-[#E86A33]"
                  />
                </div>
              </div>

              {/* Child Age & Family Context */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-sans text-xs font-bold text-[#1D1B1B] mb-1 uppercase tracking-wider">
                    Edad de tu hijo/a
                  </label>
                  <select
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-full bg-white border border-[#E5E2DC] text-base text-[#1D1B1B] focus:outline-hidden focus:border-[#E86A33] cursor-pointer"
                  >
                    <option value="6">6 años</option>
                    <option value="7-8">7 - 8 años</option>
                    <option value="9-10">9 - 10 años</option>
                    <option value="11-12">11 - 12 años</option>
                    <option value="otra">Otra edad</option>
                  </select>
                </div>

                <div>
                  <label className="block font-sans text-xs font-bold text-[#1D1B1B] mb-1 uppercase tracking-wider">
                    Situación familiar
                  </label>
                  <select
                    value={formData.familyContext}
                    onChange={(e) => setFormData({ ...formData, familyContext: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-full bg-white border border-[#E5E2DC] text-base text-[#1D1B1B] focus:outline-hidden focus:border-[#E86A33] cursor-pointer"
                  >
                    <option value="homeschool">Familia Homeschool / Educar en casa</option>
                    <option value="bilingual">Hogar bilingüe en el extranjero</option>
                    <option value="support">Refuerzo creativo extracurricular</option>
                    <option value="other">Otro contexto</option>
                  </select>
                </div>
              </div>

              {/* Child Passions */}
              <div>
                <label className="block font-sans text-xs font-bold text-[#1D1B1B] mb-1 uppercase tracking-wider">
                  ¿Qué temas le apasionan a tu hijo/a? (El "gancho" creativo)
                </label>
                <input
                  type="text"
                  value={formData.childPassions}
                  onChange={(e) => setFormData({ ...formData, childPassions: e.target.value })}
                  placeholder="Ej. Cómics, dinosaurios, inventos, animales del bosque, dibujar manga..."
                  className="w-full px-4 py-2.5 rounded-full bg-white border border-[#E5E2DC] text-base text-[#1D1B1B] placeholder:text-[#888] focus:outline-hidden focus:border-[#E86A33]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-sans text-xs font-bold text-[#1D1B1B] mb-1 uppercase tracking-wider">
                  ¿Alguna pregunta o mensaje para Reyes?
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Cuéntame qué buscas para el aprendizaje de tu hijo/a..."
                  className="w-full px-4 py-2.5 rounded-[20px] bg-white border border-[#E5E2DC] text-base text-[#1D1B1B] placeholder:text-[#888] focus:outline-hidden focus:border-[#E86A33]"
                />
              </div>

              {/* Submit button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-accent w-full text-2xl py-3 px-6 rounded-full"
                >
                  {submitting ? (
                    <span>Enviando mensaje...</span>
                  ) : (
                    <>
                      <span>Enviar y conocer Creative Spanish</span>
                      <Send className="w-5 h-5 ml-1" />
                    </>
                  )}
                </button>
                <p className="font-sans text-[11px] text-[#777] text-center mt-2">
                  ✦ Respetamos tu privacidad. Reyes responderá personalmente.
                </p>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
