import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Terminal, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/skullpatch-logo.png';

const HeroSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const stats = [
    { value: '1000+', label: t('hero.stats.tools'), icon: Terminal },
    { value: '5000+', label: t('hero.stats.users'), icon: Shield },
    { value: '4.9/5', label: t('hero.stats.rating'), icon: Zap },
  ];

  const scrollToDownload = () => {
    const element = document.getElementById('download');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, hsl(var(--neon-cyan) / 0.15), transparent 60%)',
        }}
      />
      
      {/* Animated Circles */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full border border-primary/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        style={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }}
      />
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full border border-accent/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        style={{ top: '5%', left: '50%', transform: 'translateX(-50%)' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`flex-1 text-center lg:${isRTL ? 'text-right' : 'text-left'}`}
          >
            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
            >
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-primary tracking-widest">
                {t('hero.subtitle')}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-6"
            >
              <span className="text-gradient-cyber">{t('hero.title')}</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px hsl(var(--neon-cyan) / 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToDownload}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-cyber text-primary-foreground font-display font-bold rounded-xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  {t('hero.cta.download')}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-neon-magenta to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
              </motion.button>

              <Link to="/docs">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-muted hover:bg-muted/80 text-foreground font-display font-bold rounded-xl border border-primary/30 transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  {t('hero.cta.docs')}
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Logo/Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 blur-3xl opacity-50"
                style={{
                  background: 'radial-gradient(circle, hsl(var(--neon-cyan) / 0.4), hsl(var(--neon-magenta) / 0.4), transparent)',
                }}
              />
              
              <motion.img
                src={logo}
                alt="SKULLPATCH Logo"
                className="relative z-10 w-72 md:w-96 lg:w-[500px] h-auto drop-shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 200 }}
              />

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
