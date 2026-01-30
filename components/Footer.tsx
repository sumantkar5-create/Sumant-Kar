import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 px-6 bg-matte-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        <div>
          <h2 className="font-display text-8xl md:text-[10rem] leading-none text-neutral-800 select-none">
            KAR
          </h2>
        </div>

        <div className="flex flex-col gap-8 text-right">
          <div className="flex flex-col gap-2">
             <span className="font-mono text-xs uppercase text-neutral-500 tracking-widest">Contact</span>
             <a href="mailto:hello@sumantkar.com" className="font-display text-2xl text-white hover:text-neutral-400 transition-colors">
               hello@sumantkar.com
             </a>
          </div>
          
          <div className="flex gap-6 justify-end">
             <a href="#" className="font-mono text-xs text-neutral-400 hover:text-white uppercase tracking-wider transition-colors">LinkedIn</a>
             <a href="#" className="font-mono text-xs text-neutral-400 hover:text-white uppercase tracking-wider transition-colors">Twitter (X)</a>
             <a href="#" className="font-mono text-xs text-neutral-400 hover:text-white uppercase tracking-wider transition-colors">Instagram</a>
          </div>

          <p className="font-mono text-[10px] text-neutral-700 mt-8">
            © {new Date().getFullYear()} Sumant Kar. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;