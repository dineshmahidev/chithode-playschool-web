import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F0FDF4] flex flex-col items-center justify-center p-4 text-center font-nunito relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#F5C518]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Mascot - using either logo or mascot image if available */}
      <div className="mb-8 animate-float">
        <img 
          src="/mascot.png" 
          alt="Confused Mascot" 
          className="w-48 h-auto drop-shadow-2xl mx-auto"
          onError={(e) => e.target.src = '/logo.png'} 
        />
      </div>

      <h1 className="font-fredoka text-7xl sm:text-9xl text-primary mb-4 drop-shadow-md">
        404
      </h1>
      
      <h2 className="font-fredoka text-2xl sm:text-3xl text-gray-800 mb-6 uppercase tracking-wider">
        Oops! Page Not Found 🎒
      </h2>
      
      <p className="text-gray-500 max-w-md mx-auto text-lg mb-10 leading-relaxed">
        Even the best explorers get lost sometimes! Let's get you back to the classroom where the fun is happening.
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-primary text-white font-bold px-10 py-4 rounded-full shadow-lg hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300"
      >
        <span>🏠</span> Back to Play & Learning
      </Link>

      {/* Small footer in corner */}
      <div className="absolute bottom-6 text-gray-400 text-xs font-semibold">
        © 2026 Chithode Happykids
      </div>
    </div>
  );
}
