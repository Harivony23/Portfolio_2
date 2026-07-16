import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const navLinks = [
  { name: 'ACCUEIL', href: '#home' },
  { name: 'PROJETS', href: '#projects' },
  { name: 'COMPÉTENCES', href: '#skills' },
  { name: 'PARCOURS', href: '#education' },
  { name: 'CONTACT', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-black/90 border-b border-[var(--theme-border)] backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-white flex items-center justify-center text-black">
              <Terminal size={20} />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg leading-none uppercase tracking-widest text-white group-hover:text-[var(--theme-primary)] transition-colors">Harivony</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--theme-muted)]">Portfolio_V2</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--theme-muted)] hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              className="w-10 h-10 border border-[var(--theme-border)] bg-black/50 flex items-center justify-center text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-black border-b border-[var(--theme-border)]"
      >
        <div className="flex flex-col px-6 py-8 space-y-6 text-xs font-mono font-bold text-center border-t border-[var(--theme-border)]">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[var(--theme-muted)] hover:text-white transition-colors block uppercase tracking-widest"
            >
              [ {link.name} ]
            </a>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
