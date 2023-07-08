//creating the dom element
let createElement = window.document.createElement("p");
//Adding th text
createElement.innerText = "P tag data";
//Appending the text P element to the div

document.getElementById("main").appendChild(createElement);

//defining the submit Handler
function submitHandler() {
  createElement.innerText = "button clicked";
}

//event Handlers
let button = document.querySelector("#but");
console.log("button clicked");
button.addEventListener("click", buttonHandlor);


//button Handlor
function buttonHandlor() {
  let button = document.querySelector("#but");
  button.style.color = "red";
}


//query Selectors
let h5 = document.querySelector("#ss")
h5.style.color="red"

//setattributes
let img= document.querySelector("img")
img.setAttribute("alt","sjgs")