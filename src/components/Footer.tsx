import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Twitter, Linkedin, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/skullpatch-logo.png';

const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t('nav.home'), to: '/' },
    { label: t('nav.features'), to: '/#features' },
    { label: t('nav.download'), to: '/#download' },
    { label: t('nav.docs'), to: '/docs' },
    { label: t('nav.contact'), to: '/#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ahmednourahmed', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cyber-dark" />
      <div className="absolute inset-0 circuit-pattern opacity-5" />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(180deg, transparent, hsl(var(--neon-cyan) / 0.05))',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <motion.img
                src={logo}
                alt="SKULLPATCH"
                className="h-16 w-auto"
                whileHover={{ scale: 1.1, rotate: 5 }}
              />
              <span className="font-display text-2xl font-bold text-gradient-cyber">
                SKULLPATCH
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-primary" />
              <span>{t('footer.disclaimer')}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors border border-border hover:border-primary/50"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5 text-foreground" />
                </motion.a>
              ))}
            </div>

            {/* Developer Website */}
            <a
              href="https://ahmednour.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-primary hover:text-accent transition-colors"
            >
              ahmednour.vercel.app →
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            © {currentYear} SKULLPATCH. {t('footer.rights')}
          </p>
          
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            {t('footer.developed')}
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <a 
              href="https://ahmednour.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors font-medium"
            >
              Ahmed Nour Ahmed
            </a>
            <span>🇪🇬</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
