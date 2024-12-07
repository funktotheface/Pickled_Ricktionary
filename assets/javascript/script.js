console.log('Hello, world!');
const characterImage = document.querySelector('#charSprite');

//fetch data from API

fetch('https://rickandmortyapi.com/api/character/32')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        charSprite.src = data.image;
    })