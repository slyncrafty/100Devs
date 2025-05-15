//Example fetch using DnD5eAPI(https://www.dnd5eapi.co/api) - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('input').addEventListener('keydown', (e) => {
    if(e.key === 'Enter') getFetch();
} );

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice);
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       console.log(data)
       setDetails(data);
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function setDetails(data) {
    document.querySelector('h3').textContent = data.classes.map(t=>t.name).join(' / ');
    const subclasses = document.querySelector('ul');
    subclasses.innerHTML = '';
    data.subclasses.forEach((elem) =>  {
        const li = document.createElement('li');
        li.textContent = elem.name;
        subclasses.appendChild(li);
    });
}