import React from 'react';
import { Star, ExternalLink, CheckCircle2, Quote } from 'lucide-react';
import { REVIEWS_DATA, RESTAURANT_INFO } from '../data/restaurantData';

export const Reviews: React.FC = () => {
  return (
    <section id="avis" className="py-24 bg-[#EFE9DD] text-[#242E22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Google Score Banner */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C05638] mb-3">
            <span className="w-4 h-px bg-[#C05638]" />
            <span>Témoignages & Confiance</span>
            <span className="w-4 h-px bg-[#C05638]" />
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#242E22] mb-6">
            La voix de nos hôtes
          </h2>

          {/* Rating Summary Card */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-[#FAF8F5] p-5 sm:px-8 rounded-xl border border-[#DDD3C0] shadow-sm">
            <div className="flex items-center gap-3">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#242E22] leading-none">
                4.5
              </span>
              <div className="flex flex-col items-start">
                <div className="flex items-center text-[#C05638]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4
                          ? 'fill-[#C05638] text-[#C05638]'
                          : 'fill-[#C05638]/40 text-[#C05638]'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[11px] font-semibold text-[#242E22]/60 uppercase tracking-wider mt-1">
                  Sur 5 étoiles
                </span>
              </div>
            </div>

            <div className="hidden sm:block h-8 w-px bg-[#DDD3C0]" />

            <div className="text-center sm:text-left">
              <div className="text-sm font-bold text-[#242E22]">
                1 133 avis vérifiés
              </div>
              <p className="text-xs text-[#242E22]/65">
                Note Google Maps consolidée
              </p>
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FAF8F5] p-7 rounded-xl border border-[#DDD3C0] shadow-sm flex flex-col justify-between relative hover:border-[#C05638] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C05638]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C05638]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#242E22]/50 font-medium">
                    {rev.date}
                  </span>
                </div>

                <div className="relative mb-6">
                  <p className="text-base text-[#242E22]/85 italic leading-relaxed font-normal">
                    {rev.comment}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EFE9DD] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-[#242E22]">
                    {rev.author}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#242E22]/60 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-[#242E22]/70" />
                    <span>{rev.source}</span>
                  </div>
                </div>

                <Quote className="w-6 h-6 text-[#DDD3C0]" />
              </div>
            </div>
          ))}
        </div>

        {/* External Link: Voir plus d'avis */}
        <div className="mt-12 text-center">
          <a
            href={RESTAURANT_INFO.mapsDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-[#FAF8F5] text-[#242E22] border border-[#242E22]/30 hover:border-[#242E22] rounded-md text-xs font-semibold uppercase tracking-wider transition-all duration-200"
          >
            <span>Consulter les 1 133 avis sur Google</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#C05638]" />
          </a>
        </div>

      </div>
    </section>
  );
};
