// import { getTotalPokeStats } from './results.js';


export function displayResults(pokemonStats, pokemon) { //pokemonStats is the object from localStorage and pokemon is the object from pokemon.js
    const innerDiv = document.createElement('div'); //here I am creating an html element
    const pSeen = document.createElement('p');
    const pCaught = document.createElement('p');
    const pName = document.createElement('p');
    const pImage = new Image();

    pSeen.classList.add('all-seen'); //here I am assigning the class for the html elements 
    pCaught.classList.add('all-caught');
    pName.classList.add('name');
    pImage.classList.add('image');
    
    
    innerDiv.style.border = 'thick solid #E59500'; 
    innerDiv.append(pName); //here I am nesting pName (ketchup onions) inside innerDiv (hamburger buns)
    pName.textContent = `Name/ID: ${pokemon.pokemon}`; //.pokemon will give the name of the pokemon

    innerDiv.append(pSeen); //here I am nesting pSeen (meat) inside of innerDiv (hamburger buns)
    pSeen.textContent = `seen: ${pokemonStats.seen}`; //.seen will give me the # of times pokemon has been seen

    innerDiv.append(pCaught); // here I am nesting pCaught (lettuce, tomatoe) inside of innerDiv
    pCaught.textContent = `caught: ${pokemonStats.caught}`; //.caught will give me the # of times pokemon has been captured

    innerDiv.append(pImage);
    pImage.src = pokemon.url_image;
    pImage.width = "175";
    pImage.height = "250";

    return innerDiv; //the complete hamburger that holds the seen, caught, and name values

}
