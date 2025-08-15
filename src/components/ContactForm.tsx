
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Download } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consultationType: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    acceptTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Replace with actual form submission logic
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      console.log('Form submitted:', formData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        consultationType: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
        acceptTerms: false
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subheading">
            Ready to discuss your legal needs? Schedule a consultation or contact us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-on-scroll">
            <h3 className="font-playfair text-2xl font-semibold text-navy-900 mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* TODO: Replace with actual office address and contact details */}
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gold-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-navy-900 mb-1">Office Address</div>
                  <div className="text-slate-600">
                    12 Example Chambers<br />
                    Connaught Place<br />
                    New Delhi 110001
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-gold-600 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-navy-900 mb-1">Phone</div>
                  <div className="text-slate-600">+91 98765 43210</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-gold-600 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-navy-900 mb-1">Email</div>
                  <div className="text-slate-600">contact@johndoelegal.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-gold-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-navy-900 mb-1">Office Hours</div>
                  <div className="text-slate-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: By Appointment Only
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 space-y-4">
              <Button 
                className="w-full btn-accent"
                onClick={() => {
                  // TODO: Replace with actual WhatsApp link
                  window.open('https://wa.me/919876543210', '_blank');
                }}
              >
                WhatsApp Consultation
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full btn-secondary"
                onClick={() => {
                  // TODO: Replace with actual vCard download
                  console.log('Download vCard clicked');
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Contact Card
              </Button>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8">
              <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
                <div className="text-slate-500 text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Map Integration Placeholder</p>
                  <p className="text-sm">Replace with Google Maps embed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="contact-form">
              <h3 className="font-playfair text-2xl font-semibold text-navy-900 mb-6">
                Schedule a Consultation
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="consultationType" className="form-label">Consultation Type</label>
                  <select
                    id="consultationType"
                    name="consultationType"
                    value={formData.consultationType}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="">Select consultation type</option>
                    <option value="corporate">Corporate Law</option>
                    <option value="litigation">Civil Litigation</option>
                    <option value="contracts">Contract Drafting</option>
                    <option value="property">Property & Real Estate</option>
                    <option value="family">Family Law</option>
                    <option value="consumer">Consumer Protection</option>
                    <option value="general">General Legal Advice</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="preferredDate" className="form-label">Preferred Date</label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="form-input"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="preferredTime" className="form-label">Preferred Time</label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="">Select preferred time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                    <option value="evening">Evening (4 PM - 6 PM)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Please describe your legal matter briefly..."
                ></textarea>
              </div>

              <div className="form-group">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    className="mt-1"
                    required
                  />
                  <span className="text-sm text-slate-600">
                    I accept the <a href="#" className="text-navy-900 hover:underline">Terms & Conditions</a> and 
                    <a href="#" className="text-navy-900 hover:underline"> Privacy Policy</a>. 
                    I understand that no attorney-client relationship is formed by submitting this form.
                  </span>
                </label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !formData.acceptTerms}
                className="w-full btn-primary text-lg py-4"
              >
                {isSubmitting ? 'Submitting...' : 'Schedule Consultation'}
              </Button>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  Thank you! Your consultation request has been submitted. We'll contact you within 24 hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                  There was an error submitting your request. Please try again or contact us directly.
                </div>
              )}

              {/* reCAPTCHA Placeholder */}
              <div className="mt-4 text-center">
                <div className="text-sm text-slate-500">
                  Protected by reCAPTCHA (Integration Placeholder)
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
