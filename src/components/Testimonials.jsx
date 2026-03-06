const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Parent of Aarav, Grade 2',
    avatar: '👩',
    rating: 5,
    text: 'Chithode Happykids has transformed my son\'s attitude towards learning. He now wakes up excited to go to school! The teachers are incredibly dedicated and nurturing.',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Parent of Ananya, Grade 4',
    avatar: '👨',
    rating: 5,
    text: 'The curriculum here is outstanding. My daughter\'s creativity has skyrocketed since joining Chithode Happykids. The art and STEM programs are truly world-class.',
  },
  {
    id: 3,
    name: 'Sunita Patel',
    role: 'Parent of Rohan, Grade 1',
    avatar: '👩',
    rating: 5,
    text: 'As a working parent, I was so worried about my child\'s development. Chithode Happykids has been a blessing — the 2-day trial convinced me immediately!',
  },
  {
    id: 4,
    name: 'Amit Verma',
    role: 'Parent of Diya, Grade 3',
    avatar: '👨',
    rating: 5,
    text: 'The sports and extracurricular programs at Chithode Happykids are exceptional. My daughter has developed confidence, teamwork, and a love for staying active.',
  },
  {
    id: 5,
    name: 'Meena Reddy',
    role: 'Parent of Kiran, Grade 5',
    avatar: '👩',
    rating: 5,
    text: 'Chithode Happykids\'s teachers truly care about each child. The personal attention my son receives has helped him overcome his learning challenges with ease.',
  },
  {
    id: 6,
    name: 'Vivek Singh',
    role: 'Parent of Pooja, Grade 2',
    avatar: '👨',
    rating: 5,
    text: 'We have been with Chithode Happykids for 3 years now. The consistent quality of education and the genuine warmth of the staff keeps us coming back every year.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <style>{`
        .testimonial-track::-webkit-scrollbar { display: none; }
        .testimonial-track { -ms-overflow-style: none; scrollbar-width: none; }
        .testimonial-card { width: 100%; flex: 0 0 100%; }
        @media (min-width: 768px) {
          .testimonial-card { width: calc(33.333% - 14px); flex: 0 0 calc(33.333% - 14px); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold tracking-[0.2em] text-xs uppercase mb-3">HAPPY FAMILIES</p>
          <h2 className="font-fredoka text-4xl sm:text-5xl text-gray-800 mb-4">WHAT PARENTS SAY</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Don't just take our word for it — hear from the families who have experienced the Chithode Happykids difference firsthand.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">⭐</span>
              ))}
            </div>
            <span className="font-bold text-gray-700">4.9</span>
            <span className="text-gray-400 text-sm">from 200+ reviews</span>
          </div>
        </div>

        {/* Horizontal scroll — 1 card on mobile, 3 on desktop */}
        <div
          className="testimonial-track flex gap-5 overflow-x-auto scroll-smooth pb-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="testimonial-card bg-white rounded-4xl p-7 border border-gray-100 shadow-sm hover:shadow-card-lg transition-all duration-300 group relative overflow-hidden flex-shrink-0"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-[#F5C518] rounded-t-4xl" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">⭐</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-2xl flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-extrabold text-gray-800 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
                <div className="ml-auto w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-lg group-hover:bg-primary group-hover:text-white transition-colors">
                  ❝
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile swipe hint */}
        <p className="text-center text-gray-400 text-xs mt-3 md:hidden">← Swipe to see more →</p>
      </div>
    </section>
  );
}
