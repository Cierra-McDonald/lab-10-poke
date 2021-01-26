const POKESTATS = 'POKESTATS'; //a magic string
import { findByUnderScoreId } from './utils.js';

export function getPokeStats() {
    let stats = JSON.parse(localStorage.getItem(POKESTATS));

    if (!stats) {
        stats = [];
        localStorage.setItem(POKESTATS, JSON.stringify(stats)); 
    }
    return stats;
}

export function setPokeStats(newStats) { //this function sets a new array and puts it in local storage
    localStorage.setItem(POKESTATS, JSON.stringify(newStats));

} 

export function incrementSeen(_id) { // this function takes in a unique number id and searches what is in localStorage
    const stats = getPokeStats();
    const poke = findByUnderScoreId(stats, _id);

    if (!poke) {//if not in localStorage, then initialize a newStat object
        const newStat = {
            _id: _id,
            seen: 1, 
            caught: 0,
        };

        stats.push(newStat);
    } else { 
        poke.seen++;
        //update this block to update the stats array and pust to localStorage
    }
    setPokeStats(stats);

}

export function incrementCaught(_id) { // this function takes in a unique number id
    const stats = getPokeStats(); //first get pokestats away from local storage
    const poke = findByUnderScoreId(stats, _id); 
   
    if (!poke){
        console.log('error');
    } else {
        poke.caught++;
    }
    //TODO: update this line to update the poke stats and push to local storage 

    setPokeStats(stats);

}

export function clearGame() {
    localStorage.removeItem('POKESTATS');
}

export function numberPokesCaught() { 

    const pokemonArray = getPokeStats();
    let total = 0;

    for (let i = 0; i < pokemonArray.length; i++) {
        console.log(pokemonArray[i]);
        total += pokemonArray[i].caught;
    }
    return total;
}