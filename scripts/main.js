document.getElementById("btn1").onclick = function() {
    setName();
};

function setName() {
    var prompt = prompt("Please enter your name below:");
    document.getElementById("helloH").textContext = "Hello, " + promt + "!";

}

