

/* PROJECT TASKS

1. Define classes
2. Build map and update JSON
3. Create Parser

   IN MAIN.JS:

1. Initialize classes
2. Run game functions 
3. Update terminal

*/



import { processInput } from './utils/parser.js';
import { loadWorld, initWorld } from './classes/Game.js';
import { Player } from './classes/Player.js';



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
        }
    }
});


window.onload = async function() {
    const locations = await initWorld();  // Await the Promise to get the actual locations array
    const player = new Player('Jorge', locations[0]);
    console.log(player.status());
};


//o problema parece ser: