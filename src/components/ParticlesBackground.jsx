import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = ({ theme }) => {

  const particlesInit = useCallback(async (engine) => {
    // this loads the slim version of tsparticles
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 0.3,
            color: "#ffffff"
          },
        },
      },
    },
    particles: {
      color: {
        value: ["#ffffff", "#8b0000", "#001f3f"],
      },
      links: {
        color: "#ffffff",
        distance: 180,
        enable: true,
        opacity: 0.1,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 0.3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: 80,
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
        }
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 2 },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="absolute inset-0 -z-10 pointer-events-auto">
      <Particles id="tsparticles" init={particlesInit} options={particlesConfig} />
    </div>
  );
};

export default ParticlesBackground;
