import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import './ImageLightbox.css';

const ImageLightbox = ({ isOpen, onClose, images = [], currentIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(currentIndex);
  const [isZoomed, setIsZoomed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setActiveIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Disable right-click context menu on lightbox
      document.addEventListener('contextmenu', preventRightClick);
      // Disable F12 and inspect shortcuts
      document.addEventListener('keydown', preventDevTools);
    } else {
      document.body.style.overflow = 'auto';
      document.removeEventListener('contextmenu', preventRightClick);
      document.removeEventListener('keydown', preventDevTools);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('contextmenu', preventRightClick);
      document.removeEventListener('keydown', preventDevTools);
    };
  }, [isOpen]);

  const preventRightClick = (e) => {
    e.preventDefault();
    showProtectionWarning();
  };

  const preventDevTools = (e) => {
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && e.key === 'I') ||
      (e.ctrlKey && e.shiftKey && e.key === 'C') ||
      (e.ctrlKey && e.key === 'U')
    ) {
      e.preventDefault();
      showProtectionWarning();
    }
  };

  const showProtectionWarning = () => {
    console.warn('🚨 Contenuto protetto da copyright © D4vide106');
    console.warn('🚫 Il download o la copia di queste immagini non è autorizzato');
    console.warn('📞 Per richieste di utilizzo: contatta D4vide106 su Discord');
  };

  const goToNext = () => {
    if (images.length > 0) {
      setImageLoaded(false);
      setActiveIndex((prev) => (prev + 1) % images.length);
    }
  };

  const goToPrevious = () => {
    if (images.length > 0) {
      setImageLoaded(false);
      setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'Escape') onClose();
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  if (!isOpen || !images.length) return null;

  const currentImage = images[activeIndex];

  const lightboxContent = (
    <AnimatePresence>
      <motion.div
        className="lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        onKeyDown={handleKeyPress}
        tabIndex={0}
        role="dialog"
        aria-modal="true"
        aria-label="Visualizzatore immagini"
      >
        <motion.div
          className="lightbox-container"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="lightbox-header">
            <div className="lightbox-info">
              <h3 className="lightbox-title">{currentImage.title}</h3>
              <span className="lightbox-counter">
                {activeIndex + 1} di {images.length}
              </span>
            </div>
            <div className="lightbox-controls">
              <button
                className="lightbox-btn zoom-btn"
                onClick={toggleZoom}
                title={isZoomed ? 'Rimpicciolisci' : 'Ingrandisci'}
              >
                <i className={`fas ${isZoomed ? 'fa-search-minus' : 'fa-search-plus'}`}></i>
              </button>
              <button
                className="lightbox-btn close-btn"
                onClick={onClose}
                title="Chiudi"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                className="lightbox-nav prev-btn"
                onClick={goToPrevious}
                title="Immagine precedente"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                className="lightbox-nav next-btn"
                onClick={goToNext}
                title="Immagine successiva"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </>
          )}

          {/* Image Container */}
          <div className={`lightbox-image-container ${isZoomed ? 'zoomed' : ''}`}>
            {!imageLoaded && (
              <div className="lightbox-loading">
                <i className="fas fa-spinner fa-spin"></i>
                <span>Caricamento...</span>
              </div>
            )}
            
            <motion.img
              key={activeIndex}
              src={currentImage.src}
              alt={currentImage.title}
              className="lightbox-image protected-image"
              onLoad={handleImageLoad}
              onError={(e) => {
                e.target.src = '/images/placeholder-error.jpg';
                setImageLoaded(true);
              }}
              draggable={false}
              onContextMenu={preventRightClick}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: imageLoaded ? 1 : 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                userSelect: 'none',
                pointerEvents: 'none'
              }}
            />

            {/* Watermark */}
            <div className="lightbox-watermark">
              <span className="watermark-text">© D4vide106</span>
              <div className="watermark-pattern"></div>
            </div>

            {/* Protection Notice */}
            <div className="protection-notice">
              <i className="fas fa-shield-alt"></i>
              <span>Immagine protetta da copyright</span>
            </div>
          </div>

          {/* Footer */}
          <div className="lightbox-footer">
            <div className="image-metadata">
              {currentImage.category && (
                <span className="image-category">
                  <i className="fas fa-tag"></i>
                  {currentImage.category}
                </span>
              )}
              {currentImage.date && (
                <span className="image-date">
                  <i className="fas fa-calendar"></i>
                  {currentImage.date}
                </span>
              )}
            </div>
            
            {currentImage.description && (
              <p className="image-description">{currentImage.description}</p>
            )}

            {/* Thumbnails Navigation */}
            {images.length > 1 && (
              <div className="lightbox-thumbnails">
                {images.map((image, index) => (
                  <button
                    key={index}
                    className={`thumbnail-btn ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => {
                      setImageLoaded(false);
                      setActiveIndex(index);
                    }}
                    title={image.title}
                  >
                    <img
                      src={image.thumb || image.src}
                      alt={image.title}
                      className="thumbnail-image"
                      draggable={false}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Keyboard Shortcuts Info */}
        <div className="keyboard-shortcuts">
          <div className="shortcut">
            <kbd>←</kbd> <kbd>→</kbd> <span>Naviga</span>
          </div>
          <div className="shortcut">
            <kbd>Esc</kbd> <span>Chiudi</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );

  return createPortal(lightboxContent, document.body);
};

export default ImageLightbox;