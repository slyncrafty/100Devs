// Example fetch using pokemonapi.co
// Fetch pokemon by their Name or ID# to display cards showing details
// Bookmark your favorite pokemons

/* ========== Bookmark/Favorite ========== */
const fav = new Set();
if(localStorage.getItem('fav')){
  JSON.parse(localStorage.getItem('fav')).forEach(id => fav.add(id));
}
function saveFavorites(){
  localStorage.setItem('fav', JSON.stringify(Array.from(fav)));
}

document.querySelector('#toggle-fav').addEventListener('click', showOnlyFav);

async function showOnlyFav() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
  const sortedFav = Array.from(fav).sort((a,b) => a-b);
  const cards = await Promise.all(sortedFav.map(id => fetchAndDisplay(id)));
  cards.forEach(card=> gallery.appendChild(card))
}

/* ========== Fetch ========== */
document.querySelector('button').addEventListener('click', getFetch)

document.querySelector('input').addEventListener('keydown', (e) => {
  if(e.key === 'Enter') getFetch();
});

/* ========== Load initial Pokemon Cards ========== */
document.addEventListener('DOMContentLoaded', () => {
  loadInitialPokemon();
});

async function loadInitialPokemon() {
  const promises = [];

  for(let i = 1; i <= 20; i++)
  {
    //fetchAndDisplay(i);
    promises.push(fetchAndDisplay(i));
  }
  const results = await Promise.all(promises);
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
  results.forEach(card => gallery.appendChild(card));
}

function fetchAndDisplay(i) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(res => res.json())
    .then(data => {
      const poke = new CreatePokemon(data);
      return poke.element;
   });
}

/* ========== Fetch and per user input ========== */
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

/* ========== Create Pokemon Object ========== */
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
}


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
							<span class="pokemon-weight">${this.weight}(kg)</span>
						</div>
						<div>
							<h4>Height: </h4>
							<span class="pokemon-height">${this.height}(m)</span>
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

  const bookmark = card.querySelector('.bookmark');
  if(fav.has(this.id)){
    bookmark.classList.remove('fa-regular');
    bookmark.classList.add('fa-solid');
  }

  bookmark.addEventListener('click', () => {
    if(fav.has(this.id)){
      fav.delete(this.id);
      bookmark.classList.remove('fa-solid');
      bookmark.classList.add('fa-regular');
    } else{
      fav.add(this.id);
      bookmark.classList.remove('fa-regular');
      bookmark.classList.add('fa-solid');
    }
    saveFavorites();
  });
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
