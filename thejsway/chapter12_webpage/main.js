const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello, World!';

const myButton = document.querySelector('button');
myButton.addEventListener('click', setUserName);
function setUserName() {
    const myName = prompt("Please enter your name: ");
    if(!myName)
    {
        setUserName();
    }
    else
    {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}