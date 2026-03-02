'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Cloud, Wrench, Award, BookOpen } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillGroups = [
    {
      category: 'Languages & Query',
      icon: <Code className="w-5 h-5" />,
      color: 'cyan',
      skills: ['Python', 'SQL', 'Shell'],
    },
    {
      category: 'Data Engineering',
      icon: <Database className="w-5 h-5" />,
      color: 'violet',
      skills: ['Dagster', 'Spark', 'dbt', 'Data Modeling', 'Data Warehousing'],
    },
    {
      category: 'Cloud & Platforms',
      icon: <Cloud className="w-5 h-5" />,
      color: 'cyan',
      skills: ['Microsoft Fabric', 'Azure Cloud', 'Databricks'],
    },
    {
      category: 'Analytics & BI',
      icon: <Wrench className="w-5 h-5" />,
      color: 'violet',
      skills: ['Power BI', 'Streamlit', 'PostgreSQL', 'Git'],
    },
  ];

  const certifications = [
    {
      name: 'Microsoft Certified: Fabric Data Engineer Associate',
      issuer: 'Microsoft',
      icon: '🏅',
      highlight: true,
    },
    {
      name: 'EF SET English Certificate',
      issuer: 'EF Standard English Test',
      icon: '📜',
      highlight: false,
    },
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #070d1a 0%, #050a14 100%)' }}>
      <div className="bg-glow w-[400px] h-[400px] bg-violet-600 bottom-0 right-0" style={{ opacity: 0.07 }} />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="chip mb-4 inline-block">Tech Stack</span>
          <h2 className="section-title mb-5">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            A modern engineering toolkit spanning languages, orchestration, cloud platforms, and analytics.
          </p>
        </motion.div>

        {/* Skill Groups */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
              className="glass-card p-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${group.color === 'cyan'
                    ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/20'
                    : 'bg-violet-500/15 text-violet-400 border border-violet-500/20'
                  }`}>
                  {group.icon}
                </div>
                <h3 className="font-semibold text-bright text-sm tracking-wide">{group.category}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className={`skill-tag cursor-default ${group.color === 'cyan' ? 'hover:border-cyan-500/40 hover:text-cyan-400' : 'hover:border-violet-500/40 hover:text-violet-400'
                      }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-5 h-5 text-cyan-400" />
            <h3 className="text-xl font-bold text-bright">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.65 + i * 0.1, duration: 0.5 }}
                className={`glass-card p-5 flex items-center gap-4 ${cert.highlight
                    ? 'border-cyan-500/25 hover:border-cyan-500/40'
                    : 'hover:border-white/12'
                  } transition-all duration-300`}
              >
                <span className="text-3xl">{cert.icon}</span>
                <div>
                  <h4 className="font-semibold text-bright text-sm leading-tight mb-0.5">{cert.name}</h4>
                  <p className="text-xs text-muted">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Differentiator banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12"
        >
          <div className="relative overflow-hidden rounded-2xl p-8 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.12) 0%, rgba(124, 58, 237, 0.12) 100%)', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
            <div className="bg-glow w-[300px] h-[200px] bg-cyan-500 top-0 left-1/2 -translate-x-1/2" style={{ opacity: 0.08 }} />
            <BookOpen className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-bright mb-3">What Sets Me Apart</h3>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">
              I combine Microsoft-certified data engineering expertise with deep enterprise business experience — giving me the rare ability to design systems that are both technically robust and immediately meaningful to business stakeholders.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
