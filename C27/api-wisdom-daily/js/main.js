// fetch using https://thequoteshub.com/api

document.querySelector('button').addEventListener('click', getFetch)

document.querySelector('button').addEventListener('keydown', (e) => {
  if(e.key === 'Enter') getFetch();
});

document.querySelector('h2').addEventListener('click', fetchByAuthor);

function getFetch(){
  const url = "https://thequoteshub.com/api";
  fetch(url)
      .then(res => res.json()) 
      .then(data => {
        console.log(data);
        const quote = new MakeQuote(data);
        setDetails(quote);
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function setDetails(quote){
  document.querySelector('h2').textContent = quote.author;
  document.querySelector('p').textContent = quote.text;
  document.querySelector('.tags').textContent = quote.tags.join(' / ');
}

function fetchByAuthor(){
  const author = document.querySelector('h2');
  console.log(author);
}

function MakeQuote(data){
  this.author = data.author;
  this.author_id = data.author_id;
  this.text = data.text;
  this.tags = data.tags;
}

const fav = new Set();
if(localStorage.getItem('fav')){
  JSON.parse(localStorage.getItem('fav')).forEach(id => fav.add(id));
} 
function saveFavorites(){
  localStorage.setItem('fav', JSON.stringify(Array.from(fav)));
}

