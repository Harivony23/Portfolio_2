import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import CustomCursor from './components/CustomCursor';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text)] font-sans flex flex-col transition-colors duration-300 z-0">
          <CustomCursor />
          <ParticlesBackground />
          
          <Navbar />
          
          <main className="flex-grow pt-24 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto w-full z-10">
            <Hero />
            <Projects />
            <Skills />
            <Education />
            <Languages />
            <Contact />
          </main>

          <footer className="py-10 text-center border-t border-[var(--theme-border)] mt-20 text-[var(--theme-muted)] text-xs font-mono uppercase tracking-widest z-10 bg-black/50 backdrop-blur-sm">
            <div className="flex flex-col gap-2 justify-center items-center">
              <p>DÉVELOPPÉ PAR RAJAONARIVELO Harivony.</p>
              <p>&copy; {new Date().getFullYear()}</p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
