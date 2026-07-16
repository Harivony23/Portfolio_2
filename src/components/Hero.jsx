import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Cpu } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
        {/* Main Intro (Bento Span) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-8 bento-box p-8 md:p-12 glow-primary relative"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono text-white/70 uppercase tracking-widest mb-8">
            <Cpu size={14} className="text-[var(--theme-primary)]" />
            <span>En ligne</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-heading leading-[1.1] mb-6 uppercase tracking-tighter">
            Harivony <br />
            <span className="text-[var(--theme-muted)]">Rajaonarivelo</span>
          </h1>
          
          <div className="text-xl md:text-2xl font-mono text-[var(--theme-primary)] h-16 mb-6 uppercase tracking-wide">
            <TypeAnimation
              sequence={[
                '> DEVELOPPEUR INFORMATIQUE_',
                2000,
                '> UI/UX DESIGNER_',
                2000,
                '> DESIGNER GRAPHIQUE_',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          
          <p className="text-[var(--theme-muted)] max-w-2xl text-lg font-mono leading-relaxed mb-10">
            Étudiant en 3ème année à l'IT University. Passionné par la création d'interfaces IA, d'expériences numériques immersives et l'architecture backend robuste.
          </p>
          
          <div className="flex flex-wrap gap-4 font-mono text-sm uppercase tracking-widest">
            <a href="#contact" className="bento-box bg-white text-black hover:bg-gray-200 px-8 py-4 flex items-center justify-center font-bold transition-colors">
              Me_Contacter
            </a>
            <a href="/cv.pdf" download className="bento-box hover:bg-white/5 px-8 py-4 flex items-center justify-center gap-3 transition-colors text-white">
              <Download size={18} />
              <span>Mon_CV</span>
            </a>
          </div>
        </motion.div>

        {/* Side Panel Stats (Bento Span) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-4 flex flex-col gap-6"
        >
          <div className="bento-box p-8 flex-1 glow-secondary flex flex-col justify-center">
            <h3 className="text-white/50 font-mono text-xs uppercase tracking-widest mb-2">Âge</h3>
            <div className="text-4xl font-heading font-bold text-white mb-8">21<span className="text-[var(--theme-primary)]">.</span></div>
            
            <h3 className="text-white/50 font-mono text-xs uppercase tracking-widest mb-2">Ville</h3>
            <div className="text-xl font-mono text-white">Madagascar</div>
          </div>
          
          <div className="bento-box p-8 flex gap-4 justify-center items-center">
            <a href="https://github.com/Harivony23" target="_blank" rel="noreferrer" className="w-14 h-14 flex items-center justify-center border border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-[var(--theme-primary)] hover:bg-[var(--theme-primary)]/20 transition-all duration-300">
              <FiGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/harivony-rajaonarivelo/" target="_blank" rel="noreferrer" className="w-14 h-14 flex items-center justify-center border border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-[#0a66c2] hover:bg-[#0a66c2]/20 transition-all duration-300">
              <FiLinkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
