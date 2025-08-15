
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
    <section id="home" className="hero-section min-h-screen flex items-center">
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
              <span className="text-2xl font-playfair font-bold text-white">JD</span>
            </div>
          </div>
        </div>

        <h1 className="hero-headline">
          Trusted Legal Counsel for 
          <span className="text-gold-400"> Businesses</span> and 
          <span className="text-gold-400"> Individuals</span>
        </h1>
        
        <p className="hero-subheadline">
          Corporate Law • Civil Litigation • Contract Drafting
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="btn-accent text-lg px-8 py-4"
            onClick={scrollToContact}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book a Consultation
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="btn-secondary text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-navy-900"
            onClick={scrollToPracticeAreas}
          >
            View Practice Areas
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="trust-stat bg-white/10 border-white/20 text-white">
            <div className="trust-stat-number text-gold-400">10+</div>
            <div className="trust-stat-label text-navy-100">Years Experience</div>
          </div>
          <div className="trust-stat bg-white/10 border-white/20 text-white">
            <div className="trust-stat-number text-gold-400">120+</div>
            <div className="trust-stat-label text-navy-100">Resolved Cases</div>
          </div>
          <div className="trust-stat bg-white/10 border-white/20 text-white">
            <div className="trust-stat-number text-gold-400">95%</div>
            <div className="trust-stat-label text-navy-100">Client Satisfaction</div>
          </div>
          <div className="trust-stat bg-white/10 border-white/20 text-white">
            <div className="trust-stat-number text-gold-400">✓</div>
            <div className="trust-stat-label text-navy-100">BAR Council Registered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
