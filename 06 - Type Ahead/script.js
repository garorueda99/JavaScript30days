const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


const cities = [];

/*const prom = fetch(endpoint); /* Fetch return a promise*/

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data)); /*Spread operator */ 

function findMatches(wordToMatch, cities){
    const regex = new RegExp(wordToMatch, 'gi'); /* g = global i = insensitive */
    return place.city.match(regex) || place.state.match(regex)
}

function displayMatches(){
    console.log(this.value);
}

function load(){
    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');
    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', displayMatches);
}

