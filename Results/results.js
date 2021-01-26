import { getPokeStats } from '../localStorageUtils.js';
import { displayResults } from './displayResults.js';
import { pokemon } from '../pokemon.js';
import { findByUnderScoreId } from '../utils.js';

// export function getTotalPokeStats() { //this function will display the
    //pokemon seen and pokemon caught from the localStorage to the use 
    //on the results page 

const displayAllStats = getPokeStats();
let results = '';
const displayBody = document.getElementsByClassName('display-body');
let pokemonObject = ''; 

for (let i = 0; i < displayAllStats.length; i++) {//go through the stats in localStorage and match the pokemon id from the pokemonjs to the id from localStorage
    pokemonObject = findByUnderScoreId(pokemon, displayAllStats[i]._id);

    results = displayResults(displayAllStats[i], pokemonObject); //the results is a variable that is assigned to function displayResults that takes in an statsobject and pokemonobject
    displayBody[0].append(results); //returns my innerDiv hamburger (seen, caught, name)

}


