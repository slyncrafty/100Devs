//Example fetch using https://metmuseum.github.io/ 

const gallery = document.getElementById('gallery');
const artTitle = document.getElementById('art-title');
const artArtist = document.getElementById('art-artist');
const artDate = document.getElementById('art-date');
const artMedium = document.getElementById('art-medium');
const artImage = document.getElementById('art-image');

// const departmentSelect = document.getElementById('select-department');
// fetch('https://collectionapi.metmuseum.org/public/collection/v1/departments')
//   .then(res => res.json())
//   .then(data => {
//     data.departments.forEach(dept => {
//       const option = document.createElement('option');
//       option.value = dept.departmentId;
//       option.textContent = dept.displayName;
//       departmentSelect.appendChild(option);
//     })
// });


document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.trim();

  if(!choice){
    console.log('Enter a search term');
    return;
  }
  gallery.innerHTML = '';
  artTitle.textContent = '';
  artArtist.textContent = '';
  artDate.textContent = '';
  artImage.textContent = '';


  let url = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${choice}&hasImages=true`;

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        const idPick = Math.random() * (data.objectIDs.length);
        const ids = data.objectIDs.slice(idPick, idPick + 5);
        gallery.innerHTML = '';
        getArtworks(ids);
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function getArtworks(ids){
  ids.forEach(id => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
      .then(res => res.json())
      .then(obj => {
        if(!obj.primaryImageSmall) {
          // console.log('Image not Available');
          // const noImg = document.createElement('div');
          // noImg.classList.add('no-image');
          // noImg.textContent = 'Image not Available';
          // noImg.title = obj.title;
          // gallery.appendChild(noImg);
          return;
          
        }
        // console.log(obj);
        const img = document.createElement('img');
        img.src = obj.primaryImageSmall;
        img.title = obj.title;
        console.log(img.title);
        img.addEventListener('click', () => {
          artTitle.textContent = obj.title;
          artArtist.textContent = `Artist: ${obj.artistDisplayName || 'Unknown'}`;
          artDate.textContent = `Date: ${obj.objectDate || 'Unknown'}`;
          artMedium.textContent = obj.medium;
          artImage.src = obj.primaryImage || obj.primaryImageSmall;
        });
        gallery.appendChild(img);
      })
  })
}
