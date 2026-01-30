import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Navigation from './components/Navigation';

export type ViewState = 'home' | 'work' | 'about';

function App() {
  const [view, setView] = useState<ViewState>('home');
  
  // Performance Optimization: Use MotionValues instead of State for high-frequency updates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check for touch device
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);

    const moveCursor = (e: MouseEvent) => {
      // Update motion values directly to avoid React re-renders
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Check hover target - Only update state if value changes
      const target = e.target as HTMLElement;
      const shouldHover = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('[data-hover]') !== null;
      
      setIsHovering(prev => {
        if (prev !== shouldHover) return shouldHover;
        return prev;
      });
    };
    
    if (!isTouchDevice) {
      window.addEventListener('mousemove', moveCursor);
    }
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('resize', checkTouch);
    };
  }, [isTouchDevice, cursorX, cursorY]);

  return (
    <div className="bg-brand-black min-h-screen text-brand-white selection:bg-accent selection:text-white overflow-hidden font-body relative bg-grain">
      
      {/* VIBRANT BACKGROUND STAGE */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Animated Light Auras - Optimized with will-change-transform */}
        <motion.div 
          animate={{ 
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[5%] left-[5%] w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-sport-blue/10 blur-[100px] rounded-full mix-blend-screen will-change-transform"
        />
        <motion.div 
          animate={{ 
            x: [0, -60, 60, 0],
            y: [0, 40, -40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[5%] right-[5%] w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] bg-accent/10 blur-[100px] rounded-full mix-blend-screen will-change-transform"
        />
        
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 bg-blueprint-grid bg-[size:50px_50px] md:bg-[size:100px_100px] opacity-[0.1] mix-blend-overlay"></div>
      </div>

      {/* Reactive High-Vibrancy Cursor - Optimized Structure */}
      {!isTouchDevice && (
        <motion.div 
          className="fixed top-0 left-0 pointer-events-none z-[110] mix-blend-difference"
          style={{ 
            x: cursorXSpring, 
            y: cursorYSpring 
          }}
        >
          {/* Inner element handles sizing and centering */}
          <motion.div
            className={`rounded-full border-2 transition-colors duration-300 ${isHovering ? 'border-accent bg-accent/30' : 'border-white'}`}
            animate={{ 
              width: isHovering ? 90 : 24,
              height: isHovering ? 90 : 24,
              opacity: isHovering ? 1 : 0.4,
            }}
            style={{ 
              x: "-50%", 
              y: "-50%" 
            }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          />
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