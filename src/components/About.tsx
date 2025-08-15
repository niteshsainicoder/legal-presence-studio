
import React from 'react';
import { Download, Award, Globe, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-on-scroll">
            <h2 className="section-heading text-left mb-6">About the Advocate</h2>
            
            {/* TODO: Replace with actual professional bio */}
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p>
                With over 10 years of dedicated legal practice, Adv. John Doe brings extensive experience 
                in corporate law, civil litigation, and contract drafting. Based in New Delhi, he has 
                successfully represented clients across various industries and legal matters.
              </p>
              
              <p>
                John's approach combines thorough legal analysis with practical business acumen, ensuring 
                clients receive not just legal advice, but strategic guidance that aligns with their 
                broader objectives. His commitment to excellence and client-first philosophy has earned 
                him recognition as a trusted legal advisor.
              </p>
              
              <p>
                Fluent in English and Hindi, John practices before the Delhi High Court and District Courts, 
                providing comprehensive legal services to businesses and individuals throughout the region.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-gold-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-navy-900">Education</div>
                  <div className="text-slate-600">
                    LL.B., National Law University (2014)<br />
                    LL.M. (Business Law), XYZ University (2016)
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-gold-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-navy-900">Bar Enrollment</div>
                  <div className="text-slate-600">D/1234/2015</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-gold-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-navy-900">Languages & Jurisdictions</div>
                  <div className="text-slate-600">
                    English, Hindi | Delhi High Court, District Courts
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                className="btn-primary"
                onClick={() => {
                  // TODO: Replace with actual CV download
                  console.log('Download CV clicked');
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                className="btn-secondary"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Schedule Consultation
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <Shield className="w-4 h-4" />
                Confidential & Ethical
              </div>
              <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Users className="w-4 h-4" />
                Client-First Approach
              </div>
            </div>
          </div>

          {/* Professional Photo Placeholder */}
          <div className="animate-on-scroll">
            {/* TODO: Replace with actual professional headshot */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-navy-100 to-slate-100 rounded-2xl shadow-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-slate-500">
                    <div className="w-24 h-24 bg-navy-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-playfair font-bold text-navy-700">JD</span>
                    </div>
                    <p className="text-sm">Professional Photo Placeholder</p>
                    <p className="text-xs mt-1">Replace with actual headshot</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-navy-100 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
