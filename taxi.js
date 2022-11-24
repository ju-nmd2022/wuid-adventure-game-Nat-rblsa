function myFunction() {
    alert("There are a lot of taxis here, grab one to go to the airport!");
}

let popup1 = document.getElementById("popup1");
let popup2 = document.getElementById("popup2");
let popup3 = document.getElementById("popup3");

function openPopup1(){
    popup1.classList.add("open-popup1");
}
function closePopup1(){
    popup1.classList.remove("open-popup1");
}

function openPopup2(){
    popup2.classList.add("open-popup2");
}
function closePopup2(){
    popup2.classList.remove("open-popup2");
}

function openPopup3(){
    popup3.classList.add("open-popup3");
}
function closePopup3(){
    window.location.href = "Coin.html";
}