import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ViewState } from '../App';

const Home: React.FC<{ setView: (v: ViewState) => void }> = ({ setView }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Mouse tracking for portrait parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 50, stiffness: 400 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const rotateY = useTransform(mouseXSpring, (x) => x * 0.04);
  const rotateX = useTransform(mouseYSpring, (y) => y * -0.04);
  const moveX = useTransform(mouseXSpring, (x) => x * 0.4);

  // Magnetic Button Logic
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const btnSpringX = useSpring(btnX, { stiffness: 150, damping: 15 });
  const btnSpringY = useSpring(btnY, { stiffness: 150, damping: 15 });

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
    
    mouseX.set((clientX / innerWidth - 0.5) * 30);
    mouseY.set((clientY / innerHeight - 0.5) * 30);

    // Magnetic effect for button
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      if (distance < 200) {
        btnX.set(distanceX * 0.15);
        btnY.set(distanceY * 0.15);
      } else {
        btnX.set(0);
        btnY.set(0);
      }
    }
  };

  return (
    <motion.section 
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-12 relative bg-transparent overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center h-full overflow-y-auto lg:overflow-hidden pt-24 pb-24 lg:pb-0 lg:pt-0 no-scrollbar">
        
        {/* LEFT COLUMN: PORTRAIT */}
        <div 
          className="lg:col-span-7 flex items-end justify-center lg:justify-start relative h-full pt-12 lg:-translate-x-16"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div 
            initial={{ y: 60, opacity: 0 }}
            animate={{ 
              y: isHovered ? -15 : 0, 
              opacity: 1,
              scale: isHovered ? 1.02 : 1,
            }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            style={{ x: moveX, rotateY, rotateX }}
            className="relative w-full max-w-[420px] md:max-w-2xl lg:max-w-none aspect-[3/4] lg:h-[96vh] flex items-end will-change-transform"
          >
            <motion.div 
              animate={{ opacity: isHovered ? 0.4 : 0.2, scale: isHovered ? 1.2 : 1 }}
              className="absolute inset-0 bg-gradient-to-tr from-accent/30 via-transparent to-sport-blue/20 blur-[160px] rounded-full translate-y-20 z-0"
            />
            <img 
              src="https://res.cloudinary.com/dktveoukx/image/upload/v1769451933/Sumant_22_23_apa6hz.png" 
              alt="Sumant Kar"
              className="w-full h-full object-contain object-bottom relative z-10 drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)] select-none pointer-events-none"
            />
          </motion.div>
        </div>

        {/* RIGHT COLUMN: BRAND DETAILS */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start justify-center text-center lg:text-left z-20 lg:-ml-28 xl:-ml-40">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-accent"></div>
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent font-bold">
              Sports Media Strategist
            </span>
          </motion.div>

          <div className="relative mb-8">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[14vw] sm:text-[12vw] lg:text-[10vw] xl:text-[8.5vw] leading-[0.8] tracking-tighter uppercase italic"
            >
              <span className="text-white block">Sumant</span>
              <span className="text-accent glow-accent block">Kar</span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-body text-neutral-400 text-sm md:text-xl max-w-sm mb-16 leading-relaxed border-l-2 border-accent/20 pl-8 ml-1"
          >
            Engineering high-velocity digital narratives for the next era of sports. Managing communities of 33K+ with 10M+ monthly impressions.
          </motion.p>

          {/* REFINED CTA TRIGGER */}
          <motion.div
            style={{ x: btnSpringX, y: btnSpringY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="relative"
          >
            <button 
              ref={buttonRef}
              onClick={() => setView('work')}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              data-hover
              className="group relative flex items-center justify-between min-w-[320px] h-24 px-10 bg-brand-surface border border-white/10 backdrop-blur-3xl hover:border-accent transition-all duration-500 overflow-hidden shadow-2xl"
            >
              {/* Corner Brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/10 group-hover:border-accent group-hover:scale-110 transition-all"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/10 group-hover:border-accent group-hover:scale-110 transition-all"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/10 group-hover:border-accent group-hover:scale-110 transition-all"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/10 group-hover:border-accent group-hover:scale-110 transition-all"></div>

              {/* Internal Scanning Animation */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity">
                <div className="absolute inset-0 bg-blueprint-grid bg-[size:20px_20px]"></div>
              </div>

              {/* Background Fill */}
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-[0.76,0,0.24,1]"></div>

              <div className="relative z-20 flex flex-col items-start text-left">
                 <span className="font-mono text-[9px] uppercase tracking-[0.5em] text-white/40 group-hover:text-black/60 transition-colors duration-500 mb-2">
                   System.Initialize
                 </span>
                 <span className="font-display text-2xl uppercase tracking-widest text-white group-hover:text-black transition-colors duration-500">
                    Access Archive
                 </span>
              </div>

              <div className="relative z-20">
                 <div className="w-12 h-12 rounded-sm border border-white/20 group-hover:border-black/30 flex items-center justify-center transition-all duration-500 group-hover:bg-black/10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <path d="M5 19L19 5M19 5H10M19 5V14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent group-hover:text-black transition-colors"/>
                    </svg>
                 </div>
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;