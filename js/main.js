const botonSubmit = document.getElementById("button_submit");
const claseSubmitA = document.getElementById("wrapper-gray-a");
const claseSubmitB = document.getElementById("wrapper-gray-b");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const puntaje = document.getElementById("calify");

let puntuacion = "0";
/* 
button1.addEventListener("click", () => {
  
    if (document.querySelector("#button1.b_select")) {

        button1.classList.remove("b_select");
        button2.classList.remove("b_select");
        button3.classList.remove("b_select");
        button4.classList.remove("b_select");
        button5.classList.remove("b_select");
      } else {
        button1.classList.add("b_select");
      }
})

button2.addEventListener("click", () => {
  
    if (document.querySelector("#button2.b_select")) {

        button1.classList.remove("b_select");
        button2.classList.remove("b_select");
        button3.classList.remove("b_select");
        button4.classList.remove("b_select");
        button5.classList.remove("b_select");
      } else {
        button2.classList.add("b_select");
      }
}) */

button1.addEventListener("click", ()=>{
    puntuacion = "1"
    button2.classList.remove("b_select")
    button3.classList.remove("b_select")
    button4.classList.remove("b_select")
    button5.classList.remove("b_select")
    
    button1.classList.add("b_select")
});
button2.addEventListener("click", ()=>{
    puntuacion = "2"

    button2.classList.remove("b_select")
    button3.classList.remove("b_select")
    button4.classList.remove("b_select")
    button5.classList.remove("b_select")

    button1.classList.add("b_select")
    button2.classList.add("b_select")
    
});
button3.addEventListener("click", ()=>{
    puntuacion = "3"

    button2.classList.remove("b_select")
    button3.classList.remove("b_select")
    button4.classList.remove("b_select")
    button5.classList.remove("b_select")

    button1.classList.add("b_select")
    button2.classList.add("b_select")
    button3.classList.add("b_select")
    
});
button4.addEventListener("click", ()=>{
    puntuacion = "4"

    button2.classList.remove("b_select")
    button3.classList.remove("b_select")
    button4.classList.remove("b_select")
    button5.classList.remove("b_select")

    button1.classList.add("b_select")
    button2.classList.add("b_select")
    button3.classList.add("b_select")
    button4.classList.add("b_select")
    
});
button5.addEventListener("click", ()=>{
    puntuacion = "5"

    button2.classList.remove("b_select")
    button3.classList.remove("b_select")
    button4.classList.remove("b_select")
    button5.classList.remove("b_select")

    button1.classList.add("b_select")
    button2.classList.add("b_select")
    button3.classList.add("b_select")
    button4.classList.add("b_select")
    button5.classList.add("b_select")
    
});
botonSubmit.addEventListener("click", () => {
    puntaje.innerText = puntuacion;
    claseSubmitA.classList.add("disabled");
    claseSubmitB.classList.remove("disabled");
})