import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Globe, Maximize, Minimize } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import logo from '@/assets/skullpatch-logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { t, language, setLanguage, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/#features', label: t('nav.features') },
    { to: '/#download', label: t('nav.download') },
    { to: '/docs', label: t('nav.docs') },
    { to: '/#contact', label: t('nav.contact') },
  ];

  const handleNavClick = (to: string) => {
    setIsOpen(false);
    if (to.includes('#')) {
      const id = to.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 ${isRTL ? 'right-0' : 'left-0'} w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-xl border-b border-primary/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              src={logo}
              alt="SKULLPATCH Logo"
              className="h-12 w-auto"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <span className="font-display text-xl font-bold text-gradient-cyber hidden sm:block">
              SKULLPATCH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className={`font-display text-sm tracking-wider transition-all duration-300 hover:text-primary ${
                  location.pathname === link.to
                    ? 'text-primary'
                    : 'text-foreground/70'
                }`}
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  className="relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
                >
                  {link.label}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Fullscreen Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleFullscreen}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              title={isFullscreen ? t('exit.fullscreen') : t('fullscreen')}
            >
              {isFullscreen ? (
                <Minimize className="w-5 h-5 text-foreground" />
              ) : (
                <Maximize className="w-5 h-5 text-foreground" />
              )}
            </motion.button>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              title={t('theme.toggle')}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </motion.button>

            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors flex items-center gap-2"
            >
              <Globe className="w-5 h-5 text-foreground" />
              <span className="text-sm font-medium hidden sm:block">{t('lang.toggle')}</span>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-primary/20">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => handleNavClick(link.to)}
                      className="block py-3 px-4 font-display text-lg text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-all"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
