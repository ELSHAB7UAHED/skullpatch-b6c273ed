import React from 'react';
import { motion } from 'framer-motion';
import { 
  Skull, 
  Download, 
  Terminal, 
  Palette, 
  Settings, 
  Layers,
  Sparkles,
  Cpu,
  Shield
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturesSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: Skull,
      title: t('features.gui.title'),
      description: t('features.gui.desc'),
      gradient: 'from-cyan-500 to-blue-500',
      glowColor: 'neon-cyan',
    },
    {
      icon: Download,
      title: t('features.install.title'),
      description: t('features.install.desc'),
      gradient: 'from-pink-500 to-purple-500',
      glowColor: 'neon-magenta',
    },
    {
      icon: Terminal,
      title: t('features.terminal.title'),
      description: t('features.terminal.desc'),
      gradient: 'from-purple-500 to-indigo-500',
      glowColor: 'neon-purple',
    },
    {
      icon: Palette,
      title: t('features.custom.title'),
      description: t('features.custom.desc'),
      gradient: 'from-cyan-500 to-teal-500',
      glowColor: 'neon-cyan',
    },
    {
      icon: Settings,
      title: t('features.auto.title'),
      description: t('features.auto.desc'),
      gradient: 'from-orange-500 to-pink-500',
      glowColor: 'neon-magenta',
    },
    {
      icon: Layers,
      title: t('features.system.title'),
      description: t('features.system.desc'),
      gradient: 'from-violet-500 to-purple-500',
      glowColor: 'neon-purple',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
    },
  };

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-terminal" />
      <div className="absolute inset-0 circuit-pattern opacity-10" />

      {/* Animated Background Elements */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(var(--neon-cyan)), transparent)',
          top: '10%',
          left: '5%',
        }}
        animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(var(--neon-magenta)), transparent)',
          bottom: '10%',
          right: '5%',
        }}
        animate={{ scale: [1, 1.2, 1], x: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
            animate={{ 
              boxShadow: ['0 0 15px hsl(var(--neon-cyan) / 0.2)', '0 0 30px hsl(var(--neon-cyan) / 0.4)', '0 0 15px hsl(var(--neon-cyan) / 0.2)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              <Cpu className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-mono text-primary tracking-widest">POWERFUL FEATURES</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-display font-black mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-gradient-cyber">{t('features.title')}</span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {t('features.subtitle')}
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                transition: { type: 'spring', stiffness: 300 }
              }}
              className="group relative perspective-1000"
            >
              {/* Card Glow */}
              <motion.div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ 
                  background: `radial-gradient(circle, hsl(var(--${feature.glowColor}) / 0.3), transparent)` 
                }}
              />
              
              <div className="relative p-8 bg-card/80 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 h-full overflow-hidden">
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--${feature.glowColor}) / 0.3), transparent)`,
                  }}
                />

                {/* Scan Line Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  initial={false}
                >
                  <motion.div
                    className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                    animate={{ y: ['-100%', '400%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.div>

                {/* Icon */}
                <motion.div
                  className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--${feature.glowColor}) / 0.2), hsl(var(--${feature.glowColor}) / 0.05))`,
                    boxShadow: `0 0 30px hsl(var(--${feature.glowColor}) / 0.3)`,
                  }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    animate={{ 
                      boxShadow: [
                        `0 0 20px hsl(var(--${feature.glowColor}) / 0.3)`,
                        `0 0 40px hsl(var(--${feature.glowColor}) / 0.5)`,
                        `0 0 20px hsl(var(--${feature.glowColor}) / 0.3)`,
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-2xl"
                  />
                  <feature.icon 
                    className="w-10 h-10 relative z-10" 
                    style={{ color: `hsl(var(--${feature.glowColor}))` }} 
                  />
                </motion.div>

                {/* Content */}
                <motion.h3 
                  className="text-xl font-display font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300"
                >
                  {feature.title}
                </motion.h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom Gradient Line */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'var(--gradient-cyber)' }}
                />

                {/* Corner Decorations */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/20 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-muted/50 rounded-full border border-border"
            animate={{ 
              boxShadow: ['0 0 0 0 hsl(var(--primary) / 0.2)', '0 0 0 10px hsl(var(--primary) / 0)', '0 0 0 0 hsl(var(--primary) / 0.2)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground font-mono text-sm">
              {t('features.more') || 'And many more features...'}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
