
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
            <Quote className="w-12 h-12 text-gold-400 mx-auto mb-6" />
            
            <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed text-navy-50">
              "{currentTestimonial.content}"
            </blockquote>
            
            {/* Star rating */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold-400 fill-current" />
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
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Pagination dots */}
            <div className="flex gap-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-gold-400' : 'bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-sm text-navy-300 max-w-2xl mx-auto">
            <strong>Disclaimer:</strong> Individual results vary. Testimonials are not a guarantee 
            of future outcomes. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
