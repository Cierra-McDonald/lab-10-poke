import { pokemon } from '../pokemon.js';
import { incrementCaught, incrementSeen } from './localStorageUtils.js';


let numberOfTurns = 0; 

export function getRandomPokemon() {
    const randonIndex = Math.floor(Math.random() * pokemon.length);

    return pokemon[randonIndex];
}

export function findByUnderScoreId(array, id) { //this is the getById in shopping cart project
    for (let i = 0; i < array.length; i++) {
        const item = array[i];

        if (id === item._id) {
            return item;
        }
    }
}

export function setThreePokemon() {
    numberOfTurns++; 
    //the numberOfTurns variable is going to increment by one here
    //and the three displayed poke are being set to the funcion getRandomPoke because each will need to be a random draw
    let pokeOne = getRandomPokemon();
    let pokeTwo = getRandomPokemon(); 
    let pokeThree = getRandomPokemon();

    while (pokeOne._id === pokeTwo._id || pokeTwo._id === pokeThree._id || pokeOne._id === pokeThree._id) {

        let pokeOne = getRandomPokemon();
        let pokeTwo = getRandomPokemon(); 
        let pokeThree = getRandomPokemon();
    
    }

    const img1 = renderPokeImage(pokeOne);  
    const img2 = renderPokeImage(pokeTwo);
    const img3 = renderPokeImage(pokeThree); 

    const div = document.getElementById('pokemon'); 

    div.textContent = ''; 

    div.append(img1, img2, img3);
}

export function renderPokeImage(pokemonItem) {
    const image = document.createElement('img');

    image.src = pokemonItem.url_image;

    image.classList.add('poke-img');
    image.addEventListener('click', () => {
        incrementCaught(pokemonItem._id);

        if (numberOfTurns < 10) {
            setThreePokemon();
        } else {
            window.location = 'results';
        }


    });
    return image; 
}
