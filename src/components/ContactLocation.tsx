import React, { useState } from 'react';
import { MapPin, Phone, Globe, ExternalLink, Navigation, Compass, Calendar, Utensils, Check } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactLocation: React.FC = () => {
  const [copiedPlusCode, setCopiedPlusCode] = useState(false);

  const handleCopyPlusCode = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.plusCode);
    setCopiedPlusCode(true);
    setTimeout(() => setCopiedPlusCode(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF8F5] text-[#242E22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C05638] mb-3">
            <span className="w-4 h-px bg-[#C05638]" />
            <span>Localisation & Coordonnées</span>
            <span className="w-4 h-px bg-[#C05638]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#242E22] mb-4">
            Venir à PianoPiano
          </h2>
          <p className="text-base sm:text-lg text-[#242E22]/75 font-normal max-w-xl mx-auto leading-relaxed">
            Situé au cœur du complexe emblématique de Riadh El Feth à El Madania, avec un accès facile et des espaces de stationnement à proximité.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Business Details & Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Restaurant Info Card */}
            <div className="bg-[#EFE9DD] rounded-xl p-6 sm:p-8 border border-[#DDD3C0] shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#DDD3C0]">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#242E22]">
                    PianoPiano<span className="text-[#C05638]">.dz</span>
                  </h3>
                  <p className="text-xs text-[#242E22]/70 uppercase tracking-wider font-medium">
                    Restaurant · Riadh El Feth
                  </p>
                </div>
                <span className="text-xs bg-[#242E22] text-white px-2.5 py-1 rounded font-medium">
                  ★ 4.5/5
                </span>
              </div>

              {/* Detail Items */}
              <div className="space-y-4 text-sm text-[#242E22]/85">
                
                {/* Physical Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C05638] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-[#242E22]/60 font-semibold">
                      Adresse
                    </strong>
                    <span>{RESTAURANT_INFO.address}</span>
                  </div>
                </div>

                {/* Plus Code with copy action */}
                <div className="flex items-start gap-3">
                  <Compass className="w-5 h-5 text-[#C05638] shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <strong className="block text-xs uppercase tracking-wider text-[#242E22]/60 font-semibold">
                      Plus Code Google
                    </strong>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="font-mono text-xs bg-white/80 px-2 py-0.5 rounded border border-[#DDD3C0] text-[#242E22]">
                        {RESTAURANT_INFO.plusCode}
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyPlusCode}
                        className="text-xs text-[#C05638] hover:underline cursor-pointer flex items-center gap-1"
                      >
                        {copiedPlusCode ? <Check className="w-3 h-3 text-green-700" /> : null}
                        <span>{copiedPlusCode ? 'Copié !' : 'Copier'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#C05638] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-[#242E22]/60 font-semibold">
                      Téléphone
                    </strong>
                    <a
                      href={`tel:${RESTAURANT_INFO.phoneInternational}`}
                      className="text-base font-semibold text-[#242E22] hover:text-[#C05638] transition-colors"
                    >
                      {RESTAURANT_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Direct Links */}
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-[#C05638] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <strong className="block text-xs uppercase tracking-wider text-[#242E22]/60 font-semibold">
                      Liens officiels
                    </strong>
                    <div className="flex flex-col gap-1 text-xs">
                      <a
                        href={RESTAURANT_INFO.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#242E22] hover:text-[#C05638] transition-colors flex items-center gap-1"
                      >
                        <span>Site web : {RESTAURANT_INFO.websiteDisplay}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <a
                        href={RESTAURANT_INFO.menuUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#242E22] hover:text-[#C05638] transition-colors flex items-center gap-1"
                      >
                        <span>Menu : {RESTAURANT_INFO.menuUrlDisplay}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <a
                        href={RESTAURANT_INFO.reservationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#242E22] hover:text-[#C05638] transition-colors flex items-center gap-1"
                      >
                        <span>Réservation : {RESTAURANT_INFO.reservationUrlDisplay}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* Direct Buttons */}
              <div className="mt-8 pt-6 border-t border-[#DDD3C0] grid grid-cols-2 gap-3">
                <a
                  href={RESTAURANT_INFO.mapsDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-[#242E22] hover:bg-[#1A2218] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#C87D55]" />
                  <span>Itinéraire</span>
                </a>
                <a
                  href={`tel:${RESTAURANT_INFO.phoneInternational}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-[#C05638] hover:bg-[#9E3F24] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Appeler</span>
                </a>
              </div>
            </div>

            {/* Quick trust quote */}
            <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E8DFD1] text-xs text-[#242E22]/70 italic flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#C05638]" />
              <span>Service : Dîner sur place · Établissement dirigé par des femmes</span>
            </div>

          </div>

          {/* Right Column: Interactive Google Maps Iframe */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-xl overflow-hidden border-2 border-[#DDD3C0] shadow-xl h-full min-h-[420px] bg-[#EFE9DD] flex flex-col">
              
              {/* Map Header Bar */}
              <div className="bg-[#242E22] text-[#FAF8F5] px-4 py-3 flex items-center justify-between z-10">
                <div className="flex items-center gap-2 text-xs">
                  <MapPin className="w-4 h-4 text-[#C87D55]" />
                  <span className="font-semibold">Carte interactive PianoPiano.dz</span>
                </div>
                <a
                  href={RESTAURANT_INFO.mapsDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#E2956C] hover:text-white transition-colors"
                >
                  <span>Agrandir la carte</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Interactive Iframe */}
              <div className="flex-1 w-full min-h-[380px] relative">
                <iframe
                  title="Carte de localisation PianoPiano.dz à Riadh El Feth"
                  src={RESTAURANT_INFO.embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              {/* Map Footer Bar with Itinerary CTA */}
              <div className="bg-[#FAF8F5] p-3 sm:px-6 border-t border-[#DDD3C0] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#242E22]/75">
                <span>Coordonnées GPS : 36.7422063, 3.0764231</span>
                <a
                  href={RESTAURANT_INFO.mapsDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#C05638] hover:text-[#9E3F24]"
                >
                  <span>Ouvrir l'itinéraire officiel Google Maps &rarr;</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
