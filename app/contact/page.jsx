'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import TypewriterHeading from '@/components/TypewriterHeading';
import AnimatedButton from '@/components/AnimatedButton';
import ScrollReveal from '@/components/ScrollReveal';
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';

export default function ContactPage({ onShowToast }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    project: 'Bathroom',
    budget: '$25,000 - $45,000',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      if (onShowToast) onShowToast('Please complete all required fields.', 'error');
      return;
    }

    setLoading(true);
    try {
      const payload = new FormData();
      payload.append('name', form.name);
      payload.append('email', form.email);
      payload.append('phone', form.phone);
      payload.append('project', form.project);
      payload.append('budget', form.budget);
      payload.append('message', form.message);
      payload.append('_subject', `Direct Contact Message from ${form.name}`);
      payload.append('_captcha', 'false');

      await fetch('https://formsubmit.co/ajax/solidbathandkitchen@gmail.com', {
        method: 'POST',
        body: payload,
      });

      setLoading(false);
      setSubmitted(true);
      if (onShowToast) onShowToast('Thank you! Your message has been sent successfully.', 'success');
    } catch (err) {
      setLoading(false);
      setSubmitted(true);
      if (onShowToast) onShowToast('Thank you! Your message has been received.', 'success');
    }
  };

  return (
    <div className="space-y-16 pb-16 bg-[#faf8f5]">
      <section className="bg-[#0f0e0c] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-[#c9a53a]/25 text-center bg-luxury-grid">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c9a53a] bg-white/10 px-4 py-1.5 rounded-full border border-[#c9a53a]/30">
            Get In Touch
          </span>
          <TypewriterHeading
            words={["Let's Build Your Dream Space", 'Contact Solid Bath & Kitchen', 'In-Home Renovation Quote']}
            as="h1"
            className="text-4xl sm:text-6xl font-serif-heading font-bold text-white tracking-tight"
          />
          <p className="text-sm sm:text-base text-gray-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Ready to initiate your luxury bathroom or kitchen renovation? Contact our Canadian interior renovation team today.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details Column */}
          <div className="space-y-8 lg:col-span-1 bg-[#0f0e0c] text-white p-8 rounded-3xl border border-[#c9a53a]/40 shadow-xl">
            <div>
              <Image src="/logo.png" alt="Solid Logo" width={240} height={80} className="h-16 w-auto object-contain mb-4" />
              <h3 className="text-xl font-serif-heading font-bold text-white">Contact Information</h3>
              <p className="text-xs text-gray-400 mt-1">Speak directly with our project coordinators.</p>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-start space-x-3 p-4 bg-white/5 border border-[#c9a53a]/20 rounded-2xl">
                <MapPin className="w-5 h-5 text-[#c9a53a] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Service Area</strong>
                  <span className="text-gray-300">Greater Toronto Area (GTA), Ontario, Canada</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-white/5 border border-[#c9a53a]/20 rounded-2xl">
                <Phone className="w-5 h-5 text-[#c9a53a] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Phone</strong>
                  <a href="tel:+14163000911" className="text-[#c9a53a] font-bold text-sm">
                    +1 (416) 300-0911
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-white/5 border border-[#c9a53a]/20 rounded-2xl">
                <Mail className="w-5 h-5 text-[#c9a53a] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Email</strong>
                  <a href="mailto:solidbathandkitchen@gmail.com" className="text-gray-300 hover:text-[#c9a53a]">
                    solidbathandkitchen@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-white/5 border border-[#c9a53a]/20 rounded-2xl">
                <Clock className="w-5 h-5 text-[#c9a53a] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Hours</strong>
                  <span className="text-gray-300">Monday - Saturday: 8:00 AM – 7:00 PM EST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2 bg-white border border-[#c9a53a]/30 rounded-3xl p-8 sm:p-10 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#1a1917] mb-2">Send Us a Direct Message</h3>
            <p className="text-xs text-[#6e6b63] mb-6">Fill out your project details below and we will respond within 24 hours.</p>

            {submitted ? (
              <div className="p-8 bg-[#faf8f5] border border-[#c9a53a] rounded-2xl text-center">
                <CheckCircle2 className="w-12 h-12 text-[#c9a53a] mx-auto mb-3" />
                <h4 className="text-2xl font-serif-heading font-bold text-[#1a1917]">Message Sent Successfully!</h4>
                <p className="text-xs text-[#6e6b63] mt-2">Thank you for reaching out to Solid Bath & Kitchen. We will review your inquiry immediately.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1917] mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 border border-[#c9a53a]/30 rounded-xl text-sm focus:border-[#c9a53a] outline-none bg-[#faf8f5]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1917] mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 border border-[#c9a53a]/30 rounded-xl text-sm focus:border-[#c9a53a] outline-none bg-[#faf8f5]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1917] mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+1 (416) 000-0000"
                      className="w-full px-4 py-3 border border-[#c9a53a]/30 rounded-xl text-sm focus:border-[#c9a53a] outline-none bg-[#faf8f5]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1917] mb-1">Project Interest</label>
                    <select
                      value={form.project}
                      onChange={(e) => setForm({ ...form, project: e.target.value })}
                      className="w-full px-4 py-3 border border-[#c9a53a]/30 rounded-xl text-sm focus:border-[#c9a53a] outline-none bg-[#faf8f5]"
                    >
                      <option value="Bathroom">Bathroom Renovation</option>
                      <option value="Kitchen">Kitchen Renovation</option>
                      <option value="Both">Both Bathroom & Kitchen</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1917] mb-1">Message / Project Details</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your home, layout, and timeline..."
                    className="w-full px-4 py-3 border border-[#c9a53a]/30 rounded-xl text-sm focus:border-[#c9a53a] outline-none resize-none bg-[#faf8f5]"
                  />
                </div>

                <AnimatedButton type="submit" variant="gold" rounded="rounded-full" className="w-full text-center">
                  {loading ? 'Sending Message...' : 'Send Message Now'}
                </AnimatedButton>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
