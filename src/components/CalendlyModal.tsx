import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Calendar, 
  Clock, 
  Check, 
  ArrowUpRight, 
  Sparkles, 
  Calculator, 
  CheckCircle2,
  Copy
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/servicesData';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServicePreset?: ServiceItem | null;
}

export const CalendlyModal: React.FC<CalendlyModalProps> = ({
  isOpen,
  onClose,
  selectedServicePreset,
}) => {
  const [activeTab, setActiveTab] = useState<'calendar' | 'estimator'>('calendar');
  const [selectedService, setSelectedService] = useState<string>(
    selectedServicePreset?.id || 'custom-software'
  );
  const [selectedTimeline, setSelectedTimeline] = useState<string>('asap');
  const [copiedBrief, setCopiedBrief] = useState(false);
  
  // Updated state: includes preferred date and time slot
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    preferredDate: '',
    preferredTime: '10:00 AM IST',
    projectDescription: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedServicePreset) {
      setSelectedService(selectedServicePreset.id);
    }
  }, [selectedServicePreset]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const currentServiceObj = SERVICES_DATA.find((s) => s.id === selectedService) || SERVICES_DATA[0];

  const handleEstimateCopy = () => {
    const brief = `98STUDIO PROJECT BRIEF:
- Service: ${currentServiceObj.title} (${currentServiceObj.startingPrice})
- Target Timeline: ${selectedTimeline === 'asap' ? 'Immediate Sprint (Next 2 Weeks)' : 'Within 1-2 Months'}
- Budget Range: ${currentServiceObj.startingPrice}
- Preferred Slot: ${formData.preferredDate || 'TBD'} at ${formData.preferredTime}
- Description: ${formData.projectDescription || 'Discussing project scope during discovery call.'}
`;
    navigator.clipboard.writeText(brief);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2500);
  };

  const handleSubmitInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Formatted multi-line text message for professional email presentation
    const formattedEmailMessage = `
==================================================
        98STUDIO DISCOVERY CALL BOOKING
==================================================

1. CLIENT INFORMATION
--------------------------------------------------
- Name: ${formData.name}
- Email: ${formData.email}

2. REQUESTED CONSULTATION TIME
--------------------------------------------------
- Preferred Date: ${formData.preferredDate || 'As soon as possible'}
- Preferred Time Slot: ${formData.preferredTime}

3. PROJECT SCOPE & TIMELINE
--------------------------------------------------
- Service Selected: ${currentServiceObj.title}
- Estimated Starting Price: ${currentServiceObj.startingPrice}
- Target Timeline: ${
      selectedTimeline === 'asap'
        ? 'Immediate Sprint (Next 2 Weeks)'
        : selectedTimeline === '1month'
        ? 'Within 1 Month'
        : selectedTimeline === 'quarter'
        ? 'Q2/Q3 2026'
        : 'Exploring Options'
    }

4. PROJECT DETAILS & OVERVIEW
--------------------------------------------------
${formData.projectDescription || 'No detailed overview provided. Will discuss live on call.'}

==================================================
Sent automatically via 98studio Web App
`;

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'ad115379-ea8b-4cb9-a47f-74d2457f3cfd',
          subject: `⚡ Discovery Call Booking: ${formData.name} (${formData.preferredDate || 'ASAP'})`,
          from_name: '98studio Booking System',
          to_email: '9eightstudio@gmail.com',
          name: formData.name,
          email: formData.email,
          preferred_date: formData.preferredDate || 'Not specified',
          preferred_time: formData.preferredTime,
          service: currentServiceObj.title,
          starting_price: currentServiceObj.startingPrice,
          timeline: selectedTimeline,
          message: formattedEmailMessage,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#FF5A1F', '#0A0A0A', '#E5E5E0']
        });
      } else {
        console.error('Submission failed:', result.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-studio-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-white rounded-3xl border border-studio-border shadow-2xl overflow-hidden z-10 my-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-studio-border bg-paper-100">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded-lg bg-studio-black text-white flex items-center justify-center font-editorial font-bold text-xs">
                98
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-display font-bold text-studio-black">
                  Start a Project with 98studio
                </h3>
                <p className="text-[11px] font-mono text-studio-subtle">
                  ● 30-min discovery call with Lead Architect
                </p>
              </div>
            </div>

            {/* Modal Controls */}
            <div className="flex items-center space-x-2">
              {/* Tab Switcher */}
              <div className="hidden sm:flex items-center space-x-1 bg-white p-1 rounded-full border border-studio-border">
                <button
                  onClick={() => setActiveTab('calendar')}
                  className={`px-3 py-1 rounded-full text-xs font-mono font-medium transition-all ${
                    activeTab === 'calendar'
                      ? 'bg-studio-black text-white'
                      : 'text-studio-muted hover:text-studio-black'
                  }`}
                >
                  Schedule Call
                </button>
                <button
                  onClick={() => setActiveTab('estimator')}
                  className={`px-3 py-1 rounded-full text-xs font-mono font-medium transition-all ${
                    activeTab === 'estimator'
                      ? 'bg-studio-black text-white'
                      : 'text-studio-muted hover:text-studio-black'
                  }`}
                >
                  Scope Estimator
                </button>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full border border-studio-border bg-white text-studio-black hover:bg-paper-200 flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 max-h-[78vh] overflow-y-auto">
            {activeTab === 'calendar' ? (
              <div className="space-y-6">
                {/* Header Brief */}
                <div className="p-4 rounded-2xl bg-paper-100 border border-studio-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex items-center space-x-2 text-studio-black font-semibold">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span>Direct Discovery Session: 30 Minutes · Zoom / Google Meet</span>
                  </div>
                  <div className="text-accent font-semibold flex items-center space-x-1">
                    <span>Active Timeslots Available This Week</span>
                  </div>
                </div>

                {/* Interactive Consultation Form Container */}
                <div className="relative rounded-2xl border border-studio-border overflow-hidden bg-white min-h-[480px] flex flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-studio-border flex-1">
                    {/* Left Column: Meeting Summary */}
                    <div className="md:col-span-5 p-6 space-y-4 bg-paper-50">
                      <div className="text-xs font-mono font-semibold uppercase text-accent">
                        98studio Principal Team
                      </div>
                      <h4 className="text-2xl font-display font-extrabold text-studio-black tracking-tight">
                        Product Architecture & Discovery Call
                      </h4>
                      <div className="space-y-2 text-xs text-studio-muted font-mono">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-3.5 h-3.5 text-accent" />
                          <span>30 Minutes Duration</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Sparkles className="w-3.5 h-3.5 text-accent" />
                          <span>Technical roadmap & fixed-quote estimates</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-studio-border/70 text-xs text-studio-muted leading-relaxed">
                        During this call, we’ll review your business goals, target timelines, data architecture, and discuss whether 98studio is the right fit.
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-studio-border text-xs">
                        <span className="font-semibold text-studio-black">Prefer direct email?</span>
                        <div className="text-accent font-mono mt-0.5 select-all">
                          9eightstudio@gmail.com
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Interactive Date, Time & Details Form */}
                    <div className="md:col-span-7 p-6 flex flex-col justify-between">
                      {isSubmitted ? (
                        <div className="my-auto text-center py-10 space-y-4">
                          <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                            <CheckCircle2 className="w-8 h-8" />
                          </div>
                          <h4 className="text-2xl font-display font-bold text-studio-black">
                            Call Request Received!
                          </h4>
                          <p className="text-sm text-studio-muted max-w-md mx-auto">
                            Thank you! Our lead developer will email you directly within 4 hours with your confirmed calendar invitation for <strong className="text-studio-black">{formData.preferredDate || 'your selected date'}</strong> at <strong className="text-studio-black">{formData.preferredTime}</strong>.
                          </p>
                          <button
                            onClick={() => {
                              setIsSubmitted(false);
                              setFormData({
                                name: '',
                                email: '',
                                preferredDate: '',
                                preferredTime: '10:00 AM IST',
                                projectDescription: '',
                              });
                            }}
                            className="px-5 py-2 rounded-full text-xs font-mono font-semibold bg-studio-black text-white hover:bg-accent transition-colors"
                          >
                            Book another slot
                          </button>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmitInquiry} className="space-y-4">
                          <div className="text-xs font-mono font-semibold uppercase text-studio-black mb-2">
                            Select Preferred Window & Share Details
                          </div>

                          {/* Contact Info */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[11px] font-mono text-studio-subtle mb-1">Your Name *</label>
                              <input
                                required
                                type="text"
                                placeholder="Sarah Jenkins"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-3.5 py-2.5 rounded-xl border border-studio-border text-xs bg-paper-100 focus:bg-white focus:border-accent focus:outline-none transition-colors"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-mono text-studio-subtle mb-1">Work Email *</label>
                              <input
                                required
                                type="email"
                                placeholder="sarah@company.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-3.5 py-2.5 rounded-xl border border-studio-border text-xs bg-paper-100 focus:bg-white focus:border-accent focus:outline-none transition-colors"
                              />
                            </div>
                          </div>

                          {/* Preferred Date & Time Selector */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[11px] font-mono text-studio-subtle mb-1">Preferred Date *</label>
                              <input
                                required
                                type="date"
                                value={formData.preferredDate}
                                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                                className="w-full px-3.5 py-2.5 rounded-xl border border-studio-border text-xs bg-paper-100 focus:bg-white focus:border-accent focus:outline-none transition-colors font-mono"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-mono text-studio-subtle mb-1">Preferred Time Window *</label>
                              <select
                                value={formData.preferredTime}
                                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                                className="w-full px-3.5 py-2.5 rounded-xl border border-studio-border text-xs bg-paper-100 focus:bg-white focus:border-accent focus:outline-none transition-colors font-mono"
                              >
                                <option value="10:00 AM IST">Morning (10:00 AM IST)</option>
                                <option value="02:00 PM IST">Afternoon (02:00 PM IST)</option>
                                <option value="06:00 PM IST">Evening (06:00 PM IST)</option>
                                <option value="09:00 PM IST">Late Evening (09:00 PM IST)</option>
                              </select>
                            </div>
                          </div>

                          {/* Scope & Timeline */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[11px] font-mono text-studio-subtle mb-1">Project Type</label>
                              <select
                                value={selectedService}
                                onChange={(e) => setSelectedService(e.target.value)}
                                className="w-full px-3.5 py-2.5 rounded-xl border border-studio-border text-xs bg-paper-100 focus:bg-white focus:border-accent focus:outline-none transition-colors"
                              >
                                {SERVICES_DATA.map((s) => (
                                  <option key={s.id} value={s.id}>
                                    {s.title} ({s.startingPrice})
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <label className="block text-[11px] font-mono text-studio-subtle mb-1">Target Timeline</label>
                              <select
                                value={selectedTimeline}
                                onChange={(e) => setSelectedTimeline(e.target.value)}
                                className="w-full px-3.5 py-2.5 rounded-xl border border-studio-border text-xs bg-paper-100 focus:bg-white focus:border-accent focus:outline-none transition-colors"
                              >
                                <option value="asap">Immediate (Next 2 weeks)</option>
                                <option value="1month">Within 1 month</option>
                                <option value="quarter">Q2/Q3 2026</option>
                                <option value="exploring">Just exploring options</option>
                              </select>
                            </div>
                          </div>

                          {/* Description */}
                          <div>
                            <label className="block text-[11px] font-mono text-studio-subtle mb-1">Tell us about what you're building</label>
                            <textarea
                              rows={2}
                              placeholder="Brief overview of features, users, or current bottlenecks..."
                              value={formData.projectDescription}
                              onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl border border-studio-border text-xs bg-paper-100 focus:bg-white focus:border-accent focus:outline-none transition-colors resize-none"
                            />
                          </div>

                          <div className="pt-2">
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-full py-3.5 rounded-xl text-xs font-semibold bg-accent hover:bg-accent-hover text-white transition-all duration-200 shadow-lg shadow-accent/20 flex items-center justify-center space-x-2 disabled:opacity-50"
                            >
                              <span>{isSubmitting ? 'Scheduling Session...' : 'Confirm Discovery Call & Brief'}</span>
                              <ArrowUpRight className="w-4 h-4" />
                            </button>
                          </div>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Scope Estimator Tab */
              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-paper-100 border border-studio-border flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center space-x-2 text-studio-black font-semibold">
                    <Calculator className="w-4 h-4 text-accent" />
                    <span>Instant Scope & Budget Calculator</span>
                  </div>
                  <span className="text-studio-muted">Transparent Milestone Tiers</span>
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-semibold uppercase text-studio-black">
                    1. Select Core Service Track
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {SERVICES_DATA.map((srv) => (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => setSelectedService(srv.id)}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          selectedService === srv.id
                            ? 'border-accent bg-accent/5 shadow-sm'
                            : 'border-studio-border bg-white hover:border-zinc-400'
                        }`}
                      >
                        <div className="text-xs font-bold text-studio-black">{srv.title}</div>
                        <div className="text-xs font-mono text-accent font-semibold mt-1">{srv.startingPrice}</div>
                        <div className="text-[10px] text-studio-muted mt-1">{srv.timeline}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Generated Summary Card */}
                <div className="p-6 rounded-2xl bg-studio-black text-white space-y-4">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                    <span className="text-xs font-mono text-accent uppercase font-semibold">Estimated Investment</span>
                    <span className="text-xs font-mono text-zinc-400">100% IP Handover</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                      <div className="text-3xl font-display font-extrabold text-white">
                        {currentServiceObj.startingPrice}
                      </div>
                      <p className="text-xs text-zinc-400 mt-1 max-w-md">
                        Includes architecture, design system, full-stack development, and 30-day post-launch warranty.
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={handleEstimateCopy}
                        className="px-4 py-2.5 rounded-xl border border-zinc-700 bg-zinc-900 text-xs font-mono text-zinc-200 hover:text-white flex items-center space-x-2 transition-colors"
                      >
                        {copiedBrief ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedBrief ? 'Copied Brief!' : 'Copy Brief'}</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('calendar')}
                        className="px-5 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white text-xs font-semibold font-mono flex items-center space-x-1.5 transition-colors shadow-lg shadow-accent/20"
                      >
                        <span>Book This Scope</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};