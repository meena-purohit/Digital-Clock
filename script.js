function showTime() {

let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

// Date parts
let date = now.getDate();
let year = now.getFullYear();

//Days
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let dayName = days[now.getDay()];
//Months

let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let monthName = months[now.getMonth()];

//AM/PM

let session = "AM"; 
if (hours > 12) {
    session = "PM";
}
if (hours > 12) {
    hours = hours - 12;
}

if (hours == 0 ) {
    hours = 12;
}

//Formatting with leading zeros
if (hours < 10) hours = "0" + hours;
if (minutes < 10) minutes = "0" + minutes;
if (seconds < 10) seconds = "0" + seconds;


// Final formatted string
let timeString = hours + ":" + minutes + ":" + seconds + " " + session;
let dateString = `${dayName},${date},${monthName},${year}`;


document.getElementById("clock-date").textContent = dateString;
document.getElementById("clock-time").textContent = timeString;
}

//Run once
showTime();


// then keep running every second 
setInterval(showTime,1000);