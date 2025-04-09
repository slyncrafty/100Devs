/* ========== ========== */
// https://www.dnd5eapi.co/
/* ========== ========== */

import { generateGameName } from "./nameGenerator.js";
import { generateClassColorScheme } from './colorGenerator.js';

document.querySelector('#generate-name-btn').addEventListener('click', () => {
    const select = document.querySelector('#race-select').value;
    const genName = generateGameName(select);
    document.getElementById('char-name').value = genName; 
    saveName(genName);
})

function saveName(genName) {
    const li = document.createElement('li');
    li.textContent = genName;
    li.classList.add('name-list-item');
    const dest = document.getElementById('char-name');
    li.addEventListener('click', () => {
        dest.value = genName;
    });
    const list = document.getElementById('name-list');
    list.prepend(li);

    if(list.children.length > 10){
        list.removeChild(list.lastChild);
    }
}


function getFetch(){
    // const choice = document.querySelector('input').value
    const apiurl = `https://www.dnd5eapi.co/api/races`
    fetch(apiurl)      
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        console.log(data.results)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

/* ========== Populate dropdown menu on load ========== */
document.addEventListener('DOMContentLoaded', () => {
    loadDropdownMenu();
})

function loadDropdownMenu(){
    getDropdownFetch('races', '#race-select');
    getDropdownFetch('classes', '#class-select');
    getDropdownFetch('backgrounds', '#background-select');
}

function getDropdownFetch(t, selector){
    const url = `https://www.dnd5eapi.co/api/${t}`
    fetch(url)    
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        console.log(data.results)
        const selectElem = document.querySelector(selector);
        populateDropdownMenu(data.results, selectElem); 
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

function populateDropdownMenu(arr, elem){
    const result = arr.map((elem) => elem.name);
    result.forEach((item) => addDropdownMenu(elem, item))
}

function addDropdownMenu(elem, val) {
    const menuItem = document.createElement('option');
    menuItem.classList.add('menuItem');
    menuItem.value = val;
    menuItem.textContent = val;
    elem.appendChild(menuItem);
}




const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};


fetch("https://www.dnd5eapi.co/api/2014/backgrounds/:index", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));


  document.querySelector('#class-select').addEventListener('change', async (e) => {
    const selectedClass = e.target.value;
    const palette = await generateClassColorScheme(selectedClass);
    applyThemeColors(palette);
  });

  function applyThemeColors(palette) {
    if (!palette || palette.length < 4) return;
    
    document.documentElement.style.setProperty('--class-color-scheme', palette[0]);
    // document.documentElement.style.setProperty('--theme-primary', palette[0]);
    // document.documentElement.style.setProperty('--theme-secondary', palette[1]);
    // document.documentElement.style.setProperty('--theme-accent', palette[2]);
    // document.documentElement.style.setProperty('--theme-highlight', palette[3]);
  } 