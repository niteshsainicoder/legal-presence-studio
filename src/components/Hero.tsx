
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPracticeAreas = () => {
    const element = document.querySelector('#practice-areas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section min-h-screen mt-10 flex items-center">
      <div className="hero-overlay"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gold-500/20 to-transparent"></div>
      </div>

      <div className="hero-content animate-fade-in">
        {/* TODO: Replace with actual professional headshot or law firm imagery */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
            <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center">
              <span className="text-2xl font-playfair font-bold text-white">RJ</span>
            </div>
          </div>
        </div>

        <h1 className="hero-headline">
          Trusted Legal Counsel for 
          <span className="text-gold-300"> Businesses</span> and 
          <span className="text-gold-300"> Individuals</span>
        </h1>
        
        <p className="hero-subheadline">
          Corporate Law • Civil Litigation • Contract Drafting
        </p>

        {/* Value proposition */}
        <div className="text-lg text-navy-50 mb-8 max-w-2xl mx-auto">
          Fast contract reviews • Transparent fees • Delhi High Court and District Courts
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="btn-primary text-lg px-8 py-4 focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-navy-900"
            onClick={scrollToContact}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Consultation
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-4 text-white border-2 border-white/80 hover:bg-white hover:text-navy-900 bg-transparent focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-navy-900"
            onClick={scrollToPracticeAreas}
          >
            View Practice Areas
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Trust indicators - single row with equal height */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <div className="text-2xl md:text-3xl font-playfair font-bold text-gold-300 mb-1">15+</div>
              <div className="text-sm text-navy-100 mb-1">Years Experience</div>
              <div className="text-xs text-navy-300">verified</div>
            </div>
            <div className="p-4">
              <div className="text-2xl md:text-3xl font-playfair font-bold text-gold-300 mb-1">120+</div>
              <div className="text-sm text-navy-100 mb-1">Resolved Cases</div>
              <div className="text-xs text-navy-300">internal records</div>
            </div>
            <div className="p-4">
              <div className="text-2xl md:text-3xl font-playfair font-bold text-gold-300 mb-1">95%</div>
              <div className="text-sm text-navy-100 mb-1">Client Satisfaction</div>
              <div className="text-xs text-navy-300">internal survey</div>
            </div>
            <div className="p-4">
              <div className="text-2xl md:text-3xl font-playfair font-bold text-gold-300 mb-1">✓</div>
              <div className="text-sm text-navy-100 mb-1">BAR Registered</div>
              <div className="text-xs text-navy-300">verified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
