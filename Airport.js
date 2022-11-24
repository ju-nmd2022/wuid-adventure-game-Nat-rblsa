function myFunction() {
    alert("Now you are ready for your flight, you've been wondering around the airport and notice that you no longer have your ticket with you. YOU GOTTA FIND IT!");
}

const width = 600;
const height = 400;
const boletos = document.getElementById("boletos");
const gotIt = document.getElementById("gotIt");

let tickets = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

let $airport = document.getElementById('airport');
let $distance = document.getElementById('distance');

$airport.addEventListener('click', function (e) {
    let distance = getDistance(e, tickets);
    let distanceHint = getDistanceHint(distance);
    $distance.innerHTML = distanceHint;

    if (distance < 20) {
        alert('You found your ticket!');
        boletos.style.visibility = "visible"; 
        gotIt.style.visibility = "visible"; 
    }

})