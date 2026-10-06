import React, { useState } from 'react';
import { ExternalLink, Sparkles, AlertCircle } from 'lucide-react';
import { SAMPLE_MENU, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuItem } from '../types';

export const MenuPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'entrees' | 'plats' | 'desserts'>('all');

  const filteredItems = activeTab === 'all'
    ? SAMPLE_MENU
    : SAMPLE_MENU.filter((item) => item.category === activeTab);

  const categories = [
    { key: 'all', label: 'Toute la sélection' },
    { key: 'entrees', label: 'Entrées' },
    { key: 'plats', label: 'Plats' },
    { key: 'desserts', label: 'Desserts' },
  ] as const;

  return (
    <section id="menu" className="py-24 bg-[#FAF8F5] text-[#242E22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C05638] mb-3">
            <span className="w-4 h-px bg-[#C05638]" />
            <span>Carte & Créations</span>
            <span className="w-4 h-px bg-[#C05638]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#242E22] mb-4">
            Notre Menu
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#242E22]/75 max-w-xl mx-auto mb-4">
            Découvrez notre sélection et laissez-vous tenter.
          </p>

          {/* Sample Pricing Notice Badge */}
          <div className="inline-flex items-center gap-2 text-xs text-[#242E22]/70 bg-[#EFE9DD] px-3.5 py-1.5 rounded-full border border-[#DDD3C0]">
            <AlertCircle className="w-3.5 h-3.5 text-[#C05638]" />
            <span>Tarifs indicatifs échantillonnés — remplaçables par la carte officielle</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveTab(cat.key)}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-all duration-200 cursor-pointer ${
                activeTab === cat.key
                  ? 'bg-[#242E22] text-[#FAF8F5] shadow-sm'
                  : 'bg-[#EFE9DD] text-[#242E22]/80 hover:bg-[#E2D8C6] hover:text-[#242E22]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item: MenuItem) => (
            <div
              key={item.id}
              className="group bg-[#FAF8F5] border border-[#E8DFD1] hover:border-[#C05638] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Dish Visual */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#242E22]/10">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                
                {/* Category Badge */}
                <span className="absolute top-3 left-3 text-[10px] uppercase font-bold tracking-widest text-[#242E22] bg-[#FAF8F5]/90 backdrop-blur-sm px-2.5 py-1 rounded">
                  {item.category === 'entrees' ? 'Entrée' : item.category === 'plats' ? 'Plat' : 'Dessert'}
                </span>

                {/* Price Tag in Algerian Dinars */}
                <span className="absolute bottom-3 right-3 text-sm font-semibold tracking-wide text-white bg-[#C05638] px-3 py-1 rounded shadow-md">
                  {item.price}
                </span>
              </div>

              {/* Dish Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-serif text-2xl font-normal text-[#242E22] group-hover:text-[#C05638] transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[#242E22]/70 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#EFE9DD] flex items-center justify-between text-xs text-[#242E22]/50">
                  <span className="italic">Service sur place</span>
                  <a
                    href={RESTAURANT_INFO.reservationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C05638] hover:text-[#9E3F24] font-medium"
                  >
                    Commander / Réserver &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Primary CTA: Voir le menu complet */}
        <div className="mt-16 text-center">
          <a
            href={RESTAURANT_INFO.menuUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#242E22] hover:bg-[#1A2218] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider rounded-md shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Voir le menu complet</span>
            <ExternalLink className="w-4 h-4 text-[#C87D55]" />
          </a>
          <p className="mt-3 text-xs text-[#242E22]/60">
            Retrouvez tous les plats, boissons et desserts sur notre carte numérique officielle ({RESTAURANT_INFO.menuUrlDisplay})
          </p>
        </div>

      </div>
    </section>
  );
};
