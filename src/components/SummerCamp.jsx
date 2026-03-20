import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Enquiry from './Enquiry';
import { useContent } from '../context/ContentContext';

const staticActivities = [
  { image: '/summer_camp_arts.png', title: 'Arts & Crafts', desc: 'Unleash creativity with painting, clay modeling, and DIY projects.' },
  { image: '/summer_camp_dance.png', title: 'Dance & Music', desc: 'Fun dance sessions and musical games to keep kids active and happy.' },
  { image: '/summer_camp_yoga.png', title: 'Yoga & Wellness', desc: 'Mindfulness and easy yoga poses designed for young children.' },
  { image: '/summer_camp_science.png', title: 'Science Experiments', desc: 'Cool, safe science magic that sparks curiosity and wonder.' },
  { image: '/summer_camp_games.png', title: 'Outdoor Games', desc: 'Team-building sports and active fun under the summer sun.' },
  { image: '/summer_camp_chef.png', title: 'Junior Chef Skills', desc: 'Fireless cooking and fun fruit-arrangements for little chefs.' },
];

const staticBenefits = [
  'Safe & Secured Environment',
  'Expert Caring Mentors',
  'Healthy Refreshments Provided',
  'Creative Skill Development',
  'Fun-Filled Social Interaction',
  'Completion Certificates',
];

export default function SummerCamp() {
  const { content } = useContent();
  const camp = content?.summerCamp || {
    hero: {
      title: 'SUMMER CAMP 2026',
      eyebrow: 'Hurry Up! Registration Open',
      desc: 'Make your child\'s summer unforgettable with our action-packed camp! From creativity to exploration, we have something for every little adventurer.',
      date: 'April 15, 2026',
      age: '3 - 10 Years'
    },
    activities: staticActivities,
    benefits: {
      title: 'WHY JOIN OUR SUMMER CAMP?',
      items: staticBenefits
    }
  };

  const hero = camp.hero || { 
    title: 'SUMMER CAMP 2026',
    eyebrow: 'Hurry Up! Registration Open',
    desc: 'Make your child\'s summer unforgettable with our action-packed camp!',
    date: 'April 15, 2026',
    age: '3 - 10 Years'
  };
  const activities = camp.activities || staticActivities;
  const benefits = camp.benefits || { title: 'WHY JOIN OUR SUMMER CAMP?', items: staticBenefits };
  
  // SEO Organic Lead Optimization
  useEffect(() => {
    if (camp.seo) {
      document.title = camp.seo.metaTitle || 'Summer Camp 2026 – Chithode Happykids';
      
      // Meta description update
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', camp.seo.metaDesc || '');

      // Keywords update
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', camp.seo.keywords || '');
    }
  }, [camp.seo]);

  return (
    <div className="min-h-screen font-nunito flex flex-col bg-white">
      <Navbar />
      
      {/* Summer Camp Hero */}
      <section className="relative py-32 px-6 overflow-hidden min-h-[500px] flex items-center justify-center summer-pattern-bg border-b border-orange-200">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-pink-500/30 backdrop-blur-[1px]" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10 font-fredoka">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            {hero.eyebrow}
          </span>
          <h1 className="font-fredoka text-5xl sm:text-7xl text-white mb-8 drop-shadow-xl whitespace-pre-line">
            {hero.title}
          </h1>
          <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            {hero.desc}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/90 backdrop-blur-md px-8 py-3 rounded-2xl shadow-xl">
              <p className="text-orange-600 font-black text-sm uppercase">Starts From</p>
              <p className="text-gray-800 font-bold text-xl">{hero.date}</p>
            </div>
            <div className="bg-white/90 backdrop-blur-md px-8 py-3 rounded-2xl shadow-xl">
              <p className="text-pink-600 font-black text-sm uppercase">Ages</p>
              <p className="text-gray-800 font-bold text-xl">{hero.age}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-fredoka text-4xl text-gray-800 mb-4">CAMP ACTIVITIES</h2>
            <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((act, idx) => (
              <div key={idx} className="rounded-[2rem] overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="h-52 overflow-hidden relative">
                  <img src={act.image} alt={act.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="font-fredoka text-xl text-gray-800 mb-4 uppercase tracking-wide group-hover:text-orange-500 transition-colors">
                    {act.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {act.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Benefits */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="font-fredoka text-4xl text-gray-800 mb-6 leading-tight uppercase">
              {benefits.title}
            </h2>
            <ul className="space-y-6">
              {(benefits.items || staticBenefits).map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold mt-1">✓</span>
                  <p className="text-gray-600 font-medium">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 relative">
             <div className="w-full aspect-square rounded-[40px] bg-gradient-to-tr from-orange-100 to-pink-100 flex items-center justify-center p-12 overflow-hidden shadow-card border-8 border-white">
                <img src="/summer_sun_3d.png" alt="Happy 3D Sun Mascot" className="w-full h-full object-contain animate-float drop-shadow-2xl scale-[1.35]" />
                <div className="absolute top-10 right-10 text-4xl animate-bounce-slow">🎨</div>
                <div className="absolute bottom-10 left-10 text-4xl animate-ringing">⚽</div>
             </div>
          </div>
        </div>
      </section>

      <Enquiry />
      <Footer />
    </div>
  );
}
