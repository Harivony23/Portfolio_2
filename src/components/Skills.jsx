import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'BASE DE DONNEES',
    items: ['MySQL', 'PostgreSQL'],
    color: 'text-white'
  },
  {
    category: 'BACK-END',
    items: ['Java', 'PHP', 'Laravel'],
    color: 'text-white'
  },
  {
    category: 'FRONT-END',
    items: ['HTML/CSS/JS', 'React', 'Vue.js', 'Angular'],
    color: 'text-white'
  },
  {
    category: 'DESIGN',
    items: ['InDesign', 'Illustrator', 'Photoshop'],
    color: 'text-white'
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative z-10 border-t border-[var(--theme-border)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center lg:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 uppercase tracking-tight">
          Mes <span className="text-[var(--theme-muted)]">Compétences</span>
        </h2>
        <div className="h-[1px] w-full bg-[var(--theme-border)] mt-4"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillsData.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bento-box p-6 h-64 flex flex-col group hover:bg-white/5"
          >
            <div className="text-[10px] font-mono text-[var(--theme-primary)] uppercase tracking-widest mb-6">
              [ {skillGroup.category} ]
            </div>
            
            <div className="flex-1 flex flex-col gap-3">
              {skillGroup.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-mono text-sm">
                  <span className="w-1.5 h-1.5 bg-[var(--theme-muted)] group-hover:bg-[var(--theme-primary)] transition-colors"></span>
                  <span className="text-white/80 group-hover:text-white transition-colors uppercase tracking-wider">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
