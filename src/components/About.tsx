'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Globe, Database, Award } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const strengths = [
    {
      icon: <Cpu className="w-5 h-5" />,
      title: 'Pipeline Architecture',
      description: 'Architecting resilient ELT pipelines from scratch using Dagster, transforming raw data into production-ready assets.',
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: 'Data Warehousing',
      description: 'Designing PostgreSQL Star Schema warehouses and dimensional models optimized for analytical query performance.',
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: 'Cloud & Microsoft Fabric',
      description: 'Building end-to-end solutions on Microsoft Fabric and Azure with certified expertise in modern data platform services.',
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: 'Business Intelligence',
      description: 'Translating raw data into Power BI dashboards and strategic insights, backed by years of enterprise business experience.',
    },
  ];

  const timeline = [
    {
      period: '06/2025 – Present',
      title: 'Independent Data Engineer & Analyst',
      company: 'Freelance',
      description: 'Building end-to-end data solutions — from pipeline design to dashboard delivery — for clients across BI and analytics.',
      current: true,
    },
    {
      period: '03/2024 – 03/2025',
      title: 'Business Intelligence Analytics',
      company: 'AJA, Saudi Arabia',
      description: 'Developed BI reporting infrastructure and data workflows to support business decision-making across the organization.',
    },
    {
      period: '2018 – 2024',
      title: 'Senior Product Specialist',
      company: 'AJA, Saudi Arabia',
      description: 'Led product strategy and market analytics across the Saudi Arabia region. Built analytical frameworks for sales intelligence.',
    },
    {
      period: '2014 – 2017',
      title: 'Senior Medical Representative',
      company: 'IBSA, Egypt',
      description: 'Managed key accounts and territory analytics. Graduated Zagazig University with a Bachelor of Pharmacy in 2014.',
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #050a14 0%, #070d1a 100%)' }}>
      {/* Glow */}
      <div className="bg-glow w-[400px] h-[400px] bg-violet-700 top-0 right-0" style={{ opacity: 0.08 }} />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="chip mb-4 inline-block">Who I Am</span>
          <h2 className="section-title mb-5">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Microsoft Certified Data Engineer with a proven record of architecting scalable pipelines and transforming raw data into structured, production-ready assets.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-bright mb-6">My Story</h3>
            <div className="space-y-5 text-muted leading-relaxed">
              <p>
                I specialize in <span className="text-cyan-400 font-medium">orchestrating complex workflows</span> to transform diverse raw data into structured, production-ready assets — dedicated to delivering efficiency, reliability, and maintainability across the entire data lifecycle.
              </p>
              <p>
                My journey started in enterprise business — spending years as a senior representative and product specialist across Egypt and Saudi Arabia — giving me a uniquely sharp instinct for what business stakeholders actually need from data.
              </p>
              <p>
                Today I combine that domain expertise with hands-on engineering: designing warehouse schemas, building Dagster pipelines, integrating AI-powered workflows with Gemini, and shipping production dashboards via Power BI and Streamlit.
              </p>
            </div>

            {/* Key Strengths */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {strengths.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="glass-card-hover p-4"
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-600/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                    {s.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-bright mb-1">{s.title}</h4>
                  <p className="text-xs text-muted leading-relaxed">{s.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-bright mb-8">Career Timeline</h3>
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
                  className="timeline-item pb-6"
                >
                  <div className="timeline-dot" />
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className={item.current ? 'chip' : 'chip chip-violet'} style={{ fontSize: '0.7rem' }}>
                      {item.period}
                    </span>
                    {item.current && (
                      <span className="chip-green chip" style={{ fontSize: '0.7rem' }}>Current</span>
                    )}
                  </div>
                  <h4 className="font-semibold text-bright text-base mb-0.5">{item.title}</h4>
                  <p className="text-cyan-500 text-sm font-medium mb-2">{item.company}</p>
                  <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
