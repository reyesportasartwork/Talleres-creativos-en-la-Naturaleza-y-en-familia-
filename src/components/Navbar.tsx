import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, TreePine } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface NavbarProps {
  onOpenContact: () => void;
  onSelectView?: (view: 'studio' | 'detailed') => void;
  currentView?: 'studio' | 'detailed';
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero-section' },
    { name: 'La Propuesta', href: '#propuesta' },
    { name: 'Cómo Funciona', href: '#como-funciona' },
    { name: 'Método CREAR', href: '#metodo' },
    { name: 'Club YouTube', href: '#club-lectura' },
    { name: 'Tips Padres', href: '#newsletter-section' },
    { name: 'Sobre Reyes', href: '#sobre-reyes' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#F8F7F4]/95 backdrop-blur-md border-b border-[#E5E2DC] py-2.5 shadow-xs'
          : 'bg-[#F8F7F4]/80 border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand identity in Variation 4 Style */}
        <a
          href="#hero-section"
          id="brand-logo"
          className="flex items-center gap-2.5 group focus:outline-hidden"
        >
          <div className="w-9 h-9 rounded-full bg-[#E86A33] text-white flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
            <TreePine className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-bold leading-none text-[#1D1B1B] font-gaegu tracking-tight">
              {BRAND_INFO.subBrand}
            </span>
            <span className="text-[11px] font-sans text-[#666666] font-medium">
              por {BRAND_INFO.educator}
            </span>
          </div>
        </a>

        {/* Desktop Navigation in Variation 4 style */}
        <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link text-xl text-[#1D1B1B] hover:text-[#E86A33]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Primary Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            id="nav-primary-cta"
            onClick={onOpenContact}
            className="btn-accent text-xl py-2 px-5 font-gaegu rounded-full flex items-center gap-1.5 shadow-sm"
          >
            <span>¡Quiero Conoceros!</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          id="mobile-menu-toggle"
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-full text-[#1D1B1B] bg-white border border-[#E5E2DC] shadow-xs transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#F8F7F4] border-b border-[#E5E2DC] px-6 py-6 shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col gap-4 font-gaegu text-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#1D1B1B] hover:text-[#E86A33] py-1 border-b border-[#E5E2DC]/50"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="btn-accent w-full text-2xl py-3 rounded-full justify-center"
              >
                <span>¡Quiero Conoceros!</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
