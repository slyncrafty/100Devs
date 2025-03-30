//Create a button that adds 1 to a botScore stored in localStorage
if(localStorage.getItem('botScore')) 
    document.querySelector('h2').textContent = localStorage.getItem('botScore');
else localStorage.setItem('botScore', 0);

document.querySelector('button').addEventListener('click', addAnotherOne)

function addAnotherOne(){
    let botScoreVal =+ localStorage.getItem('botScore') + 1;
    localStorage.setItem('botScore', botScoreVal);
    document.querySelector('h2').textContent = botScoreVal;
    // console.log(botScoreVal)
}