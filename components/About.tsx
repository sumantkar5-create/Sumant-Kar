import React, { useRef } from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';

const About: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollY } = useScroll({
    container: containerRef
  });

  // Parallax: As user scrolls down (scrollY increases), move image down slightly (positive y)
  // causing it to move slower than the scrolling content, creating depth.
  const parallaxY = useTransform(scrollY, [0, 1000], ['0%', '15%']);

  // Fix: Explicitly type variants as Variants to resolve complex type inference errors in framer-motion
  const containerVars: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  // Fix: Cast ease to any to resolve "number[] is not assignable to Easing" error caused by ambiguous inference
  const itemVars: Variants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as any 
      } 
    }
  };

  return (
    <motion.section 
      ref={containerRef}
      variants={containerVars}
      initial="initial"
      animate="animate"
      className="h-full w-full bg-brand-black overflow-y-auto px-4 md:px-12 lg:px-20 pt-32 md:pt-48 pb-64 custom-scrollbar"
    >
      <div className="max-w-screen-2xl mx-auto relative z-10">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-24 md:mb-48">
          <div className="lg:col-span-9">
            <motion.h2 variants={itemVars} className="font-display text-4xl sm:text-5xl md:text-[7vw] uppercase tracking-tighter leading-none mb-6">
              Active Since<br />
              <span className="text-accent italic">2018.</span>
            </motion.h2>
            <motion.p variants={itemVars} className="font-body text-lg sm:text-xl md:text-4xl text-neutral-400 leading-tight tracking-tight max-w-4xl">
              Sports Media Strategist & Content Lead. Building digital communities through consistent design and grounded strategy.
            </motion.p>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 mb-32 md:mb-64">
          <div className="lg:col-span-5">
            <motion.div variants={itemVars} className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-brand-surface border border-white/10 group shadow-2xl">
              <motion.img 
                src="https://res.cloudinary.com/dktveoukx/image/upload/v1769451608/Sumant_22_23_bfk1ra.png" 
                alt="Sumant Kar"
                style={{ y: parallaxY, scale: 1.15 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-[filter] duration-700"
              />
              <div className="absolute inset-4 border border-accent/30 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center gap-8 md:gap-12">
            <motion.div variants={itemVars} className="space-y-6 md:space-y-10">
              <h3 className="font-display text-2xl md:text-4xl uppercase tracking-tight border-b border-white/5 pb-4">The Track Record</h3>
              <p className="text-neutral-400 font-body text-sm md:text-xl leading-relaxed">
                Consistency is my core lever. Since 2018, I have managed niche sports platforms by combining visual identity with operational discipline. Every pixel and post serves a growth goal.
              </p>
              <p className="text-neutral-400 font-body text-sm md:text-xl leading-relaxed">
                I own the posting cadence, understand the audience dynamics, and execute daily to build sustainable digital assets in the high-pressure world of sports media.
              </p>
            </motion.div>
          </div>
        </div>

        {/* EXPERIENCE SECTION */}
        <div className="border-t border-white/10 pt-16 md:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32">
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
               <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent">Proof of Work</span>
               <h4 className="font-display text-4xl md:text-6xl uppercase mt-4 mb-6 leading-none">Experience</h4>
               <p className="font-body text-neutral-500 text-sm md:text-base max-w-xs leading-relaxed">
                 Real-world results across platform growth and content operations.
               </p>
            </div>
            <div className="lg:col-span-8 divide-y divide-white/5">
              {[
                {
                  id: '01',
                  role: 'LEAD STRATEGIST',
                  name: 'IndianFootballDaily',
                  color: 'text-sport-blue',
                  desc: 'Rebranded and managed content lifecycle, reaching 33K+ followers and 10M+ monthly impressions through editorial discipline.'
                },
                {
                  id: '02',
                  role: 'CREATIVE LEAD',
                  name: '9sportz',
                  color: 'text-sport-green',
                  desc: 'Delivered high-frequency social media creatives for sports academies, focusing on speed and user action.'
                },
                {
                  id: '03',
                  role: 'STRATEGIST',
                  name: 'Freelance Media',
                  color: 'text-sport-gold',
                  desc: 'Executing matchday graphics and social-first visuals for various sports clubs and regional platforms since 2018.'
                }
              ].map((job) => (
                <motion.div 
                  key={job.id}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -10 }}
                  viewport={{ once: true }}
                  className="py-12 md:py-16 group"
                >
                  <div className={`font-mono text-[9px] mb-4 ${job.color}`}>{job.id} // {job.role}</div>
                  <h5 className="font-display text-2xl md:text-4xl uppercase mb-4 group-hover:text-white transition-colors">{job.name}</h5>
                  <p className="font-body text-neutral-400 text-sm md:text-lg max-w-2xl leading-relaxed">
                    {job.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA FOOTER */}
        <div className="mt-48 md:mt-64 text-center">
          <a href="mailto:hello@sumantkar.com" className="font-display text-[10vw] md:text-[8vw] uppercase tracking-tighter hover:text-accent transition-colors active:scale-95 inline-block">
            Let's Work
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default About;