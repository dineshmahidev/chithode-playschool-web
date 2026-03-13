import { useContent } from '../context/ContentContext';

const staticFeatures = [
  {
    icon: '⭐',
    title: 'ALL PROGRAMS, ALL SEASON',
    desc: 'Most importantly, our renowned programs are always accessible.',
  },
  {
    icon: '📺',
    title: 'IT LOOKS GREAT ON THE BIG SCREEN',
    desc: 'Explore our curriculum on any device, anytime.',
  },
  {
    icon: '🕐',
    title: 'ANY TIME IS A GOOD TIME TO LEARN',
    desc: 'Flexible schedules designed around your child\'s needs.',
  },
];

export default function About() {
  const { content } = useContent();
  const about = content?.about || {
    trialTitle: '2 Days Free Trial',
    trialDesc: 'Learning together is a great way for kids to bond with their parents. Play and learn every single day in a positive way.',
    mascotImage: '/mascot.png',
    features: staticFeatures
  };
  const features = about.features || staticFeatures;

  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-[#F5C518]/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-5xl shadow-card-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left – Mascot */}
            <div
              className="lg:w-[280px] flex-shrink-0 relative flex items-end justify-center min-h-[260px] lg:min-h-0"
              style={{ background: 'linear-gradient(160deg, #fce4ec 0%, #f8bbd0 100%)' }}
            >
              <img
                src={about.mascotImage || "/mascot.png"}
                alt="Mascot"
                className="w-48 lg:w-56 relative z-10 drop-shadow-xl animate-float"
              />
              {/* planet deco */}
              <span className="absolute top-6 left-6 text-3xl opacity-40 animate-spin-slow">🪐</span>
              <span className="absolute top-6 right-6 text-xl opacity-50">☁️</span>
            </div>

            {/* Center – Trial info */}
            <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center border-r border-gray-100">
              <div className="flex items-center gap-1 mb-3">
                <span className="text-yellow-400 text-lg">⭐</span>
                <span className="font-bold text-gray-700 text-sm">4.9</span>
              </div>
              <h2 className="font-fredoka text-3xl sm:text-4xl text-gray-800 leading-tight mb-4 whitespace-pre-line">
                {about.trialTitle || '2 Days Free Trial'}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs">
                {about.trialDesc || 'Learning together is a great way for kids to bond with their parents. Play and learn every single day in a positive way.'}
              </p>
              <a
                href="#admission"
                className="inline-block bg-primary text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-card hover:bg-primary-dark hover:scale-105 transition-all duration-200 self-start"
              >
                ENROLL FREE
              </a>
            </div>

            {/* Right – Features */}
            <div
              className="lg:w-[320px] flex-shrink-0 p-8 flex flex-col justify-center gap-5"
              style={{ background: 'linear-gradient(160deg, #E31C78 0%, #c4156a 100%)' }}
            >
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-xl flex-shrink-0 shadow-sm overflow-hidden">
                    {(f.icon && (f.icon.startsWith('http') || f.icon.startsWith('data:image') || f.icon.includes('/'))) ? (
                      <img src={f.icon} alt={f.title} className="w-full h-full object-cover" />
                    ) : (
                      f.icon
                    )}
                  </div>
                  <div>
                    <h4 className="text-white font-extrabold text-xs uppercase leading-tight mb-1">{f.title}</h4>
                    <p className="text-white/70 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
              <button className="mt-2 w-fit border-2 border-white text-white font-bold text-xs px-6 py-2.5 rounded-full hover:bg-white hover:text-primary transition-all duration-200">
                + MORE PROGRAMS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
