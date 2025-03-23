import { Location } from './Location.js';

const initialMessage = `Você desperta na beira da praia, com a areia úmida sob seus pés descalços. A lua está cheia e colore a paisagem com um tom pálido. Onde você supõe ser o norte, você vê dunas; a norte e a oeste, a praia se estende, e ao sul está o mar. Na areia, perto de você, você vê um pequeno caderno. 

Você não sabe quem é ou o que aconteceu antes de chegar onde está.

O que você faz?  
`;
/*
`You are at the beach at night.
The full moon shines bright.
Act.

HEY DEV! THE NEXT STEP IS:
-- CREATING A LOCATION MAP AND SEEING IF I CAN MOVE AROUND.
-- THEN, WORKING ON THE PARSER TO MOVE, PICK UP AND DROP ITEMS, ETC. CREATE AN ACTION CLASSES OR SOMETHING? IDK!
https://thorbjorn.itch.io/tiled/download/eyJpZCI6Mjg3NjgsImV4cGlyZXMiOjE3NDI0NDYxNDl9.fABKyZSvrbcVOu7Eb6SanrE%2bqf0%3d 


CREATE FUNCTION TO REMOVE CACHE?
`;
*/


// Loads JSON file containing Locations (and their Items and Fixtures). 
async function loadWorld() {
    console.log('loadWorld running');
    const response = await fetch('scripts/data/World.json');
    const data = await response.json();
    return data.Locations;
}

// Automatically initializes all items and fixtures as well
export async function initWorld() {
    const locationsData = await loadWorld();
    const locations = locationsData.map(locationData => new Location(locationData));
    const initialText = initialMessage;

    const output = document.getElementById('output');
    output.textContent = initialText;

    return locations;
}