import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['Tous', 'Plats', 'Food & Drinks', 'Ambiance', 'Intérieur', 'Extérieur'];

  const filteredItems = selectedCategory === 'Tous'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  // Keyboard controls for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="galerie" className="py-24 bg-[#FAF8F5] text-[#242E22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C05638] mb-3">
            <span className="w-4 h-px bg-[#C05638]" />
            <span>Regard Photographique</span>
            <span className="w-4 h-px bg-[#C05638]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#242E22] mb-4">
            Galerie PianoPiano
          </h2>
          <p className="text-base sm:text-lg text-[#242E22]/75 font-normal max-w-xl mx-auto leading-relaxed">
            Parcourez les ambiances, les créations gastronomiques et les détails qui façonnent notre identité à Riadh El Feth.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#C05638] text-white shadow-sm'
                  : 'bg-[#EFE9DD] text-[#242E22]/80 hover:bg-[#E2D8C6] hover:text-[#242E22]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-[#242E22]/10 cursor-pointer border border-[#E8DFD1] hover:border-[#C05638] transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#192117]/80 via-[#192117]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded backdrop-blur-sm">
                    {item.category}
                  </span>
                  <div className="p-1 rounded-full bg-white/20 text-white">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <h4 className="font-serif text-lg text-white font-medium">{item.title}</h4>
                  <p className="text-xs text-[#EFE9DD]/80 line-clamp-1">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#141A13]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 p-2 rounded-full text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
            aria-label="Fermer la vue agrandie"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation - Prev */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer hidden sm:block"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation - Next */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer hidden sm:block"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content container */}
          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="relative max-h-[75vh] w-auto overflow-hidden rounded-lg shadow-2xl border border-white/10">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="mt-4 text-center text-[#EFE9DD] max-w-xl">
              <span className="text-[11px] uppercase tracking-widest text-[#C87D55] font-semibold">
                {filteredItems[lightboxIndex].category} · {lightboxIndex + 1} / {filteredItems.length}
              </span>
              <h3 className="font-serif text-2xl text-white mt-1">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-1">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
