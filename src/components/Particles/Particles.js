import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesConfig = {
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ['#0066FF', '#0080FF', '#4D9FFF', '#001A66']
      },
      shape: {
        type: ['circle', 'triangle', 'star'],
        options: {
          star: {
            sides: 5
          }
        }
      },
      opacity: {
        value: 0.4,
        random: true,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: false
        }
      },
      size: {
        value: { min: 1, max: 4 },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.1,
          sync: false
        }
      },
      links: {
        enable: true,
        distance: 150,
        color: '#0066FF',
        opacity: 0.2,
        width: 1,
        triangles: {
          enable: true,
          opacity: 0.05
        }
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: 'none',
        random: false,
        straight: false,
        outModes: {
          default: 'bounce'
        },
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detectsOn: 'window',
      events: {
        onHover: {
          enable: true,
          mode: ['grab', 'bubble']
        },
        onClick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 0.8
          }
        },
        bubble: {
          distance: 200,
          size: 8,
          duration: 2,
          opacity: 0.8
        },
        push: {
          quantity: 4
        },
        remove: {
          quantity: 2
        }
      }
    },
    detectRetina: true,
    background: {
      color: {
        value: 'transparent'
      }
    },
    fpsLimit: 120,
    pauseOnBlur: true,
    pauseOnOutsideViewport: true
  };

  return (
    <Particles
      id="particles-background"
      init={particlesInit}
      options={particlesConfig}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default ParticleBackground;