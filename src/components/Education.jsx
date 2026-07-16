import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const educationData = [
  {
    title: '3e année en Informatique & Design',
    institution: 'IT University (Andoharanofotsy)',
    date: '2023 - Aujourd’hui',
    desc: 'Développement Informatique, UI/UX Design et Design Graphique. Création de solutions innovantes et interfaces utilisateur.',
    icon: <GraduationCap size={16} />
  },
  {
    title: 'Baccalauréat Série A2',
    institution: 'ESCA (Antanimena)',
    date: 'Juillet 2023',
    desc: 'Diplôme de fin d\'études secondaires.',
    icon: <Award size={16} />
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative z-10 border-t border-[var(--theme-border)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center lg:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 uppercase tracking-tight">
          Mon <span className="text-[var(--theme-muted)]">Parcours</span>
        </h2>
        <div className="h-[1px] w-full bg-[var(--theme-border)] mt-4"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="relative border-l border-[var(--theme-border)] ml-6 md:ml-0">
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 ml-10 relative"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[45px] top-1 w-3 h-3 bg-[var(--theme-bg)] border border-[var(--theme-primary)] rounded-none shadow-[0_0_10px_var(--theme-primary)]"></div>
              
              <div className="bento-box p-6 md:p-8 hover:bg-white/5 group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-black/50 border border-[var(--theme-border)] flex items-center justify-center text-[var(--theme-muted)] group-hover:text-[var(--theme-primary)] transition-colors">
                      {item.icon}
                    </div>
                    <div className="font-heading font-bold text-xl uppercase tracking-wide text-white group-hover:text-[var(--theme-primary)] transition-colors">
                      {item.title}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--theme-muted)] border border-[var(--theme-border)] px-3 py-1 bg-black/30">
                    <Calendar size={12} />
                    <span>{item.date}</span>
                  </div>
                </div>
                
                <div className="text-sm font-mono text-white/70 uppercase tracking-widest mb-4">
                  [ {item.institution} ]
                </div>
                
                <p className="text-[var(--theme-muted)] font-mono text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
