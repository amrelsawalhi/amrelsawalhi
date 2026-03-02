'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40);
  });

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#050a14]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20'
          : 'bg-transparent'
        }`}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('#home')}
            whileHover={{ scale: 1.03 }}
            className="text-base font-bold tracking-tight"
          >
            <span className="gradient-text">Amr</span>
            <span className="text-slate-300"> Elsawalhi</span>
          </motion.button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors duration-200 rounded-lg hover:bg-white/[0.04]"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social icons + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com/amrelsawalhi" target="_blank" rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-cyan-400 transition-colors duration-200">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/amrelsawalhi/" target="_blank" rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-cyan-400 transition-colors duration-200">
              <Linkedin size={18} />
            </a>
            <a href="mailto:amr.elsawalhi.business@gmail.com"
              className="p-2 text-slate-400 hover:text-cyan-400 transition-colors duration-200">
              <Mail size={18} />
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#070d1a]/95 backdrop-blur-xl border-b border-white/[0.06] px-4 pb-4"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
