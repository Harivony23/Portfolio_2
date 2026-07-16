import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const projectsData = [
  {
    title: 'Gestion Plateforme Musique MP3',
    tech: ['React', 'Symphony', 'Java', 'MySQL'],
    desc: 'Application complète pour la gestion et l\'écoute de musique MP3. Interface fluide et gestion de base de données robuste.',
    span: 'col-span-1 md:col-span-2 row-span-2', // Featured
    mockup: 'browser',
    color: 'glow-primary'
  },
  {
    title: 'Detection Plagiat Laravel',
    tech: ['Php', 'Laravel', 'PostgreSQL'],
    desc: 'Système avancé de détection de similitudes de textes pour prévenir le plagiat.',
    span: 'col-span-1 row-span-1',
    mockup: 'window',
    color: 'glow-secondary'
  },
  {
    title: 'Gestion Garage',
    tech: ['Ionic', 'Godot', 'Laravel', 'Firebase'],
    desc: 'Application mobile et système backend pour la gestion d\'un garage automobile.',
    span: 'col-span-1 row-span-1',
    mockup: 'phone',
    color: 'glow-primary'
  },
  {
    title: 'Identité visuelle de marque',
    tech: ['Illustrator', 'InDesign', 'Photoshop'],
    desc: 'Création complète de l\'identité visuelle et charte graphique pour des marques.',
    span: 'col-span-1 row-span-1',
    mockup: 'window',
    color: 'glow-secondary'
  },
  {
    title: 'Packaging',
    tech: ['Illustrator', 'Photoshop'],
    desc: 'Mise en forme et design de packaging de produits créatifs.',
    span: 'col-span-1 md:col-span-2 row-span-1',
    mockup: 'window',
    color: 'glow-primary'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center lg:text-left flex flex-col lg:flex-row justify-between items-end gap-6"
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 uppercase tracking-tight">
            Travaux <span className="text-[var(--theme-muted)]">/ Projets</span>
          </h2>
          <div className="h-[1px] w-full bg-[var(--theme-border)] mt-4"></div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`group bento-box p-6 md:p-8 flex flex-col justify-between ${project.span}`}
          >
            {/* Ambient glow */}
            <div className={`absolute -right-20 -top-20 w-64 h-64 ${project.color} rounded-full blur-[80px] opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none`}></div>
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[var(--theme-muted)]">
                    <Folder size={28} strokeWidth={1.5} />
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-[var(--theme-muted)] hover:text-white transition-colors">
                      <FiGithub size={20} />
                    </a>
                    <a href="#" className="text-[var(--theme-muted)] hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-heading uppercase tracking-wide group-hover:text-[var(--theme-primary)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--theme-muted)] text-sm leading-relaxed font-mono">
                  {project.desc}
                </p>
              </div>
              
              <ul className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((tech, i) => (
                  <li key={i} className="text-[10px] uppercase tracking-widest font-mono text-[var(--theme-muted)] border border-[var(--theme-border)] px-2 py-1 bg-black/50">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
