import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Music } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export default function MusicPlayer() {
  const { content } = useContent();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  
  const settings = content?.musicPlayer || {
    enabled: true,
    audioUrl: "/bg_music.m4a",
    autoplay: true
  };

  const audioUrl = settings.audioUrl;

  const togglePlay = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log("Autoplay blocked/failed. Interaction required.");
      });
    }
  };

  // Modern browser autoplay bypass: Click anywhere to start music
  useEffect(() => {
    const handleGlobalClick = () => {
      if (!isPlaying && audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          // Once successful, remove the global listener
          document.removeEventListener('click', handleGlobalClick);
        }).catch(() => {});
      }
    };

    if (!isPlaying) {
      document.addEventListener('click', handleGlobalClick);
    }
    
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, [isPlaying]);

  // Fallback timer attempt - Only if not already playing or manually paused
  useEffect(() => {
    const timer = setTimeout(() => {
      if (audioRef.current && !isPlaying && settings.autoplay) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {});
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [settings.autoplay]);

  if (!settings.enabled) return null;

  return (
    <div className="fixed bottom-8 left-8 z-[9998] flex flex-col items-center gap-2">
      <audio ref={audioRef} src={audioUrl} loop preload="auto" />
      
      {/* Rotating Badge - Matching Call button size (w-14 h-14) */}
      <div 
        className={`relative w-14 h-14 rounded-full border-4 border-white shadow-2xl cursor-pointer group flex items-center justify-center bg-white overflow-hidden transition-all duration-500 hover:scale-110 active:scale-95 ${isPlaying ? 'animate-[spin_8s_linear_infinite]' : ''}`}
        onClick={(e) => togglePlay(e)}
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        <img 
          src="/summer_sun_3d.png" 
          alt="Music Mascot"
          className="w-full h-full object-cover scale-110"
        />
        
        {/* Play/Pause Overlay on Hover */}
        <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
          {isPlaying ? <Pause className="text-white w-6 h-6" /> : <Play className="text-white w-6 h-6 fill-current" />}
        </div>
      </div>

      {/* Floating Notes */}
      {isPlaying && (
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-1 animate-bounce">
          <Music className="w-3 h-3 text-primary animate-pulse" />
          <Music className="w-3 h-3 text-[#F5C518] animate-pulse delay-100" />
        </div>
      )}

    </div>
  );
}
