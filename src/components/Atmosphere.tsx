import React from 'react';
import { Music2, Sparkles, GlassWater, Users2, Calendar } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Atmosphere: React.FC = () => {
  return (
    <section className="relative py-28 lg:py-36 bg-[#192117] text-[#FAF8F5] overflow-hidden">
      {/* Cinematic Background Image with Olive / Terracotta Filter */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85"
          alt="Ambiance feutrée et musicale chez PianoPiano Alger"
          className="w-full h-full object-cover opacity-35 filter brightness-75 contrast-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#192117] via-[#192117]/80 to-[#192117]/85" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F5]/10 border border-[#C87D55]/30 backdrop-blur-md text-xs uppercase tracking-widest text-[#E2956C] mb-6">
          <Music2 className="w-3.5 h-3.5" />
          <span>Atmosphère & Soirées</span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FAF8F5] mb-8 leading-tight">
          Plus qu'un restaurant, une expérience.
        </h2>

        {/* Narrative Copy */}
        <p className="font-serif italic text-xl sm:text-2xl text-[#DFD5C4] font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Quand la musique s'adoucit et que les lumières tamisées s'installent, PianoPiano devient le refuge de vos plus belles soirées algéroises.
        </p>

        {/* Atmospheric Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto my-12 text-left">
          <div className="p-6 rounded-lg bg-[#FAF8F5]/5 border border-[#FAF8F5]/10 backdrop-blur-sm">
            <Music2 className="w-6 h-6 text-[#C87D55] mb-3" />
            <h3 className="font-serif text-xl text-[#FAF8F5] mb-2">Musique & Douceur</h3>
            <p className="text-xs sm:text-sm text-[#DFD5C4]/80 leading-relaxed">
              Une sélection musicale universelle et élégante, pensée pour accompagner vos échanges sans jamais s'imposer.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-[#FAF8F5]/5 border border-[#FAF8F5]/10 backdrop-blur-sm">
            <GlassWater className="w-6 h-6 text-[#C87D55] mb-3" />
            <h3 className="font-serif text-xl text-[#FAF8F5] mb-2">Plaisir Culinaire</h3>
            <p className="text-xs sm:text-sm text-[#DFD5C4]/80 leading-relaxed">
              Des assiettes composées avec raffinement pour faire de chaque bouchée une découverte sensorielle.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-[#FAF8F5]/5 border border-[#FAF8F5]/10 backdrop-blur-sm">
            <Users2 className="w-6 h-6 text-[#C87D55] mb-3" />
            <h3 className="font-serif text-xl text-[#FAF8F5] mb-2">Moments de Partage</h3>
            <p className="text-xs sm:text-sm text-[#DFD5C4]/80 leading-relaxed">
              Un cadre respectueux et bienveillant, propice aux discussions sincères et aux célébrations intimistes.
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={RESTAURANT_INFO.reservationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#C05638] hover:bg-[#9E3F24] text-white text-xs font-semibold uppercase tracking-wider rounded-md shadow-lg transition-all duration-200"
          >
            <Calendar className="w-4 h-4" />
            <span>Réserver votre soirée</span>
          </a>
          <a
            href={`tel:${RESTAURANT_INFO.phoneInternational}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#FAF8F5]/30 hover:border-[#FAF8F5] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
          >
            <span>Renseignements : {RESTAURANT_INFO.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
