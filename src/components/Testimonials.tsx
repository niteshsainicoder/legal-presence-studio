
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import testimonialsData from '@/data/testimonials.json';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const previousTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-navy-100 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience with our legal services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center animate-on-scroll">
            <Quote className="w-12 h-12 text-gold-400 mx-auto mb-6" aria-hidden="true" />
            
            <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed text-navy-50">
              "{currentTestimonial.content}"
            </blockquote>
            
            {/* Star rating */}
            <div className="flex justify-center gap-1 mb-6" role="img" aria-label={`${currentTestimonial.rating} out of 5 stars`}>
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold-400 fill-current" aria-hidden="true" />
              ))}
            </div>
            
            <div className="text-navy-200">
              <div className="font-semibold text-lg">{currentTestimonial.name}</div>
              <div className="text-navy-300">{currentTestimonial.title}</div>
              <div className="text-sm text-gold-400 mt-1">{currentTestimonial.category}</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={previousTestimonial}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            
            {/* Pagination with numbers instead of dots */}
            <div className="flex gap-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-8 h-8 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 ${
                    index === currentIndex 
                      ? 'bg-gold-400 text-navy-900' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Results disclaimer */}
        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-sm text-navy-300 max-w-2xl mx-auto mb-4">
            <strong>Results vary:</strong> Individual outcomes depend on specific circumstances. 
            Testimonials reflect client experiences but do not guarantee similar results.
          </p>
          <p className="text-sm text-navy-300 max-w-2xl mx-auto">
            <strong>Disclaimer:</strong> Testimonials are not a guarantee 
            of future outcomes. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
