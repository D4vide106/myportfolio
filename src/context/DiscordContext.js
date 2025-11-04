import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const DiscordContext = createContext();

export const useDiscord = () => {
  const context = useContext(DiscordContext);
  if (!context) {
    throw new Error('useDiscord deve essere usato all\'interno di un DiscordProvider');
  }
  return context;
};

export const DiscordProvider = ({ children }) => {
  const [discordData, setDiscordData] = useState({
    user: null,
    status: 'offline',
    activities: [],
    spotify: null,
    loading: true,
    error: null
  });

  const DISCORD_ID = '768071128999788555';
  const LANYARD_API = `https://api.lanyard.rest/v1/users/${DISCORD_ID}`;

  const fetchDiscordData = async () => {
    try {
      setDiscordData(prev => ({ ...prev, loading: true, error: null }));
      
      const response = await axios.get(LANYARD_API, {
        timeout: 5000
      });

      if (response.data.success && response.data.data) {
        const userData = response.data.data;
        
        const processedData = {
          user: {
            id: userData.discord_user.id,
            username: userData.discord_user.username,
            discriminator: userData.discord_user.discriminator,
            avatar: userData.discord_user.avatar,
            avatar_url: userData.discord_user.avatar 
              ? `https://cdn.discordapp.com/avatars/${DISCORD_ID}/${userData.discord_user.avatar}.png?size=256`
              : `https://cdn.discordapp.com/embed/avatars/${parseInt(userData.discord_user.discriminator) % 5}.png`,
            display_name: userData.discord_user.global_name || userData.discord_user.username
          },
          status: userData.discord_status || 'offline',
          activities: userData.activities || [],
          spotify: userData.listening_to_spotify ? userData.spotify : null,
          listening_to_spotify: userData.listening_to_spotify || false,
          loading: false,
          error: null,
          last_updated: new Date().toISOString()
        };

        setDiscordData(processedData);
        
        // Salva in localStorage per cache
        localStorage.setItem('discord_cache', JSON.stringify({
          data: processedData,
          timestamp: Date.now()
        }));
        
      } else {
        throw new Error('Dati Discord non disponibili');
      }
    } catch (error) {
      console.error('Errore nel recupero dati Discord:', error);
      
      // Prova a caricare dalla cache
      const cached = localStorage.getItem('discord_cache');
      if (cached) {
        try {
          const { data, timestamp } = JSON.parse(cached);
          // Usa cache se non più vecchia di 5 minuti
          if (Date.now() - timestamp < 5 * 60 * 1000) {
            setDiscordData({ ...data, loading: false });
            return;
          }
        } catch (e) {
          console.error('Errore nel parsing della cache:', e);
        }
      }
      
      // Fallback con dati statici
      setDiscordData({
        user: {
          id: DISCORD_ID,
          username: 'D4vide106',
          discriminator: '0000',
          avatar: null,
          avatar_url: '/images/default-avatar.png',
          display_name: 'D4vide106'
        },
        status: 'offline',
        activities: [],
        spotify: null,
        listening_to_spotify: false,
        loading: false,
        error: error.message || 'Errore di connessione',
        last_updated: new Date().toISOString()
      });
    }
  };

  const getStatusColor = (status) => {
    const statusColors = {
      online: '#00FF88',
      idle: '#FFB800', 
      dnd: '#FF4444',
      offline: '#747F8D'
    };
    return statusColors[status] || statusColors.offline;
  };

  const getStatusText = (status) => {
    const statusTexts = {
      online: 'Online',
      idle: 'Assente',
      dnd: 'Non disturbare',
      offline: 'Offline'
    };
    return statusTexts[status] || statusTexts.offline;
  };

  const formatActivity = (activity) => {
    if (!activity) return null;

    switch (activity.type) {
      case 0: // Playing
        return `Giocando a ${activity.name}`;
      case 1: // Streaming
        return `In live: ${activity.details || activity.name}`;
      case 2: // Listening
        return `Ascoltando ${activity.name}`;
      case 3: // Watching
        return `Guardando ${activity.name}`;
      case 5: // Competing
        return `Gareggiando in ${activity.name}`;
      default:
        return activity.name;
    }
  };

  const refreshData = () => {
    fetchDiscordData();
  };

  // Fetch iniziale
  useEffect(() => {
    fetchDiscordData();
  }, []);

  // Auto-refresh ogni 30 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      if (!document.hidden) { // Solo se la pagina è visibile
        fetchDiscordData();
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // Refresh quando la pagina diventa visibile
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden && !discordData.loading) {
        fetchDiscordData();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [discordData.loading]);

  const value = {
    ...discordData,
    refreshData,
    getStatusColor,
    getStatusText,
    formatActivity,
    DISCORD_ID
  };

  return (
    <DiscordContext.Provider value={value}>
      {children}
    </DiscordContext.Provider>
  );
};