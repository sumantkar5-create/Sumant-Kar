import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PORTFOLIO_ITEMS } from '../constants';
import { Project } from '../types';

const PortfolioItem: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  // Determine layout behavior based on index to create asymmetry
  const isWide = index % 5 === 0;
  const isShifted = index % 3 === 0;

  return (
    <motion.div 
      data-project-card
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
      className={`relative group mb-24 md:mb-48 ${isWide ? 'md:col-span-8' : 'md:col-span-5'} ${isShifted ? 'md:mt-24' : ''}`}
    >
      <div className="relative overflow-hidden aspect-[4/5] bg-matte-dark">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
        />
        
        {/* Hover Info Tag (Jonas style) */}
        <div className="absolute top-6 right-6 overflow-hidden">
          <motion.div 
            initial={{ y: "100%" }}
            whileHover={{ y: 0 }}
            className="bg-white text-black px-4 py-2 font-mono text-[10px] uppercase tracking-widest"
          >
            {project.stats}
          </motion.div>
        </div>
      </div>

      <div className="mt-8 flex justify-between items-start border-t border-neutral-900 pt-6">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-matte-muted">
            {project.category} / {project.year}
          </span>
          <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tighter group-hover:text-neutral-400 transition-colors">
            {project.title}
          </h3>
        </div>
        <div className="font-mono text-[10px] text-neutral-800">
          NO. 0{index + 1}
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="relative py-32 md:py-64 px-6 md:px-12 bg-matte-black z-20">
      <div className="max-w-[1600px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 mb-32">
          <div className="md:col-span-6">
            <h2 className="font-display text-6xl md:text-[8vw] leading-[0.8] uppercase tracking-tighter">
              Featured<br /><span className="text-neutral-800">Case Studies</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-8 flex flex-col justify-end">
            <p className="font-body text-neutral-500 max-w-xs leading-relaxed">
              Curated selection of high-impact sports media campaigns focusing on visual storytelling and community engagement.
            </p>
          </div>
        </div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 items-start">
          {PORTFOLIO_ITEMS.map((project, index) => (
            <PortfolioItem key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;