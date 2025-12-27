import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.download': 'Download',
    'nav.docs': 'Documentation',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.subtitle': 'ADVANCED TOOL INSTALLER',
    'hero.title': 'SKULLPATCH',
    'hero.description': 'The ultimate GUI tool installer for Kali Linux. Deploy Python-based hacking tools with style, precision, and power. Transform your terminal experience with our revolutionary installer.',
    'hero.cta.download': 'Download Now',
    'hero.cta.docs': 'Read Documentation',
    'hero.stats.tools': 'Tools Deployed',
    'hero.stats.users': 'Active Users',
    'hero.stats.rating': 'User Rating',
    
    // Features Section
    'features.title': 'Powerful Features',
    'features.subtitle': 'Everything you need to deploy and manage your hacking tools',
    'features.gui.title': 'Dark Hacking GUI',
    'features.gui.desc': 'Immersive dark-themed interface with animated elements and real-time visual feedback designed for hackers.',
    'features.install.title': 'One-Click Install',
    'features.install.desc': 'Install any Python script as a Linux tool with automatic menu integration and desktop shortcuts.',
    'features.terminal.title': 'Built-in Terminal',
    'features.terminal.desc': 'Integrated terminal with log viewer for monitoring installation progress and debugging.',
    'features.custom.title': 'Custom Icons',
    'features.custom.desc': 'Add custom icons to your tools for a personalized application menu experience.',
    'features.auto.title': 'Auto Configuration',
    'features.auto.desc': 'Automatic dependency installation, post-install commands, and system integration.',
    'features.system.title': 'System Integration',
    'features.system.desc': 'Add tools to autostart, create global commands, and integrate with your workflow.',
    
    // Download Section
    'download.title': 'Download SKULLPATCH',
    'download.subtitle': 'Get started with the most powerful tool installer for Kali Linux',
    'download.version': 'Latest Version',
    'download.size': 'Size',
    'download.requirements': 'Requirements',
    'download.requirements.list': 'Python 3, Tkinter, Pillow, psutil',
    'download.button': 'Download SKULLPATCH',
    'download.github': 'View on GitHub',
    
    // Installation Steps
    'install.title': 'Quick Installation',
    'install.step1': 'Download the package',
    'install.step2': 'Install dependencies',
    'install.step3': 'Run SKULLPATCH',
    
    // Documentation
    'docs.title': 'Documentation',
    'docs.subtitle': 'Complete guide to using SKULLPATCH',
    'docs.getting.started': 'Getting Started',
    'docs.installation': 'Installation Guide',
    'docs.usage': 'How to Use',
    'docs.advanced': 'Advanced Features',
    'docs.troubleshooting': 'Troubleshooting',
    'docs.faq': 'FAQ',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Have questions? Need support? Contact the developer.',
    'contact.developer': 'Developer',
    'contact.location': 'Location',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.website': 'Website',
    
    // Footer
    'footer.rights': 'All Rights Reserved',
    'footer.developed': 'Developed with passion by',
    'footer.disclaimer': 'This tool is intended for ethical use only.',
    
    // Misc
    'theme.toggle': 'Toggle Theme',
    'lang.toggle': 'العربية',
    'fullscreen': 'Fullscreen',
    'exit.fullscreen': 'Exit Fullscreen',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.features': 'المميزات',
    'nav.download': 'التحميل',
    'nav.docs': 'التوثيق',
    'nav.contact': 'تواصل معنا',
    
    // Hero Section
    'hero.subtitle': 'مثبت الأدوات المتقدم',
    'hero.title': 'SKULLPATCH',
    'hero.description': 'مثبت الأدوات الرسومي النهائي لنظام Kali Linux. قم بنشر أدوات الاختراق المبنية بـ Python بأناقة ودقة وقوة. حوّل تجربة الطرفية مع المثبت الثوري.',
    'hero.cta.download': 'تحميل الآن',
    'hero.cta.docs': 'قراءة التوثيق',
    'hero.stats.tools': 'أداة تم نشرها',
    'hero.stats.users': 'مستخدم نشط',
    'hero.stats.rating': 'تقييم المستخدمين',
    
    // Features Section
    'features.title': 'مميزات قوية',
    'features.subtitle': 'كل ما تحتاجه لنشر وإدارة أدوات الاختراق',
    'features.gui.title': 'واجهة هاكينج داكنة',
    'features.gui.desc': 'واجهة غامقة غامرة مع عناصر متحركة وردود فعل مرئية في الوقت الفعلي مصممة للهاكرز.',
    'features.install.title': 'تثبيت بنقرة واحدة',
    'features.install.desc': 'ثبت أي سكريبت Python كأداة Linux مع تكامل تلقائي في القائمة واختصارات سطح المكتب.',
    'features.terminal.title': 'طرفية مدمجة',
    'features.terminal.desc': 'طرفية متكاملة مع عارض السجلات لمراقبة تقدم التثبيت وتصحيح الأخطاء.',
    'features.custom.title': 'أيقونات مخصصة',
    'features.custom.desc': 'أضف أيقونات مخصصة لأدواتك للحصول على تجربة قائمة تطبيقات شخصية.',
    'features.auto.title': 'تكوين تلقائي',
    'features.auto.desc': 'تثبيت تلقائي للتبعيات، أوامر ما بعد التثبيت، وتكامل النظام.',
    'features.system.title': 'تكامل النظام',
    'features.system.desc': 'أضف الأدوات للتشغيل التلقائي، أنشئ أوامر عامة، وادمجها مع سير عملك.',
    
    // Download Section
    'download.title': 'تحميل SKULLPATCH',
    'download.subtitle': 'ابدأ مع أقوى مثبت أدوات لنظام Kali Linux',
    'download.version': 'أحدث إصدار',
    'download.size': 'الحجم',
    'download.requirements': 'المتطلبات',
    'download.requirements.list': 'Python 3, Tkinter, Pillow, psutil',
    'download.button': 'تحميل SKULLPATCH',
    'download.github': 'عرض على GitHub',
    
    // Installation Steps
    'install.title': 'تثبيت سريع',
    'install.step1': 'تحميل الحزمة',
    'install.step2': 'تثبيت التبعيات',
    'install.step3': 'تشغيل SKULLPATCH',
    
    // Documentation
    'docs.title': 'التوثيق',
    'docs.subtitle': 'دليل شامل لاستخدام SKULLPATCH',
    'docs.getting.started': 'البدء',
    'docs.installation': 'دليل التثبيت',
    'docs.usage': 'كيفية الاستخدام',
    'docs.advanced': 'الميزات المتقدمة',
    'docs.troubleshooting': 'حل المشكلات',
    'docs.faq': 'الأسئلة الشائعة',
    
    // Contact Section
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'لديك أسئلة؟ تحتاج دعم؟ تواصل مع المطور.',
    'contact.developer': 'المطور',
    'contact.location': 'الموقع',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.website': 'الموقع الإلكتروني',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.developed': 'تم التطوير بشغف بواسطة',
    'footer.disclaimer': 'هذه الأداة مخصصة للاستخدام الأخلاقي فقط.',
    
    // Misc
    'theme.toggle': 'تبديل السمة',
    'lang.toggle': 'English',
    'fullscreen': 'ملء الشاشة',
    'exit.fullscreen': 'خروج من ملء الشاشة',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
