import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/D4vide106',
      icon: 'fab fa-github'
    },
    {
      name: 'Discord',
      url: 'https://discord.com/users/768071128999788555',
      icon: 'fab fa-discord'
    },
    {
      name: 'Fiverr',
      url: 'https://fiverr.com/d4vide106',
      icon: 'fas fa-briefcase'
    }
  ];

  const legalLinks = [
    {
      name: t('footer.privacy'),
      path: '/privacy'
    },
    {
      name: t('footer.terms'),
      path: '/terms'
    },
    {
      name: t('footer.cookies'),
      path: '/cookies'
    }
  ];

  return (
    <motion.footer 
      className="footer glass"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="footer-container">
        {/* Main Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <i className="fas fa-code"></i>
              <span className="footer-name">D4vide106</span>
            </div>
            <p className="footer-tagline">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-section-title">{t('footer.quickLinks')}</h4>
            <nav className="footer-nav">
              <a href="#timeline" className="footer-link">
                <i className="fas fa-timeline"></i>
                {t('sections.timeline')}
              </a>
              <a href="#projects" className="footer-link">
                <i className="fas fa-folder-open"></i>
                {t('sections.projects')}
              </a>
              <a href="#gallery" className="footer-link">
                <i className="fas fa-images"></i>
                {t('sections.gallery')}
              </a>
              <a href="#contact" className="footer-link">
                <i className="fas fa-envelope"></i>
                {t('footer.contact')}
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <h4 className="footer-section-title">{t('footer.followMe')}</h4>
            <div className="footer-social-links">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title={link.name}
                >
                  <i className={link.icon}></i>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="footer-section-title">{t('footer.contact')}</h4>
            <div className="footer-contact-info">
              <div className="contact-item">
                <i className="fab fa-discord"></i>
                <span>D4vide106</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>Disponibile su Discord</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Italia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <nav className="footer-legal-nav">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.path}>
                  <a href={link.path} className="footer-legal-link">
                    {link.name}
                  </a>
                  {index < legalLinks.length - 1 && <span className="separator">•</span>}
                </React.Fragment>
              ))}
            </nav>
          </div>

          <div className="footer-copyright">
            <p className="footer-heart">
              Made with <span className="heart">❤️</span> by D4vide106
            </p>
            <p className="footer-year">
              © {currentYear} D4vide106. {t('footer.rights')}
            </p>
          </div>

          <div className="footer-tech">
            <div className="footer-tech-stack">
              <span className="tech-item">
                <i className="fab fa-react"></i>
                React
              </span>
              <span className="tech-item">
                <i className="fab fa-node-js"></i>
                Node.js
              </span>
              <span className="tech-item">
                <i className="fab fa-discord"></i>
                Discord API
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="footer-bg-effect">
        <div className="footer-glow"></div>
      </div>
    </motion.footer>
  );
};

export default Footer;