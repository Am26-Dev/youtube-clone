const newYears = '1 Jan 2024';

const day = document.getElementById('days');
const hour = document.getElementById('hours');
const min = document.getElementById('mins');
const second = document.getElementById('seconds');

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const aboutToSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(aboutToSeconds / (3600 * 24));
    
    const hours = Math.floor(aboutToSeconds / (60*60) % 24 );
    
    const minutes = Math.floor(aboutToSeconds / 60) % 60;

    const sec = Math.floor(aboutToSeconds % 60);
    
    day.innerHTML = days < 10 ? (`0${days}`) : days ;;
    hour.innerHTML = hours < 10 ? (`0${hours}`) : hours ;;
    min.innerHTML = minutes < 10 ? (`0${minutes}`) : minutes ;;
    second.innerHTML = sec < 10 ? (`0${sec}`) : sec ;
    
}

countDown();

setInterval(countDown , 1000);
