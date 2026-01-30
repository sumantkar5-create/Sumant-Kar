import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Navigation from './components/Navigation';

export type ViewState = 'home' | 'work' | 'about';

function App() {
  const [view, setView] = useState<ViewState>('home');
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('[data-hover]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    if (!isTouchDevice) {
      window.addEventListener('mousemove', moveCursor);
    }
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [isTouchDevice]);

  return (
    <div className="bg-brand-black min-h-screen text-brand-white selection:bg-accent selection:text-white overflow-hidden font-body relative bg-grain">
      
      {/* VIBRANT BACKGROUND STAGE */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Animated Light Auras - Scaled for performance and mobile */}
        <motion.div 
          animate={{ 
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[5%] left-[5%] w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-sport-blue/10 blur-[100px] rounded-full mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            x: [0, -60, 60, 0],
            y: [0, 40, -40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[5%] right-[5%] w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] bg-accent/10 blur-[100px] rounded-full mix-blend-screen"
        />
        
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 bg-blueprint-grid bg-[size:50px_50px] md:bg-[size:100px_100px] opacity-[0.1] mix-blend-overlay"></div>
      </div>

      {/* Reactive High-Vibrancy Cursor - Hidden on mobile */}
      {!isTouchDevice && (
        <motion.div 
          className="fixed top-0 left-0 pointer-events-none z-[110] mix-blend-difference flex items-center justify-center"
          animate={{ 
            x: cursorPos.x - (isHovering ? 45 : 12), 
            y: cursorPos.y - (isHovering ? 45 : 12),
            width: isHovering ? 90 : 24,
            height: isHovering ? 90 : 24,
          }}
          transition={{ type: "spring", damping: 45, stiffness: 500, mass: 0.4 }}
        >
          <div className={`w-full h-full rounded-full border-2 transition-all duration-300 ${isHovering ? 'border-accent bg-accent/30 scale-100 opacity-100' : 'border-white opacity-40 scale-50'}`}></div>
        </motion.div>
      )}

      {/* Navigation Layer */}
      <Navigation currentView={view} setView={setView} />

      {/* Main Content Stage */}
      <main className="h-screen w-full relative z-10 overflow-hidden">
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.4 } }}
              className="h-full w-full"
            >
              <Home setView={setView} />
            </motion.div>
          )}
          {view === 'work' && (
            <motion.div 
              key="work"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="h-full w-full fixed inset-0 z-40"
            >
              <Work />
            </motion.div>
          )}
          {view === 'about' && (
            <motion.div 
              key="about"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="h-full w-full fixed inset-0 z-40"
            >
              <About />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Final Vignette Finish */}
      <div className="fixed inset-0 bg-vignette pointer-events-none z-[50] opacity-60"></div>
    </div>
  );
}

export default App;