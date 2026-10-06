import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '#hero' },
    { label: 'À propos', href: '#a-propos' },
    { label: 'Expérience', href: '#experience' },
    { label: 'Menu', href: '#menu' },
    { label: 'Incontournables', href: '#signatures' },
    { label: 'Galerie', href: '#galerie' },
    { label: 'Avis', href: '#avis' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Banner - Subtle & Informative */}
      <div className="bg-[#242E22] text-[#EFE9DD] text-xs py-2 px-4 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium text-[#C87D55]">
              <MapPin className="w-3.5 h-3.5" />
              <span>{RESTAURANT_INFO.address}</span>
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:inline text-white/80">
              ★ {RESTAURANT_INFO.rating}/5 ({RESTAURANT_INFO.reviewCount} avis Google)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${RESTAURANT_INFO.phoneInternational}`}
              className="flex items-center gap-1.5 text-white/90 hover:text-[#E2956C] transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-[#C87D55]" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>
            <span className="text-white/30 hidden md:inline">|</span>
            <span className="text-white/70 hidden md:inline">
              {RESTAURANT_INFO.serviceType}
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E8DFD1]/80 py-3.5'
            : 'bg-[#FAF8F5] border-b border-[#E8DFD1]/60 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="group flex flex-col"
            >
              <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#242E22] group-hover:text-[#C05638] transition-colors">
                PianoPiano<span className="text-[#C05638]">.dz</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#242E22]/60 font-medium">
                Restaurant · Riadh El Feth
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium text-[#242E22]/85 hover:text-[#C05638] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C05638] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.menuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#242E22] hover:text-[#C05638] border border-[#DDD3C0] hover:border-[#C05638] rounded-md transition-all duration-200 bg-white/70"
              >
                Menu
              </a>
              <a
                href={RESTAURANT_INFO.reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C05638] hover:bg-[#9E3F24] text-white text-xs font-semibold uppercase tracking-wider rounded-md shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Réserver une table</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={RESTAURANT_INFO.reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden px-3 py-1.5 bg-[#C05638] text-white text-xs font-semibold rounded"
              >
                Réserver
              </a>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-[#242E22] hover:bg-[#EFE9DD] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C05638]"
                aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[calc(100%+1px)] bg-[#FAF8F5] border-b border-[#E8DFD1] shadow-xl py-6 px-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-base font-medium text-[#242E22] hover:text-[#C05638] py-2 border-b border-[#EFE9DD] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-4 flex flex-col gap-3">
              <a
                href={RESTAURANT_INFO.reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 bg-[#C05638] hover:bg-[#9E3F24] text-white text-sm font-semibold uppercase tracking-wider rounded-md shadow-sm transition-colors"
              >
                Réserver une table en ligne
              </a>
              <a
                href={RESTAURANT_INFO.menuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 border border-[#242E22] text-[#242E22] text-sm font-semibold uppercase tracking-wider rounded-md hover:bg-[#EFE9DD] transition-colors"
              >
                Consulter le menu complet
              </a>
              <a
                href={`tel:${RESTAURANT_INFO.phoneInternational}`}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#242E22] text-[#EFE9DD] text-sm font-medium rounded-md hover:bg-[#1A2218] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C87D55]" />
                <span>Appeler : {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
