"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function Portfolio() {
  const { t } = useLanguage();

  const cases = [
    {
      key: 'case1',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/96d53735-5e4f-40a5-8f27-468fd39046bb.png',
      alt: 'E-commerce website growth analytics dashboard showing sales increase'
    },
    {
      key: 'case2',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c18f9b50-abef-4b37-b55b-680b4b5d2683.png',
      alt: 'Brand awareness campaign social media engagement metrics'
    },
    {
      key: 'case3',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b5f6c35c-42fb-44eb-aa2d-43ba1b199875.png',
      alt: 'Local business expansion map showing new market penetration'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <div key={caseStudy.key} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <img 
                src={caseStudy.image}
                alt={caseStudy.alt}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
                    Case Study {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t(`portfolio.${caseStudy.key}.title`)}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t(`portfolio.${caseStudy.key}.description`)}
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Key Results:</p>
                  <p className="text-sm text-gray-600">
                    {t(`portfolio.${caseStudy.key}.metrics`)}
                  </p>
                </div>
                <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  View Full Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/05d9c946-c382-4056-816b-7d3ee0ee86a7.png"
                  alt="Client testimonial photo"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">CEO, TechStart Inc.</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "DigitalBoost transformed our online presence completely. Our sales increased by 250% in just 6 months!"
              </p>
              <div className="flex text-yellow-400 mt-4">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1bc2429f-b3a9-43f8-b0f4-ba7dfe252d59.png"
                  alt="Client testimonial photo"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Michael Chen</h4>
                  <p className="text-sm text-gray-600">Marketing Director, GrowthCo</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Professional team with exceptional results. They understand our business and deliver beyond expectations."
              </p>
              <div className="flex text-yellow-400 mt-4">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/94873b51-e6fb-4a3b-833b-34bb70a88a13.png"
                  alt="Client testimonial photo"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Lisa Rodriguez</h4>
                  <p className="text-sm text-gray-600">Founder, LocalBiz</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "From local to national - DigitalBoost helped us expand to 5 new markets with incredible ROI."
              </p>
              <div className="flex text-yellow-400 mt-4">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}