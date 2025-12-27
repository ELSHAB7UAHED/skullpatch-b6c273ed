import React from 'react';
import { motion } from 'framer-motion';
import { 
  Skull, 
  Download, 
  Terminal, 
  Palette, 
  Settings, 
  Layers 
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturesSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: Skull,
      title: t('features.gui.title'),
      description: t('features.gui.desc'),
      color: 'neon-cyan',
    },
    {
      icon: Download,
      title: t('features.install.title'),
      description: t('features.install.desc'),
      color: 'neon-magenta',
    },
    {
      icon: Terminal,
      title: t('features.terminal.title'),
      description: t('features.terminal.desc'),
      color: 'neon-purple',
    },
    {
      icon: Palette,
      title: t('features.custom.title'),
      description: t('features.custom.desc'),
      color: 'neon-cyan',
    },
    {
      icon: Settings,
      title: t('features.auto.title'),
      description: t('features.auto.desc'),
      color: 'neon-magenta',
    },
    {
      icon: Layers,
      title: t('features.system.title'),
      description: t('features.system.desc'),
      color: 'neon-purple',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-terminal" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary tracking-widest">FEATURES</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-gradient-cyber">{t('features.title')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
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
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
              
              <div className="relative p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 h-full">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow`}
                  style={{
                    boxShadow: `0 0 20px hsl(var(--${feature.color}) / 0.3)`,
                  }}
                >
                  <feature.icon className={`w-8 h-8 text-${feature.color}`} style={{ color: `hsl(var(--${feature.color}))` }} />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Line */}
                <div 
                  className="absolute bottom-0 left-8 right-8 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'var(--gradient-cyber)' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
