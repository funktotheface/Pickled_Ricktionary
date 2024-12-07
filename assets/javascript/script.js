console.log('Hello, world!');
const gameWord = document.querySelector('#gameWord');
const alphabetContainer = document.querySelector('#alphabet-Container');
const characterImage = document.querySelector('#charSprite');


let randomId;

//fetch data from API

function fetchCharacter() {
    randomId = Math.floor(Math.random() * 826) + 1;
    fetch(`https://rickandmortyapi.com/api/character/${randomId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            charSprite.src = data.image;
        })

    }

fetchCharacter();