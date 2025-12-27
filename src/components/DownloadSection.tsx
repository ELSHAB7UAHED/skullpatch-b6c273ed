import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Github, Check, Terminal, Package, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/skullpatch-logo.png';

const DownloadSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate download
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadComplete(true);
      // Create download link
      const content = `#!/usr/bin/env python3
# SKULLPATCH - GUI Tool Installer for Kali Linux
# Download the full version from GitHub
# https://github.com/ahmednourahmed/skullpatch

print("SKULLPATCH - Coming Soon!")
print("Visit our website for the full download.")
`;
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'SKULLPATCH_preview.py';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      setTimeout(() => setDownloadComplete(false), 3000);
    }, 2000);
  };

  const installSteps = [
    { icon: Package, label: t('install.step1'), command: 'git clone https://github.com/ahmednourahmed/skullpatch.git' },
    { icon: Terminal, label: t('install.step2'), command: 'pip install pillow psutil' },
    { icon: Play, label: t('install.step3'), command: 'python3 SKULLPATCH.py' },
  ];

  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, hsl(var(--neon-magenta) / 0.2), transparent 50%), radial-gradient(ellipse at 70% 50%, hsl(var(--neon-cyan) / 0.2), transparent 50%)',
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6"
          >
            <Download className="w-4 h-4 text-accent" />
            <span className="text-sm font-mono text-accent tracking-widest">DOWNLOAD</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-gradient-cyber">{t('download.title')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('download.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Download Card */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative p-8 bg-card rounded-3xl border border-primary/30 overflow-hidden">
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, hsl(var(--neon-cyan) / 0.3), transparent 50%)',
                }}
              />

              <div className="relative z-10">
                {/* Logo */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="flex justify-center mb-8"
                >
                  <img 
                    src={logo} 
                    alt="SKULLPATCH" 
                    className="w-32 h-32 object-contain"
                  />
                </motion.div>

                {/* Info */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">{t('download.version')}</span>
                    <span className="font-mono text-primary">v2.0.0</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">{t('download.size')}</span>
                    <span className="font-mono text-foreground">~50 KB</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">{t('download.requirements')}</span>
                    <span className="font-mono text-foreground text-sm">{t('download.requirements.list')}</span>
                  </div>
                </div>

                {/* Download Buttons */}
                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="w-full relative group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-cyber text-primary-foreground font-display font-bold rounded-xl overflow-hidden disabled:opacity-70"
                  >
                    <AnimatePresence mode="wait">
                      {isDownloading ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                          <span>Downloading...</span>
                        </motion.div>
                      ) : downloadComplete ? (
                        <motion.div
                          key="complete"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-3"
                        >
                          <Check className="w-5 h-5" />
                          <span>Downloaded!</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="download"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-3"
                        >
                          <Download className="w-5 h-5" />
                          <span>{t('download.button')}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>

                  <motion.a
                    href="https://github.com/ahmednourahmed/skullpatch"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-muted hover:bg-muted/80 text-foreground font-display font-bold rounded-xl border border-border transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>{t('download.github')}</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Installation Steps */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-bold mb-8 text-foreground">
              {t('install.title')}
            </h3>

            <div className="space-y-6">
              {installSteps.map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-mono text-primary">0{index + 1}</span>
                        <span className="text-foreground font-medium">{step.label}</span>
                      </div>
                      <div className="p-4 bg-background rounded-xl border border-border font-mono text-sm text-muted-foreground overflow-x-auto">
                        <code className="text-neon-cyan">$ </code>
                        <code>{step.command}</code>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
