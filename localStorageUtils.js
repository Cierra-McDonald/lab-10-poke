const POKESTATS = 'POKESTATS';
import { findByUnderScoreId } from './utils.js';

export function getPokeStats() {
    let stats = JSON.parselocalStorage.getItem(POKESTATS);

    if (!stats) {
        stats = [];
        localStorage.setItem(POKESTATS, JSON.stringify(stats)); 
    }
    return stats;
}

export function setPokeStats(newStats) {
    localStorage.setItem(POKESTATS, JSON.stringify(newStats));

} 

export function incrementSeen(_id) {
    const stats = getPokeStats();

    const poke = findByUnderScoreId(stats, _id);

    if (!poke) {
        const newStat = {
            _id: _id,
            seen: 1, 
            caught: 0,
        };

        stats.push(newStat);
    } else { 
        poke.seen++;
    }
    setPokeStats(stats);

}

export function incrementCaught(_id) {
    const stats = getPokeStats();

    const poke = findByUnderScoreId(stats, _id); 

    poke.caught++;

    setPokeStats(stats);

}