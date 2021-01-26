import {  } from "module";


export function renderPokeResults(pokemon, pokemonStat) {
    const outerDiv = document.createElement('div');
    const img = document.createElement('img');
    const innerDiv = document.createElement('div');
    const pSeen = document.createElement('p');
    const pCaught = document.createElement('p');

    outerDiv.classList.add('all-results');


    img.classList.add('pokemon-img');
    img.src = pokemon.url_image;

    innerDiv.classList.add('card-body');

    pSeen.classList.add('all-seen');
    pSeen.textContent = `Pokemon seen: ${}`;

    pCaught.classList.add('all-caught');
    pCaught.textContent = `Pokemon caught: ${}`;

    outerDiv.append(img);
    outerDiv.append(innerDiv);
    innerDiv.append(pSeen);
    innerDiv.append(pCaught);

}

