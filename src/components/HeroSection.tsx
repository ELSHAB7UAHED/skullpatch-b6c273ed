import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, Terminal, Shield, Zap, Skull, Code, Lock, Bug } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/skullpatch-logo.png';

const HeroSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [typedText, setTypedText] = useState('');
  const fullText = '> SKULLPATCH v1.0 initialized...';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { value: '1000+', label: t('hero.stats.tools'), icon: Terminal },
    { value: '5000+', label: t('hero.stats.users'), icon: Shield },
    { value: '4.9/5', label: t('hero.stats.rating'), icon: Zap },
  ];

  const floatingIcons = [
    { icon: Skull, delay: 0 },
    { icon: Code, delay: 0.5 },
    { icon: Lock, delay: 1 },
    { icon: Bug, delay: 1.5 },
    { icon: Shield, delay: 2 },
  ];

  const scrollToDownload = () => {
    const element = document.getElementById('download');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(var(--neon-cyan) / 0.2), transparent 60%)',
          top: '10%',
          left: '20%',
        }}
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(var(--neon-magenta) / 0.15), transparent 60%)',
          bottom: '10%',
          right: '20%',
        }}
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Animated Rotating Circles */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full border border-primary/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        style={{ top: '5%', left: '50%', transform: 'translateX(-50%)' }}
      />
      <motion.div
        className="absolute w-[900px] h-[900px] rounded-full border border-accent/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        style={{ top: '0%', left: '50%', transform: 'translateX(-50%)' }}
      />
      <motion.div
        className="absolute w-[1100px] h-[1100px] rounded-full border border-neon-magenta/5"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        style={{ top: '-5%', left: '50%', transform: 'translateX(-50%)' }}
      />

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block"
          style={{
            left: `${15 + index * 18}%`,
            top: `${20 + (index % 3) * 20}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            delay: item.delay,
          }}
        >
          <item.icon className="w-8 h-8 text-primary/40" />
        </motion.div>
      ))}

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent w-full"
            style={{ top: `${i * 10 + 5}%` }}
            animate={{ opacity: [0.1, 0.5, 0.1], scaleX: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`flex-1 text-center lg:${isRTL ? 'text-right' : 'text-left'}`}
          >
            {/* Terminal Command */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <div className="inline-block bg-cyber-dark border border-primary/30 rounded-lg px-4 py-2 font-mono text-sm">
                <span className="text-primary">{typedText}</span>
                <motion.span
                  className="inline-block w-2 h-4 bg-primary ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                <Terminal className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm font-mono text-primary tracking-widest">
                {t('hero.subtitle')}
              </span>
            </motion.div>

            {/* Title with Glitch Effect */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-6 relative"
            >
              <motion.span 
                className="text-gradient-cyber relative inline-block"
                whileHover={{ scale: 1.05 }}
              >
                {t('hero.title')}
                {/* Glitch layers */}
                <motion.span
                  className="absolute inset-0 text-gradient-cyber opacity-0"
                  animate={{ 
                    opacity: [0, 0.8, 0],
                    x: [-2, 2, -2],
                  }}
                  transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 5 }}
                  style={{ textShadow: '2px 0 hsl(var(--neon-cyan))' }}
                >
                  {t('hero.title')}
                </motion.span>
              </motion.span>
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToDownload}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-cyber text-primary-foreground font-display font-bold rounded-xl overflow-hidden"
              >
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  style={{ padding: '2px', background: 'linear-gradient(90deg, hsl(var(--neon-cyan)), hsl(var(--neon-magenta)), hsl(var(--neon-cyan)))' }}
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <span className="relative z-10 flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  {t('hero.cta.download')}
                </span>
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
              </motion.button>

              <Link to="/docs">
                <motion.button
                  whileHover={{ scale: 1.05, borderColor: 'hsl(var(--primary))' }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-muted hover:bg-muted/80 text-foreground font-display font-bold rounded-xl border border-primary/30 transition-colors relative overflow-hidden"
                >
                  <FileText className="w-5 h-5" />
                  {t('hero.cta.docs')}
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-primary rounded-xl"
                    animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats with animation */}
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
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/50 transition-all cursor-default"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  </motion.div>
                  <motion.div 
                    className="text-2xl md:text-3xl font-display font-bold text-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + index * 0.2 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Logo/Image with enhanced effects */}
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
              {/* Multi-layer Glow Effect */}
              <motion.div 
                className="absolute inset-0 blur-3xl"
                style={{
                  background: 'radial-gradient(circle, hsl(var(--neon-cyan) / 0.5), transparent)',
                }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="absolute inset-0 blur-2xl"
                style={{
                  background: 'radial-gradient(circle, hsl(var(--neon-magenta) / 0.3), transparent)',
                }}
                animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              />

              {/* Rotating rings */}
              <motion.div
                className="absolute inset-[-20px] border-2 border-dashed border-primary/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-[-40px] border border-accent/10 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              
              <motion.img
                src={logo}
                alt="SKULLPATCH Logo"
                className="relative z-10 w-72 md:w-96 lg:w-[500px] h-auto drop-shadow-2xl"
                whileHover={{ scale: 1.08, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 200 }}
                style={{
                  filter: 'drop-shadow(0 0 30px hsl(var(--neon-cyan) / 0.5))',
                }}
              />

              {/* Floating particles around logo */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    x: [0, Math.cos(i * 45 * Math.PI / 180) * 150],
                    y: [0, Math.sin(i * 45 * Math.PI / 180) * 150],
                    opacity: [1, 0],
                    scale: [1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.25,
                    ease: 'easeOut',
                  }}
                />
              ))}

              {/* Corner accents */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full"
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <motion.div
                className="absolute -top-6 -left-6 w-4 h-4 bg-neon-magenta rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator with enhanced animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="relative"
        >
          <motion.div
            className="absolute -inset-4 bg-primary/20 rounded-full blur-lg"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="relative w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
