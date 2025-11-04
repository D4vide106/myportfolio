const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const DISCORD_ID = process.env.DISCORD_ID || '768071128999788555';

// Middleware di sicurezza
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "data:", "https:"],
            connectSrc: ["'self'", "https://api.lanyard.rest", "wss://api.lanyard.rest"]
        }
    }
}));

app.use(cors());
app.use(compression());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// API per Discord Status tramite Lanyard
app.get('/api/discord-status', async (req, res) => {
    try {
        console.log(`📡 Richiesta status Discord per ID: ${DISCORD_ID}`);
        const response = await axios.get(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
        
        if (response.data.success) {
            const userData = response.data.data;
            const processedData = {
                username: userData.discord_user.username,
                discriminator: userData.discord_user.discriminator,
                avatar_url: `https://cdn.discordapp.com/avatars/${DISCORD_ID}/${userData.discord_user.avatar}.png`,
                status: userData.discord_status,
                listening_to_spotify: userData.listening_to_spotify,
                spotify: userData.spotify,
                activities: userData.activities || [],
                online: userData.discord_status !== 'offline'
            };
            res.json({ success: true, data: processedData });
        } else {
            res.status(404).json({ success: false, error: 'Utente non trovato su Lanyard' });
        }
    } catch (error) {
        console.error('❌ Errore API Discord:', error.message);
        res.status(500).json({ 
            success: false, 
            error: 'Errore nel recupero dei dati Discord',
            fallback: {
                username: 'D4vide106',
                avatar_url: '/images/default-avatar.png',
                status: 'offline',
                online: false
            }
        });
    }
});

// API per informazioni del portfolio
app.get('/api/portfolio-info', (req, res) => {
    res.json({
        success: true,
        data: {
            name: 'Davide',
            username: 'D4vide106',
            title: 'Discord Bot Developer & Full Stack Developer',
            specialties: [
                'Discord Bot Development',
                'Full Stack Development',
                'Game Server Management',
                'Modpack Creation',
                'Community Management'
            ],
            experience: {
                years: new Date().getFullYear() - 2020,
                start_year: 2020
            },
            platforms: {
                github: 'D4vide106',
                discord: '768071128999788555',
                fiverr: 'D4vide106'
            }
        }
    });
});

// Rotta principale
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rotte per le pagine legali
app.get('/privacy', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'privacy.html'));
});

app.get('/terms', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'terms.html'));
});

// Gestione errori 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Avvio del server
app.listen(PORT, HOST, () => {
    console.log('🚀 =====================================');
    console.log('🌟 Portfolio D4vide106 - AVVIATO!');
    console.log('🚀 =====================================');
    console.log(`🌐 Server: http://${HOST}:${PORT}`);
    console.log(`👤 Discord ID: ${DISCORD_ID}`);
    console.log(`🐳 Modalità: Pterodactyl Hosting`);
    console.log(`🎨 Tema: Blu Intenso + Particelle`);
    console.log('🚀 =====================================');
    
    // Test iniziale dell'API Discord
    axios.get(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`)
        .then(response => {
            if (response.data.success) {
                console.log(`✅ Discord API connessa: ${response.data.data.discord_user.username}`);
            }
        })
        .catch(error => {
            console.warn(`⚠️  Discord API non disponibile: ${error.message}`);
        });
});