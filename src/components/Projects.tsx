'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ExternalLink, Database, Smartphone, Brain, Code, TrendingUp } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expanded, setExpanded] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      name: 'DipSignal',
      tagline: 'Financial Data Lakehouse & Analytics Platform',
      description:
        'End-to-end financial data platform ingesting crypto, stocks, commodities, and news feeds into a production-grade analytical warehouse.',
      longDescription:
        'Built a resilient Dagster ELT pipeline to ingest and normalize data across different assets (Crypto, Stocks, Commodities) and multiple news RSS feeds and APIs. Designed a PostgreSQL Star Schema warehouse optimized for analytic query speed. Integrated multiple Google Gemini models to automate daily workflows, dynamically selecting models for specific tasks to optimize cost and latency. Centralized logging via a Streamlit admin panel that visualizes DAGs, tracks data freshness, runs SQL queries, and manages system health.',
      technologies: ['Python', 'Dagster', 'PostgreSQL', 'Gemini AI', 'Streamlit', 'GitHub Actions'],
      github: 'https://github.com/amrelsawalhi/dipsignal-v1',
      demo: 'https://dipsignal.vercel.app',
      image: '/screenshots/dipsignal.png',
      category: 'Data Engineering',
      featured: true,
      icon: <TrendingUp className="w-5 h-5" />,
      highlights: ['Dagster ELT Pipeline', 'Star Schema Warehouse', 'Multi-Model AI Agent', 'Live Dashboard'],
    },
    {
      id: 2,
      name: 'League of Legends Analytics',
      tagline: 'Data Pipeline & BI Dashboard',
      description:
        'End-to-end data engineering project automating collection, processing, and visualization of LoL match data via the Riot Games API.',
      longDescription:
        'Automates data collection from the official Riot Games API with rate-limit handling and structured logging. Updates a PostgreSQL database via automated GitHub Actions pipelines. Displays data insights across Power BI and Streamlit dashboards covering champion performance, player statistics, and meta trends.',
      technologies: ['Python', 'Riot API', 'PostgreSQL', 'GitHub Actions', 'Streamlit', 'Power BI'],
      github: 'https://github.com/amrelsawalhi/leagueoflegends',
      demo: 'https://lol-stats.streamlit.app/',
      image: '/screenshots/lol-analytics.jpg',
      category: 'Data Engineering',
      featured: false,
      icon: <Database className="w-5 h-5" />,
      highlights: ['Automated Pipeline', 'Rate-Limit Handling', 'Power BI Dashboard'],
    },
    {
      id: 3,
      name: 'Dijamour',
      tagline: 'Wedding Venue Discovery App',
      description:
        'Modern bilingual (Arabic/English) wedding venue discovery app with real-time sync, geospatial search, and integrated inquiry system.',
      longDescription:
        'Built with React Native and Supabase. Features bilingual Arabic/English support with RTL, real-time data synchronization, geospatial venue search across 500+ venues, integrated inquiry system, and a mobile-first design tailored for the MENA market.',
      technologies: ['React Native', 'TypeScript', 'Supabase', 'Expo'],
      github: 'https://github.com/amrelsawalhi/Dijamour-public',
      demo: null,
      image: '/screenshots/dijamour.jpg',
      category: 'Mobile App',
      featured: false,
      icon: <Smartphone className="w-5 h-5" />,
      highlights: ['Bilingual RTL', 'Geospatial Search', '500+ Venues'],
    },
    {
      id: 4,
      name: 'FeelyText',
      tagline: 'Customer Sentiment Analysis Tool',
      description:
        'Interactive NLP application for customer feedback sentiment analysis with a clean Streamlit interface and model feedback loop.',
      longDescription:
        'A machine learning application delivering real-time sentiment classification for text input — ideal for customer feedback analysis and market research. Features NLP processing, sentiment scoring, user feedback collection for model improvement, and a clean Streamlit UI.',
      technologies: ['Python', 'Streamlit', 'NLP', 'Machine Learning'],
      github: 'https://github.com/amrelsawalhi/sentiment-analysis',
      demo: 'https://feelytext.streamlit.app/',
      image: '/screenshots/feelytext.jpg',
      category: 'Analytics',
      featured: false,
      icon: <Brain className="w-5 h-5" />,
      highlights: ['Real-Time NLP', 'Feedback Loop', 'Streamlit UI'],
    },
    {
      id: 5,
      name: 'Jumia Price Tracker',
      tagline: 'ETL Pipeline for Competitive Intelligence',
      description:
        'Web scraping ETL pipeline for automated price tracking and competitive intelligence from the Jumia e-commerce platform.',
      longDescription:
        'Automates price tracking from Jumia using BeautifulSoup scraping. Features structured data collection, competitive pricing analysis, price trend visualization, and a Streamlit interface for exploring market research insights.',
      technologies: ['Python', 'BeautifulSoup', 'Streamlit', 'Web Scraping'],
      github: 'https://github.com/amrelsawalhi/jumia-price-etl-streamlit',
      demo: 'https://jumia-price-scraper.streamlit.app/',
      image: null,
      category: 'ETL',
      featured: false,
      icon: <Code className="w-5 h-5" />,
      highlights: ['Web Scraping', 'ETL Pipeline', 'Price Analytics'],
    },
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden" style={{ background: '#050a14' }}>
      <div className="bg-glow w-[500px] h-[500px] bg-cyan-500 top-1/4 right-[-150px]" style={{ opacity: 0.06 }} />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="chip mb-4 inline-block">Portfolio</span>
          <h2 className="section-title mb-5">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            End-to-end projects demonstrating pipeline design, data modeling, and production-ready delivery.
          </p>
        </motion.div>

        {/* Featured Project (DipSignal) */}
        {projects.filter(p => p.featured).map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mb-12 glass-card overflow-hidden"
            style={{ border: '1px solid rgba(6,182,212,0.25)' }}
          >
            <div className="grid lg:grid-cols-2 gap-0 items-stretch">
              {/* Image side */}
              <div className="relative h-[300px] lg:h-auto overflow-hidden bg-slate-900 border-b lg:border-b-0 lg:border-r border-white/10">
                {project.image ? (
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-900/40 to-violet-900/40">
                    {project.icon}
                  </div>
                )}
                {/* Featured badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="chip" style={{ fontSize: '0.65rem' }}>⭐ Featured</span>
                </div>
              </div>

              {/* Content side */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white">
                    {project.icon}
                  </div>
                  <div>
                    <span className="text-xs text-muted">{project.category}</span>
                    <h3 className="font-bold text-bright text-2xl leading-tight">{project.name}</h3>
                  </div>
                </div>
                <p className="text-cyan-400 font-medium text-sm mb-4">{project.tagline}</p>
                <p className="text-muted text-sm leading-relaxed mb-6">{project.longDescription}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="chip" style={{ fontSize: '0.7rem' }}>{tech}</span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <motion.a
                    whileHover={{ scale: 1.04 }}
                    href={project.demo!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                    style={{ padding: '12px 24px', fontSize: '0.9rem' }}
                  >
                    <ExternalLink size={16} />
                    Live Dashboard
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.04 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm"
                    style={{ padding: '12px 24px', fontSize: '0.9rem' }}
                  >
                    <Github size={16} />
                    Source Code
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              className="glass-card flex flex-col overflow-hidden h-full border border-white/5 hover:border-violet-500/30 transition-all duration-300"
            >
              {/* Image Header */}
              {project.image && (
                <div className="h-48 overflow-hidden relative border-b border-white/5">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="chip chip-violet" style={{ fontSize: '0.65rem' }}>{project.category}</span>
                  </div>
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col">
                {!project.image && (
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600/30 to-violet-700/30 border border-violet-500/20 flex items-center justify-center text-violet-400 flex-shrink-0">
                      {project.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="chip chip-violet mb-1" style={{ fontSize: '0.65rem' }}>{project.category}</span>
                    </div>
                  </div>
                )}

                <h3 className="font-bold text-bright text-lg mb-1">{project.name}</h3>
                <p className="text-violet-400 text-xs font-medium mb-3">{project.tagline}</p>
                <p className="text-muted text-sm leading-relaxed mb-5 flex-1">
                  {expanded === project.id ? project.longDescription : project.description}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-xs text-slate-400 bg-white/[0.04] border border-white/[0.07] px-2.5 py-1 rounded-full">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs text-slate-500 bg-white/[0.02] border border-white/[0.04] px-2.5 py-1 rounded-full">+{project.technologies.length - 4}</span>
                  )}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/5 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <Github size={14} /> Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={14} /> Live App
                    </a>
                  )}
                  <button
                    onClick={(e) => { e.preventDefault(); setExpanded(expanded === project.id ? null : project.id); }}
                    className="ml-auto text-xs text-slate-500 hover:text-violet-400 transition-colors"
                  >
                    {expanded === project.id ? 'Show Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-muted mb-5">Built 10+ projects covering the entire data engineering ecosystem.</p>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="https://github.com/amrelsawalhi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Github size={18} />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
