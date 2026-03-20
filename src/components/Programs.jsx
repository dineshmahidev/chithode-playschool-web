import { useContent } from '../context/ContentContext';

const staticPrograms = [
  {
    id: 1,
    icon: '🧩',
    emoji: '🟧',
    title: 'PLAY BECAUSE YOU WANT TO',
    desc: 'Engaging curriculum designed to ignite curiosity and a love for learning in every child.',
    color: 'from-orange-50 to-orange-100',
    accent: 'bg-orange-500',
    btn: '+',
  },
  {
    id: 2,
    icon: '📚',
    emoji: '🟦',
    title: 'COOL UNDER PRESSURE',
    desc: 'Build resilience and problem-solving skills through exciting, real-world challenges.',
    color: 'from-primary/5 to-primary/10',
    accent: 'bg-primary',
    btn: '+',
    featured: true,
  },
  {
    id: 3,
    icon: '🎁',
    emoji: '🟪',
    title: 'REWARDS & RECOGNITION',
    desc: 'Learning is to empower your child. The future is now — the best way to grow.',
    color: 'from-purple-50 to-purple-100',
    accent: 'bg-purple-500',
    btn: '»',
  },
];

export default function Programs() {
  const { content } = useContent();
  
  // Support both old array structure and new object structure
  const programData = content?.programs?.items 
    ? content.programs 
    : { items: Array.isArray(content?.programs) ? content.programs : staticPrograms };

  const rawItems = programData.items || staticPrograms;
  const header = {
    eyebrow: programData.eyebrow || 'LET THE LEARNING BEGIN',
    title: programData.title || 'MEET OUR LEARNING PROGRAMS',
    desc: programData.desc || "From creative arts to STEM, our programs are thoughtfully crafted to develop every child's unique potential in a fun and supportive environment."
  };

  // Mix dynamic content with static styling
  const programs = rawItems.map((p, i) => ({
    ...staticPrograms[i % 3], // cycle through static styles
    ...p // overwrite with dynamic content
  }));

  return (
    <section id="programs" className="py-24 bg-white relative overflow-hidden">
      {/* Bg decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#F5C518]/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-[0.2em] text-xs uppercase mb-3">
            {header.eyebrow}
          </p>
          <h2 className="font-fredoka text-4xl sm:text-5xl text-gray-800 leading-tight mb-4 uppercase">
            {header.title}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {header.desc}
          </p>
        </div>


        {/* Program Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog) => (
            <div
              key={prog.id}
              className={`relative rounded-4xl p-8 bg-gradient-to-br ${prog.color} hover:shadow-card-lg hover:-translate-y-2 transition-all duration-300 group overflow-hidden border border-white`}
            >
              {prog.featured && (
                <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </span>
              )}
              {/* Icon */}
              <div className="w-20 h-20 rounded-3xl bg-white shadow-md flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                {(prog.icon && (prog.icon.startsWith('http') || prog.icon.startsWith('data:image') || prog.icon.includes('/'))) ? (
                  <img src={prog.icon} alt={prog.title} loading="lazy" className="w-full h-full object-cover" />
                ) : (
                  prog.icon
                )}
              </div>
              <h3 className="font-fredoka text-lg text-gray-800 mb-3 leading-snug">{prog.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">{prog.desc}</p>
              {/* Bottom */}
              <div className="flex items-center justify-between">
                <a href="#admission" className="text-primary font-bold text-sm hover:underline">
                  Learn More →
                </a>
                <button
                  className={`w-10 h-10 ${prog.accent} text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md hover:scale-110 transition-transform`}
                >
                  {prog.btn}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary font-bold text-sm px-8 py-3.5 rounded-full hover:bg-primary hover:text-white transition-all duration-200"
          >
            View All Programs →
          </a>
        </div>
      </div>
    </section>
  );
}
