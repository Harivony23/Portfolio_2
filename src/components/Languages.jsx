import { motion } from 'framer-motion';

const languages = [
  { name: 'Malgache', level: 'Natif', percentage: 100 },
  { name: 'Français', level: 'Courant', percentage: 85 },
  { name: 'Anglais', level: 'Basique', percentage: 45 },
];

const Languages = () => {
  return (
    <section id="languages" className="py-24 relative z-10 border-t border-[var(--theme-border)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center lg:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 uppercase tracking-tight">
          Mes <span className="text-[var(--theme-muted)]">Langues</span>
        </h2>
        <div className="h-[1px] w-full bg-[var(--theme-border)] mt-4"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {languages.map((lang, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bento-box p-8 flex flex-col items-center justify-center text-center group hover:bg-white/5"
          >
            <div className="text-[10px] font-mono text-[var(--theme-primary)] uppercase tracking-widest mb-8 border-b border-[var(--theme-border)] pb-2 inline-block w-full text-left">
              [ {lang.level} ]
            </div>
            
            <div 
              className="radial-progress text-[var(--theme-primary)] transition-all duration-1000 mb-6 bg-black/50" 
              style={{ "--value": lang.percentage, "--size": "8rem", "--thickness": "0.2rem" }} 
              role="progressbar"
            >
              <span className="font-mono text-xl font-bold text-white">
                {lang.percentage}%
              </span>
            </div>
            
            <h3 className="text-2xl font-bold font-heading text-white uppercase tracking-wide group-hover:text-[var(--theme-primary)] transition-colors">
              {lang.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
