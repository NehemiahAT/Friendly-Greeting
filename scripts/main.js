var helloLabel = document.querySelector('h1');
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
    if (myName === null || myName ===  ) {
     helloLabel.textContext = 'Hello!';   
    } else {
      helloLabel.textContent = 'Hello, ' + myName + '!';
    }
  }
  document.getElementById("btn1").onclick = function() {
    setUserName();
   }
