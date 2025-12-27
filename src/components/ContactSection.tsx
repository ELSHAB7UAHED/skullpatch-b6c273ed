import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/skullpatch-logo.png';

const ContactSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'amedelshab7@gmail.com',
      href: 'mailto:amedelshab7@gmail.com',
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+20 101 481 2328',
      href: 'tel:+201014812328',
    },
    {
      icon: Globe,
      label: t('contact.website'),
      value: 'ahmednour.vercel.app',
      href: 'https://ahmednour.vercel.app',
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: 'قنا، مصر 🇪🇬',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-terminal" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, hsl(var(--neon-cyan) / 0.2), transparent 50%)',
        }}
      />
      <div className="absolute inset-0 circuit-pattern opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-6"
          >
            <Mail className="w-4 h-4 text-secondary" />
            <span className="text-sm font-mono text-secondary tracking-widest">CONTACT</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-gradient-cyber">{t('contact.title')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Developer Info */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-start"
          >
            <div className="inline-block mb-6">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-32 h-32 rounded-full bg-gradient-cyber p-1"
              >
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <img 
                    src={logo} 
                    alt="Developer" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
              </motion.div>
            </div>

            <h3 className="text-2xl font-display font-bold text-foreground mb-2">
              {t('contact.developer')}
            </h3>
            <p className="text-3xl font-display font-black text-gradient-cyber mb-4">
              أحمد نور أحمد
            </p>
            <p className="text-xl font-display text-primary mb-2">
              Ahmed Nour Ahmed
            </p>
            <p className="text-muted-foreground flex items-center justify-center lg:justify-start gap-2">
              <MapPin className="w-4 h-4" />
              Qena, Egypt 🇪🇬
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    <ContactCard info={info} />
                  </a>
                ) : (
                  <ContactCard info={info} />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactCard: React.FC<{ info: { icon: React.ComponentType<any>; label: string; value: string } }> = ({ info }) => (
  <div className="p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 h-full">
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
      <info.icon className="w-6 h-6 text-primary" />
    </div>
    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
      {info.value}
    </p>
  </div>
);

export default ContactSection;
