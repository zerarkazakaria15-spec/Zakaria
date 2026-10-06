import React from 'react';
import { Sparkles, Heart, MapPin, Users, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Introduction: React.FC = () => {
  return (
    <section id="a-propos" className="py-24 bg-[#FAF8F5] text-[#242E22] relative overflow-hidden">
      {/* Subtle textured Mediterranean ambient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C05638]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#242E22]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition with Mediterranean warm frames */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Atmosphère intérieure raffinée du restaurant PianoPiano"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#192117]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-widest text-[#EFE9DD] font-medium">Riadh El Feth · Alger</p>
                  <p className="font-serif text-lg text-white">Un lieu d'exception à El Madania</p>
                </div>
              </div>

              {/* Offset Floating Detail Card */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 bg-[#EFE9DD] border border-[#DDD3C0] p-5 rounded-lg shadow-xl max-w-xs text-[#242E22]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#C05638] text-white flex items-center justify-center font-serif font-bold text-sm">
                    PP
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#242E22]">PianoPiano.dz</h4>
                    <p className="text-[11px] text-[#242E22]/70">El Madania 16076</p>
                  </div>
                </div>
                <p className="text-xs text-[#242E22]/85 italic leading-relaxed">
                  « Une alchimie rare entre douceur musicale, convivialité et générosité culinaire. »
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Category kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C05638] mb-3">
              <span className="w-6 h-[1.5px] bg-[#C05638]" />
              <span>L'art de recevoir</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#242E22] tracking-tight leading-tight mb-6">
              Bienvenue chez PianoPiano
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#242E22]/80 leading-relaxed font-normal">
              <p>
                Niché au cœur de <strong>Riadh El Feth</strong> à El Madania, <strong>PianoPiano.dz</strong> est une escale gourmande et intimiste pensée pour tous ceux qui recherchent plus qu'un simple dîner : une véritable parenthèse d'évasion.
              </p>
              <p>
                Ici, la cuisine et la musique dialoguent avec délicatesse. Dans une ambiance tamisée rythmée par des mélodies douces et internationales, chaque moment devient une célébration du partage, de la convivialité et du goût.
              </p>
              <p className="text-sm sm:text-base text-[#242E22]/75">
                Que ce soit pour une soirée entre proches, un dîner en amoureux ou une réunion intime, notre équipe attentive vous accueille avec bienveillance pour vous faire vivre une expérience mémorable.
              </p>
            </div>

            {/* Essential Credibility & Business Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-8 pt-6 border-t border-[#E8DFD1]">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#242E22]/60 font-medium flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-[#C05638]" /> Établissement
                </span>
                <p className="text-sm font-semibold text-[#242E22]">
                  Dirigé par des femmes
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#242E22]/60 font-medium flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#C05638]" /> Service
                </span>
                <p className="text-sm font-semibold text-[#242E22]">
                  Dîner sur place
                </p>
              </div>

              <div className="space-y-1 col-span-2 sm:col-span-1">
                <span className="text-xs uppercase tracking-wider text-[#242E22]/60 font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C05638]" /> Localisation
                </span>
                <p className="text-sm font-semibold text-[#242E22]">
                  Riadh El Feth, Alger
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={RESTAURANT_INFO.reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#C05638] hover:bg-[#9E3F24] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-sm"
              >
                Réserver votre table
              </a>
              <a
                href={`tel:${RESTAURANT_INFO.phoneInternational}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#242E22]/30 hover:border-[#242E22] text-[#242E22] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#EFE9DD] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C87D55]" />
                <span>Nous contacter</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
