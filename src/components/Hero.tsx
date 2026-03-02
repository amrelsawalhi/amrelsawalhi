'use client';

import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Background glow orbs */}
      <div className="bg-glow w-[600px] h-[600px] bg-cyan-500 top-[-200px] left-[-200px]" />
      <div className="bg-glow w-[500px] h-[500px] bg-violet-600 bottom-[-150px] right-[-150px]" />
      <div className="bg-glow w-[300px] h-[300px] bg-cyan-400 bottom-[20%] left-[30%]" style={{ opacity: 0.07 }} />

      <div className="container-max section-padding relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="chip">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Microsoft Certified: Fabric Data Engineer
            </span>
          </motion.div>

          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg md:text-xl font-medium text-slate-400 mb-3 tracking-widest uppercase"
          >
            Amr Elsawalhi
          </motion.h2>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="section-title mb-6"
          >
            <span className="gradient-text">Data Engineer</span>
            <br />
            <span className="text-slate-200">Building Scalable</span>
            <br />
            <span className="text-slate-200">Data Pipelines</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Architecting resilient ELT pipelines from the ground up — orchestrating complex workflows with Dagster, PostgreSQL, and Azure to transform raw data into production-ready assets.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {[
              { value: '4+', label: 'Years in Data' },
              { value: '10+', label: 'Tools & Technologies' },
              { value: '5+', label: 'Production Projects' },
            ].map((stat) => (
              <div key={stat.label} className="glass-card px-6 py-4 text-center min-w-[120px]">
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('#projects')}
              className="btn-primary"
            >
              View My Projects
              <ArrowRight size={18} />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="/Amr-Elsawalhi-DE.pdf"
              download="Amr-Elsawalhi-DE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex justify-center items-center gap-4 mb-14"
          >
            {[
              { href: 'https://github.com/amrelsawalhi', icon: <Github size={20} />, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/amrelsawalhi/', icon: <Linkedin size={20} />, label: 'LinkedIn' },
              { href: 'mailto:amr.elsawalhi.business@gmail.com', icon: <Mail size={20} />, label: 'Email' },
            ].map(({ href, icon, label }) => (
              <motion.a
                key={label}
                whileHover={{ scale: 1.12, y: -2 }}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="glass-card p-3 text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                title={label}
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Location + scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="text-muted text-sm"
          >
            📍 Cairo, Egypt
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-cyan-400 transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
};

export default Hero;
