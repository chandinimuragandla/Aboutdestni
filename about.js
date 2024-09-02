var icons = document.querySelectorAll(".icon");
   var texts = document.querySelectorAll(".FAQtext");

   icons.forEach(function(icon, index) {
       icon.addEventListener("click", function() {
           if (texts[index].style.display === "none") {
               texts[index].style.display = "block";
               icon.classList.remove("fa-plus");
               icon.classList.add("fa-minus");
           } else {
               texts[index].style.display = "none";
               icon.classList.remove("fa-minus");
               icon.classList.add("fa-plus");
           }
       });
   });



   document.addEventListener('DOMContentLoaded', () => {

    let btn1 = document.querySelector('.bt1');
    let btn2 = document.querySelector('.bt2');
    let btn3 = document.querySelector('.bt3');

    let box1 = document.querySelector('.home-container2');
    let box2 = document.querySelector('.home-container3');
    let box3 = document.querySelector('.home-container4');

    
    
    btn1.addEventListener("click", function() {
        box1.style.display = 'block';
        box1.style.display = 'flex';
        box2.style.display = 'none';
        box3.style.display = 'none';
    });

    btn2.addEventListener("click", function() {
        box1.style.display = 'none';
        box2.style.display = 'block';
        box2.style.display = 'flex';
        box3.style.display = 'none';
    });

    btn3.addEventListener("click", function() {
        box1.style.display = 'none';
        box2.style.display = 'none';
        box3.style.display = 'block';
        box3.style.display = 'flex';
    });

});


let input = document.getElementById("input");
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    input.value = "Thank you! Your submission has been received!";
    input.style.width = "400px";
    input.style.backgroundColor = " rgb(77, 140, 182)";
    input.style.fontSize = "16px";
    input.style.textAlign = "center";
    btn.style.display = "none";
    input.style.color ="white";
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.getElementById('contact-form').style.display = 'none'; 
    document.getElementById('thank-you-message').style.display = 'block'; 
});



   let input4 = document.getElementById("input");
let btn4 = document.getElementById("btn");

btn4.addEventListener("click", function() {
    input4.value = "Thank you! Your submission has been received!";
    input4.style.width = "400px";
    input4.style.backgroundColor = " rgb(77, 140, 182)";
    input4.style.fontSize = "16px";
    input4.style.textAlign = "center";
    btn4.style.display = "none";
    input4.style.color ="white";
});