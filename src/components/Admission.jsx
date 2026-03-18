import { useState } from 'react';
import { useContent } from '../context/ContentContext';

const staticGrades = ['Playschool', 'Pre-KG', 'Daycare'];

const staticSteps = [
  { step: '01', icon: '📋', title: 'Fill the Form', desc: 'Quick online inquiry — takes just 2 minutes.' },
  { step: '02', icon: '📞', title: 'We Call You', desc: 'Our team calls within 24 hours to guide you.' },
  { step: '03', icon: '🏫', title: 'Visit & Trial', desc: 'Enjoy a 2-day free trial at our school.' },
  { step: '04', icon: '🎒', title: 'Get Enrolled', desc: 'Complete admission and your child is ready!' },
];

const staticInfo = [
  { icon: '📍', text: '37/2 Vinayaga Residency, Chithode, Erode' },
  { icon: '📞', text: '+91 97877 51430' },
  { icon: '📧', text: 'chithodehappykids@gmail.com' },
  { icon: '🕐', text: 'Mon–Sat: 8 AM – 5 PM' },
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
      // For now, we update the enquiries list in the site content
      // Real Apps might have a separate submissions table
      const currentEnquiries = content?.enquiry?.submissions || [];
      const newSubmission = {
        id: Date.now(),
        name: form.parent, // Parent name
        studentName: form.name,
        phone: form.phone,
        email: form.email,
        program: form.grade,
        date: new Date().toISOString().split('T')[0],
        message: form.message,
        status: 'New',
        remarks: ''
      };

      const updatedEnquiry = {
        ...content.enquiry,
        submissions: [newSubmission, ...currentEnquiries]
      };

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
    `w-full rounded-2xl px-4 py-3.5 text-sm font-medium outline-none border-2 transition-all duration-200 bg-white
    ${errors[field]
      ? 'border-red-400 text-red-700 bg-red-50'
      : focused === field
      ? 'border-primary shadow-[0_0_0_4px_rgba(227,28,120,0.1)] text-gray-800'
      : 'border-gray-200 text-gray-700 hover:border-gray-300'}`;

  return (
    <section id="admission" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#F5C518]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary font-semibold tracking-[0.2em] text-xs uppercase mb-3">ADMISSIONS OPEN 2026</p>
          <h2 className="font-fredoka text-4xl sm:text-5xl text-gray-800 mb-4 leading-tight">
            BEGIN YOUR<br />CHILD'S JOURNEY
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            Join the Chithode Happykids family — where every child is celebrated, nurtured, and inspired to shine.
          </p>
        </div>

        {/* Steps row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {steps.map((s, i) => (
            <div key={i} className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center text-2xl mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              <span className="text-primary font-extrabold text-xs">STEP {s.step}</span>
              <h4 className="font-fredoka text-sm text-gray-800 mt-1 mb-1">{s.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Main split layout */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">

          {/* Left — Image + info */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <div className="relative mb-8">
              <div className="absolute inset-0 scale-110 rounded-full bg-primary/10 blur-2xl pointer-events-none" />
              <img
                src={image}
                alt="Parent and child joining school"
                loading="lazy"
                className="relative w-56 sm:w-64 lg:w-72 animate-float drop-shadow-2xl"
              />
            </div>

            {/* Info pills */}
            <div className="space-y-3 w-full max-w-sm">
              {info.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-100">
                  <span className="text-lg">{item.icon}</span>
                  <p className="text-gray-600 text-xs leading-relaxed font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form card */}
          <div className="flex-1 w-full max-w-lg">
            <div className="relative bg-white rounded-5xl shadow-card-lg border border-gray-100 overflow-hidden">
              {/* Colour top stripe */}
              <div className="h-2 w-full bg-gradient-to-r from-primary via-pink-400 to-[#F5C518]" />

              <div className="p-8 sm:p-10">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="text-7xl mb-4 animate-bounce-slow">🎉</div>
                    <h3 className="font-fredoka text-3xl text-gray-800 mb-2">Application Received!</h3>
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                      Thank you for choosing Chithode Happykids! Our team will contact you within 24 hours.
                    </p>
                    <div className="flex gap-3 justify-center flex-wrap">
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: '', parent: '', phone: '', email: '', grade: '', message: '' }); }}
                        className="bg-primary text-white font-bold text-sm px-6 py-3 rounded-full shadow-card hover:bg-primary-dark transition-all"
                      >
                        Submit Another
                      </button>
                      <a href="tel:+919787751430" className="bg-[#F5C518] text-gray-900 font-bold text-sm px-6 py-3 rounded-full hover:bg-yellow-400 transition-all">
                        📞 Call Now
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h3 className="font-fredoka text-2xl text-gray-800">Admission Inquiry</h3>
                      <p className="text-gray-400 text-xs mt-1">Fill in the details below — we'll respond within 24 hours ✨</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Student Name *</label>
                          <input type="text" value={form.name}
                            onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                            onChange={e => handleChange('name', e.target.value)}
                            placeholder="Child's full name"
                            className={inputClass('name')} />
                          {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1">⚠ {errors.name}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Parent Name *</label>
                          <input type="text" value={form.parent}
                            onFocus={() => setFocused('parent')} onBlur={() => setFocused('')}
                            onChange={e => handleChange('parent', e.target.value)}
                            placeholder="Parent's full name"
                            className={inputClass('parent')} />
                          {errors.parent && <p className="text-red-500 text-xs mt-1 flex items-center gap-1">⚠ {errors.parent}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Phone *</label>
                          <input type="tel" value={form.phone}
                            onFocus={() => setFocused('phone')} onBlur={() => setFocused('')}
                            onChange={e => handleChange('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                            placeholder="10-digit mobile"
                            className={inputClass('phone')} />
                          {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1">⚠ {errors.phone}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Email *</label>
                          <input type="email" value={form.email}
                            onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                            onChange={e => handleChange('email', e.target.value)}
                            placeholder="your@email.com"
                            className={inputClass('email')} />
                          {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1">⚠ {errors.email}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Applying For *</label>
                        <select value={form.grade}
                          onFocus={() => setFocused('grade')} onBlur={() => setFocused('')}
                          onChange={e => handleChange('grade', e.target.value)}
                          className={inputClass('grade')}>
                          <option value="">Select Program</option>
                          {grades.map(g => <option key={g} value={g}>{g}</option>)}
                        </select>
                        {errors.grade && <p className="text-red-500 text-xs mt-1 flex items-center gap-1">⚠ {errors.grade}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Message (Optional)</label>
                        <textarea value={form.message}
                          onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                          onChange={e => handleChange('message', e.target.value)}
                          placeholder="Any questions or requirements..."
                          rows={3}
                          className={`${inputClass('message')} resize-none`} />
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className={`w-full bg-gradient-to-r from-primary to-pink-500 text-white font-extrabold text-sm py-4 rounded-2xl shadow-card hover:shadow-lg hover:scale-[1.02] transition-all duration-200 tracking-wide ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {submitting ? '🔄 Submitting...' : '🚀 Submit Admission Inquiry'}
                      </button>
                      <p className="text-center text-gray-400 text-xs">
                        🔒 Your information is safe with us. No spam, ever.
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
