import { useState } from 'react';
import { useContent } from '../context/ContentContext';

export default function Enquiry() {
  const { content } = useContent();
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const enquiryData = content?.enquiry || {
    image: '/enquiry_img.png',
    contactInfo: [
      { icon: '📍', label: 'Address', value: '37/2 No 1 Vinayaga Residency, Kumilamparappu Pirivu, Chithode, Erode' },
      { icon: '📞', label: 'Phone',   value: '+91 97877 51430' },
      { icon: '📧', label: 'Email',   value: 'chithodehappykids@gmail.com' },
      { icon: '🕐', label: 'Hours',   value: 'Mon–Sat: 8 AM – 5 PM' },
    ],
    socials: [
      { icon: 'f', label: 'Facebook',  color: 'bg-blue-600', link: '#' },
      { icon: '▶', label: 'YouTube',   color: 'bg-red-600', link: '#' },
      { icon: '📷', label: 'Instagram', color: 'bg-pink-500', link: '#' },
    ]
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone)) e.phone = 'Valid 10-digit number required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    
    setSubmitting(true);
    try {
      const currentSubmissions = enquiryData.submissions || [];
      const newSubmission = {
        id: Date.now(),
        name: form.name,
        email: form.email,
        phone: form.phone,
        subject: form.subject || 'General Enquiry',
        message: form.message,
        date: new Date().toISOString().split('T')[0],
        status: 'New',
        remarks: ''
      };

      const updatedEnquiry = {
        ...enquiryData,
        submissions: [newSubmission, ...currentSubmissions]
      };

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/submit-enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject || 'General Enquiry',
          message: form.message
        })
      });

      if (response.ok) {
        setErrors({});
        setSubmitted(true);
      } else {
        throw new Error('Save failed');
      }
    } catch (err) {
      console.error('Submission error:', err);
      alert('Failed to send message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (field, val) => {
    setForm(prev => ({ ...prev, [field]: val }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const inputClass = (field) =>
    `w-full rounded-2xl px-4 py-3.5 text-sm font-medium outline-none border-2 transition-all duration-200 bg-white/10 placeholder-white/40 text-white
    ${errors[field]
      ? 'border-red-400 bg-red-500/10'
      : focused === field
      ? 'border-white shadow-[0_0_0_4px_rgba(255,255,255,0.1)]'
      : 'border-white/20 hover:border-white/40'}`;

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #E31C78 0%, #c4156a 100%)' }}
    >
      {/* Decorations */}
      <div className="absolute inset-0 bg-hero-dots opacity-20 pointer-events-none" />
      <div className="absolute top-10 right-20 text-4xl opacity-30 animate-spin-slow">🪐</div>
      <div className="absolute bottom-10 left-20 text-5xl opacity-20">✦</div>
      <div className="absolute top-1/3 right-10 w-24 h-24 rounded-full border border-white/10 animate-spin-slow pointer-events-none" />
      <div className="absolute bottom-1/3 left-16 w-16 h-16 rounded-full bg-white/5 blur-xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-white/60 font-semibold tracking-[0.2em] text-xs uppercase mb-3">GET IN TOUCH</p>
          <h2 className="font-fredoka text-4xl sm:text-5xl text-white mb-4">ENQUIRY FORM</h2>
          <p className="text-white/70 max-w-lg mx-auto text-sm leading-relaxed">
            Have questions about admissions, programs, fees or the app? We'd love to hear from you!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* Left — Contact info + image */}
          <div className="flex-1 space-y-5">
            {/* Image */}
            <div className="flex justify-center lg:justify-start mb-2">
              <div className="relative">
                <div className="absolute inset-0 scale-110 rounded-full bg-white/20 blur-2xl pointer-events-none" />
                <img
                  src={enquiryData.image}
                  alt="Friendly staff ready to help"
                  className="relative w-48 sm:w-56 lg:w-64 animate-float drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Contact cards */}
            {enquiryData.contactInfo.map((info, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-xl flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-0.5">{info.label}</p>
                  {(info.value && (info.value.includes('@') || info.value.startsWith('+'))) ? (
                    <a href={info.value.includes('@') ? `mailto:${info.value}` : `tel:${info.value.replace(/\s/g, '')}`} className="text-white font-semibold text-sm hover:text-[#F5C518] transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white font-semibold text-sm leading-relaxed">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social row */}
            <div className="pt-2">
              <p className="text-white/50 text-xs font-semibold uppercase mb-3 tracking-wider">Follow Us</p>
              <div className="flex gap-3">
                {enquiryData.socials.map((s) => (
                  <a key={s.label} href={s.link} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className={`w-11 h-11 ${s.color} rounded-full flex items-center justify-center text-white font-bold text-sm hover:scale-110 transition-transform shadow-md`}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="flex-1 w-full max-w-lg">
            <div className="relative rounded-5xl overflow-hidden border border-white/20 shadow-2xl backdrop-blur-md bg-white/10">
              {/* Top stripe */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#F5C518] via-yellow-300 to-white" />

              <div className="p-8 sm:p-10">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="text-7xl mb-4 animate-bounce-slow">✅</div>
                    <h3 className="font-fredoka text-3xl text-white mb-2">Message Sent!</h3>
                    <p className="text-white/70 text-sm mb-6 leading-relaxed">
                      Thank you for reaching out! We'll get back to you shortly.
                    </p>
                    <div className="flex gap-3 justify-center flex-wrap">
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                        className="bg-white text-primary font-bold text-sm px-6 py-3 rounded-full hover:scale-105 transition-all"
                      >
                        Send Another
                      </button>
                      <a href="tel:+919787751430"
                        className="bg-[#F5C518] text-gray-900 font-bold text-sm px-6 py-3 rounded-full hover:bg-yellow-400 transition-all">
                        📞 Call Now
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h3 className="font-fredoka text-2xl text-white">Send Us a Message</h3>
                      <p className="text-white/50 text-xs mt-1">We respond within a few hours ⚡</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-white/60 mb-1.5 uppercase tracking-wide">Your Name *</label>
                        <input type="text" value={form.name}
                          onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                          onChange={e => handleChange('name', e.target.value)}
                          placeholder="Full name"
                          className={inputClass('name')} />
                        {errors.name && <p className="text-red-300 text-xs mt-1">⚠ {errors.name}</p>}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-white/60 mb-1.5 uppercase tracking-wide">Email *</label>
                          <input type="email" value={form.email}
                            onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                            onChange={e => handleChange('email', e.target.value)}
                            placeholder="your@email.com"
                            className={inputClass('email')} />
                          {errors.email && <p className="text-red-300 text-xs mt-1">⚠ {errors.email}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-white/60 mb-1.5 uppercase tracking-wide">Phone *</label>
                          <input type="tel" value={form.phone}
                            onFocus={() => setFocused('phone')} onBlur={() => setFocused('')}
                            onChange={e => handleChange('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                            placeholder="10-digit mobile"
                            className={inputClass('phone')} />
                          {errors.phone && <p className="text-red-300 text-xs mt-1">⚠ {errors.phone}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-white/60 mb-1.5 uppercase tracking-wide">Subject</label>
                        <input type="text" value={form.subject}
                          onFocus={() => setFocused('subject')} onBlur={() => setFocused('')}
                          onChange={e => handleChange('subject', e.target.value)}
                          placeholder="Admissions / Fees / Programs..."
                          className={inputClass('subject')} />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-white/60 mb-1.5 uppercase tracking-wide">Message *</label>
                        <textarea value={form.message}
                          onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                          onChange={e => handleChange('message', e.target.value)}
                          placeholder="Write your message here..."
                          rows={4}
                          className={`${inputClass('message')} resize-none`} />
                        {errors.message && <p className="text-red-300 text-xs mt-1">⚠ {errors.message}</p>}
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className={`w-full bg-[#F5C518] text-gray-900 font-extrabold text-sm py-4 rounded-2xl shadow-yellow hover:bg-yellow-400 hover:scale-[1.02] transition-all duration-200 tracking-wide ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {submitting ? '🔄 Sending...' : '✉️ Send Message Now'}
                      </button>
                      <p className="text-center text-white/40 text-xs">
                        🔒 Your data is safe. We'll never share your information.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
