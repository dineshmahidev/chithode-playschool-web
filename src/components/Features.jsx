import { useContent } from '../context/ContentContext';

const staticFeatures = [
  {
    icon: '📹',
    title: 'Live Monitoring',
    desc: 'Watch your child live from anywhere in the world. Real-time camera access lets parents see exactly what their kids are doing inside the playschool at any time.',
    badge: 'LIVE',
  },
  {
    icon: '📱',
    title: 'Digital Mobile App',
    desc: 'Our dedicated parent app keeps you connected 24/7. Access all school information, updates, reports and live feeds from the comfort of your smartphone.',
    badge: null,
  },
  {
    icon: '🏃',
    title: 'In & Out Tracking',
    desc: 'Get instant alerts the moment your child arrives or leaves school. Real-time check-in and check-out time stamps sent directly to your phone.',
    badge: 'REAL-TIME',
  },
  {
    icon: '🔔',
    title: 'Smart Notifications',
    desc: 'Never miss a moment. Receive instant push notifications for attendance, activity updates, meal times, nap times and important school announcements.',
    badge: null,
  },
  {
    icon: '📊',
    title: 'Activity Reports',
    desc: 'Detailed daily activity reports covering learning progress, meals, play sessions and behavior — all delivered to your app every evening.',
    badge: null,
  },
  {
    icon: '🌐',
    title: 'Remote Access',
    desc: 'Whether you are at work, traveling or at home — stay connected to your child\'s day from any device, anywhere in the world, at any time.',
    badge: null,
  },
  {
    icon: '🏫',
    title: 'Modern Infrastructure',
    desc: 'State-of-the-art classrooms, activity halls and safe play areas designed for 21st century early childhood learning.',
    badge: null,
  },
  {
    icon: '👩‍🏫',
    title: 'Expert Educators',
    desc: 'Highly qualified, caring teachers who bring passion and expertise to nurture every child\'s unique potential every single day.',
    badge: null,
  },
];

export default function Features() {
  const { content } = useContent();
  
  // Support both old array structure and new object structure
  const featureData = content?.features?.items 
    ? content.features 
    : { items: Array.isArray(content?.features) ? content.features : staticFeatures };

  const features = featureData.items || staticFeatures;
  const header = {
    eyebrow: featureData.eyebrow || 'WHY CHOOSE US',
    title: featureData.title || 'FEATURES OF CHITHODE HAPPYKIDS',
    desc: featureData.desc || "We believe every parent deserves peace of mind. Here's what makes Chithode Happykids the smarter, safer choice for your child's early education."
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-dots opacity-[0.04]" />
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[#F5C518]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-[0.2em] text-xs uppercase mb-3">{header.eyebrow}</p>
          <h2 className="font-fredoka text-4xl sm:text-5xl text-gray-800 mb-4 uppercase">
            {header.title}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {header.desc}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => {
            // Predefined color themes
            const themes = {
              pink: { bg: 'from-primary/10 to-primary/20', hover: 'group-hover:from-primary group-hover:to-primary-dark' },
              blue: { bg: 'from-blue-50 to-blue-100', hover: 'group-hover:from-blue-500 group-hover:to-blue-600' },
              orange: { bg: 'from-orange-50 to-orange-100', hover: 'group-hover:from-orange-500 group-hover:to-orange-600' },
              purple: { bg: 'from-purple-50 to-purple-100', hover: 'group-hover:from-purple-500 group-hover:to-purple-600' },
              emerald: { bg: 'from-emerald-50 to-emerald-100', hover: 'group-hover:from-emerald-500 group-hover:to-emerald-600' }
            };
            const theme = themes[f.color] || themes.pink;

            return (
              <div
                key={i}
                className="group bg-white rounded-4xl p-7 border border-gray-100 shadow-sm hover:shadow-card-lg hover:-translate-y-2 transition-all duration-300 text-center cursor-default relative overflow-hidden"
              >
                {/* Live / Real-time badge */}
                {f.badge && (
                  <span className="absolute top-4 right-4 bg-primary text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full tracking-wider flex items-center gap-1">
                    {f.badge === 'LIVE' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse inline-block" />
                    )}
                    {f.badge}
                  </span>
                )}
                {/* Icon */}
                <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${theme.bg} flex items-center justify-center text-3xl mx-auto mb-5 group-hover:scale-110 group-hover:bg-gradient-to-br ${theme.hover} transition-all duration-300 overflow-hidden`}>
                  {(f.icon && (f.icon.startsWith('http') || f.icon.startsWith('data:image') || f.icon.includes('/'))) ? (
                    <img src={f.icon} alt={f.title} className="w-full h-full object-cover" />
                  ) : (
                    <span className="group-hover:scale-90 group-hover:text-white transition-all duration-300 inline-block">{f.icon}</span>
                  )}
                </div>
                <h3 className="font-fredoka text-base text-gray-800 mb-3 leading-snug">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
