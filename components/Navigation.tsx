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
        
        {/* Profile Link Removed as per request */}
      </div>

      {/* Bottom Bar - Clean */}
      <div className="flex justify-end items-end">
        {/* Social Shortcuts Removed */}
      </div>
    </nav>
  );
};

export default Navigation;