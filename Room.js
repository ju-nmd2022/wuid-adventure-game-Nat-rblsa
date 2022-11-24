
function myFunction() {
    alert("Oh no! You were going through your To-Do List and noticed that you didn't grab your passport so now you gotta look for it...");
    
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");
    const button4 = document.getElementById("button4");
    const button5 = document.getElementById("button5");
    const button6 = document.getElementById("button6");
    const passport = document.getElementById("passport");
  
    button1.addEventListener("click", () => {
  
      button1.innerText = 'Looking...';
  
      setTimeout(() => {
          button1.innerText = 'It is not here!';
          button1.style.backgroundColor = "#ff0000";
          button1.style.color = "#ffffff";
      },2000);
  
    });

    button2.addEventListener("click", () => {
  
        button2.innerText = 'Looking...';
    
        setTimeout(() => {
            button2.innerText = 'It is not here!';
            button2.style.backgroundColor = "#ff0000";
            button2.style.color = "#ffffff";
        },2000);
    
    });

    button5.addEventListener("click", () => {
  
        button5.innerText = 'Looking...';
    
        setTimeout(() => {
            button5.innerText = 'It is not here!';
            button5.style.backgroundColor = "#ff0000";
            button5.style.color = "#ffffff";
        },2000);
    
    });

    button4.addEventListener("click", () => {
  
        button4.innerText = 'Looking...';
    
        setTimeout(() => {
            button4.innerText = 'It is not here!';
            button4.style.backgroundColor = "#ff0000";
            button4.style.color = "#ffffff";
        },2000);
    
    });

    button6.addEventListener("click", () => {
  
        button6.innerText = 'Looking...';
    
        setTimeout(() => {
            button6.innerText = 'It is not here!';
            button6.style.backgroundColor = "#ff0000";
            button6.style.color = "#ffffff";
        },2000);
    
    });

    button3.addEventListener("click", ()=> {

        button3.innerText = 'Looking...';
    
        setTimeout(() => {
            button3.innerText = 'I found it!';
            button3.style.backgroundColor = "#00ff00";
            button3.style.color = "#000000"; 
            passport.style.display = "inline"; 
        },2000);  

    });
      

}

  