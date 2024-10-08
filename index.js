const displayTime = document.getElementById("time");


function updateTime(){
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2,0);
    const seconds = date.getSeconds().toString().padStart(2,0);
    let meridiam = hours > 12 ? "PM" : "AM";
    hours = hours%12 || 12;
    hours.toString().padStart(2,0)
    const time = `${hours}:${minutes}:${seconds}${meridiam}`;
    displayTime.textContent = time;
}
updateTime();
setInterval(updateTime, 1000);
