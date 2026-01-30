import React from 'react';
import { motion } from 'framer-motion';
import { TOOLS } from '../constants';

const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="relative py-32 px-6 bg-matte-dark">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-24">
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="inline-block mb-6 px-3 py-1 border border-neutral-800 rounded-full"
          >
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
              Operational Systems
            </span>
          </motion.div>
          <h2 className="font-display text-4xl md:text-6xl text-white mb-6 leading-tight">
            Design is the outcome.<br />
            <span className="text-neutral-500">System is the leverage.</span>
          </h2>
          <p className="font-body text-lg text-neutral-400 max-w-2xl leading-relaxed">
            I don't just move pixels. I build content engines that scale with community demand.
            My workflow prioritizes speed, consistency, and calendar awareness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TOOLS.map((tool, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900 transition-colors duration-500"
            >
              <div className="text-white mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                {tool.icon}
              </div>
              <h3 className="font-display text-xl text-white mb-4">
                {tool.name}
              </h3>
              <p className="font-body text-sm text-neutral-400 leading-relaxed border-t border-neutral-800 pt-4">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Workflow;