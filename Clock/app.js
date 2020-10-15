setInterval(setClock, 1000);

const hourHand = document.getElementById('hour');
const minHand = document.getElementById('min');
const secHand = document.getElementById('sec');


function setClock() {
    const newDate = new Date();
    const secondsRatio = newDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + newDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + newDate.getHours()) / 12;
    setRoation(secHand, secondsRatio);
    setRoation(minHand, minutesRatio);
    setRoation(hourHand, hoursRatio);
}

function setRoation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();