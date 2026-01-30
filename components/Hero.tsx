import React from 'react';
import { motion } from 'framer-motion';
import { HERO_STATS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 pb-24 overflow-hidden">
      
      {/* Background Large Text Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none">
        <h2 className="font-display text-[30vw] leading-none tracking-tighter">STRATEGY</h2>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        
        {/* Left Column: Role & Mission */}
        <div className="lg:col-span-4 mb-12 lg:mb-0">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-white"></div>
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-matte-muted">
                Based in India
              </span>
            </div>
            <h2 className="text-2xl font-light leading-snug max-w-sm">
              Lead at <span className="font-semibold italic">IndianFootballDaily</span>. 
              Engineering digital narratives for the next era of sports consumption.
            </h2>
            <div className="pt-8 flex flex-col gap-4">
               {HERO_STATS.slice(0, 2).map((stat, i) => (
                 <div key={i} className="flex items-baseline gap-4 border-b border-neutral-900 pb-4">
                    <span className="font-display text-2xl">{stat.value}</span>
                    <span className="font-mono text-[10px] uppercase text-neutral-500 tracking-widest">{stat.label}</span>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Massive Typography */}
        <div className="lg:col-span-8 flex flex-col items-end">
          <div className="relative perspective-2000 text-right">
            <motion.div
              initial={{ opacity: 0, y: 100, rotateX: 30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-display text-[14vw] md:text-[12vw] leading-[0.75] tracking-tighter uppercase mb-4">
                Sumant<br />
                <span className="text-neutral-800">Kar</span>
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex justify-end gap-12 mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-matte-muted"
            >
              <span>Strategist</span>
              <span>Content Lead</span>
              <span>2025 Edition</span>
            </motion.div>
          </div>
        </div>

      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;