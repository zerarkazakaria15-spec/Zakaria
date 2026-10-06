import React from 'react';
import { Utensils, Music, Wine, Sparkles } from 'lucide-react';

interface ExperienceCard {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  tag: string;
}

export const Experience: React.FC = () => {
  const experiences: ExperienceCard[] = [
    {
      title: 'Gastronomie',
      description: 'Des plats soigneusement présentés dans un cadre élégant.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      icon: <Utensils className="w-5 h-5 text-[#C87D55]" />,
      tag: 'Saveurs & Création',
    },
    {
      title: 'Ambiance',
      description: 'Une atmosphère chaleureuse et immersive pour vos soirées.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      icon: <Music className="w-5 h-5 text-[#C87D55]" />,
      tag: 'Musique & Douceur',
    },
    {
      title: 'Moments',
      description: 'Un lieu pensé pour partager des moments mémorables.',
      image: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80',
      icon: <Wine className="w-5 h-5 text-[#C87D55]" />,
      tag: 'Partage & Émotion',
    },
    {
      title: 'Hospitalité',
      description: 'Une expérience accueillante et attentive.',
      image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80',
      icon: <Sparkles className="w-5 h-5 text-[#C87D55]" />,
      tag: 'Service Délicat',
    },
  ];

  return (
    <section id="experience" className="py-24 bg-[#EFE9DD] text-[#242E22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C05638] mb-3">
            <span className="w-4 h-px bg-[#C05638]" />
            <span>L'esprit de notre maison</span>
            <span className="w-4 h-px bg-[#C05638]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#242E22] mb-4">
            L'Expérience PianoPiano
          </h2>
          <p className="text-base sm:text-lg text-[#242E22]/75 font-normal leading-relaxed">
            Chaque détail est pensé pour éveiller vos sens et faire de chaque visite un souvenir impérissable.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="group relative bg-[#FAF8F5] rounded-lg overflow-hidden border border-[#DDD3C0] hover:border-[#C05638] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#242E22]/10">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242E22]/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <span className="absolute top-3 left-3 text-[11px] uppercase tracking-wider font-semibold text-white/90 bg-[#242E22]/80 px-2.5 py-1 rounded backdrop-blur-sm">
                  {exp.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {exp.icon}
                    <h3 className="font-serif text-2xl text-[#242E22] font-normal group-hover:text-[#C05638] transition-colors">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#242E22]/75 leading-relaxed font-normal">
                    {exp.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EFE9DD] flex items-center justify-between text-xs text-[#C87D55] font-medium">
                  <span>PianoPiano.dz</span>
                  <span className="text-[11px] text-[#242E22]/50 font-mono">0{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
