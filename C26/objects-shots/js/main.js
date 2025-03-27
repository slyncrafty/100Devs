//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
const input = document.querySelector('input');
const drinksList = document.querySelector('#drinks-list');
let cocktailName = '';

const carouselContainter = document.querySelector('.slide-image');

document.querySelector('#get-cocktail').addEventListener('click', getInput);
document.querySelector('#random').addEventListener('click', getRandom);

function getRandom(){
    carouselContainter.innerHTML = '';
    const numSlides = 5;
    let carouselIndex = 0;

    for(let i = 0; i < numSlides; i++)
    {
        const randomUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
        fetch(randomUrl)
            .then(res => res.json())
            .then(data => {
                const drink = data.drinks[0];
                const slide = document.createElement('img');
                slide.src = drink.strDrinkThumb;
                slide.title = drink.strDrink;
                slide.classList.add('.carousel-slide');

                slide.addEventListener('click', () => setDrinkDetails(drink));
                carouselContainter.appendChild(slide);
            })
            .catch(err => `error : ${err}`);
    }
}


function getInput(){
    cocktailName = input.value;
    fetchCocktail(cocktailName);
}

input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') getInput();
})

function fetchCocktail(cocktailName){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(cocktailName)}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if(!data.drinks){
                drinksList.innerHTML = '<li>No Drinks Found</li>';
                clearDrinkDetails();
                return;
            }
            drinksList.innerHTML = '';
            data.drinks.forEach(drink => {
                const listItem = document.createElement('li');
                listItem.textContent = drink.strDrink;
                listItem.style.cursor = 'pointer';
                listItem.addEventListener('click', () => setDrinkDetails(drink));
                drinksList.appendChild(listItem);
            });
            console.log(data);
            const drink = data.drinks[0];
            setDrinkDetails(drink);
        })
        .catch(err => {
            console.log(`error ${err}`);
        })
}


function setDrinkDetails(drink) {
    document.querySelector('h2').textContent = drink.strDrink;
    document.querySelector('img').src = drink.strDrinkThumb; 
    document.querySelector('h3').textContent = drink.strInstructions;
}

function clearDrinkDetails(){
    document.querySelector('h2').textContent = '';
    document.querySelector('img').src =  ''; 
    document.querySelector('h3').textContent = ''; 
    cocktailName = '';
}