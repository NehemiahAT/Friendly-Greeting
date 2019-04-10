var helloLabel = document.querySelector('h1');
var changeUserButton = document.querySelector('button');
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    helloLabel.textContent = 'Hello, ' + storedName + '!';
  }
helloLabel.textContent = 'Hello!';
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    helloLabel.textContent = 'Hello, ' + myName + '!';
  }
  changeUserButton.onclick = function() {
    setUserName();
   }