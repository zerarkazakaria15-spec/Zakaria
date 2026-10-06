import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Calendar, Utensils, Star, ArrowDown } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Reliable high quality atmospheric restaurant / culinary ambient video
  const videoSource = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';
  const posterSource = 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=85';

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => console.log('Autoplay error', e));
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuted = !isMuted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  const scrollToContent = () => {
    const el = document.querySelector('#a-propos');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#1A2218] text-[#FAF8F5]">
      {/* Background Video with Poster Fallback */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          src={videoSource}
          poster={posterSource}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-85' : 'opacity-70'
          }`}
        />
        {/* Deep Olive, Warm Sand & Terracotta Gradient Vignette for Supreme Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#192117] via-[#192117]/65 to-[#242E22]/75 backdrop-contrast-105" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(20,27,19,0.5)_100%)]" />
      </div>

      {/* Floating Minimal Video Controls (Visible on mobile & desktop) */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 bg-[#192117]/80 backdrop-blur-md border border-[#E8DFD1]/20 rounded-full px-3 py-1.5 shadow-lg">
        <button
          type="button"
          onClick={togglePlay}
          className="p-1.5 text-[#EFE9DD] hover:text-[#C87D55] transition-colors rounded-full focus:outline-none focus:ring-1 focus:ring-[#C87D55]"
          title={isPlaying ? 'Mettre en pause' : 'Lire la vidéo'}
          aria-label={isPlaying ? 'Mettre en pause la vidéo' : 'Lire la vidéo'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
        </button>

        <span className="w-px h-3.5 bg-white/20" />

        <button
          type="button"
          onClick={toggleMute}
          className="p-1.5 text-[#EFE9DD] hover:text-[#C87D55] transition-colors rounded-full focus:outline-none focus:ring-1 focus:ring-[#C87D55]"
          title={isMuted ? 'Activer le son' : 'Couper le son'}
          aria-label={isMuted ? 'Activer le son' : 'Couper le son'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>

        <span className="text-[10px] tracking-wider uppercase font-medium text-white/60 pr-1 select-none hidden sm:inline">
          Vidéo
        </span>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#242E22]/85 border border-[#C87D55]/30 backdrop-blur-sm text-xs font-medium text-[#FAF8F5] mb-6 shadow-sm">
          <div className="flex items-center text-[#E2956C]">
            <Star className="w-3.5 h-3.5 fill-current" />
          </div>
          <span className="font-semibold text-[#FAF8F5]">4.5 / 5</span>
          <span className="text-[#DFD5C4]/60">·</span>
          <span className="text-[#EFE9DD]/90">1 133 avis vérifiés</span>
          <span className="hidden sm:inline text-[#DFD5C4]/60">·</span>
          <span className="hidden sm:inline text-[#C87D55] font-medium">Riadh El Feth, Alger</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#FAF8F5] max-w-4xl leading-[1.08] mb-6 drop-shadow-sm">
          PianoPiano<span className="text-[#C87D55]">.dz</span>
        </h1>

        {/* Subheadline */}
        <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#EAE2D3] font-light max-w-2xl leading-relaxed mb-10">
          Une expérience gastronomique, une ambiance unique.
        </p>

        {/* Description Note */}
        <p className="text-sm sm:text-base text-[#DFD5C4]/85 max-w-xl font-normal mb-10 leading-relaxed">
          Bienvenue au cœur d'El Madania. Laissez-vous séduire par l'alliance subtile d'une cuisine méditerranéenne raffinée et d'une atmosphère musicale feutrée.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href={RESTAURANT_INFO.reservationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#C05638] hover:bg-[#9E3F24] text-white font-medium text-sm tracking-wider uppercase rounded-md shadow-lg shadow-[#C05638]/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Réserver une table</span>
          </a>

          <a
            href={RESTAURANT_INFO.menuUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#FAF8F5]/10 hover:bg-[#FAF8F5]/20 text-[#FAF8F5] border border-[#FAF8F5]/30 hover:border-[#FAF8F5]/60 font-medium text-sm tracking-wider uppercase rounded-md backdrop-blur-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Utensils className="w-4 h-4 text-[#C87D55]" />
            <span>Découvrir le menu</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          type="button"
          onClick={scrollToContent}
          className="mt-14 inline-flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer group"
          aria-label="Faire défiler vers la présentation"
        >
          <span className="text-[11px] uppercase tracking-widest font-light">Découvrir</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#C87D55] group-hover:text-white" />
        </button>
      </div>
    </section>
  );
};
