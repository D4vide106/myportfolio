import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import './LegalPages.css';

const Privacy = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy - D4vide106 Portfolio</title>
        <meta name="description" content="Privacy Policy del portfolio di D4vide106. Informazioni sulla raccolta e utilizzo dei dati personali." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <motion.div 
        className="legal-page"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="legal-container">
          <motion.header className="legal-header" variants={itemVariants}>
            <div className="legal-breadcrumb">
              <a href="/" className="breadcrumb-link">
                <i className="fas fa-home"></i>
                Home
              </a>
              <i className="fas fa-chevron-right"></i>
              <span className="breadcrumb-current">Privacy Policy</span>
            </div>
            
            <h1 className="legal-title">
              <i className="fas fa-shield-alt"></i>
              Privacy Policy
            </h1>
            
            <div className="legal-meta">
              <span className="legal-date">
                <i className="fas fa-calendar"></i>
                Ultimo aggiornamento: 5 Novembre 2024
              </span>
              <span className="legal-version">
                <i className="fas fa-code-branch"></i>
                Versione 1.0
              </span>
            </div>
          </motion.header>

          <motion.div className="legal-content" variants={itemVariants}>
            <div className="legal-intro glass">
              <p className="legal-intro-text">
                Questa Privacy Policy descrive come D4vide106 raccoglie, utilizza e protegge 
                le informazioni personali quando visiti questo portfolio digitale.
              </p>
            </div>

            <section className="legal-section glass">
              <h2 className="section-title">
                <i className="fas fa-info-circle"></i>
                1. Informazioni Raccolte
              </h2>
              <div className="section-content">
                <h3>1.1 Dati di Navigazione</h3>
                <p>
                  Quando visiti questo sito, raccogliamo automaticamente alcune informazioni:
                </p>
                <ul>
                  <li>Indirizzo IP e informazioni sul dispositivo</li>
                  <li>Tipo di browser e sistema operativo</li>
                  <li>Pagine visitate e tempo di permanenza</li>
                  <li>Referrer URL (da dove provieni)</li>
                  <li>Preferenze di lingua selezionate</li>
                </ul>

                <h3>1.2 Dati Discord</h3>
                <p>
                  Integriamo l'API Discord Lanyard per mostrare il mio status in tempo reale:
                </p>
                <ul>
                  <li>Avatar pubblico e username Discord</li>
                  <li>Status di presenza (online/offline/assente)</li>
                  <li>Attività correnti (giochi, Spotify)</li>
                  <li>Nessun dato privato o messaggio personale viene mai raccolto</li>
                </ul>

                <h3>1.3 Local Storage</h3>
                <p>
                  Il sito utilizza il Local Storage del browser per salvare:
                </p>
                <ul>
                  <li>Preferenze di lingua (IT/EN)</li>
                  <li>Cache temporanea dei dati Discord</li>
                  <li>Nessun dato sensibile viene memorizzato localmente</li>
                </ul>
              </div>
            </section>

            <section className="legal-section glass">
              <h2 className="section-title">
                <i className="fas fa-cogs"></i>
                2. Come Utilizziamo i Dati
              </h2>
              <div className="section-content">
                <p>I dati raccolti vengono utilizzati esclusivamente per:</p>
                <ul>
                  <li><strong>Funzionalità del Sito:</strong> Garantire il corretto funzionamento delle features</li>
                  <li><strong>Esperienza Utente:</strong> Migliorare la navigazione e personalizzare l'interfaccia</li>
                  <li><strong>Statistiche Anonime:</strong> Analizzare il traffico per migliorare il portfolio</li>
                  <li><strong>Sicurezza:</strong> Proteggere il sito da abusi e attacchi malintenzionati</li>
                </ul>
                
                <div className="important-note">
                  <i className="fas fa-exclamation-triangle"></i>
                  <strong>Importante:</strong> Non vendiamo, affittiamo o condividiamo i tuoi dati 
                  personali con terze parti per scopi commerciali.
                </div>
              </div>
            </section>

            <section className="legal-section glass">
              <h2 className="section-title">
                <i className="fas fa-cookie-bite"></i>
                3. Cookie e Tecnologie Simili
              </h2>
              <div className="section-content">
                <h3>3.1 Cookie Essenziali</h3>
                <p>Utilizziamo cookie necessari per il funzionamento base:</p>
                <ul>
                  <li>Gestione delle preferenze linguistiche</li>
                  <li>Mantenimento delle impostazioni di accessibilità</li>
                  <li>Prevenzione di attacchi CSRF</li>
                </ul>

                <h3>3.2 Cookie Analitici (Opzionali)</h3>
                <p>Con il tuo consenso, utilizziamo Google Analytics per:</p>
                <ul>
                  <li>Statistiche di traffico anonimizzate</li>
                  <li>Performance del sito e tempi di caricamento</li>
                  <li>Identificazione di errori e problemi tecnici</li>
                </ul>
              </div>
            </section>

            <section className="legal-section glass">
              <h2 className="section-title">
                <i className="fas fa-shield-alt"></i>
                4. Protezione dei Dati
              </h2>
              <div className="section-content">
                <p>Implementiamo diverse misure di sicurezza:</p>
                <ul>
                  <li><strong>HTTPS:</strong> Tutto il traffico è crittografato con SSL/TLS</li>
                  <li><strong>Headers di Sicurezza:</strong> CSP, HSTS, X-Frame-Options implementati</li>
                  <li><strong>Rate Limiting:</strong> Protezione contro attacchi DDoS e spam</li>
                  <li><strong>Hosting Sicuro:</strong> Infrastruttura GitHub Pages con standard enterprise</li>
                  <li><strong>Minimizzazione Dati:</strong> Raccogliamo solo dati strettamente necessari</li>
                </ul>
              </div>
            </section>

            <section className="legal-section glass">
              <h2 className="section-title">
                <i className="fas fa-balance-scale"></i>
                5. I Tuoi Diritti (GDPR)
              </h2>
              <div className="section-content">
                <p>In conformità al GDPR, hai i seguenti diritti:</p>
                <ul>
                  <li><strong>Accesso:</strong> Richiedere informazioni sui dati che possediamo</li>
                  <li><strong>Rettifica:</strong> Correggere dati inesatti o incompleti</li>
                  <li><strong>Cancellazione:</strong> Richiedere l'eliminazione dei tuoi dati</li>
                  <li><strong>Portabilità:</strong> Ottenere una copia dei tuoi dati in formato leggibile</li>
                  <li><strong>Opposizione:</strong> Opporti al trattamento per motivi legittimi</li>
                  <li><strong>Limitazione:</strong> Richiedere la limitazione del trattamento</li>
                </ul>
                
                <div className="contact-box">
                  <h4>Come Esercitare i Tuoi Diritti</h4>
                  <p>
                    Per qualsiasi richiesta relativa ai tuoi dati personali, 
                    contattami tramite Discord: <strong>D4vide106</strong>
                  </p>
                </div>
              </div>
            </section>

            <section className="legal-section glass">
              <h2 className="section-title">
                <i className="fas fa-external-link-alt"></i>
                6. Servizi di Terze Parti
              </h2>
              <div className="section-content">
                <h3>6.1 Discord Lanyard API</h3>
                <p>
                  Utilizziamo l'API pubblica di Discord per mostrare il mio status:
                </p>
                <ul>
                  <li>URL: <code>https://api.lanyard.rest/v1/users/768071128999788555</code></li>
                  <li>Privacy Policy: <a href="https://discord.com/privacy" target="_blank" rel="noopener">https://discord.com/privacy</a></li>
                  <li>Solo dati pubblici vengono utilizzati</li>
                </ul>

                <h3>6.2 Google Fonts</h3>
                <p>
                  Utilizziamo Google Fonts per la tipografia:
                </p>
                <ul>
                  <li>Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">https://policies.google.com/privacy</a></li>
                  <li>I font possono essere cachati localmente dal browser</li>
                </ul>

                <h3>6.3 Font Awesome</h3>
                <p>
                  Per le icone utilizziamo Font Awesome CDN:
                </p>
                <ul>
                  <li>Privacy Policy: <a href="https://fontawesome.com/privacy" target="_blank" rel="noopener">https://fontawesome.com/privacy</a></li>
                </ul>
              </div>
            </section>

            <section className="legal-section glass">
              <h2 className="section-title">
                <i className="fas fa-sync-alt"></i>
                7. Aggiornamenti della Policy
              </h2>
              <div className="section-content">
                <p>
                  Questa Privacy Policy può essere aggiornata periodicamente per riflettere 
                  cambiamenti nelle nostre pratiche o requisiti legali.
                </p>
                <ul>
                  <li>Gli aggiornamenti significativi saranno comunicati tramite il sito</li>
                  <li>La data di "Ultimo aggiornamento" sarà sempre aggiornata</li>
                  <li>Continua ad utilizzare il sito implica l'accettazione delle modifiche</li>
                </ul>
              </div>
            </section>

            <section className="legal-section glass">
              <h2 className="section-title">
                <i className="fas fa-envelope"></i>
                8. Contatti
              </h2>
              <div className="section-content">
                <p>
                  Per qualsiasi domanda riguardo questa Privacy Policy o al trattamento 
                  dei tuoi dati personali, non esitare a contattarmi:
                </p>
                
                <div className="contact-info">
                  <div className="contact-method">
                    <i className="fab fa-discord"></i>
                    <div>
                      <strong>Discord:</strong>
                      <span>D4vide106 (ID: 768071128999788555)</span>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <i className="fab fa-github"></i>
                    <div>
                      <strong>GitHub:</strong>
                      <a href="https://github.com/D4vide106" target="_blank" rel="noopener">@D4vide106</a>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <i className="fas fa-briefcase"></i>
                    <div>
                      <strong>Fiverr:</strong>
                      <a href="https://fiverr.com/d4vide106" target="_blank" rel="noopener">@d4vide106</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>

          <motion.footer className="legal-footer" variants={itemVariants}>
            <div className="legal-footer-content">
              <p className="legal-footer-text">
                Questa Privacy Policy è effettiva dal 5 Novembre 2024 ed è conforme al 
                Regolamento Generale sulla Protezione dei Dati (GDPR) dell'Unione Europea.
              </p>
              
              <div className="legal-footer-links">
                <a href="/terms" className="legal-footer-link">
                  <i className="fas fa-file-contract"></i>
                  Termini di Servizio
                </a>
                <a href="/cookies" className="legal-footer-link">
                  <i className="fas fa-cookie-bite"></i>
                  Cookie Policy
                </a>
                <a href="/" className="legal-footer-link">
                  <i className="fas fa-home"></i>
                  Torna al Portfolio
                </a>
              </div>
            </div>
          </motion.footer>
        </div>
      </motion.div>
    </>
  );
};

export default Privacy;