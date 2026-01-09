"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/32f043f4-bf60-42af-aba1-aa6f7428bdeb.png"
          alt="Modern digital marketing office with team collaboration and technology screens"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero.headline')}
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              {t('hero.highlight')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subheading')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold font-poppins transition-all transform hover:scale-105 shadow-lg">
              {t('hero.primaryCta')}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold font-poppins transition-all">
              {t('hero.secondaryCta')}
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="text-blue-200 mb-8">
            <p className="text-lg mb-6">{t('hero.trustText')}</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4784c209-143d-4c52-9735-99180d57cff6.png" 
                alt="Client logo 1"
                className="h-12 object-contain filter brightness-0 invert"
              />
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cff136aa-9f44-41c3-a768-c2f2fdd8ef5a.png" 
                alt="Client logo 2"
                className="h-12 object-contain filter brightness-0 invert"
              />
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/75a6c480-d33d-4547-acf9-1ab05a4a2020.png" 
                alt="Client logo 3"
                className="h-12 object-contain filter brightness-0 invert"
              />
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5d40065b-9f7f-42b2-b648-97f08ea423f3.png" 
                alt="Client logo 4"
                className="h-12 object-contain filter brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}