// Example fetch using pokemonapi.co
// Fetch pokemon by their Name 
// show name, sprite, evolution, type, 
// Abilities, strong against
// Bookmark your favorite pokemons
// Home button to show list 
// Hover over to highlight the card

document.querySelector('button').addEventListener('click', getFetch)

document.querySelector('input').addEventListener('keydown', (e) => {
  if(e.key === 'Enter') getFetch();
});

document.addEventListener('DOMContentLoaded', () => {
  loadInitialPokemon();
});

function loadInitialPokemon() {
  for(let i = 0; i <= 10; i++)
  {
    fetchAndDisplay(i);
  }
}

function fetchAndDisplay(i) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
  .then(res => res.json())
  .then(data => {
    const poke = new CreatePokemon(data);
    document.querySelector('.gallery').appendChild(poke.element);
  });
}

// function createPokemonCard(data){
//   const card = document.createElement('div');
//   card.classList.add('card');
//   const types = data.types.join(' / ');

//   card.innerHTML = `
//     <h2>${(data.name)}</h2>
//     <img src="${data.sprites.front_default}" alt="${data.name}">
//     <p><strong>Type:</strong> ${types}</p>
//     <p><strong>Height:</strong> ${data.height / 10} m</p>
//     <p><strong>Weight:</strong> ${data.weight / 10} kg</p>
//   `;

//   return card;
// }


function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase();
  if(!choice) return;
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`;
  console.log(url)
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        const searchCard = new CreatePokemon(data);
        document.querySelector('.search-gallery').appendChild(searchCard.element);
      })
      .catch(err => {
        document.querySelector('.gallery').innerHTML = `<p>Pokémon not found.</p>`;
          console.log(`error ${err}`)
      });
}

function CreatePokemon(data) {
  this.id = data.id;
  this.name = data.name;
  this.image = data.sprites.front_default;
  this.types = data.types.map(t => t.type.name);
  this.weight = data.weight / 10;
  this.height = data.height / 10;
  this.strength = [];
  this.weakness = [];
  this.cries = new Audio(data.cries.latest);

  this.element = this.createCardElement(); // <– DOM card
  this.init();

  // this.setDetails = function () {
  //   document.querySelector('.pokemon-id').textContent = "#" + this.id;
  //   document.querySelector('.pokemon-name').textContent = this.name;
  //   document.querySelector('.pokemon-image').src = this.image;
  //   document.querySelector('.pokemon-type').textContent = this.types.join(' / ');
  //   document.querySelector('.pokemon-weight').textContent = this.weight + "(Kg)";
  //   document.querySelector('.pokemon-height').textContent = this.height + "(m)";
  //   document.querySelector('.pokemon-strength').textContent = this.strength.join(' / ');
  //   document.querySelector('.pokemon-weakness').textContent = this.weakness.join(' / ');
  // }
  
  // this.playCries();
  // this.calculateTypeDynamics();
}

// document.querySelector('.pokemon-image').addEventListener('click', (e) => {
//   newPokemon.playCries();
// })

CreatePokemon.prototype.createCardElement = function () { 
  const card = document.createElement('div');
  card.classList.add('card');

  const typeText = this.types.join(' / ');
  card.innerHTML = `
    <p class="pokemon-id">#${this.id}</p>
    <p class="pokemon-type">${typeText}</p>
    <i class="bookmark fa-regular fa-bookmark fa-lg"></i>
    <div class="details">
    					<div class="pokemon-detail">
						<h2>Name: </h2>
						<span class="pokemon-name">${this.name}</span>
					</div>
					<img class="pokemon-image" src="${this.image}" alt="">
					<div class="pokemon-detail">
						<div>
							<h4>Weight: </h4>
							<span class="pokemon-weight">${this.weight}</span>
						</div>
						<div>
							<h4>Height: </h4>
							<span class="pokemon-height">${this.height}</span>
						</div>
					</div>
					<div class="pokemon-detail">
						<h4>Strength: </h4>
						<span class="pokemon-strength">${this.strength}</span>
					</div>
					<div class="pokemon-detail">
						<h4>Weakness:</h4>
						<span class="pokemon-weakness">${this.weakness}</span>
					</div>
				</div>
    </div>
  `;

  card.querySelector('.pokemon-image').addEventListener('click', () =>{
    this.cries.play();
  })
  return card;
}

CreatePokemon.prototype.init = async function () {
  await this.calculateTypeDynamics();

  // Update strength/weakness inside the element
  this.element.querySelector('.pokemon-strength').textContent = this.strength.join(' / ') || 'None';
  this.element.querySelector('.pokemon-weakness').textContent = this.weakness.join(' / ') || 'None';
};


CreatePokemon.prototype.calculateTypeDynamics = async function () {
  const strength = new Set();
  const weakness = new Set();
  const url = 'https://pokeapi.co/api/v2/type/'
  for (const type of this.types) {
    const res = await fetch(`${url}/${type}`);
    const data = await res.json();

    data.damage_relations.double_damage_to.forEach(t => strength.add(t.name));
    data.damage_relations.double_damage_from.forEach(t => weakness.add(t.name));
  }
  this.strength = Array.from(strength);
  this.weakness = Array.from(weakness);
}
