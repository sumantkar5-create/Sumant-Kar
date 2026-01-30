import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ViewState } from '../App';

const Home: React.FC<{ setView: (v: ViewState) => void }> = ({ setView }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 30;
    const y = (clientY / innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  return (
    <motion.section 
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-12 relative bg-transparent overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center h-full overflow-y-auto lg:overflow-hidden pt-24 pb-24 lg:pb-0 lg:pt-0 no-scrollbar">
        
        {/* LEFT COLUMN: PORTRAIT ANCHORED TO BOTTOM - LARGE SCALE (7/12) */}
        <div 
          className="lg:col-span-7 flex items-end justify-center lg:justify-start relative h-full pt-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div 
            initial={{ y: 60, opacity: 0 }}
            animate={{ 
              y: isHovered ? -15 : 0, 
              opacity: 1,
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ 
              type: "spring", 
              stiffness: 80, 
              damping: 15, 
              mass: 1,
              opacity: { duration: 1 }
            }}
            style={{ 
              x: mousePos.x * 0.4, 
              rotateY: mousePos.x * 0.04,
              rotateX: mousePos.y * -0.04,
            }}
            className="relative w-full max-w-[420px] md:max-w-2xl lg:max-w-none aspect-[3/4] lg:h-[96vh] flex items-end"
          >
            {/* Subject Glow Backlight */}
            <motion.div 
              animate={{ 
                opacity: isHovered ? 0.5 : 0.3,
                scale: isHovered ? 1.3 : 1 
              }}
              className="absolute inset-0 bg-gradient-to-tr from-accent/30 via-transparent to-sport-blue/20 blur-[160px] rounded-full translate-y-20 z-0"
            />
            
            <motion.img 
              src="https://res.cloudinary.com/dktveoukx/image/upload/v1769451933/Sumant_22_23_apa6hz.png" 
              alt="Sumant Kar"
              animate={{ 
                filter: isHovered ? 'brightness(1.1) contrast(1.05)' : 'brightness(1) contrast(1)',
              }}
              className="w-full h-full object-contain object-bottom relative z-10 drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)] transition-all duration-700 select-none pointer-events-none"
            />
          </motion.div>
        </div>

        {/* RIGHT COLUMN: BRAND DETAILS (5/12) - Shifted Left to prevent clipping */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start justify-center text-center lg:text-left z-20 lg:-ml-16 xl:-ml-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4 mb-6 md:mb-8"
          >
            <div className="h-[1px] w-10 bg-accent"></div>
            <span className="font-mono text-[9px] md:text-xs uppercase tracking-[0.5em] text-accent font-bold">
              Sports Media Strategist
            </span>
          </motion.div>

          <div className="relative mb-6 md:mb-10">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[14vw] sm:text-[12vw] lg:text-[10vw] xl:text-[8vw] leading-[0.8] tracking-tighter uppercase italic"
            >
              <span className="text-white block">Sumant</span>
              <span className="text-accent glow-accent block">Kar</span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-body text-neutral-400 text-sm md:text-xl max-w-sm mb-10 md:mb-16 leading-relaxed border-l-2 border-accent/20 pl-6 ml-1"
          >
            Engineering high-velocity digital narratives for the next era of sports. Managing communities of 33K+ with 10M+ monthly impressions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <button 
              onClick={() => setView('work')}
              data-hover
              className="group relative flex items-center p-1 pl-8 md:pl-10 pr-1 rounded-full border border-white/10 bg-brand-surface/30 backdrop-blur-3xl hover:border-accent transition-all duration-700 active:scale-95 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute inset-0 bg-accent translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-[0.76,0,0.24,1]"></div>

              <span className="relative z-10 font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-white transition-colors duration-500 font-bold">
                Access Archive
              </span>

              <div className="relative z-10 ml-8 w-14 h-14 rounded-full bg-white/5 flex items-center justify-center transition-all duration-700 group-hover:bg-white group-hover:rotate-45">
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="transition-colors duration-500">
                  <path 
                    d="M1 8H15M15 8L8 1M15 8L8 15" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-white group-hover:text-accent transition-colors duration-500"
                  />
                </svg>
                <div className="absolute inset-0 rounded-full border border-white/40 group-hover:scale-[1.8] group-hover:opacity-0 transition-all duration-700 pointer-events-none"></div>
              </div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* DATA TICKER */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-white/5 py-4 bg-brand-black/60 backdrop-blur-xl z-30">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="whitespace-nowrap flex gap-16 font-mono text-[9px] uppercase tracking-[0.3em] text-white/10"
        >
          {[...Array(12)].map((_, i) => (
            <span key={i} className="flex items-center gap-16">
              <span className="text-sport-blue">● STRATEGY: INDIANFOOTBALLDAILY</span>
              <span className="text-sport-green">● METRIC: 10M+ IMPRESSIONS</span>
              <span className="text-accent">● STATUS: OPTIMIZED</span>
            </span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;