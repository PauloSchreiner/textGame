import { processInput } from './utils/parser.js';
import { initWorld } from './classes/Game.js';
import { Player } from './classes/Player.js';
import { particleConfig, animateColorChange } from './utils/graphics.js';

window.onload = async function () {
    const locations = await initWorld(); // Await the Promise to get the actual locations array
    const player = new Player('Jorge', locations[0]);
    console.log(player.status());

    // Initialize tsParticles
    await tsParticles.load('tsparticles', particleConfig);
};

// Update terminal via Event Listener
document.getElementById('input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const input = event.target.value.trim();
        if (input) {
            const output = document.getElementById('output');
            output.textContent += `> ${input}\n`;
            output.textContent += `${processInput(input)}\n`;
            event.target.value = '';
            output.scrollTop = output.scrollHeight;
            animateColorChange('#00ff00', '#ff0000', 1000);

        
        }
    }
});

