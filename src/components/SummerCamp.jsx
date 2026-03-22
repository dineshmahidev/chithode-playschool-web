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
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-nunito flex flex-col bg-white">
      <Navbar />
      
      {/* Premium Summer Camp Hero (No Torn Elements) */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden min-h-[750px] flex items-center bg-[#FFFBEB]">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-pink-400/5 to-white" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-200/20 rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-200/20 rounded-full blur-[100px] -ml-24 -mb-24 animate-float-slow" />
        
        {/* Summer Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ 
            backgroundImage: "url('/summer_pattern_clear.png')",
            backgroundSize: '400px'
          }}
        />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Content */}
          <div className="text-left space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 text-orange-600 text-[11px] font-black uppercase tracking-[0.2em] shadow-sm border border-orange-200/50">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-ping" />
              {hero.eyebrow}
            </div>
            
            <h1 className="font-fredoka text-6xl md:text-8xl text-slate-900 leading-[1.05] tracking-tight">
              {hero.title.split('\n').map((line, i) => (
                <span key={i} className="block">
                  {line}
                  {i === 0 && <span className="text-orange-500 text-glow-orange ml-1">.</span>}
                </span>
              ))}
            </h1>

            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-xl font-medium">
              {hero.desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex-1 bg-white p-6 rounded-[2.5rem] shadow-xl shadow-orange-100/40 border border-orange-50 relative group hover:-translate-y-1 transition-all">
                <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest mb-1">Starts From</p>
                <p className="text-2xl font-fredoka text-slate-800">{hero.date}</p>
                <div className="absolute top-4 right-6 text-2xl group-hover:rotate-12 transition-transform">📅</div>
              </div>
              <div className="flex-1 bg-white p-6 rounded-[2.5rem] shadow-xl shadow-pink-100/40 border border-pink-50 relative group hover:-translate-y-1 transition-all">
                <p className="text-[10px] font-black text-pink-400 uppercase tracking-widest mb-1">Ages Group</p>
                <p className="text-2xl font-fredoka text-slate-800">{hero.age}</p>
                <div className="absolute top-4 right-6 text-2xl group-hover:scale-110 transition-transform">🎒</div>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('enquiry').scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-5 bg-slate-900 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-orange-500 transition-all shadow-2xl"
              >
                Register Now →
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block animate-in fade-in zoom-in duration-1000 delay-200">
             <div className="relative w-full aspect-square max-w-[550px] mx-auto">
                <div className="absolute inset-0 border-2 border-dashed border-orange-200 rounded-full animate-spin-slow" />
                <div className="absolute inset-8 rounded-[60px] bg-white shadow-2xl overflow-hidden group flex items-center justify-center">
                  <img src="/summer_sun_3d.png" alt="Mascot" className="w-[70%] h-auto drop-shadow-2xl transition-transform duration-700 group-hover:scale-110" />
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-28 h-28 bg-white p-6 rounded-3xl shadow-xl animate-float border border-slate-50 flex items-center justify-center text-4xl">🎨</div>
                <div className="absolute top-1/2 -left-10 w-24 h-24 bg-white p-5 rounded-3xl shadow-xl animate-float-slow border border-slate-50 flex items-center justify-center text-4xl">⚽</div>
                <div className="absolute -bottom-10 right-20 w-32 h-32 bg-white p-7 rounded-3xl shadow-xl animate-ringing border border-slate-50 flex items-center justify-center text-5xl">🧒</div>
             </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-fredoka text-4xl text-gray-800 mb-4 uppercase">Camp Activities</h2>
            <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((act, idx) => (
              <div key={idx} className="rounded-[2.5rem] overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
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
            <h2 className="font-fredoka text-4xl text-gray-800 mb-8 leading-tight uppercase">
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

      <div id="enquiry">
         <Enquiry />
      </div>
      <Footer />
    </div>
  );
}
