import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
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

function LandingPage() {
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
        <span className="text-2xl animate-ringing">📞</span>
        <div className="absolute inset-0 rounded-full animate-spread-glow pointer-events-none" />
        <div className="absolute inset-0 rounded-full animate-spread-glow delay-1000 pointer-events-none" />
      </a>
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
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
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
  );
}
