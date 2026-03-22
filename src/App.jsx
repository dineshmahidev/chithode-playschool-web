import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { useContent } from './context/ContentContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Admission from './components/Admission';
import Enquiry from './components/Enquiry';
import Footer from './components/Footer';
import AdminPanel from './components/Admin/AdminPanel';
import Login from './components/Admin/Login';
import NotFound from './components/NotFound';
import SummerCamp from './components/SummerCamp';
import HomePopup from './components/HomePopup';
import MusicPlayer from './components/MusicPlayer';

function LandingPage() {
  const { content } = useContent();

  useEffect(() => {
    if (content?.settings?.seo) {
      document.title = content.settings.seo.metaTitle || 'Chithode Happykids – Best Playschool in Chithode';
      
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', content.settings.seo.metaDesc || '');

      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', content.settings.seo.keywords || '');
    }
  }, [content?.settings?.seo]);

  return (
    <div className="min-h-screen font-nunito flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <HowItWorks />
      <Gallery />
      <Features />
      <Testimonials />
      <Admission />
      <Enquiry />
      <Footer />
    </div>
  );
}

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F0FDF4]">
        <div className="w-16 h-16 border-4 border-[#4ADE80] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  if (!user) {
    return <Navigate to="/admin/login" />;
  }
  
  return children;
}

export default function App() {
  const [contactMenuOpen, setContactMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-nunito flex flex-col relative w-full overflow-x-hidden">
      <HomePopup />
      <MusicPlayer />
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/summer-camp" element={<SummerCamp />} />
        <Route path="/admin/login" element={<Login />} />
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          } 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Global Floating Contact Buttons */}
      <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-center gap-4">
        {/* Sub-buttons Menu with Curved Text Labels */}
        <div className={`flex flex-col gap-10 mb-4 transition-all duration-500 origin-bottom transform-gpu ${
          contactMenuOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-75 translate-y-10 pointer-events-none'
        }`}>
          <style>{`
            @keyframes spinSlow {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .animate-spin-slow {
              animation: spinSlow 15s linear infinite;
            }
          `}</style>
          
          {/* WhatsApp Button with Curved Text */}
          <div className="relative w-20 h-20 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full animate-spin-slow origin-center" viewBox="0 0 100 100">
              <defs>
                <path id="whatsapp-path" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
              </defs>
              <text className="text-[12px] font-black uppercase tracking-[0.2em] fill-slate-900">
                <textPath xlinkHref="#whatsapp-path" startOffset="0%">
                  WHATSAPP • ENQUIRE • WHATSAPP •
                </textPath>
              </text>
            </svg>
            <a
              href="https://wa.me/919787751430?text=I%20want%20to%20enquire%20about%20the%20school. Please send me details about school."
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white"
              title="WhatsApp Us"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-8 h-8 brightness-0 invert" />
            </a>
          </div>

          {/* Voice Call Button with Curved Text */}
          <div className="relative w-20 h-20 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full animate-spin-slow origin-center" viewBox="0 0 100 100" style={{ animationDirection: 'reverse' }}>
              <defs>
                <path id="call-path" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
              </defs>
              <text className="text-[11px] font-black uppercase tracking-[0.2em] fill-slate-900">
                <textPath xlinkHref="#call-path" startOffset="0%">
                  CALL NOW • GET DETAILS • CALL NOW •
                </textPath>
              </text>
            </svg>
            <a
              href="tel:+919787751430"
              className="relative z-10 w-14 h-14 bg-[#F5C518] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white"
              title="Call Us"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#FF4D4D" stroke="#FF4D4D" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Main Floating Button (Toggle) */}
        <button
          onClick={() => setContactMenuOpen(!contactMenuOpen)}
          className={`w-14 h-14 ${contactMenuOpen ? 'bg-white border-2 border-black' : 'bg-[#F5C518] border-4 border-white'} rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative group`}
          aria-label="Toggle Contact Menu"
        >
          <span className={`text-2xl transition-all duration-300 ${contactMenuOpen ? 'rotate-90 scale-125 text-black' : 'animate-ringing'}`}>
            {contactMenuOpen ? '✕' : (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#FF4D4D" stroke="#FF4D4D" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            )}
          </span>
          
          {!contactMenuOpen && (
            <>
              <div className="absolute inset-0 rounded-full animate-spread-glow pointer-events-none" />
              <div className="absolute inset-0 rounded-full animate-spread-glow delay-1000 pointer-events-none" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
