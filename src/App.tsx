/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Experience } from './components/Experience';
import { MenuPreview } from './components/MenuPreview';
import { SignatureDishes } from './components/SignatureDishes';
import { Atmosphere } from './components/Atmosphere';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { ReservationSection } from './components/ReservationSection';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#242E22] flex flex-col font-sans selection:bg-[#C05638]/20 selection:text-[#9E3F24]">
      {/* Sticky Top Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section with Background Video, Controls & CTAs */}
        <Hero />

        {/* 2. Restaurant Introduction */}
        <Introduction />

        {/* 3. Experience Cards (Gastronomie, Ambiance, Moments, Hospitalité) */}
        <Experience />

        {/* 4. Menu Preview with realistic Algerian DA pricing & category filters */}
        <MenuPreview />

        {/* 5. Signature Dishes ("Les incontournables") */}
        <SignatureDishes />

        {/* 6. Atmosphere & Musical Vibe Section */}
        <Atmosphere />

        {/* 7. Image Gallery with Lightbox */}
        <Gallery />

        {/* 8. Google Reviews (4.5 / 5 — 1 133 avis) */}
        <Reviews />

        {/* 9. High-conversion Reservation Section */}
        <ReservationSection />

        {/* 10. Location with interactive Google Maps Embed */}
        <ContactLocation />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
