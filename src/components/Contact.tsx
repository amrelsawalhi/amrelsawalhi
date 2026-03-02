'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email',
      value: 'amr.elsawalhi.business@gmail.com',
      link: 'mailto:amr.elsawalhi.business@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Phone',
      value: '+201064092798',
      link: 'tel:+201064092798'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Location',
      value: 'Cairo, Egypt',
      link: null
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/amrelsawalhi',
      icon: <Github className="w-5 h-5" />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/amrelsawalhi/',
      icon: <Linkedin className="w-5 h-5" />
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // NOTE: User's original EmailJS config retained
      const result = await emailjs.sendForm(
        'service_cwtcnfg',
        'template_yd8c8we',
        e.target as HTMLFormElement,
        'i7iRzCdBDdOhmVN3N'
      );

      console.log('Email sent successfully:', result.text);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);

    } catch (error) {
      console.error('Email send failed:', error);
      alert('Failed to send message. Please try again or contact me directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden" style={{ background: '#070d1a' }}>
      <div className="bg-glow w-[500px] h-[500px] bg-violet-600 top-1/4 left-[-200px]" style={{ opacity: 0.05 }} />
      <div className="bg-glow w-[400px] h-[400px] bg-cyan-500 bottom-[-100px] right-[-100px]" style={{ opacity: 0.06 }} />

      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="chip chip-violet mb-4 inline-block">Get In Touch</span>
          <h2 className="section-title mb-5">
            <span className="gradient-text">Let&apos;s Connect</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Ready to discuss data engineering opportunities? Let&apos;s explore how my technical and business background can add value.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600/20 to-violet-700/20 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-300 text-sm mb-1">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors duration-200">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-400 text-sm">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/5">
              <h4 className="font-semibold text-slate-300 text-sm mb-4">Connect With Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-6 sm:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-bright mb-2">Message Sent!</h3>
                  <p className="text-muted">Thanks for reaching out. I&apos;ll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="input-dark"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="input-dark"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="input-dark"
                      placeholder="Opportunity"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="input-dark resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary justify-center mt-2 group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-20 pt-8 border-t border-white/5"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-slate-400 text-sm">Amr Elsawalhi</span>
            <span className="text-white/20">•</span>
            <span className="text-cyan-400 text-sm font-medium">Data Engineer</span>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
