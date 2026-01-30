import React from 'react';
import { motion } from 'framer-motion';
import { ViewState } from '../App';

interface NavProps {
  currentView: ViewState;
  setView: (v: ViewState) => void;
}

const Navigation: React.FC<NavProps> = ({ currentView, setView }) => {
  return (
    <nav className="fixed inset-0 p-6 md:p-12 pointer-events-none z-[100] flex flex-col justify-between">
      {/* Top Bar - Minimal Corners */}
      <div className="flex justify-between items-start">
        <div className="pointer-events-auto">
          <button 
            onClick={() => setView('home')}
            className="group flex items-center gap-2 p-2"
          >
            <span className="font-display text-xl md:text-2xl tracking-tighter text-white">SK</span>
            <div className="h-[2px] w-0 bg-accent group-hover:w-4 transition-all duration-300"></div>
          </button>
        </div>
        
        <div className="pointer-events-auto">
          <button 
            onClick={() => setView('about')}
            className={`relative py-1 px-4 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] transition-all duration-300 active:scale-90 ${
              currentView === 'about' ? 'text-accent font-bold' : 'text-neutral-500 hover:text-white'
            }`}
          >
            Profile
            {currentView === 'about' && (
              <motion.div 
                layoutId="nav-dot" 
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" 
              />
            )}
          </button>
        </div>
      </div>

      {/* Bottom Bar - Socials Only */}
      <div className="flex justify-end items-end">
        <div className="flex gap-6 md:gap-8 pointer-events-auto items-center">
          <div className="flex gap-6 md:gap-8 font-mono text-[9px] uppercase tracking-[0.3em] bg-black/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-3 md:p-0 rounded-full border border-white/5 md:border-none">
            <a href="#" className="text-neutral-500 hover:text-accent transition-all hover:-translate-y-1">LI</a>
            <a href="#" className="text-neutral-500 hover:text-accent transition-all hover:-translate-y-1">TW</a>
            <a href="#" className="text-neutral-500 hover:text-accent transition-all hover:-translate-y-1">IG</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;