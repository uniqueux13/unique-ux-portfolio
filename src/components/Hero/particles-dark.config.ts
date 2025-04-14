// src/components/Hero/particles-dark.config.ts
import type { ISourceOptions } from "@tsparticles/engine";

// Configuration for "Subtle Light Motes" Effect (Corrected)
const options: ISourceOptions = {
    fpsLimit: 60,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "bubble",
            },
        },
        modes: {
            bubble: {
                distance: 80,
                size: 3,
                duration: 1,
                opacity: 0.8,
            },
        },
    },
    particles: {
        color: {
            value: "#FFFFFF", // Light particles
        },
        links: {
            enable: false, // No links
        },
        move: {
            direction: "top-right",
            enable: true,
            outModes: {
                default: "out",
            },
            random: false,
            speed: 0.4,
            straight: true,
        },
        number: {
            density: {
                enable: true,
                // area: 1000, // <<< REMOVED AGAIN
            },
            value: 50, // Control density with value
        },
        opacity: {
            value: { min: 0.05, max: 0.4 }, // Opacity range
             animation: {
                 enable: true,
                 speed: 0.6,
                 sync: false, // Animates between min/max opacity.value
                 // minimumValue: 0.05 // <<< REMOVED AGAIN
             }
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 0.5, max: 1.5 }, // Very small
        },
    },
    detectRetina: true,
    fullScreen: { enable: false },
    background: {
        color: 'transparent'
    }
};

export default options;