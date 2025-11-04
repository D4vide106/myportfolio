import React from 'react';
import { motion } from 'framer-motion';
import { useDiscord } from '../../context/DiscordContext';
import { useTranslation } from 'react-i18next';
import './LeftPanel.css';

const LeftPanel = () => {
  const { t } = useTranslation();
  const {
    user,
    status,
    activities,
    spotify,
    loading,
    error,
    getStatusColor,
    getStatusText,
    formatActivity
  } = useDiscord();

  const skills = [
    { name: 'JavaScript', icon: 'fab fa-js-square', level: 'expert' },
    { name: 'Node.js', icon: 'fab fa-node-js', level: 'expert' },
    { name: 'Discord.js', icon: 'fab fa-discord', level: 'expert' },
    { name: 'React', icon: 'fab fa-react', level: 'advanced' },
    { name: 'MongoDB', icon: 'fas fa-database', level: 'advanced' },
    { name: 'Docker', icon: 'fab fa-docker', level: 'intermediate' },
    { name: 'Python', icon: 'fab fa-python', level: 'intermediate' },
    { name: 'MySQL', icon: 'fas fa-database', level: 'intermediate' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/D4vide106',
      icon: 'fab fa-github',
      color: '#24292e'
    },
    {
      name: 'Discord',
      url: 'https://discord.com/users/768071128999788555',
      icon: 'fab fa-discord',
      color: '#5865F2'
    },
    {
      name: 'Fiverr',
      url: 'https://fiverr.com/d4vide106',
      icon: 'fas fa-briefcase',
      color: '#1DBF73'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.aside 
      className="left-panel"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Profile Section */}
      <motion.div className="profile-section glass" variants={itemVariants}>
        {/* Discord Avatar */}
        <div className="avatar-container">
          <div className="avatar-wrapper">
            <img 
              src={user?.avatar_url || '/images/default-avatar.png'}
              alt="D4vide106 Avatar" 
              className="profile-avatar"
              onError={(e) => {
                e.target.src = '/images/default-avatar.png';
              }}
            />
            <div 
              className="status-indicator" 
              style={{ backgroundColor: getStatusColor(status) }}
              title={getStatusText(status)}
            >
              <span className="status-dot"></span>
            </div>
          </div>
          
          {loading && (
            <div className="avatar-loading">
              <i className="fas fa-spinner fa-spin"></i>
            </div>
          )}
        </div>
        
        {/* Profile Info */}
        <div className="profile-info">
          <h1 className="profile-name text-gradient">
            {user?.display_name || 'Davide'}
          </h1>
          <h2 className="profile-username">
            @{user?.username || 'D4vide106'}
          </h2>
          <div className="profile-titles">
            <span className="title-badge">{t('roles.discord_dev')}</span>
            <span className="title-badge">{t('roles.fullstack_dev')}</span>
            <span className="title-badge">{t('roles.game_admin')}</span>
          </div>
        </div>
        
        {/* Discord Activity */}
        <div className="discord-activity">
          <div className="activity-header">
            <i className="fab fa-discord"></i>
            <span>{t('discord.activity')}</span>
            {!loading && (
              <button 
                className="refresh-btn"
                onClick={() => window.location.reload()}
                title="Aggiorna status"
              >
                <i className="fas fa-refresh"></i>
              </button>
            )}
          </div>
          
          <div className="activity-content">
            {loading ? (
              <div className="activity-loading">
                <i className="fas fa-spinner fa-spin"></i>
                <span>{t('discord.loading')}</span>
              </div>
            ) : error ? (
              <div className="activity-error">
                <i className="fas fa-exclamation-triangle"></i>
                <span>{t('discord.offline')}</span>
              </div>
            ) : (
              <div className="activity-list">
                {/* Status principale */}
                <div className="activity-item status-item">
                  <div 
                    className="activity-status-dot"
                    style={{ backgroundColor: getStatusColor(status) }}
                  ></div>
                  <span className="activity-text">{getStatusText(status)}</span>
                </div>
                
                {/* Spotify se in ascolto */}
                {spotify && (
                  <div className="activity-item spotify-item">
                    <i className="fab fa-spotify" style={{ color: '#1DB954' }}></i>
                    <div className="spotify-info">
                      <div className="spotify-song">{spotify.song}</div>
                      <div className="spotify-artist">{spotify.artist}</div>
                    </div>
                  </div>
                )}
                
                {/* Altre attività */}
                {activities && activities.length > 0 && (
                  activities.slice(0, 2).map((activity, index) => (
                    <div key={index} className="activity-item game-item">
                      <i className="fas fa-gamepad"></i>
                      <span className="activity-text">
                        {formatActivity(activity)}
                      </span>
                    </div>
                  ))
                )}
                
                {/* Messaggio se nessuna attività */}
                {!spotify && (!activities || activities.length === 0) && status === 'offline' && (
                  <div className="activity-item idle-item">
                    <i className="fas fa-moon"></i>
                    <span className="activity-text">{t('discord.idle')}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
      
      {/* Skills Section */}
      <motion.div className="skills-section glass" variants={itemVariants}>
        <h3 className="section-title">
          <i className="fas fa-code"></i>
          {t('skills.title')}
        </h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="skill-item"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={skill.icon}></i>
              <span className="skill-name">{skill.name}</span>
              <div className={`skill-level ${skill.level}`}>
                <div className="skill-fill"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Links Section */}
      <motion.div className="links-section glass" variants={itemVariants}>
        <h3 className="section-title">
          <i className="fas fa-link"></i>
          {t('links.title')}
        </h3>
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <motion.a 
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{ '--link-color': link.color }}
            >
              <i className={link.icon}></i>
              <span>{link.name}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.aside>
  );
};

export default LeftPanel;