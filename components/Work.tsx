import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_ITEMS } from '../constants';
import { ArrowRight } from 'lucide-react';

const getTheme = (index: number) => {
  const themes = [
    { 
      text: 'text-sport-blue', 
      border: 'border-sport-blue',
      hoverGlow: 'group-hover:shadow-[0_0_40px_rgba(0,242,255,0.2)]',
      hoverText: 'group-hover:text-sport-blue',
      hoverBorder: 'group-hover:border-sport-blue'
    },
    { 
      text: 'text-sport-green', 
      border: 'border-sport-green',
      hoverGlow: 'group-hover:shadow-[0_0_40px_rgba(0,255,102,0.2)]',
      hoverText: 'group-hover:text-sport-green',
      hoverBorder: 'group-hover:border-sport-green'
    },
    { 
      text: 'text-sport-crimson', 
      border: 'border-sport-crimson',
      hoverGlow: 'group-hover:shadow-[0_0_40px_rgba(255,0,85,0.2)]',
      hoverText: 'group-hover:text-sport-crimson',
      hoverBorder: 'group-hover:border-sport-crimson'
    },
    { 
      text: 'text-sport-gold', 
      border: 'border-sport-gold',
      hoverGlow: 'group-hover:shadow-[0_0_40px_rgba(255,214,10,0.2)]',
      hoverText: 'group-hover:text-sport-gold',
      hoverBorder: 'group-hover:border-sport-gold'
    },
  ];
  return themes[index % themes.length];
};

const Work: React.FC = () => {
  return (
    <motion.section 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="h-full w-full overflow-y-auto bg-brand-black custom-scrollbar relative z-40"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-12 py-24 md:py-48">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 md:mb-48 border-b border-white/10 pb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-[10vw] leading-none uppercase tracking-tighter"
          >
            Power<br /><span className="text-accent italic">Works</span>
          </motion.h1>
          <div className="font-mono text-[9px] md:text-xs uppercase tracking-[0.3em] text-neutral-400 mt-8 md:mt-0 text-left md:text-right">
            <div className="text-accent font-bold">ARCHIVE_V25</div>
            <div className="mt-1 opacity-50">PERFORMANCE METRICS</div>
          </div>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-24 md:gap-48 lg:gap-72">
          {PORTFOLIO_ITEMS.map((item, idx) => {
            const theme = getTheme(idx);
            
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                className="group w-full relative"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 lg:gap-24 items-start relative z-10">
                  
                  {/* Info Column */}
                  <div className="md:col-span-5 flex flex-col md:sticky md:top-32">
                    <div className="flex items-baseline justify-between mb-8 md:mb-12 border-b border-white/5 pb-4 md:pb-6">
                      <span className={`font-display text-6xl md:text-9xl leading-none transition-all duration-500 ${theme.hoverText} text-neutral-800`}>
                        0{idx + 1}
                      </span>
                      <span className={`font-mono text-[10px] md:text-xs uppercase tracking-widest ${theme.text}`}>
                        {item.year}
                      </span>
                    </div>

                    <div className="space-y-6 md:space-y-10">
                       <div>
                         <h2 className="font-display text-3xl md:text-5xl lg:text-6xl uppercase leading-tight md:leading-[0.85] tracking-tight mb-4 md:mb-8 transition-colors group-hover:text-white">
                           {item.title}
                         </h2>
                         <div className="flex flex-wrap gap-2">
                            {item.tags?.map((tag, i) => (
                              <span key={i} className="px-3 py-1 border border-white/5 rounded-full font-mono text-[8px] md:text-[10px] uppercase tracking-wider text-neutral-500 group-hover:text-neutral-300 transition-colors">
                                {tag}
                              </span>
                            ))}
                         </div>
                       </div>

                       <p className="font-body text-neutral-400 text-sm md:text-lg leading-relaxed max-w-md">
                         {item.description}
                       </p>

                       <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 p-4 md:p-6 border ${theme.border} bg-brand-surface/30 backdrop-blur-xl rounded-lg border-opacity-30 group-hover:border-opacity-100 transition-all`}>
                          <div className="flex flex-col">
                             <span className="font-mono text-[8px] uppercase tracking-widest text-neutral-500">Peak Reach</span>
                             <span className={`font-display text-lg md:text-2xl uppercase ${theme.text}`}>{item.stats}</span>
                          </div>
                          <div className={`hidden sm:block h-8 w-[1px] ${theme.text.replace('text-', 'bg-')} opacity-20`}></div>
                          <button className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-white active:scale-95">
                            Explore
                            <ArrowRight className={`w-3 h-3 md:w-4 md:h-4 ${theme.text} group-hover:translate-x-1 transition-transform`} />
                          </button>
                       </div>
                    </div>
                  </div>

                  {/* Visual Column - Enforced 4:5 Aspect Ratio (2160x2700) */}
                  <div className="md:col-span-7">
                    <div className={`relative w-full aspect-[4/5] overflow-hidden rounded-lg md:rounded-xl bg-brand-surface border border-white/10 transition-all duration-700 ${theme.hoverBorder} ${theme.hoverGlow}`}>
                      <img 
                        src={item.image} 
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-60"></div>
                      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
                        <div className={`bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/5`}>
                          <span className={`font-mono text-[9px] md:text-xs uppercase tracking-widest font-bold ${theme.text}`}>
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Footer CTA */}
        <div className="mt-48 md:mt-64 py-24 md:py-32 border-t-2 border-accent/20 flex flex-col items-center">
          <h3 className="font-display text-4xl md:text-[8vw] uppercase tracking-tighter text-white italic text-center leading-none mb-12">
            Next Level?
          </h3>
          <a href="mailto:hello@sumantkar.com" className="px-8 md:px-12 py-4 md:py-6 bg-white text-black font-display text-sm md:text-xl uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300 rounded-sm active:scale-95">
            Initiate Project
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;