import { useState, useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export default function HomePopup() {
  const { content } = useContent();
  const [isOpen, setIsOpen] = useState(false);
  const popupData = content?.homePopup;

  useEffect(() => {
    if (popupData?.enabled) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [popupData?.enabled]);

  // Handle Navbar visibility and Body scroll locking
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('popup-open');
    } else {
      document.body.classList.remove('popup-open');
    }
    return () => document.body.classList.remove('popup-open');
  }, [isOpen]);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen || !popupData) return null;

  // Map colors to classes
  const colorMap = {
    yellow: 'bg-yellow-400 text-slate-900 hover:bg-yellow-500 shadow-yellow-400/20',
    indigo: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-600/20',
    pink: 'bg-[#E31C78] text-white hover:bg-[#c4156a] shadow-pink-500/20',
    orange: 'bg-orange-500 text-white hover:bg-orange-600 shadow-orange-500/20'
  };

  const btnClasses = colorMap[popupData.ctaColor] || colorMap.yellow;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-10">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-xl transition-opacity duration-500"
        onClick={closePopup}
      />

      {/* Popup Container - Horizontal on Desktop, Vertical on Mobile */}
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] sm:max-h-none rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-fade-in-scale border border-white/20">
        
        {/* Close Button */}
        <button 
          onClick={closePopup}
          className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/10 hover:bg-white/25 text-white md:text-slate-400 md:bg-slate-100 md:hover:bg-slate-200 rounded-full flex items-center justify-center backdrop-blur-md transition-all group active:scale-95 shadow-lg"
        >
          <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Image Section - Left on Desktop, Top on Mobile */}
        <div className="md:w-1/2 relative aspect-video md:aspect-auto overflow-hidden bg-slate-100">
           <img 
             src={popupData.image} 
             alt="Promotional" 
             className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000"
           />
           {/* Overlay Gradient for Mobile (bottom to top) */}
           <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent md:hidden" />
           {/* Overlay Gradient for Desktop (right to left) */}
           <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent hidden md:block" />
        </div>

        {/* Content Section - Right on Desktop, Bottom on Mobile */}
        <div className="md:w-1/2 p-8 md:p-14 flex flex-col justify-center text-center md:text-left relative overflow-y-auto">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-500 text-[10px] font-black uppercase tracking-widest rounded-full mb-5 ring-1 ring-indigo-500/10">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" /> Limited Time News
            </div>
            <h2 className="font-fredoka text-3xl md:text-5xl text-slate-800 leading-[1.1] mb-5 tracking-tight">
              {popupData.title}
            </h2>
            <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed max-w-md">
              {popupData.desc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
             <a 
               href={popupData.ctaLink}
               onClick={closePopup}
               className={`flex-1 flex items-center justify-center gap-3 py-5 rounded-[24px] text-sm font-black uppercase tracking-widest shadow-2xl active:scale-95 transition-all duration-300 ${btnClasses}`}
             >
               {popupData.ctaText} <ExternalLink className="w-4 h-4" />
             </a>
             <button 
               onClick={closePopup}
               className="px-8 py-5 text-slate-400 hover:text-slate-600 text-[11px] font-black uppercase tracking-widest transition-colors hover:bg-slate-50 rounded-[24px]"
             >
               Maybe Later
             </button>
          </div>

          {/* Bottom Branding */}
          <div className="mt-10 pt-8 border-t border-slate-50 hidden md:block">
             <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">© 2026 Chithode Happykids Playschool</p>
          </div>
        </div>

        {/* Background blobs for depth */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-400/5 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in-scale {
          animation: fadeInScale 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        
        /* Global CSS to hide navbar when popup is open */
        body.popup-open nav, 
        body.popup-open .site-navbar { 
          opacity: 0;
          pointer-events: none;
          transform: translateY(-20px);
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
}
