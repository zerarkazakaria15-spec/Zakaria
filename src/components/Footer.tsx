import React from 'react';
import { Phone, MapPin, ArrowUp, Calendar, Utensils, Star, Compass } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
    <footer className="bg-[#192117] text-[#FAF8F5] pt-20 pb-12 border-t border-[#FAF8F5]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#FAF8F5]/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#FAF8F5]">
                PianoPiano<span className="text-[#C87D55]">.dz</span>
              </span>
              <p className="text-xs uppercase tracking-widest text-[#C87D55] font-semibold mt-1">
                Restaurant — El Madania, Alger
              </p>
            </div>

            <p className="text-sm text-[#DFD5C4]/80 leading-relaxed max-w-sm">
              Une expérience gastronomique et musicale unique au cœur de Riadh El Feth. Savourez des instants inoubliables dans un cadre feutré et chaleureux.
            </p>

            <div className="flex items-center gap-3 text-xs text-[#FAF8F5]/80">
              <span className="flex items-center gap-1 text-[#E2956C]">
                <Star className="w-3.5 h-3.5 fill-current" />
                <strong className="text-white">4.5 / 5</strong>
              </span>
              <span className="text-white/30">·</span>
              <span>1 133 avis vérifiés</span>
              <span className="text-white/30">·</span>
              <span>Dîner sur place</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C87D55]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-[#DFD5C4]/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions & Contact */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C87D55]">
              Coordonnées & Réservation
            </h4>

            <div className="space-y-3 text-sm text-[#DFD5C4]/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C87D55] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-[#C87D55] shrink-0" />
                <span className="font-mono text-xs">{RESTAURANT_INFO.plusCode}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C87D55] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phoneInternational}`}
                  className="font-medium text-white hover:text-[#C87D55] transition-colors"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <a
                href={RESTAURANT_INFO.reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#C05638] hover:bg-[#9E3F24] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Réserver une table</span>
              </a>

              <a
                href={RESTAURANT_INFO.menuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded border border-white/20 transition-colors"
              >
                <Utensils className="w-3.5 h-3.5 text-[#C87D55]" />
                <span>Voir le menu</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DFD5C4]/60">
          <p>
            © {new Date().getFullYear()} PianoPiano.dz — Riadh El Feth, OS16 au, El Madania 16076, Alger. Tous droits réservés.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#DFD5C4] hover:text-[#C87D55] transition-colors cursor-pointer group"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
