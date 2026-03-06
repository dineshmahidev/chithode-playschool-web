import { useEffect, useState } from 'react';

const slides = [
  {
    eyebrow: 'LET THE LEARNING BEGIN',
    title: 'LET THE\nLEARNING\nBEGIN',
    desc: 'Explore various programs and complete fun activities to unlock achievements. Learn with friends and grow together in a nurturing environment.',
    cta: 'EXPLORE NOW',
    image: '/hero_slide1.png',
    imageAlt: 'Kids holding books and light bulb — Let the Learning Begin',
  },
  {
    eyebrow: 'WHERE CURIOSITY MEETS FUN',
    title: 'WHERE\nCURIOSITY\nMEETS FUN',
    desc: 'Our unique curriculum blends play and education to spark creativity, critical thinking, and a lifelong love of learning.',
    cta: 'DISCOVER MORE',
    image: '/hero_slide2.png',
    imageAlt: 'Curious kids exploring with magnifying glass and creatures',
  },
  {
    eyebrow: 'GROW TOGETHER EVERY DAY',
    title: 'GROW\nTOGETHER\nEVERY DAY',
    desc: 'Join our vibrant community of learners. Programs designed to help every child thrive academically, socially, and creatively.',
    cta: 'JOIN US TODAY',
    image: '/hero_slide3.png',
    imageAlt: 'Happy kids celebrating together with friendly creature mascot',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{ background: 'linear-gradient(135deg, #E31C78 0%, #c4156a 60%, #d91870 100%)' }}
    >
      {/* Smooth crossfade keyframes — text slides up, image crossfades */}
      <style>{`
        @keyframes heroTextIn {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroImgIn {
          from { opacity: 0; transform: scale(0.93) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .hero-text-enter {
          animation: heroTextIn 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .hero-img-enter {
          animation: heroImgIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>

      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-hero-dots opacity-30" />
        <div className="absolute top-16 right-[22%] text-5xl opacity-70 animate-float">☁️</div>
        <div className="absolute top-28 right-[10%] text-4xl opacity-50 animate-float-delay">☁️</div>
        <div className="absolute top-24 left-[40%] text-3xl opacity-60 animate-spin-slow">🪐</div>
        <div className="absolute top-16 left-[55%] text-2xl animate-bounce-slow" style={{ color: '#F5C518' }}>✦</div>
        <div className="absolute bottom-32 left-[10%] text-white/20 text-5xl">✦</div>
        <div className="absolute top-40 right-[35%] text-white/20 text-3xl">✦</div>
        <div className="absolute bottom-20 right-16 w-20 h-20 rounded-full border border-white/15 animate-spin-slow" />
        <div className="absolute top-48 left-16 w-14 h-14 rounded-full border border-white/15 animate-spin-slow" />
        <div className="absolute top-1/2 left-[30%] w-8 h-8 rounded-full border border-white/10" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center w-full gap-4">

          {/* Text block — key forces remount → triggers fresh heroTextIn animation */}
          <div key={`text-${current}`} className="flex-1 text-left hero-text-enter">
            <p className="text-white/70 font-nunito font-semibold tracking-[0.25em] text-xs sm:text-sm uppercase mb-3">
              {slide.eyebrow}
            </p>
            <h1 className="font-fredoka text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6 whitespace-pre-line drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-white/85 text-sm sm:text-base max-w-md leading-relaxed mb-10 font-nunito">
              {slide.desc}
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="#programs"
                className="bg-[#F5C518] text-gray-900 font-extrabold text-sm px-8 py-4 rounded-full shadow-yellow hover:scale-105 hover:bg-yellow-400 transition-all duration-200 uppercase tracking-wide"
              >
                {slide.cta}
              </a>
              <a
                href="#about"
                className="text-white font-semibold text-sm flex items-center gap-2 hover:gap-4 transition-all duration-200"
              >
                <span className="w-8 h-8 rounded-full border-2 border-white/50 flex items-center justify-center text-xs">▶</span>
                Watch Video
              </a>
            </div>
          </div>

          {/* Image block — key forces remount → triggers fresh heroImgIn animation */}
          <div className="flex-1 flex justify-center lg:justify-end relative -mr-6 lg:-mr-10">
            <div className="relative">
              {/* Soft glow behind image */}
              <div className="absolute inset-0 scale-110 rounded-full bg-white/10 blur-3xl" />

              <img
                key={`img-${current}`}
                src={slide.image}
                alt={slide.imageAlt}
                className="relative z-10 w-72 sm:w-[22rem] lg:w-[30rem] xl:w-[560px] drop-shadow-2xl animate-float hero-img-enter"
              />

              {/* Floating rating badge — links to Google Reviews */}
              <a
                href="https://share.google/C1yDBZ8hiOvg8ID9e"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 -left-4 bg-white rounded-2xl px-4 py-2 shadow-card flex items-center gap-2 animate-bounce-slow z-20 hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span className="text-yellow-400 text-lg">⭐</span>
                <div>
                  <p className="font-extrabold text-gray-800 text-sm leading-none">4.9 Rating</p>
                  <p className="text-gray-400 text-xs">See Google Reviews</p>
                </div>
              </a>

              {/* Floating year tag */}
              <div className="absolute bottom-8 -right-4 bg-[#F5C518] rounded-2xl px-4 py-2 shadow-yellow z-20">
                <p className="font-extrabold text-gray-900 text-xs">🎓 Best School 2026</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Slide indicator dots */}
      <div className="relative z-10 flex justify-center gap-2 pb-8">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-500 rounded-full ${
              i === current
                ? 'w-7 h-2.5 bg-[#F5C518]'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20" fill="white">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
