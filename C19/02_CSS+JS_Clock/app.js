const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

minuteHand.style.background = 'red';
hourHand.style.background = 'grey';


function setDate(){
    const now = new Date;
    const seconds = now.getSeconds();
    const secondsDeg = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    const minutesDeg = (now.getMinutes() / 60) * 360 + 90;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
    const hoursDeg = (now.getHours() / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
    console.log(`Hour: ${hoursDeg}`, now.getHours())
}

setInterval(setDate, 1000);