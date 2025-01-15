let hb1 = document.getElementById("hb1");
let hb2 = document.getElementById("hb2");
let hb3 = document.getElementById("hb3");
let hb4 = document.getElementById("hb4");

let pb1 = document.getElementById("pb1");
let pb2 = document.getElementById("pb2");
let pb3 = document.getElementById("pb3");
let pb4 = document.getElementById("pb4");

function slowScroll(id) { 
    var offset = 0;
    $('html, body').animate({ 
         scrollTop: $(id).offset().top - 100
    }, 500);
    return false; 
} 

hb1.addEventListener("mouseover", () => {
    document.getElementById("hb1").style.backgroundColor = "#628364";
    document.getElementById("hb2").style.backgroundColor = "white";
    document.getElementById("hb3").style.backgroundColor = "white";
    document.getElementById("hb4").style.backgroundColor = "white";
    
    document.getElementById("pb1").style.display = "grid";
    document.getElementById("pb2").style.display = "none";
    document.getElementById("pb3").style.display = "none";
    document.getElementById("pb4").style.display = "none";
})
hb2.addEventListener("mouseover", () => {
    document.getElementById("hb1").style.backgroundColor = "white";
    document.getElementById("hb2").style.backgroundColor = "#628364";
    document.getElementById("hb3").style.backgroundColor = "white";
    document.getElementById("hb4").style.backgroundColor = "white";

    document.getElementById("pb1").style.display = "none";
    document.getElementById("pb2").style.display = "grid";
    document.getElementById("pb3").style.display = "none";
    document.getElementById("pb4").style.display = "none";
})
hb3.addEventListener("mouseover", () => {
    document.getElementById("hb1").style.backgroundColor = "white";
    document.getElementById("hb2").style.backgroundColor = "white";
    document.getElementById("hb3").style.backgroundColor = "#628364";
    document.getElementById("hb4").style.backgroundColor = "white";

    document.getElementById("pb1").style.display = "none";
    document.getElementById("pb2").style.display = "none";
    document.getElementById("pb3").style.display = "grid";
    document.getElementById("pb4").style.display = "none";
})
hb4.addEventListener("mouseover", () => {
    document.getElementById("hb1").style.backgroundColor = "white";
    document.getElementById("hb2").style.backgroundColor = "white";
    document.getElementById("hb3").style.backgroundColor = "white";
    document.getElementById("hb4").style.backgroundColor = "#628364";

    document.getElementById("pb1").style.display = "none";
    document.getElementById("pb2").style.display = "none";
    document.getElementById("pb3").style.display = "none";
    document.getElementById("pb4").style.display = "grid";
})

window.onload = function() {
    setQuiz();
}

function setQuiz() {
    // square for game
    for ( let i = 0; i < 6; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        document.getElementById("board").appendChild(tile);
    }
}