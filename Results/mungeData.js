
export function pokeNamesArray(pokemonStats){
//Arguments dataype: an Array- of Pokemon Stat Objects 
//Purpose: extract pokemon names from the pokemon.js and store them in a new array with just the pokemon names
//Return: It should return an array of strings , pokemon names
    let pokemonNames = [];
    // Make a loop that loops through all of the pokemon objects array and extracts the name from each object
    // utilize array.push() function to add each name "string" to the pokemonNames array
    pokemonNames = pokemonStats.map(pokemonStats => pokemonStats.name);
    return pokemonNames;
}

export function pokeSeenArray(pokemonStats){

    let pokemonSeen = []; 
    for (let i = 0; i < pokemonStats.length; i++) {
        pokemonSeen.push(pokemonStats[i].seen);
       
    }
    return pokemonSeen; 
}

export function pokeCaughtArray(pokemonStats){

    let pokemoncCaught = [];
    for (let i = 0; i < pokemonStats.length; i++) {
        pokemoncCaught.push(pokemonStats[i].caught);
    }

    return pokemoncCaught; 
}

export function pokeBarColors(pokemonStats){ //this function is a loop that will generate an array of color strings
    let colorArray = [];

    for (let i = 0; i < pokemonStats.length; i++) {
        colorArray.push(generateRGB());
    }
    return colorArray;
    
}

function generateRGB() {//this function returns a random string of color
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    const a = .75;

    return `rgba(${r}, ${g}, ${b}, ${a})`;
  
}