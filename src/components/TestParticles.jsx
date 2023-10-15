import React, { useCallback } from 'react';
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const TestParticles = ({toggleDarkMode}) => {
  const particlesInit = useCallback(async (main) => {
    await loadFull(main);
  }, []);

  const particlesLoaded = useCallback(() => {
    console.log('Particles loaded'); // Add any logic you need when particles are loaded
  }, []);

  const isDarkMode = toggleDarkMode;

  const particleColorLight = '#068e2e'; // Green in light mode
  const particleColorDark = '#00ff00';  // Green in dark mode
  const lineColorLight = '#f5d393';      // White in light mode
  const lineColorDark = '#ffffff';       // White in dark mode

  const particleColor = isDarkMode ? particleColorDark : particleColorLight;
  const lineColor = isDarkMode ? lineColorDark : lineColorLight;

  return (
    <Particles
      className='w-full h-full bg-gray-950'
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: isDarkMode ? ' bg-grey-950' : '#ffffff', // Set background color based on theme
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: particleColor,
          },
          links: {
            color: lineColor,
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: 5,
            random: true,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default TestParticles;
