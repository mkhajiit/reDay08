const CLOCK = document.querySelector("h2#clock");

function getClock(){
    const DATE = new Date();
    const HOURS = String(DATE.getHours()).padStart(2,"0");
    const MINUTES = String(DATE.getMinutes()).padStart(2,"0");
    const SECONDS = String(DATE.getSeconds()).padStart(2,"0");

    CLOCK.innerHTML = `${HOURS}:${MINUTES}:${SECONDS}`;
    console.log(1);
}

getClock();
setInterval(getClock,1000);