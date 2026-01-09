"use client";

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold font-poppins bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
              DigitalBoost
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t('nav.home')}
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t('nav.services')}
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t('nav.about')}
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t('nav.portfolio')}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t('nav.contact')}
            </a>
          </nav>

          {/* Language Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  language === 'en' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('id')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  language === 'id' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                ID
              </button>
            </div>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium font-poppins transition-colors">
              {t('nav.cta')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                {t('nav.home')}
              </a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                {t('nav.services')}
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                {t('nav.about')}
              </a>
              <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                {t('nav.portfolio')}
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                {t('nav.contact')}
              </a>
              
              {/* Mobile Language Toggle */}
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-gray-700 font-medium">Language:</span>
                <div className="flex items-center bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      language === 'en' 
                        ? 'bg-white text-blue-600 shadow-sm' 
                        : 'text-gray-600'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('id')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      language === 'id' 
                        ? 'bg-white text-blue-600 shadow-sm' 
                        : 'text-gray-600'
                    }`}
                  >
                    ID
                  </button>
                </div>
              </div>
              
              {/* Mobile CTA */}
              <div className="px-3 py-2">
                <button className="w-full bg-orange-500 text-white px-6 py-2 rounded-lg font-medium font-poppins">
                  {t('nav.cta')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}