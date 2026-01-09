"use client";

import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppCTA from '@/components/WhatsAppCTA';

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
        <WhatsAppCTA />
      </div>
    </LanguageProvider>
  );
}