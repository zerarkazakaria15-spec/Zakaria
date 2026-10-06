import React from 'react';
import { SIGNATURE_DISHES, RESTAURANT_INFO } from '../data/restaurantData';
import { Sparkles, Calendar } from 'lucide-react';

export const SignatureDishes: React.FC = () => {
  return (
    <section id="signatures" className="py-24 bg-[#EFE9DD] text-[#242E22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C05638] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C05638]" />
            <span>Créations d'Exception</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C05638]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#242E22] mb-4">
            Les incontournables
          </h2>
          <p className="text-base sm:text-lg text-[#242E22]/75 max-w-xl mx-auto font-normal leading-relaxed">
            Une sélection de propositions culinaires emblématiques de PianoPiano, préparées avec exigence et passion.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SIGNATURE_DISHES.map((dish, idx) => (
            <div
              key={dish.id}
              className="group bg-[#FAF8F5] rounded-xl overflow-hidden border border-[#DDD3C0] hover:border-[#C05638] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col sm:flex-row"
            >
              {/* Image Column */}
              <div className="sm:w-1/2 relative min-h-[240px] overflow-hidden bg-[#242E22]/10">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/40 via-transparent to-transparent opacity-60" />
                <span className="absolute top-3 left-3 text-[11px] font-mono font-medium text-white/90 bg-[#242E22]/80 px-2 py-0.5 rounded backdrop-blur-sm">
                  #{idx + 1}
                </span>
              </div>

              {/* Text Column */}
              <div className="sm:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-medium tracking-wider uppercase text-[#C87D55] block mb-1">
                    {dish.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl lg:text-3xl font-normal text-[#242E22] mb-3 group-hover:text-[#C05638] transition-colors">
                    {dish.title}
                  </h3>
                  <p className="text-sm text-[#242E22]/75 leading-relaxed font-normal">
                    {dish.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EFE9DD] flex items-center justify-between">
                  <span className="text-xs text-[#242E22]/60 italic">
                    Édition Maison
                  </span>
                  <a
                    href={RESTAURANT_INFO.reservationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C05638] hover:text-[#9E3F24] transition-colors"
                  >
                    <span>Déguster</span>
                    <Calendar className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on flexibility */}
        <p className="mt-12 text-center text-xs text-[#242E22]/60 max-w-xl mx-auto">
          Ces créations emblématiques sont ajustées selon les arrivages de saison pour vous garantir fraîcheur et authenticité.
        </p>

      </div>
    </section>
  );
};
