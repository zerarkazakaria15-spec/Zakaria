import React, { useState } from 'react';
import { Calendar, Phone, Clock, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ReservationSection: React.FC = () => {
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('20:00');

  const handleOnlineBooking = () => {
    window.open(RESTAURANT_INFO.reservationUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="reservation" className="py-24 bg-[#242E22] text-[#FAF8F5] relative overflow-hidden">
      {/* Mediterranean luxury geometric ambient patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C87D55_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-[#C05638]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-80 h-80 bg-[#C87D55]/15 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-[#1A2218] rounded-2xl border border-[#FAF8F5]/15 p-8 sm:p-12 lg:p-16 shadow-2xl">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C87D55] mb-2 block">
              Disponibilités & Accueil
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FAF8F5] tracking-tight mb-4">
              Réservez votre table
            </h2>
            <p className="font-serif italic text-lg sm:text-xl text-[#DFD5C4] font-light">
              Préparez votre prochaine expérience chez PianoPiano.
            </p>
          </div>

          {/* Interactive Booking Preview Card */}
          <div className="bg-[#242E22] border border-[#FAF8F5]/10 rounded-xl p-6 sm:p-8 max-w-3xl mx-auto mb-10 shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              
              {/* Guests Selector */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#DFD5C4]/70 mb-2 font-medium flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#C87D55]" />
                  <span>Couverts</span>
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-[#1A2218] border border-[#FAF8F5]/20 text-[#FAF8F5] rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-[#C05638]"
                >
                  <option value="1">1 personne</option>
                  <option value="2">2 personnes (Duo)</option>
                  <option value="3">3 personnes</option>
                  <option value="4">4 personnes</option>
                  <option value="5">5 personnes</option>
                  <option value="6">6 personnes (Groupe)</option>
                  <option value="8+">8 personnes ou plus</option>
                </select>
              </div>

              {/* Date Selector */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#DFD5C4]/70 mb-2 font-medium flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C87D55]" />
                  <span>Date souhaitée</span>
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#1A2218] border border-[#FAF8F5]/20 text-[#FAF8F5] rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-[#C05638]"
                />
              </div>

              {/* Time Selector */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#DFD5C4]/70 mb-2 font-medium flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C87D55]" />
                  <span>Créneau</span>
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-[#1A2218] border border-[#FAF8F5]/20 text-[#FAF8F5] rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-[#C05638]"
                >
                  <option value="19:00">19:00</option>
                  <option value="19:30">19:30</option>
                  <option value="20:00">20:00</option>
                  <option value="20:30">20:30</option>
                  <option value="21:00">21:00</option>
                  <option value="21:30">21:30</option>
                  <option value="22:00">22:00</option>
                </select>
              </div>

            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                type="button"
                onClick={handleOnlineBooking}
                className="w-full sm:flex-1 py-4 px-6 bg-[#C05638] hover:bg-[#9E3F24] text-white text-xs font-semibold uppercase tracking-wider rounded-md shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Réserver maintenant en ligne</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${RESTAURANT_INFO.phoneInternational}`}
                className="w-full sm:w-auto py-4 px-6 bg-[#1A2218] hover:bg-black/40 border border-[#FAF8F5]/30 hover:border-[#FAF8F5] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C87D55]" />
                <span>Appeler : {RESTAURANT_INFO.phone}</span>
              </a>
            </div>

            <div className="mt-4 pt-4 border-t border-[#FAF8F5]/10 flex flex-wrap items-center justify-between text-xs text-[#DFD5C4]/70">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C87D55]" />
                Réservation directe sans intermédiaire
              </span>
              <span>Confirmation instantanée selon disponibilités</span>
            </div>
          </div>

          {/* Quick info notes */}
          <div className="text-center text-xs text-[#DFD5C4]/60 max-w-lg mx-auto">
            Pour les événements privés ou les réservations de plus de 8 personnes, nous vous recommandons de contacter directement l'accueil téléphonique au <a href={`tel:${RESTAURANT_INFO.phoneInternational}`} className="text-[#C87D55] underline hover:text-white">{RESTAURANT_INFO.phone}</a>.
          </div>

        </div>

      </div>
    </section>
  );
};
