document.getElementById("btnOne").onclick = function() {
setName();
};

function setName() {
    var promt = prompt("Please enter your name below:", "John");
    if (promt === null || promt === "") {
document.getElementById("helloH").innerText = "Hello!";
    }
  else {
document.getElementById("helloH").innerText = "Hello, " + promt + "!"; 
  }
}

