import { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { Send, Phone, Mail, MapPin, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

const staticGrades = ['Playschool', 'Pre-KG', 'Daycare'];

const staticSteps = [
  { step: '01', icon: '📋', title: 'Fill the Form', desc: 'Quick online inquiry — takes just 2 minutes.' },
  { step: '02', icon: '📞', title: 'We Call You', desc: 'Our team calls within 24 hours to guide you.' },
  { step: '03', icon: '🏫', title: 'Visit & Trial', desc: 'Enjoy a 2-day free trial at our school.' },
  { step: '04', icon: '🎒', title: 'Get Enrolled', desc: 'Complete admission and your child is ready!' },
];

const staticInfo = [
  { icon: <MapPin className="w-4 h-4" />, text: '37/2 Vinayaga Residency, Chithode, Erode' },
  { icon: <Phone className="w-4 h-4" />, text: '+91 97877 51430' },
  { icon: <Mail className="w-4 h-4" />, text: 'chithodehappykids@gmail.com' },
  { icon: <Clock className="w-4 h-4" />, text: 'Mon–Sat: 8 AM – 5 PM' },
];

export default function Admission() {
  const { content } = useContent();
  const admission = content?.admission || {
    steps: staticSteps,
    grades: staticGrades,
    image: '/admission_img.png',
    info: staticInfo
  };
  
  const steps = admission.steps || staticSteps;
  const grades = admission.grades || staticGrades;
  const info = admission.info || staticInfo;
  const image = admission.image || '/admission_img.png';

  const [form, setForm] = useState({ name: '', parent: '', phone: '', email: '', grade: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Student name is required';
    if (!form.parent.trim()) e.parent = 'Parent name is required';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone)) e.phone = 'Valid 10-digit number required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.grade) e.grade = 'Please select a program';
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
          name: form.parent,
          studentName: form.name,
          phone: form.phone,
          email: form.email,
          program: form.grade,
          subject: 'Admission Inquiry',
          message: form.message
        })
      });

      if (response.ok) {
        setErrors({});
        setSubmitted(true);
      } else {
        throw new Error('Failed to submit');
      }
    } catch (err) {
      console.error('Submission error:', err);
      alert('Failed to submit. Please try again later.');
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
      ? 'border-[#E31C78] shadow-[0_0_0_4px_rgba(227,28,120,0.1)] text-gray-800'
      : 'border-slate-100 text-gray-700 hover:border-slate-200'}`;

  return (
    <section id="admission" className="py-24 bg-[#FFF9FB] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#F5C518]/10 to-transparent rounded-full blur-3xl -ml-64 -mb-64" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-primary font-black text-[10px] uppercase tracking-widest">Admissions Open 2026</span>
          </div>
          <h2 className="font-fredoka text-4xl sm:text-6xl text-slate-800 mb-6 leading-[1.1]">
            Start Your Child's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">Brightest Journey</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Every child is a story waiting to be written. Join Chithode Happykids and let's craft a beautiful future together.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-16 items-start">
          <div className="w-full xl:w-[40%] flex flex-col gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {steps.map((s, i) => (
                <div key={i} className="bg-white/70 backdrop-blur-md rounded-3xl p-6 border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center text-2xl mb-4 shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
                    {s.icon}
                  </div>
                  <h4 className="font-fredoka text-lg text-slate-800 mb-2">{s.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden shadow-2xl">
              <h4 className="font-fredoka text-xl mb-6 relative z-10 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                Get in Touch Faster
              </h4>
              <div className="space-y-5 relative z-10">
                {info.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <p className="text-sm font-medium leading-relaxed opacity-90">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[60%] relative">
            <div className="relative bg-white pt-12 pb-12 px-6 sm:px-12 rounded-[2rem] shadow-card-lg border border-slate-100 overflow-hidden">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-5xl">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="font-fredoka text-4xl text-slate-800 mb-4">You're All Set!</h3>
                  <p className="text-slate-500 text-base mb-10 max-w-md mx-auto leading-relaxed">
                    We've received your enquiry for <strong className="text-slate-800 font-bold">{form.name}</strong>. 
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', parent: '', phone: '', email: '', grade: '', message: '' }); }}
                      className="bg-slate-900 text-white font-bold text-sm px-10 py-4 rounded-full shadow-lg"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-10 text-center sm:text-left relative z-10">
                    <h3 className="font-fredoka text-3xl text-slate-800 mb-2 tracking-tight">Admission Enquiry</h3>
                    <p className="text-slate-400 text-sm">Join the family in simple steps. Complete the form below. ✨</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group relative">
                        <input type="text" value={form.name}
                          onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                          onChange={e => handleChange('name', e.target.value)}
                          placeholder="Student Name *"
                          className={inputClass('name')} />
                      </div>
                      <div className="group relative">
                        <input type="text" value={form.parent}
                          onFocus={() => setFocused('parent')} onBlur={() => setFocused('')}
                          onChange={e => handleChange('parent', e.target.value)}
                          placeholder="Parent Name *"
                          className={inputClass('parent')} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group relative">
                        <input type="tel" value={form.phone}
                          onFocus={() => setFocused('phone')} onBlur={() => setFocused('')}
                          onChange={e => handleChange('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                          placeholder="Phone Number *"
                          className={inputClass('phone')} />
                      </div>
                      <div className="group relative">
                        <input type="email" value={form.email}
                          onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                          onChange={e => handleChange('email', e.target.value)}
                          placeholder="Parent's Email *"
                          className={inputClass('email')} />
                      </div>
                    </div>

                    <div className="group relative">
                      <select value={form.grade}
                        onFocus={() => setFocused('grade')} onBlur={() => setFocused('')}
                        onChange={e => handleChange('grade', e.target.value)}
                        className={inputClass('grade')}>
                        <option value="">Select Applying Program *</option>
                        {grades.map(g => <option key={g} value={g}>{g}</option>)}
                      </select>
                    </div>

                    <div className="group relative">
                      <textarea value={form.message}
                        onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                        onChange={e => handleChange('message', e.target.value)}
                        placeholder="Any special requirements? (Optional)"
                        rows={3}
                        className={`${inputClass('message')} resize-none`} />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-slate-900 group hover:bg-slate-800 text-white font-black text-xs uppercase tracking-[0.2em] py-5 rounded-2xl shadow-xl transition-all"
                    >
                      SUBMIT ENQUIRY NOW
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
