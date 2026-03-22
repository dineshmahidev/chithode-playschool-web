import { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { Send, Phone, Mail, MapPin, Clock, Instagram, Youtube, Facebook, Sparkles, CheckCircle2 } from 'lucide-react';

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
      { icon: <MapPin className="w-4 h-4" />, label: 'Address', value: '37/2 No 1 Vinayaga Residency, Chithode, Erode' },
      { icon: <Phone className="w-4 h-4" />, label: 'Phone',   value: '+91 97877 51430' },
      { icon: <Mail className="w-4 h-4" />, label: 'Email',   value: 'chithodehappykids@gmail.com' },
      { icon: <Clock className="w-4 h-4" />, label: 'Hours',   value: 'Mon–Sat: 8 AM – 5 PM' },
    ],
    socials: [
      { icon: <Facebook className="w-5 h-5" />, label: 'Facebook',  color: 'bg-[#1877F2]', link: '#' },
      { icon: <Youtube className="w-5 h-5" />, label: 'YouTube',   color: 'bg-[#FF0000]', link: '#' },
      { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]', link: '#' },
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
    `w-full rounded-2xl px-5 py-4 text-sm font-medium outline-none border-2 transition-all duration-300 bg-white/50 backdrop-blur-sm
    ${errors[field]
      ? 'border-red-400 text-red-700 bg-red-50/50'
      : focused === field
      ? 'border-primary shadow-[0_0_0_4px_rgba(227,28,120,0.1)] text-gray-800'
      : 'border-slate-100 text-gray-700 hover:border-slate-200'}`;

  return (
    <section id="contact" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#F5C518]/20 to-transparent rounded-full blur-3xl -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#F5C518] animate-pulse" />
            <span className="text-white font-black text-[10px] uppercase tracking-widest leading-none">Get In Touch</span>
          </div>
          <h2 className="font-fredoka text-4xl sm:text-6xl text-white mb-6 leading-[1.1]">
            General <span className="text-[#F5C518]">Enquiry</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg">
            Have questions about admissions, programs, fees or the app? We'd love to hear from you!
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-16 items-start">
          <div className="w-full xl:w-[40%] flex flex-col gap-8">
            <div className="bg-slate-900 rounded-[2.5rem] p-10 border border-white/10 shadow-2xl relative overflow-hidden group">
                <h3 className="font-fredoka text-2xl text-white mb-8 flex items-center gap-3 relative z-10">
                    <div className="w-2 h-2 bg-[#F5C518] rounded-full animate-ping" />
                    Our Information
                </h3>
                <div className="space-y-8 relative z-10">
                    {enquiryData.contactInfo.map((info, i) => (
                    <div key={i} className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                            {info.icon}
                        </div>
                        <div>
                        <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">{info.label}</p>
                        <p className="text-white font-bold text-lg leading-snug">{info.value}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
          </div>

          <div className="w-full xl:w-[60%] relative">
            <div className="relative bg-white pt-12 pb-12 px-6 sm:px-12 rounded-[2rem] shadow-card-lg border border-white/5 overflow-hidden">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-5xl">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="font-fredoka text-4xl text-slate-800 mb-4">Message Sent!</h3>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                    className="bg-slate-900 text-white font-black text-xs uppercase tracking-[0.2em] px-10 py-5 rounded-2xl shadow-xl hover:bg-slate-800 transition-all"
                  >
                    Send Another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-10 relative z-10">
                    <h3 className="font-fredoka text-3xl text-slate-800 mb-2 tracking-tight">Write to us</h3>
                    <p className="text-slate-400 text-sm">Fill the fields below and we'll reply shortly. ✨</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <input type="text" value={form.name} onChange={e => handleChange('name', e.target.value)} placeholder="Full Name *" className={inputClass('name')} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input type="email" value={form.email} onChange={e => handleChange('email', e.target.value)} placeholder="Email Address *" className={inputClass('email')} />
                      <input type="tel" value={form.phone} onChange={e => handleChange('phone', e.target.value.replace(/\D/g, '').slice(0, 10))} placeholder="Phone Number *" className={inputClass('phone')} />
                    </div>
                    <input type="text" value={form.subject} onChange={e => handleChange('subject', e.target.value)} placeholder="Subject" className={inputClass('subject')} />
                    <textarea value={form.message} onChange={e => handleChange('message', e.target.value)} placeholder="Your message here..." rows={4} className={`${inputClass('message')} resize-none`} />
                    <button type="submit" className="w-full bg-slate-900 text-white font-black text-xs uppercase tracking-[0.2em] py-5 rounded-2xl shadow-xl transition-all">
                      SEND ENQUIRY NOW
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
