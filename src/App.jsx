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

export default function App() {
  return (
    <div className="min-h-screen font-nunito">
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

      {/* Persistent Floating Call Button */}
      <a
        href="tel:+919787751430"
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-[#F5C518] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group overflow-visible"
        aria-label="Call Chithode Happykids"
      >
        {/* Ringing animation icon */}
        <span className="text-2xl animate-ringing">📞</span>
        
        {/* Spreading glow/pulse effects */}
        <div className="absolute inset-0 rounded-full animate-spread-glow pointer-events-none" />
        <div className="absolute inset-0 rounded-full animate-spread-glow delay-1000 pointer-events-none" />
      </a>
    </div>
  );
}
