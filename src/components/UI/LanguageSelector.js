import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    {
      code: 'it',
      name: 'Italiano',
      flag: '🇮🇹',
      icon: 'fas fa-flag'
    },
    {
      code: 'en',
      name: 'English',
      flag: '🇬🇧',
      icon: 'fas fa-flag'
    }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
    
    // Salva preferenza in localStorage
    localStorage.setItem('preferred-language', langCode);
    
    // Aggiorna document lang attribute
    document.documentElement.lang = langCode;
    
    // Optional: Analytics tracking
    if (window.gtag) {
      window.gtag('event', 'language_change', {
        event_category: 'UI',
        event_label: langCode
      });
    }
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -10,
      transition: {
        duration: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.2
      }
    })
  };

  return (
    <div className="language-selector no-print">
      <motion.button
        className="language-toggle glass"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Seleziona lingua"
        aria-expanded={isOpen}
      >
        <span className="current-language">
          <span className="language-flag">{currentLanguage.flag}</span>
          <span className="language-code">{currentLanguage.code.toUpperCase()}</span>
        </span>
        <motion.i 
          className="fas fa-chevron-down"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="language-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown Menu */}
            <motion.div
              className="language-dropdown glass"
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="language-list">
                {languages.map((language, index) => (
                  <motion.button
                    key={language.code}
                    className={`language-option ${
                      language.code === i18n.language ? 'active' : ''
                    }`}
                    onClick={() => handleLanguageChange(language.code)}
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="option-flag">{language.flag}</span>
                    <span className="option-info">
                      <span className="option-name">{language.name}</span>
                      <span className="option-code">{language.code.toUpperCase()}</span>
                    </span>
                    {language.code === i18n.language && (
                      <motion.i 
                        className="fas fa-check option-check"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring' }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
              
              {/* Language Info */}
              <div className="language-info">
                <div className="language-tip">
                  <i className="fas fa-globe"></i>
                  <span>Lingua del browser: {navigator.language}</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;