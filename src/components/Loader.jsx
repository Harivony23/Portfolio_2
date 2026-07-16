import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const chars = '!<>-_\\/[]{}—=+*^?#_';

const useScramble = (text, delay = 0) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let iteration = 0;
    let interval = null;
    
    const startScramble = () => {
      interval = setInterval(() => {
        setDisplayText((prev) => 
          text.split('').map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (letter === ' ') return ' ';
            return chars[Math.floor(Math.random() * chars.length)];
          }).join('')
        );
        
        if (iteration >= text.length) {
          clearInterval(interval);
        }
        
        iteration += 1 / 3;
      }, 40);
    };

    const timeout = setTimeout(startScramble, delay);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return displayText;
};

const Loader = ({ onComplete }) => {
  const nameScramble = useScramble('HARIVONY', 300);
  const titleScramble = useScramble('PORTFOLIO', 1500);

  useEffect(() => {
    const t = setTimeout(() => {
      onComplete();
    }, 4000);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--theme-bg)] text-[var(--theme-primary)] font-mono">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, filter: "blur(10px)" }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-widest gradient-text pb-2">
          {nameScramble}
        </h1>
        <h2 className="text-xl md:text-2xl tracking-[0.5em] text-[var(--theme-text)] font-sans">
          {titleScramble}
        </h2>
        
        <div className="mt-12 h-1 w-64 bg-[var(--theme-surface)] overflow-hidden relative mx-auto rounded-full">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)]"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Loader;
