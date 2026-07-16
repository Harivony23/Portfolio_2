import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
          toast.success('System: Message transmis', {
            position: "bottom-right",
            theme: "dark"
          });
          e.target.reset();
          setLoading(false);
      }, (error) => {
          console.log(error.text);
          toast.error('System: Echec de la transmission', {
            position: "bottom-right",
            theme: "dark"
          });
          setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-[var(--theme-border)]">
      <ToastContainer />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center lg:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 uppercase tracking-tight">
          Me <span className="text-[var(--theme-muted)]">Contacter</span>
        </h2>
        <div className="h-[1px] w-full bg-[var(--theme-border)] mt-4"></div>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-4 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:w-5/12 flex flex-col gap-4"
        >
          <div className="bento-box p-8 h-full flex flex-col justify-between glow-primary">
            <div>
              <div className="text-[10px] font-mono text-[var(--theme-primary)] uppercase tracking-widest mb-6 border-b border-[var(--theme-border)] pb-2 inline-block">
                [ Discutons ]
              </div>
              <h3 className="text-2xl font-bold font-heading mb-6 text-white uppercase tracking-wide">Laissez-moi un message</h3>
              <p className="text-[var(--theme-muted)] leading-relaxed text-sm font-mono mb-10">
                Je suis toujours ouvert aux nouvelles opportunités. N'hésitez pas à me contacter pour toute collaboration.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 flex items-center justify-center border border-[var(--theme-border)] bg-black/50 text-[var(--theme-muted)] group-hover:bg-[var(--theme-primary)] group-hover:text-white transition-all duration-300">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-[var(--theme-muted)] uppercase tracking-widest mb-1">Téléphone</p>
                  <p className="text-sm text-white font-mono">+261 34 38 169 98</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 flex items-center justify-center border border-[var(--theme-border)] bg-black/50 text-[var(--theme-muted)] group-hover:bg-[var(--theme-primary)] group-hover:text-white transition-all duration-300">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-[var(--theme-muted)] uppercase tracking-widest mb-1">Email</p>
                  <p className="text-sm text-white font-mono">harirajao2308@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 flex items-center justify-center border border-[var(--theme-border)] bg-black/50 text-[var(--theme-muted)] group-hover:bg-[var(--theme-primary)] group-hover:text-white transition-all duration-300">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-[var(--theme-muted)] uppercase tracking-widest mb-1">Adresse</p>
                  <p className="text-sm text-white font-mono">Lot 490 Analamahitsy Cité</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:w-7/12"
        >
          <form ref={form} onSubmit={sendEmail} className="bento-box p-8 md:p-10 flex flex-col gap-6 glow-secondary h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control w-full">
                <label className="label mb-2 block">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--theme-muted)]">Nom complet</span>
                </label>
                <input 
                  type="text" 
                  name="user_name" 
                  required 
                  className="w-full bg-black/50 border border-[var(--theme-border)] focus:border-[var(--theme-primary)] outline-none text-white font-mono p-3 text-sm transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div className="form-control w-full">
                <label className="label mb-2 block">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--theme-muted)]">Adresse email</span>
                </label>
                <input 
                  type="email" 
                  name="user_email" 
                  required 
                  className="w-full bg-black/50 border border-[var(--theme-border)] focus:border-[var(--theme-primary)] outline-none text-white font-mono p-3 text-sm transition-colors"
                  placeholder="Votre email"
                />
              </div>
            </div>
            
            <div className="form-control w-full flex-1 flex flex-col">
              <label className="label mb-2 block">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--theme-muted)]">Votre message</span>
              </label>
              <textarea 
                name="message" 
                required 
                className="w-full bg-black/50 border border-[var(--theme-border)] focus:border-[var(--theme-primary)] outline-none text-white font-mono p-3 text-sm transition-colors resize-none flex-1 min-h-[150px]"
                placeholder="Écrivez votre message ici..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 bg-white text-black py-4 hover:bg-gray-200 transition-colors font-mono text-sm uppercase tracking-widest disabled:opacity-50 disabled:cursor-wait group"
            >
              {loading ? 'Envoi en cours...' : (
                <>
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" /> 
                  Envoyer le message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
