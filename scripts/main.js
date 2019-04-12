document.getElementById("btnOne").onclick = function() {
setName();
};

function setName() {
    var promt = prompt("Please enter your name below:", "John");
    if (promt === null || promt === "") {
document.getElementById("HelloH").innerText = "Hello!";
    }
  else {
document.getElementById("HelloH").innerText = "Hello, " + promt + "!"; 
  }
}

