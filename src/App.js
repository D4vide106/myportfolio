import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './styles/globals.css';
import './i18n/config';

// Components
import Particles from './components/Particles/Particles';
import LeftPanel from './components/Layout/LeftPanel';
import RightPanel from './components/Layout/RightPanel';
import Footer from './components/Layout/Footer';
import LanguageSelector from './components/UI/LanguageSelector';
import ImageLightbox from './components/Gallery/ImageLightbox';

// Pages
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';

// Context
import { DiscordProvider } from './context/DiscordContext';
import { GalleryProvider } from './context/GalleryContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <DiscordProvider>
        <GalleryProvider>
          <Router basename="/myportfolio">
            <div className="App">
              <Helmet>
                <title>D4vide106 - Portfolio Professionale</title>
                <meta 
                  name="description" 
                  content="Portfolio professionale di D4vide106 - Discord Bot Developer, Full Stack Developer, Game Server Administrator"
                />
              </Helmet>
              
              <Routes>
                {/* Homepage principale */}
                <Route path="/" element={
                  <>
                    {/* Particles Background */}
                    <Particles />
                    
                    {/* Main Container */}
                    <div className="main-container">
                      {/* Left Panel - Profile & Skills */}
                      <LeftPanel />
                      
                      {/* Right Panel - Timeline & Projects */}
                      <RightPanel />
                    </div>
                    
                    {/* UI Components */}
                    <LanguageSelector />
                    <ImageLightbox />
                    
                    {/* Footer */}
                    <Footer />
                  </>
                } />
                
                {/* Pagine legali */}
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
              </Routes>
            </div>
          </Router>
        </GalleryProvider>
      </DiscordProvider>
    </ThemeProvider>
  );
}

export default App;