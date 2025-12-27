import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Book, 
  ChevronRight, 
  Terminal, 
  Download, 
  Settings, 
  Palette,
  Code,
  Shield,
  Zap,
  HelpCircle,
  ArrowLeft,
  Menu,
  X,
  Copy,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import logo from '@/assets/skullpatch-logo.png';

const Documentation: React.FC = () => {
  const { t, isRTL, language } = useLanguage();
  const [activeSection, setActiveSection] = useState('getting-started');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const sections = [
    { id: 'getting-started', icon: Book, label: language === 'ar' ? 'البدء' : 'Getting Started' },
    { id: 'installation', icon: Download, label: language === 'ar' ? 'التثبيت' : 'Installation' },
    { id: 'usage', icon: Terminal, label: language === 'ar' ? 'الاستخدام' : 'Usage' },
    { id: 'features', icon: Zap, label: language === 'ar' ? 'المميزات' : 'Features' },
    { id: 'customization', icon: Palette, label: language === 'ar' ? 'التخصيص' : 'Customization' },
    { id: 'advanced', icon: Settings, label: language === 'ar' ? 'متقدم' : 'Advanced' },
    { id: 'api', icon: Code, label: language === 'ar' ? 'API' : 'API Reference' },
    { id: 'security', icon: Shield, label: language === 'ar' ? 'الأمان' : 'Security' },
    { id: 'faq', icon: HelpCircle, label: language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ' },
  ];

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CodeBlock: React.FC<{ code: string; id: string; language?: string }> = ({ code, id, language = 'bash' }) => (
    <div className="relative group my-4">
      <div className="absolute top-3 right-3 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => copyCode(code, id)}
          className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
        >
          {copiedCode === id ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4 text-muted-foreground" />
          )}
        </motion.button>
      </div>
      <pre className="p-4 bg-background rounded-xl border border-border overflow-x-auto">
        <code className="text-sm font-mono text-foreground">{code}</code>
      </pre>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'getting-started':
        return (
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              {language === 'ar' ? 'البدء مع SKULLPATCH' : 'Getting Started with SKULLPATCH'}
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {language === 'ar' 
                ? 'SKULLPATCH هو مثبت أدوات رسومي قوي مصمم خصيصًا لنظام Kali Linux. يتيح لك نشر أدوات Python بسهولة مع واجهة مستخدم جميلة بتصميم هاكينج.'
                : 'SKULLPATCH is a powerful GUI tool installer designed specifically for Kali Linux. It allows you to deploy Python-based tools easily with a beautiful hacking-themed interface.'}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-card rounded-xl border border-border">
                <Terminal className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {language === 'ar' ? 'واجهة طرفية مدمجة' : 'Built-in Terminal'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {language === 'ar' 
                    ? 'تتبع تقدم التثبيت في الوقت الفعلي مع عارض السجلات المدمج.'
                    : 'Track installation progress in real-time with the integrated log viewer.'}
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <Zap className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {language === 'ar' ? 'تثبيت سريع' : 'Quick Installation'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {language === 'ar' 
                    ? 'ثبت أي أداة Python بنقرة واحدة مع تكوين تلقائي للتبعيات.'
                    : 'Install any Python tool with one click and automatic dependency configuration.'}
                </p>
              </div>
            </div>

            <h3 className="text-xl font-display font-bold text-foreground mb-4">
              {language === 'ar' ? 'المتطلبات الأساسية' : 'Prerequisites'}
            </h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Python 3.x</li>
              <li>Tkinter (usually comes with Python)</li>
              <li>Pillow library</li>
              <li>psutil library</li>
              <li>Kali Linux (recommended)</li>
            </ul>
          </div>
        );

      case 'installation':
        return (
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              {language === 'ar' ? 'دليل التثبيت' : 'Installation Guide'}
            </h2>
            
            <h3 className="text-xl font-display font-bold text-foreground mb-4">
              {language === 'ar' ? 'الخطوة 1: تحميل SKULLPATCH' : 'Step 1: Download SKULLPATCH'}
            </h3>
            <CodeBlock 
              code="git clone https://github.com/ahmednourahmed/skullpatch.git
cd skullpatch" 
              id="clone"
            />

            <h3 className="text-xl font-display font-bold text-foreground mb-4 mt-8">
              {language === 'ar' ? 'الخطوة 2: تثبيت التبعيات' : 'Step 2: Install Dependencies'}
            </h3>
            <CodeBlock 
              code="pip3 install pillow psutil" 
              id="deps"
            />

            <h3 className="text-xl font-display font-bold text-foreground mb-4 mt-8">
              {language === 'ar' ? 'الخطوة 3: إعداد الأيقونة' : 'Step 3: Setup Icon'}
            </h3>
            <CodeBlock 
              code="sudo mkdir -p /usr/icons/
sudo cp SKULLPATCH.png /usr/icons/" 
              id="icon"
            />

            <h3 className="text-xl font-display font-bold text-foreground mb-4 mt-8">
              {language === 'ar' ? 'الخطوة 4: تشغيل SKULLPATCH' : 'Step 4: Run SKULLPATCH'}
            </h3>
            <CodeBlock 
              code="python3 SKULLPATCH.py" 
              id="run"
            />

            <div className="p-4 bg-accent/10 border border-accent/30 rounded-xl mt-8">
              <p className="text-accent font-medium">
                {language === 'ar' 
                  ? '💡 نصيحة: يمكنك أيضًا استخدام سكريبت التثبيت التلقائي'
                  : '💡 Tip: You can also use the automatic installation script'}
              </p>
              <CodeBlock 
                code="chmod +x install.sh && ./install.sh" 
                id="auto"
              />
            </div>
          </div>
        );

      case 'usage':
        return (
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              {language === 'ar' ? 'كيفية الاستخدام' : 'How to Use'}
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  {language === 'ar' ? '1. اختيار الأداة' : '1. Select Your Tool'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === 'ar' 
                    ? 'انقر على زر "اختيار الأداة" واختر سكريبت Python الذي تريد تثبيته.'
                    : 'Click the "Select Tool" button and choose the Python script you want to install.'}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  {language === 'ar' ? '2. تخصيص الأيقونة' : '2. Customize Icon'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === 'ar' 
                    ? 'اختر أيقونة مخصصة لأداتك (اختياري) لتظهر في قائمة التطبيقات.'
                    : 'Choose a custom icon for your tool (optional) to appear in the application menu.'}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  {language === 'ar' ? '3. تكوين الخيارات' : '3. Configure Options'}
                </h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>{language === 'ar' ? 'إضافة إلى قائمة التطبيقات' : 'Add to application menu'}</li>
                  <li>{language === 'ar' ? 'إنشاء اختصار سطح المكتب' : 'Create desktop shortcut'}</li>
                  <li>{language === 'ar' ? 'تثبيت عالمي أو محلي' : 'Install globally or locally'}</li>
                  <li>{language === 'ar' ? 'إضافة للتشغيل التلقائي' : 'Add to autostart'}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  {language === 'ar' ? '4. التثبيت' : '4. Install'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'ar' 
                    ? 'انقر على زر "تثبيت" وشاهد السحر يحدث! ستظهر نافذة الطرفية المدمجة تقدم التثبيت.'
                    : 'Click the "Install" button and watch the magic happen! The integrated terminal will show the installation progress.'}
                </p>
              </div>
            </div>
          </div>
        );

      case 'features':
        return (
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              {language === 'ar' ? 'المميزات الكاملة' : 'Complete Features'}
            </h2>
            
            <div className="grid gap-6">
              {[
                { 
                  title: language === 'ar' ? 'واجهة هاكينج داكنة' : 'Dark Hacking GUI',
                  desc: language === 'ar' ? 'تصميم غامق مع تأثيرات متحركة ورسائل هاكينج عشوائية' : 'Dark themed design with animated effects and random hacking messages'
                },
                { 
                  title: language === 'ar' ? 'تثبيت تلقائي للتبعيات' : 'Automatic Dependency Installation',
                  desc: language === 'ar' ? 'يكتشف ويثبت تبعيات Python تلقائيًا' : 'Detects and installs Python dependencies automatically'
                },
                { 
                  title: language === 'ar' ? 'تكامل قائمة النظام' : 'System Menu Integration',
                  desc: language === 'ar' ? 'يضيف أدواتك إلى قائمة تطبيقات Linux' : 'Adds your tools to the Linux application menu'
                },
                { 
                  title: language === 'ar' ? 'معلومات النظام في الوقت الفعلي' : 'Real-time System Info',
                  desc: language === 'ar' ? 'يعرض معلومات CPU والذاكرة ونظام التشغيل' : 'Shows CPU, memory, and OS information'
                },
                { 
                  title: language === 'ar' ? 'أوامر ما بعد التثبيت' : 'Post-install Commands',
                  desc: language === 'ar' ? 'تنفيذ أوامر مخصصة بعد التثبيت' : 'Execute custom commands after installation'
                },
                { 
                  title: language === 'ar' ? 'عارض السجلات' : 'Log Viewer',
                  desc: language === 'ar' ? 'طرفية مدمجة لتتبع كل الإجراءات' : 'Built-in terminal to track all actions'
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'customization':
        return (
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              {language === 'ar' ? 'التخصيص' : 'Customization'}
            </h2>
            <p className="text-muted-foreground mb-6">
              {language === 'ar' 
                ? 'يمكنك تخصيص SKULLPATCH ليناسب احتياجاتك عن طريق تعديل ملف التكوين.'
                : 'You can customize SKULLPATCH to fit your needs by modifying the configuration file.'}
            </p>
            
            <h3 className="text-xl font-display font-bold text-foreground mb-4">
              {language === 'ar' ? 'تغيير الألوان' : 'Changing Colors'}
            </h3>
            <CodeBlock 
              code={`class HackingTheme:
    BG_COLOR = "#0a0a0a"     # Background
    FG_COLOR = "#00ff00"     # Main text
    ACCENT_COLOR = "#ff00ff" # Accent
    ERROR_COLOR = "#ff0000"  # Errors
    WARNING_COLOR = "#ffff00" # Warnings
    INFO_COLOR = "#00ffff"   # Info
    SUCCESS_COLOR = "#00ff00" # Success`}
              id="colors"
            />

            <h3 className="text-xl font-display font-bold text-foreground mb-4 mt-8">
              {language === 'ar' ? 'تخصيص الرسائل' : 'Customize Messages'}
            </h3>
            <CodeBlock 
              code={`HACKING_TEXT = [
    "ACCESS GRANTED", 
    "ROOT PRIVILEGES ENABLED", 
    "SYSTEM OVERRIDE", 
    "ENCRYPTION BYPASSED",
    # Add your custom messages here
]`}
              id="messages"
            />
          </div>
        );

      case 'advanced':
        return (
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              {language === 'ar' ? 'الميزات المتقدمة' : 'Advanced Features'}
            </h2>
            
            <h3 className="text-xl font-display font-bold text-foreground mb-4">
              {language === 'ar' ? 'التثبيت العالمي' : 'Global Installation'}
            </h3>
            <p className="text-muted-foreground mb-4">
              {language === 'ar' 
                ? 'يمكنك تثبيت أدواتك بشكل عالمي ليتم الوصول إليها من أي مكان في النظام.'
                : 'You can install your tools globally to be accessible from anywhere in the system.'}
            </p>
            <CodeBlock 
              code="# The tool will be installed to /usr/local/bin/
# Making it accessible system-wide" 
              id="global"
            />

            <h3 className="text-xl font-display font-bold text-foreground mb-4 mt-8">
              {language === 'ar' ? 'التشغيل التلقائي' : 'Autostart'}
            </h3>
            <p className="text-muted-foreground mb-4">
              {language === 'ar' 
                ? 'أضف أدواتك للتشغيل التلقائي عند بدء النظام.'
                : 'Add your tools to autostart when the system boots.'}
            </p>

            <h3 className="text-xl font-display font-bold text-foreground mb-4 mt-8">
              {language === 'ar' ? 'أوامر ما بعد التثبيت' : 'Post-Install Commands'}
            </h3>
            <p className="text-muted-foreground mb-4">
              {language === 'ar' 
                ? 'قم بتشغيل أوامر مخصصة بعد اكتمال التثبيت.'
                : 'Run custom commands after installation completes.'}
            </p>
            <CodeBlock 
              code="# Example post-install commands:
chmod +x /usr/local/bin/mytool
ln -s /usr/local/bin/mytool /usr/bin/mytool" 
              id="postinstall"
            />
          </div>
        );

      case 'api':
        return (
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              {language === 'ar' ? 'مرجع API' : 'API Reference'}
            </h2>
            
            <h3 className="text-xl font-display font-bold text-foreground mb-4">
              ToolInstaller Class
            </h3>
            <CodeBlock 
              code={`class ToolInstaller:
    def __init__(self, root):
        """Initialize the tool installer GUI"""
        
    def install_tool(self):
        """Install the selected tool"""
        
    def select_tool(self):
        """Open file dialog to select tool"""
        
    def select_icon(self):
        """Open file dialog to select icon"""
        
    def create_desktop_shortcut(self, tool_name, icon_path):
        """Create desktop shortcut for the tool"""
        
    def add_to_menu(self, tool_name, icon_path):
        """Add tool to application menu"""`}
              id="api"
            />

            <h3 className="text-xl font-display font-bold text-foreground mb-4 mt-8">
              HackingTheme Class
            </h3>
            <CodeBlock 
              code={`class HackingTheme:
    """Theme configuration for the GUI"""
    BG_COLOR: str      # Background color
    FG_COLOR: str      # Foreground color
    ACCENT_COLOR: str  # Accent color
    FONT: tuple        # Main font
    TITLE_FONT: tuple  # Title font
    HACKING_TEXT: list # Random hacking messages`}
              id="theme-api"
            />
          </div>
        );

      case 'security':
        return (
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              {language === 'ar' ? 'الأمان والإخلاء' : 'Security & Disclaimer'}
            </h2>
            
            <div className="p-6 bg-destructive/10 border border-destructive/30 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-destructive mb-4">
                {language === 'ar' ? '⚠️ تحذير مهم' : '⚠️ Important Warning'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'ar' 
                  ? 'هذه الأداة مخصصة للاستخدام الأخلاقي فقط. المطور غير مسؤول عن أي سوء استخدام. تأكد من الحصول على إذن قبل استخدام أي أدوات اختراق.'
                  : 'This tool is intended for ethical use only. The developer is not responsible for any misuse. Make sure you have permission before using any hacking tools.'}
              </p>
            </div>

            <h3 className="text-xl font-display font-bold text-foreground mb-4">
              {language === 'ar' ? 'أفضل الممارسات' : 'Best Practices'}
            </h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>{language === 'ar' ? 'استخدم فقط في بيئات مصرح بها' : 'Only use in authorized environments'}</li>
              <li>{language === 'ar' ? 'احصل على إذن كتابي قبل اختبار الاختراق' : 'Get written permission before penetration testing'}</li>
              <li>{language === 'ar' ? 'لا تستخدم ضد أنظمة لا تملكها' : 'Do not use against systems you do not own'}</li>
              <li>{language === 'ar' ? 'اتبع القوانين المحلية والدولية' : 'Follow local and international laws'}</li>
            </ul>
          </div>
        );

      case 'faq':
        return (
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  q: language === 'ar' ? 'هل SKULLPATCH يعمل على أنظمة أخرى غير Kali؟' : 'Does SKULLPATCH work on systems other than Kali?',
                  a: language === 'ar' ? 'نعم، يمكن استخدامه على أي توزيعة Linux مع Python 3 و Tkinter.' : 'Yes, it can be used on any Linux distribution with Python 3 and Tkinter.'
                },
                {
                  q: language === 'ar' ? 'كيف أقوم بتحديث SKULLPATCH؟' : 'How do I update SKULLPATCH?',
                  a: language === 'ar' ? 'قم بتنفيذ git pull في مجلد SKULLPATCH للحصول على آخر التحديثات.' : 'Run git pull in the SKULLPATCH folder to get the latest updates.'
                },
                {
                  q: language === 'ar' ? 'هل يمكنني إضافة أدوات مخصصة؟' : 'Can I add custom tools?',
                  a: language === 'ar' ? 'نعم، يمكنك تثبيت أي سكريبت Python كأداة باستخدام SKULLPATCH.' : 'Yes, you can install any Python script as a tool using SKULLPATCH.'
                },
                {
                  q: language === 'ar' ? 'ماذا لو واجهت خطأ أثناء التثبيت؟' : 'What if I encounter an error during installation?',
                  a: language === 'ar' ? 'تحقق من عارض السجلات للحصول على تفاصيل الخطأ وتأكد من تثبيت جميع التبعيات.' : 'Check the log viewer for error details and make sure all dependencies are installed.'
                },
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-card rounded-xl border border-border"
                >
                  <h3 className="text-lg font-bold text-foreground mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {language === 'ar' ? 'العودة' : 'Back'}
            </Link>
          </motion.div>

          <div className="flex gap-8">
            {/* Sidebar Toggle (Mobile) */}
            <motion.button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden fixed bottom-6 right-6 z-50 p-4 bg-primary text-primary-foreground rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>

            {/* Sidebar */}
            <AnimatePresence>
              {(sidebarOpen || window.innerWidth >= 1024) && (
                <motion.aside
                  initial={{ opacity: 0, x: isRTL ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isRTL ? 100 : -100 }}
                  className={`fixed lg:sticky top-24 ${isRTL ? 'right-0' : 'left-0'} lg:top-24 h-[calc(100vh-6rem)] w-72 bg-card lg:bg-transparent p-6 lg:p-0 border-${isRTL ? 'l' : 'r'} lg:border-0 border-border z-40 overflow-y-auto`}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <img src={logo} alt="SKULLPATCH" className="w-10 h-10" />
                    <div>
                      <h2 className="font-display font-bold text-foreground">{t('docs.title')}</h2>
                      <p className="text-xs text-muted-foreground">v2.0.0</p>
                    </div>
                  </div>

                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <motion.button
                        key={section.id}
                        onClick={() => {
                          setActiveSection(section.id);
                          setSidebarOpen(false);
                        }}
                        whileHover={{ x: isRTL ? -5 : 5 }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                          activeSection === section.id
                            ? 'bg-primary/10 text-primary border border-primary/30'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                      >
                        <section.icon className="w-5 h-5" />
                        <span className="font-medium">{section.label}</span>
                        {activeSection === section.id && (
                          <ChevronRight className={`w-4 h-4 ${isRTL ? 'mr-auto rotate-180' : 'ml-auto'}`} />
                        )}
                      </motion.button>
                    ))}
                  </nav>
                </motion.aside>
              )}
            </AnimatePresence>

            {/* Content */}
            <main className="flex-1 min-w-0">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-2xl border border-border p-8"
              >
                {renderContent()}
              </motion.div>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Documentation;
