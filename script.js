let digitalClockElement = document.querySelector('.digital');
let secondElement = document.querySelector('.p_s');
let minuteElement = document.querySelector('.p_m');
let hourElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    digitalClockElement.innerHTML = `${fixZero(hour)}:${fixZero(minutes)}:${fixZero(seconds)}`;

    let secondsDeg = ((360 / 60) * seconds) - 90;
    let minutesDeg = ((360 / 60) * minutes) - 90;
    let hourDeg = ((360 / 12) * hour) - 90;

    secondElement.style.transform = `rotate(${secondsDeg}deg)`;
    minuteElement.style.transform = `rotate(${minutesDeg}deg)`;
    hourElement.style.transform = `rotate(${hourDeg}deg)`;
}

function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();