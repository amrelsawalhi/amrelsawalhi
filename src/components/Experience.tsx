'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar, GraduationCap } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const jobs = [
    {
      title: 'Independent Data Engineer & Analyst',
      company: 'Freelance',
      location: 'Cairo, Egypt',
      duration: '06/2025 – Present',
      current: true,
      description: 'Building end-to-end data solutions for clients — from ELT pipeline design and warehouse modeling to AI integrations and dashboard delivery.',
      achievements: [
        'Architected resilient Dagster ELT pipelines ingesting diverse data sources (APIs, RSS feeds, databases)',
        'Designed PostgreSQL Star Schema warehouses optimized for analytical query performance',
        'Integrated Google Gemini AI agents to automate daily data workflows and reduce operational overhead',
        'Built Streamlit admin panels for pipeline monitoring, data freshness tracking, and SQL execution',
        'Deployed production dashboards consumed by end stakeholders via Power BI and web apps',
      ],
      tags: ['Dagster', 'PostgreSQL', 'Python', 'Gemini AI', 'Streamlit', 'Power BI'],
      color: 'cyan',
    },
    {
      title: 'Business Intelligence Analytics',
      company: 'AJA',
      location: 'Saudi Arabia',
      duration: '03/2024 – 03/2025',
      current: false,
      description: 'Led BI reporting infrastructure development, building data workflows and dashboards to support enterprise-level decision-making.',
      achievements: [
        'Developed company-wide BI reporting layer connecting operational systems to decision-makers',
        'Automated data collection and transformation workflows reducing manual reporting effort',
        'Built interactive Power BI dashboards tracking key business KPIs across departments',
        'Collaborated with stakeholders to define data requirements and translate them into analytics solutions',
      ],
      tags: ['Power BI', 'SQL', 'Python', 'Data Modeling', 'ETL'],
      color: 'violet',
    },
    {
      title: 'Senior Product Specialist',
      company: 'AJA',
      location: 'Saudi Arabia',
      duration: '2018 – 2024',
      current: false,
      description: 'Led product strategy and market analytics across the Saudi Arabia region. Built analytical frameworks for sales intelligence and business insights.',
      achievements: [
        'Managed strategic accounts and analyzed market data to drive territory growth',
        'Built sales intelligence frameworks and CRM analytics for regional decision-making',
        'Led cross-functional teams in product launches backed by data-driven market research',
        'Delivered competitive intelligence reports influencing product-market positioning',
      ],
      tags: ['Market Analysis', 'Sales Intelligence', 'CRM Analytics', 'Strategic Planning'],
      color: 'violet',
    },
    {
      title: 'Senior Medical Representative',
      company: 'IBSA',
      location: 'Egypt',
      duration: '2014 – 2017',
      current: false,
      description: 'Managed key accounts and territory analytics in the Egyptian pharmaceutical market.',
      achievements: [
        'Managed key healthcare accounts across the assigned territory',
        'Conducted market and competitor analysis to support field strategy',
        'Consistently exceeded sales targets through data-informed customer engagement',
      ],
      tags: ['Account Management', 'Market Analysis', 'Business Development'],
      color: 'violet',
    },
  ];

  const education = {
    degree: 'Bachelor of Pharmacy',
    school: 'Zagazig University',
    graduated: 'July 2014',
    location: 'Egypt',
  };

  return (
    <section id="experience" className="section-padding relative overflow-hidden" style={{ background: '#070d1a' }}>
      <div className="bg-glow w-[500px] h-[500px] bg-cyan-600 top-1/2 left-[-200px]" style={{ opacity: 0.06 }} />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="chip mb-4 inline-block">Work History</span>
          <h2 className="section-title mb-5">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            From enterprise business to data engineering — a proven track record of delivering value through data.
          </p>
        </motion.div>

        {/* Job Cards */}
        <div className="space-y-6 mb-16">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.6 }}
              className="glass-card p-6 md:p-8 hover:border-cyan-500/20 transition-all duration-300 group"
            >
              {/* Top row */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                <div className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-white flex-shrink-0 ${job.current
                      ? 'bg-gradient-to-br from-cyan-500 to-cyan-600'
                      : 'bg-gradient-to-br from-violet-600 to-violet-700'
                    }`}>
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-bold text-bright">{job.title}</h3>
                      {job.current && <span className="chip" style={{ fontSize: '0.65rem' }}>● Current</span>}
                    </div>
                    <p className={`font-semibold text-sm mt-0.5 ${job.current ? 'text-cyan-400' : 'text-violet-400'}`}>
                      {job.company}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted flex-shrink-0">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{job.duration}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                </div>
              </div>

              <p className="text-muted text-sm mb-5 leading-relaxed">{job.description}</p>

              {/* Achievements */}
              <ul className="space-y-2 mb-5">
                {job.achievements.map((a, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-400">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${job.current ? 'bg-cyan-400' : 'bg-violet-400'}`} />
                    {a}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span key={tag} className={job.current ? 'chip' : 'chip chip-violet'} style={{ fontSize: '0.7rem' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-bright mb-6">Education</h3>
          <div className="glass-card p-6 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-bright">{education.degree}</h4>
              <p className="text-cyan-400 text-sm font-medium">{education.school}</p>
              <p className="text-muted text-xs mt-1">{education.graduated} · {education.location}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
