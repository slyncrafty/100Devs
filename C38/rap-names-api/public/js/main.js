const url = 'http://localhost:8000/api';


document.querySelector('button').addEventListener('click', apiRequest);

async function apiRequest() {
    const rapperName = document.querySelector('#input').value;
    if (!rapperName) return;
    try{
        const response = await fetch(`${url}/${rapperName}`);
        const data = await response.json();
        document.querySelector('#result').innerText = `Birth Name: ${data.birthName}`;
    } catch(err) {
        console.log(err);
    }
}

