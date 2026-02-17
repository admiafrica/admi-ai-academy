"use client";

import { useState, useEffect } from "react";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    programme: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [utmParams, setUtmParams] = useState<Record<string, string>>({});

  // Capture UTM parameters on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmData: Record<string, string> = {};
    
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(param => {
      const value = params.get(param);
      if (value) {
        utmData[param] = value;
      }
    });
    
    setUtmParams(utmData);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          utmParams,
          submittedAt: new Date().toISOString(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit enquiry');
      }

      setSubmitStatus("success");
      
      // Track conversion event (Google Ads & Meta Pixel)
      if (typeof window !== 'undefined') {
        // Google Ads conversion
        if ((window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
            'value': 1.0,
            'currency': 'KES'
          });
        }
        
        // Meta Pixel conversion
        if ((window as any).fbq) {
          (window as any).fbq('track', 'Lead', {
            content_name: formData.programme,
            content_category: 'AI Academy Enquiry'
          });
        }
      }

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        programme: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#C55A11] focus:ring-2 focus:ring-[#C55A11]/20 transition-colors"
            placeholder="e.g., John"
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#C55A11] focus:ring-2 focus:ring-[#C55A11]/20 transition-colors"
            placeholder="e.g., Doe"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#C55A11] focus:ring-2 focus:ring-[#C55A11]/20 transition-colors"
          placeholder="e.g., john.doe@example.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#C55A11] focus:ring-2 focus:ring-[#C55A11]/20 transition-colors"
          placeholder="e.g., +254 712 345 678"
        />
      </div>

      {/* Programme */}
      <div>{errorMessage || "Something went wrong. Please try again or contact us directly."}
        <label htmlFor="programme" className="block text-sm font-medium text-white mb-2">
          Programme of Interest *
        </label>
        <select
          id="programme"
          name="programme"
          value={formData.programme}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C55A11] focus:ring-2 focus:ring-[#C55A11]/20 transition-colors"
        >
          <option value="" className="bg-[#1a1a2e]">Select a programme...</option>
          <option value="ai-for-creatives" className="bg-[#1a1a2e]">AI for Creative Professionals</option>
          <option value="ai-for-marketing" className="bg-[#1a1a2e]">AI for Marketing Excellence</option>
          <option value="ai-for-business-intelligence" className="bg-[#1a1a2e]">AI for Business Intelligence</option>
          <option value="not-sure" className="bg-[#1a1a2e]">Not sure yet</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#C55A11] focus:ring-2 focus:ring-[#C55A11]/20 transition-colors resize-none"
          placeholder="Tell us about your goals and any questions you have..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-[#C55A11] to-[#D9DC5B] text-white font-semibold hover:shadow-lg hover:shadow-[#C55A11]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit Enquiry"}
      </button>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400">
          ✓ Thank you! We'll be in touch within 24 hours.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400">
          ✗ Something went wrong. Please try again or contact us directly.
        </div>
      )}

      <p className="text-sm text-white/50 text-center">
        By submitting this form, you agree to our privacy policy. We'll never share your information.
      </p>
    </form>
  );
}
