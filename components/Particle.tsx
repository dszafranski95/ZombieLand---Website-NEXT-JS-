"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className="h-screen"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: false,
            },
            resize: true,
          },
        },
        particles: {
          color: {
            value: "#8B0000", // Dark red color for a blood-like shade
          },
          collisions: {
            enable: true,
          },
          move: {
            enable: true,
            direction: "bottom", // Make particles move from top to bottom
            outModes: {
              default: "out",
            },
            speed: 2.5, // Adjust speed to resemble raindrops falling
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.7, // Slightly transparent droplets
          },
          shape: {
            type: "circle", // Circle shape to resemble blood droplets
          },
          size: {
            value: 2,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;
