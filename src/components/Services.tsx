"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      key: 'seo',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6aed5715-8991-4693-8eef-411457660d06.png',
      alt: 'SEO and Content Marketing Strategy Dashboard'
    },
    {
      key: 'social',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8f65ae63-edda-49e5-bad2-3c8353c2f83a.png',
      alt: 'Social Media Management Analytics Interface'
    },
    {
      key: 'ppc',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/29ab8a7f-837c-4593-ac21-77933ab83497.png',
      alt: 'PPC Advertising Campaign Performance Dashboard'
    },
    {
      key: 'web',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/05bc1f49-3635-4ee5-835d-27807aa24c08.png',
      alt: 'Modern responsive website development showcase'
    },
    {
      key: 'brand',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0317fa37-c67c-422f-81f3-ab47415c64a4.png',
      alt: 'Brand strategy and identity design process'
    },
    {
      key: 'analytics',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/72b19a4d-a27d-40a7-8b2a-d1fb546f8242.png',
      alt: 'Advanced analytics and reporting dashboard'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.key} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <img 
                src={service.image}
                alt={service.alt}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t(`services.${service.key}.title`)}
              </h3>
              <p className="text-gray-600 mb-6">
                {t(`services.${service.key}.description`)}
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t('nav.cta')}
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              {t('hero.subheading')}
            </p>
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold font-poppins transition-all transform hover:scale-105 shadow-lg">
              {t('hero.primaryCta')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}