document.getElementById("btn1").onclick = function() {
    setName();
};

function setName() {
var promt = prompt("Please enter your name below:");
}

document.getElementById("helloH").textContext = "Hello, " + promt + "!";
