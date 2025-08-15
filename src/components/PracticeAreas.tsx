
import React from 'react';
import { Building2, Scale, FileText, Home, Heart, Shield } from 'lucide-react';
import practiceAreasData from '@/data/practiceAreas.json';

const PracticeAreas = () => {
  const iconMap = {
    Building2,
    Scale,
    FileText,
    Home,
    Heart,
    Shield
  };

  return (
    <section id="practice-areas" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-heading">Practice Areas</h2>
          <p className="section-subheading">
            Comprehensive legal services tailored to meet your unique needs with expertise across multiple practice areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreasData.map((area, index) => {
            const IconComponent = iconMap[area.icon as keyof typeof iconMap];
            
            return (
              <div 
                key={area.id} 
                className="practice-card animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <IconComponent className="practice-card-icon" />
                <h3 className="practice-card-title">{area.title}</h3>
                <p className="practice-card-description">{area.description}</p>
                
                {/* Keywords for SEO */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {area.keywords.map((keyword) => (
                    <span 
                      key={keyword}
                      className="text-xs bg-navy-50 text-navy-700 px-2 py-1 rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 max-w-3xl mx-auto">
            <h3 className="font-playfair text-2xl font-semibold text-navy-900 mb-4">
              Need Legal Consultation?
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Schedule a free 15-minute consultation to discuss your legal needs. 
              Get professional guidance tailored to your specific situation.
            </p>
            <button 
              className="btn-accent"
              onClick={() => {
                // TODO: Replace with actual Calendly integration
                window.open('https://calendly.com/demo', '_blank');
              }}
            >
              Schedule Free Consultation
            </button>
            <p className="text-sm text-slate-500 mt-3">
              * No attorney-client relationship is formed by scheduling a consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
