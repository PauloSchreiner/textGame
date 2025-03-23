export const particleConfig = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.7,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        links: {
            enable: true,
            distance: 200,
            color: "#00ff00",
            opacity: 1,
            width: 10
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    retina_detect: true
};


function interpolateColor(startColor, endColor, factor) {
    // Parse hex color to RGB
    function hexToRgb(hex) {
        let r = parseInt(hex.slice(1, 3), 16);
        let g = parseInt(hex.slice(3, 5), 16);
        let b = parseInt(hex.slice(5, 7), 16);
        return { r, g, b };
    }

    // Convert RGB to hex color
    function rgbToHex(r, g, b) {
        return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
    }

    // Convert the start and end colors from hex to RGB
    const startRgb = hexToRgb(startColor);
    const endRgb = hexToRgb(endColor);

    // Calculate the new color based on the factor (between 0 and 1)
    const r = Math.round(startRgb.r + (endRgb.r - startRgb.r) * factor);
    const g = Math.round(startRgb.g + (endRgb.g - startRgb.g) * factor);
    const b = Math.round(startRgb.b + (endRgb.b - startRgb.b) * factor);

    // Return the new color in hex format
    return rgbToHex(r, g, b);
}

export function animateColorChange(startColor, endColor, duration) {
    let startTime = Date.now();

    function step() {
        let elapsed = Date.now() - startTime;
        let factor = Math.min(elapsed / duration, 1); // Ensure it stops at 1

        let newColor = interpolateColor(startColor, endColor, factor);

        // Change body text and input color
        document.documentElement.style.setProperty('--text-color', newColor);

        // Update particleConfig color and link color
        particleConfig.particles.links.color = newColor; // Line link color
        console.log(newColor);
        console.log(particleConfig.particles.links.color);
        console.log('---');

        // Continue the animation until the duration is reached
        if (factor < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}