import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-x-0 border-t-0 rounded-none bg-card-bg/80"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold tracking-tighter text-text-main group">
          G<span className="text-sky-glow group-hover:text-cerulean transition-colors">J</span>
        </a>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium text-text-muted">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-sky-glow transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:block">
          <a 
            href="/resume.pdf"
            target="_blank"
            download="Gaurav_Joshi_Resume.pdf"
            className="px-6 py-2.5 rounded-full bg-sky-glow/10 text-sky-glow border border-sky-glow/30 hover:border-sky-glow hover:bg-sky-glow/20 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all font-medium inline-block tracking-wide uppercase text-xs"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-text-main p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-card border-x-0 border-b-0 flex flex-col items-center py-6 gap-6"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-text-muted hover:text-sky-glow transition-colors font-medium text-lg"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/resume.pdf"
            target="_blank"
            download="Gaurav_Joshi_Resume.pdf"
            className="px-8 py-3 mt-4 rounded-md bg-sky-glow/10 text-sky-glow border border-sky-glow/50 hover:bg-sky-glow/20 transition-all font-medium"
          >
            Resume
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
