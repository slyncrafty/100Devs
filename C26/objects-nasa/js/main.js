//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getFetch);
const image = document.querySelector('img');
const video = document.querySelector('#video-player');
function getFetch() {
    const choice = document.querySelector('input').value;
    console.log(choice);
    const api_key = 'twJzFpRsqpOzCZJP9NduvLfbixNf8LQFHvrjtM82';
    const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${choice}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data);
        })
        .catch(err => {
            console.log(`error: ${err}`)
        });
}

function setData(data){
    clearData();
    document.querySelector('h2').textContent = data.title;
    document.querySelector('h3').textContent = data.explanation;
    if(data.media_type === 'image'){
        video.style.display = 'none';
        image.style.display = 'block';
        image.src = data.url; //data.hdurl for higher res
    }
    else if(data.media_type === 'video') {
        // console.log(data.url);
        image.style.display = 'none';
        video.style.display = 'block';
        video.src = data.url;
    }
}

function clearData(){
    document.querySelector('h2').textContent = '';
    document.querySelector('h3').textContent = '';
    image.src ='';
    video.src = '';
}