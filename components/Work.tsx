import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PORTFOLIO_ITEMS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Work: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  
  // Parallax background movement based on scroll
  const yMove1 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const yMove2 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  return (
    <motion.section 
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 bg-brand-black overflow-y-auto no-scrollbar"
    >
      {/* CINEMATIC BACKGROUND SYSTEM */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep Dark Base */}
        <div className="absolute inset-0 bg-[#020203]" />
        
        {/* Animated Gradient: Deep Green (Top Left) */}
        <motion.div 
          style={{ y: yMove1 }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vw] rounded-full bg-[#052e16] blur-[150px] mix-blend-screen"
        />
        
        {/* Animated Gradient: Muted Amber (Bottom Right) */}
        <motion.div 
          style={{ y: yMove2 }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-[20%] -right-[10%] w-[90vw] h-[90vw] rounded-full bg-[#431407] blur-[180px] mix-blend-screen"
        />

        {/* Animated Gradient: Warm Charcoal (Center/Moving) */}
        <motion.div 
          animate={{ 
            x: ['-10%', '10%', '-10%'],
            y: ['-10%', '10%', '-10%'],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-[#1c1917] blur-[120px] mix-blend-overlay"
        />

        {/* Film Grain Texture - Background Only */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay" />
        
        {/* Vignette Overlay for Focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,2,3,0.8)_80%,rgba(2,2,3,1)_100%)]" />
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-blueprint-grid bg-[size:100px_100px] opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* ARCHIVE FEED - GRID LAYOUT */}
      <div className="relative z-10 w-full pt-32 pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {PORTFOLIO_ITEMS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>

      {/* PROFESSIONAL PROFILE SECTION */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 pb-32">
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-32">
          {/* Identity & Bio */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-8">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9] mb-8 text-white"
              >
                 Sports Media<br /><span className="text-accent">Strategist</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-body text-xl text-neutral-400 max-w-2xl leading-relaxed mb-8"
              >
                Content Lead & Graphic Designer specializing in football-focused visual design, content strategy, and audience growth.
              </motion.p>
              <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 }}
                 className="flex flex-wrap gap-3"
              >
                 {['Sports Visual Design', 'Social Media Design', 'Motion Graphics', 'Branding Systems', 'Web Visuals'].map((s, i) => (
                   <span key={i} className="px-3 py-1 border border-white/10 rounded-full text-xs font-mono uppercase text-neutral-400 tracking-wider bg-white/5">{s}</span>
                 ))}
              </motion.div>
            </div>
          </div>

          {/* Experience & Tools Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Experience */}
            <div className="lg:col-span-7 space-y-16">
              <h3 className="font-display text-2xl text-white uppercase mb-8 flex items-center gap-4">
                Experience
                <div className="h-[1px] flex-1 bg-white/10"></div>
              </h3>
              {[
                { role: 'Founder & Content Lead', company: 'WTFootballIndia', period: '2019 — Present', desc: 'Scaling to 36K+ followers. Creating matchday, tactical, and breaking-news visuals, and building scalable content systems.' },
                { role: 'Social Media Manager & Sr. Designer', company: '9sportz', period: '2023 — 2025', desc: 'High-performance sports creatives, engagement growth, and traffic-driving campaigns.' },
                { role: 'Freelance Designer & Strategist', company: 'Sports Media', period: '2021 — Present', desc: 'Covering visuals, motion assets, brand consistency, and growth-focused design for various entities.' }
              ].map((job, i) => (
                 <motion.div 
                   key={i} 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="group"
                 >
                   <div className="flex justify-between items-baseline mb-2">
                     <h4 className="font-display text-xl md:text-2xl text-white group-hover:text-accent transition-colors">{job.company}</h4>
                     <span className="font-mono text-xs text-neutral-500">{job.period}</span>
                   </div>
                   <div className="font-mono text-xs text-accent mb-3 uppercase tracking-wider">{job.role}</div>
                   <p className="font-body text-neutral-400 text-sm md:text-base leading-relaxed max-w-xl">{job.desc}</p>
                 </motion.div>
              ))}
            </div>
            
            {/* Tools & Credibility */}
            <div className="lg:col-span-5 space-y-16">
               {/* Credibility */}
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
               >
                  <h3 className="font-display text-2xl text-white uppercase mb-8 flex items-center gap-4">
                    Impact
                    <div className="h-[1px] flex-1 bg-white/10"></div>
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-6 bg-brand-surface border border-white/5 hover:border-accent/20 transition-colors">
                       <div className="font-display text-3xl md:text-4xl text-white mb-2">36K+</div>
                       <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">Followers</div>
                     </div>
                     <div className="p-6 bg-brand-surface border border-white/5 hover:border-accent/20 transition-colors">
                       <div className="font-display text-3xl md:text-4xl text-white mb-2">Top 1%</div>
                       <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">Engagement</div>
                     </div>
                  </div>
                  <p className="mt-6 font-body text-sm text-neutral-500 leading-relaxed">
                    Collaborating with football professionals to elevate their digital presence through data-backed design.
                  </p>
               </motion.div>

               {/* Tools */}
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
               >
                  <h3 className="font-display text-2xl text-white uppercase mb-8 flex items-center gap-4">
                    Tools
                    <div className="h-[1px] flex-1 bg-white/10"></div>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                     {['Photoshop', 'Illustrator', 'Figma', 'Jitter', 'Canva', 'Lightroom', 'Affinity'].map((t, i) => (
                       <span key={i} className="px-3 py-2 bg-neutral-900 border border-white/5 text-neutral-400 font-mono text-xs uppercase hover:text-white hover:border-white/20 transition-colors cursor-default">{t}</span>
                     ))}
                  </div>
               </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER ACTION */}
      <div className="relative z-10 w-full pb-32 text-center px-6 border-t border-white/5 pt-32">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-xs text-accent uppercase tracking-[0.3em] mb-8">Available for Commission</p>
          <button 
            onClick={() => window.location.href = 'mailto:hello@sumantkar.com'}
            className="group relative inline-flex items-center gap-6 px-12 py-6 bg-white text-black font-display text-lg uppercase tracking-widest hover:bg-accent hover:text-white transition-all overflow-hidden"
          >
            <span className="relative z-10">Initiate Brief</span>
            <ArrowUpRight className="relative z-10 w-5 h-5 group-hover:rotate-45 transition-transform" />
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </button>
        </div>
      </div>
    </motion.section>
  );
};

const ProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-10%" }}
      className="flex flex-col gap-8 group"
    >
      {/* HIGH QUALITY PREVIEW CARD - CLEAN & SHARP */}
      <div className="relative w-full aspect-[4/5] bg-brand-surface rounded-sm overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl border border-white/5">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Subtle separation / Inner Border - No heavy overlays */}
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
      </div>

      {/* MINIMAL TITLE & DESCRIPTION */}
      <div className="flex flex-col gap-3 px-1">
        <h3 className="font-display text-3xl uppercase tracking-tighter text-white leading-none group-hover:text-accent transition-colors duration-300">
          {project.title.split(':')[0]}
        </h3>
        <p className="font-body text-neutral-400 text-sm md:text-base leading-relaxed line-clamp-3 group-hover:text-neutral-300 transition-colors">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default Work;