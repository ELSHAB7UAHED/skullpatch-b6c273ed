import React from 'react';
import { motion } from 'framer-motion';
import { Code, Github, Mail, Phone, ExternalLink, Sparkles, Zap, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import developerImage from '@/assets/developer.png';

const DeveloperSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const skills = [
    { name: 'Python', level: 95 },
    { name: 'Cybersecurity', level: 90 },
    { name: 'Web Development', level: 85 },
    { name: 'AI & ML', level: 80 },
  ];

  const achievements = [
    { icon: Code, label: '50+ Projects', value: 'Completed' },
    { icon: Zap, label: '5+ Years', value: 'Experience' },
    { icon: Award, label: '1000+', value: 'Happy Users' },
  ];

  return (
    <section id="developer" className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-cyber-dark" />
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Large Glow Effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--neon-cyan) / 0.1), transparent 60%)',
        }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6"
            animate={{ boxShadow: ['0 0 20px hsl(var(--accent) / 0.3)', '0 0 40px hsl(var(--accent) / 0.5)', '0 0 20px hsl(var(--accent) / 0.3)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-mono text-accent tracking-widest">THE CREATOR</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-display font-black mb-6">
            <span className="text-foreground">{t('developer.title')}</span>
          </h2>
        </motion.div>

        {/* Developer Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            {/* Card Background */}
            <div className="absolute inset-0 bg-card" />
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--neon-cyan) / 0.3), hsl(var(--accent) / 0.3))',
              }}
              animate={{ 
                background: [
                  'linear-gradient(135deg, hsl(var(--neon-cyan) / 0.3), hsl(var(--accent) / 0.3))',
                  'linear-gradient(225deg, hsl(var(--accent) / 0.3), hsl(var(--neon-magenta) / 0.3))',
                  'linear-gradient(315deg, hsl(var(--neon-magenta) / 0.3), hsl(var(--neon-cyan) / 0.3))',
                  'linear-gradient(135deg, hsl(var(--neon-cyan) / 0.3), hsl(var(--accent) / 0.3))',
                ]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            
            {/* Cyber Border */}
            <div className="absolute inset-0 border-2 border-primary/30 rounded-3xl" />
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-cyber"
              animate={{ scaleX: [0, 1, 0], x: ['-100%', '0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Content */}
            <div className="relative p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Developer Image */}
                <motion.div
                  className="relative flex-shrink-0"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {/* Rotating Border */}
                  <motion.div
                    className="absolute -inset-3 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, hsl(var(--neon-cyan)), hsl(var(--accent)), hsl(var(--neon-magenta)), hsl(var(--neon-cyan)))',
                      padding: '3px',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  >
                    <div className="w-full h-full bg-card rounded-full" />
                  </motion.div>

                  {/* Glow Effect */}
                  <motion.div
                    className="absolute -inset-6 bg-primary/30 blur-2xl rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Image */}
                  <motion.div
                    className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/50"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={developerImage}
                      alt="Ahmed Nour Ahmed"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Scan Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent"
                      animate={{ y: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    />
                  </motion.div>

                  {/* Status Badge */}
                  <motion.div
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 bg-primary rounded-full flex items-center gap-2"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <span className="text-xs font-bold text-primary-foreground">AVAILABLE</span>
                  </motion.div>
                </motion.div>

                {/* Developer Info */}
                <div className="flex-1 text-center lg:text-left">
                  <motion.h3
                    className="text-3xl md:text-4xl font-display font-black mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-gradient-cyber">Ahmed Nour Ahmed</span>
                  </motion.h3>
                  
                  <motion.div
                    className="flex items-center justify-center lg:justify-start gap-3 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-2xl">🇪🇬</span>
                    <span className="text-muted-foreground font-mono">Qena, Egypt</span>
                    <span className="px-3 py-1 bg-accent/20 rounded-full text-xs font-bold text-accent border border-accent/30">
                      Security Expert
                    </span>
                  </motion.div>

                  <motion.p
                    className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {t('developer.bio')}
                  </motion.p>

                  {/* Skills */}
                  <div className="space-y-4 mb-8">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-mono text-foreground">{skill.name}</span>
                          <span className="text-sm font-mono text-primary">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-cyber rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Contact Links */}
                  <motion.div
                    className="flex flex-wrap gap-4 justify-center lg:justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                  >
                    <motion.a
                      href="https://ahmednour.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold transition-all"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 30px hsl(var(--neon-cyan) / 0.5)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Portfolio</span>
                    </motion.a>

                    <motion.a
                      href="mailto:amedelshab7@gmail.com"
                      className="group flex items-center gap-2 px-6 py-3 bg-muted text-foreground rounded-xl font-bold border border-border hover:border-primary/50 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail className="w-5 h-5 text-primary" />
                      <span>Email</span>
                    </motion.a>

                    <motion.a
                      href="tel:+201014812328"
                      className="group flex items-center gap-2 px-6 py-3 bg-muted text-foreground rounded-xl font-bold border border-border hover:border-accent/50 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Phone className="w-5 h-5 text-accent" />
                      <span>Call</span>
                    </motion.a>

                    <motion.a
                      href="https://github.com/ahmednourahmed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-6 py-3 bg-muted text-foreground rounded-xl font-bold border border-border hover:border-primary/50 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                    </motion.a>
                  </motion.div>
                </div>
              </div>

              {/* Achievements */}
              <motion.div
                className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-border/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    className="text-center p-4 rounded-xl bg-muted/50 border border-border/50 hover:border-primary/30 transition-all"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <achievement.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-xl md:text-2xl font-display font-black text-foreground">
                      {achievement.label}
                    </div>
                    <div className="text-xs text-muted-foreground">{achievement.value}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeveloperSection;
