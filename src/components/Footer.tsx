"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold font-poppins mb-4">DigitalBoost</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                f
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors">
                t
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors">
                in
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors">
                ig
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.services.title')}</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('services.seo.title')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('services.social.title')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('services.ppc.title')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('services.web.title')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('services.brand.title')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('services.analytics.title')}</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.company.title')}</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">{t('nav.about')}</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">{t('nav.portfolio')}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">{t('nav.contact')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">News</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 DigitalBoost Agency. {t('footer.rights')}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}