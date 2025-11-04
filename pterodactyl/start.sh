#!/bin/bash

# =================================
# Portfolio D4vide106 - Pterodactyl Start Script
# =================================

echo "🚀 Avvio Portfolio D4vide106..."
echo "===================================="
echo "🎮 Discord ID: 768071128999788555"
echo "🎨 Tema: Blu Intenso + Particelle"
echo "📱 Modalità: Responsive + Protetto"
echo "===================================="

# Controlla se Node.js è installato
if ! command -v node &> /dev/null; then
    echo "❌ Node.js non trovato. Installazione in corso..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
else
    echo "✅ Node.js trovato: $(node --version)"
fi

# Controlla se npm è installato
if ! command -v npm &> /dev/null; then
    echo "❌ npm non trovato"
    exit 1
else
    echo "✅ npm trovato: $(npm --version)"
fi

# Vai alla directory del progetto
cd /home/container || {
    echo "❌ Errore: directory /home/container non trovata"
    exit 1
}

echo "📁 Directory corrente: $(pwd)"

# Installa dipendenze se non esistono
if [ ! -d "node_modules" ]; then
    echo "📦 Installazione dipendenze React..."
    npm install
else
    echo "✅ Dipendenze già installate"
fi

# Controlla se esiste build
if [ ! -d "build" ]; then
    echo "🔨 Build del progetto React..."
    npm run build
else
    echo "✅ Build già presente"
fi

# Crea server express per servire i file React
cat > server.js << 'EOF'
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve i file statici dalla cartella build
app.use(express.static(path.join(__dirname, 'build')));

// Gestisce il routing di React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log('🌟 Portfolio D4vide106 online!');
  console.log(`🌐 Server: http://0.0.0.0:${PORT}`);
  console.log('🎮 Discord API: Attiva');
  console.log('🔒 Immagini: Protette');
  console.log('✨ Particelle: Attive');
});
EOF

echo "🌟 Portfolio pronto!"
echo "===================================="
echo "🎯 Funzionalità Attive:"
echo "   ✅ React App ottimizzata"
echo "   ✅ Discord API (Lanyard)"
echo "   ✅ Protezione immagini"
echo "   ✅ Effetti particellari"
echo "   ✅ Tema blu intenso"
echo "   ✅ Multilingua (IT/EN)"
echo "   ✅ Responsive design"
echo "===================================="

# Avvia il server
echo "🚀 Avvio del server Express..."
node server.js