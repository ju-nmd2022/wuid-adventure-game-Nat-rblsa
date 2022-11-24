function myFunction() {
    alert("Let see if you can get a free trip!");
}

let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipbtn = document.querySelector("#flip-button");

flipbtn.addEventListener("click",() => {

    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";

    if(i){
        setTimeout(function() {
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;
        setTimeout(function() {
            window.location.href = "Check-In1.html";
        }, 4000);
       // window.location.href = "Check-In1.html";
    } 

    else {
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
        setTimeout(function(){
            window.location.href = "Check-In2.html";
        }, 4000);

        // window.location.href = "Check-In2.html";
    }
    setTimeout (pageRedirect, 3000);

});

// function pageRedirect() {

//   if (heads) {
//    window.location.href = "Check-In1.html";
 //   } else (tails) {
 //   window.location.href = "Check-In2.html";
 //   }
   
  //setTimeout(pageRedirect, 7000);

//}


 //  window.location.href = "Check-In1.html";

 // window.location.href = "Check-In2.html";

