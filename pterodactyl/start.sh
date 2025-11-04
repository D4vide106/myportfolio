#!/bin/bash

# Portfolio Startup Script per Pterodactyl Panel
# Autore: D4vide106
# Data: $(date)

echo "🚀 Avvio Portfolio D4vide106..."
echo "=================================="

# Controllo Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js non trovato. Installazione in corso..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
else
    echo "✅ Node.js trovato: $(node --version)"
fi

# Controllo npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm non trovato."
    exit 1
else
    echo "✅ npm trovato: $(npm --version)"
fi

# Vai alla directory del progetto
cd /home/container || exit 1

# Installa dipendenze se non esistono
if [ ! -d "node_modules" ]; then
    echo "📦 Installazione dipendenze..."
    npm install
fi

# Controlla se esiste il file di configurazione
if [ ! -f ".env" ]; then
    echo "⚙️ Creazione file di configurazione..."
    cp .env.example .env
    echo "DISCORD_ID=768071128999788555" >> .env
    echo "LANYARD_API=https://api.lanyard.rest/v1/users/768071128999788555" >> .env
fi

echo "🌟 Portfolio pronto!"
echo "📱 Discord ID: 768071128999788555"
echo "🌐 Modalità: Hosting Pterodactyl"
echo "=================================="

# Avvia il server
echo "🚀 Avvio del server..."
npm run start