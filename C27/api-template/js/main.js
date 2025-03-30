//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

let newPokemon;

document.querySelector('input').addEventListener('keydown', (e) => {
  if(e.key === 'Enter') getFetch();
});

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`;
  console.log(url)
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        newPokemon = new CreatePokemon(data);
        newPokemon.setDetails();
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


function CreatePokemon(data) {
  this.pokemonName = data.species.name;
  this.pokemonThumbnail = data.sprites.front_default;
  this.pokemonType = data.types[0].type.name;
  this.cries = new Audio(data.cries.latest);

  this.setDetails = function () {
    document.querySelector('h2').textContent = this.pokemonName;
    document.querySelector('img').src = this.pokemonThumbnail;
    document.querySelector('h3').textContent = this.pokemonType;
  }
  
  this.playCries = function () {
    this.cries.play();
  }  
}

document.querySelector('img').addEventListener('click', (e) => {
  newPokemon.playCries();
})