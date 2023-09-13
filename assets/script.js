var start = document.querySelector("#start");
var scores = document.querySelector(".bottoms");
var content = document.querySelector(".content-container");
var body = document.querySelector("body");

function test () {

    content.setAttribute("style", "visibility: hidden;");
    
}

function create (){

    var backbutton = document.createElement("button");
    backbutton.textContent = "Back";
    body.appendChild(backbutton);  
    backbutton.setAttribute("style", "display: block;");   
}

start.addEventListener("click", test);
start.addEventListener("click", create);