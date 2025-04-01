//Example fetch using https://openlibrary.org/
// To get author information from query with ISBN, need to fetch again using 
// works id. 
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('#input').value.trim();
  if(!choice) return;
  const regex = /^[0-9]{10,13}$/;
  const isISBN = regex.test(choice);
  // console.log(!Number.isNaN(choice))
  let url = '';
  if (isISBN){
    url =`http://openlibrary.org/isbn/${choice}.json`;
  } else {
    url =`https://openlibrary.org/search.json?q=${choice.replaceAll(' ', '+')}`
  }

  // console.log(url)
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
         if(isISBN){
          isbnFetch(data);
        }else{
          console.log(data.q);
          if(data.docs){
            document.querySelector('h3').textContent = data.q;
            document.querySelector('span').textContent = data.docs[0].first_publish_year;
            const workId = data.docs[0].key;
            const authorName = data.docs[0].author_name[0];
            saveFavorite({ key: workId, title: data.q, author: authorName})
            document.querySelector('h2').textContent = `Author(s): ${authorName}`;
          }
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


document.querySelector('.bookmark').addEventListener('click', showFav);

function saveFavorite(newFav) {
  let fav = JSON.parse(localStorage.getItem('fav') || '[]');
  if (!fav.some(item => item.key === newFav.key)) {
    fav.push(newFav);
    localStorage.setItem('fav', JSON.stringify(fav));
  }
}

function showFav(){
  const favList = JSON.parse(localStorage.getItem('fav') || '[]');
  const container = document.querySelector('.bookmark-list');
  container.innerHTML = 'Bookmarks:';

  if(favList.length === 0) {
    container.textContent = 'No favorites yet';
  }
  favList.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.title} / ${item.author}`;
    container.appendChild(div);
  })
}


function isbnFetch(data){
    // console.log(data.title);
    document.querySelector('h3').textContent = data.title || 'No info found';
    document.querySelector('span').textContent = data.publish_date || 'No info found';
    // console.log(data.works[0].key);
    if(data.works){
      const workId = data.works[0].key;
      // console.log(workID);
      fetch(`http://openlibrary.org${workId}.json`)
        .then(res => res.json())
        .then(workData => {
          const authorKeys = workData.authors.map(a=>a.author.key);
          // console.log(authorKeys);
          Promise.all(
            authorKeys.map(key=>
              fetch(`https://openlibrary.org${key}.json`).then(res => res.json())
            )
          ).then(authorData => {
            const authorName = authorData.map(a=>a.name).join(', ');
            // console.log(authorName);
            saveFavorite({ key: workId, title: data.title, author: authorName })
            document.querySelector('h2').textContent = `Author(s): ${authorName}`;
          });
        });
    }else {
      document.querySelector('h2').textContent += 'No info found';
    }
}