# 🚀 Portfolio D4vide106 - Pterodactyl Hosting

> Portfolio professionale e mistico con integrazione Discord, ottimizzato per hosting su Pterodactyl Panel

## 🎯 Caratteristiche Principali

- ✨ **Tema Blu Intenso** con effetti particellari
- 🎮 **Integrazione Discord** live tramite Lanyard API
- 🖼️ **Galleria protetta** con watermark automatico
- 🌍 **Multilingua** (Italiano/Inglese)
- 📱 **Responsive Design** per tutti i dispositivi
- 🔒 **Protezione immagini** anti-copia
- ⚡ **Performance ottimizzate** per Pterodactyl

## 🛠️ Setup per Pterodactyl

### 1. Caricamento Files
```bash
# Carica tutti i file della cartella pterodactyl/ nel tuo server
# Assicurati che start.sh abbia i permessi di esecuzione
chmod +x start.sh
```

### 2. Configurazione Discord
```bash
# Il tuo Discord ID è già configurato: 768071128999788555
# Assicurati di essere nel server Lanyard: https://discord.gg/lanyard
```

### 3. Avvio Automatico
```bash
# Pterodactyl eseguirà automaticamente:
./start.sh
```

## 📁 Struttura Progetto

```
pterodactyl/
├── start.sh              # Script di avvio principale
├── server.js             # Server Express.js
├── package.json          # Dipendenze Node.js
├── .env.example          # Configurazione template
├── public/               # Files statici del sito
│   ├── index.html       # Homepage principale
│   ├── css/             # Stili CSS
│   ├── js/              # JavaScript client
│   ├── images/          # Immagini del portfolio
│   └── assets/          # Altri assets
└── README.md            # Questa documentazione
```

## 🎨 Personalizzazione

### Colori Tema
- **Primario**: `#0066FF` (Blu intenso acceso)
- **Secondario**: `#001A66` (Blu scuro)
- **Accent**: `#0080FF` (Blu chiaro)

### Discord API
- **ID Utente**: `768071128999788555`
- **API Lanyard**: `https://api.lanyard.rest/v1/users/768071128999788555`
- **Status Live**: ✅ Abilitato
- **Avatar Automatico**: ✅ Attivo

## 🔧 Configurazione Avanzata

### Variabili Ambiente (.env)
```env
DISCORD_ID=768071128999788555
PORT=3000
THEME_PRIMARY=#0066FF
PARTICLES_ENABLED=true
WATERMARK_ENABLED=true
```

### Pterodactyl Egg Settings
- **Docker Image**: `ghcr.io/goover/nodejs:18`
- **Startup Command**: `./start.sh`
- **Port**: `3000`

## 📊 API Endpoints

- `GET /` - Homepage principale
- `GET /api/discord-status` - Status Discord live
- `GET /api/portfolio-info` - Informazioni portfolio
- `GET /privacy` - Privacy Policy
- `GET /terms` - Termini di Servizio

## 🎯 Funzionalità Uniche

### Discord Integration
- Avatar live da Discord
- Status online/offline
- Attività in corso (giochi, Spotify)
- Presenza in tempo reale

### Protezione Immagini
- Watermark automatico "© D4vide106"
- Disable right-click
- Protezione drag & drop
- Lightbox per ingrandimento

### Effetti Visivi
- Particelle animate di sfondo
- Glassmorphism effects
- Transizioni fluide
- Animazioni CSS avanzate

## 🚀 Deployment

1. **Upload**: Carica tutti i file nel server Pterodactyl
2. **Permissions**: `chmod +x start.sh`
3. **Start**: Pterodactyl eseguirà automaticamente lo script
4. **Monitor**: Controlla i logs per eventuali errori

## 📱 Compatibilità

- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Tablet (iPad, Android)
- ✅ Mobile (iOS, Android)
- ✅ Pterodactyl Panel
- ✅ Docker Containers

## 🎨 Preview

```
┌─────────────────────────────────────┐
│  🎮 D4vide106 - Portfolio           │
├─────────────────┬───────────────────┤
│  📷 Avatar      │  📈 Timeline      │
│  💻 Skills      │  🎯 Projects      │
│  🎵 Status      │  🖼️  Gallery      │
│  🌐 Links       │  📊 Stats        │
└─────────────────┴───────────────────┘
```

---

**Made with ❤️ by D4vide106**

🔗 [GitHub](https://github.com/D4vide106) | 💬 [Discord](https://discord.com/users/768071128999788555) | 💼 [Fiverr](https://fiverr.com/d4vide106)