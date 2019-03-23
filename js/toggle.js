var button = document.querySelector("button");
var body = document.querySelector("body");
var isColored = false;

button.addEventListener("click", clickedMe);

function clickedMe() {
    /*if(!isColored) {
        body.style.background = "pink";
    }
    else {
        body.style.background = "white";
    }

    isColored = !isColored;*/
    body.classList.toggle("color");
}