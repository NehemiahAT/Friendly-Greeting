var helloLabel = document.querySelector('h1');
var changeUserButton = document.querySelector('button');

helloLabel.textContent = 'Hello!';
function setUserName() {
    var myName = prompt('Please enter your name.');
    
    if (myName === null || myName ===  ) {
     helloLabel.textContext = 'Hello!';   
    } else {
      helloLabel.textContent = 'Hello, ' + myName + '!';
    }
  }
  changeUserButton.onclick = function() {
    setUserName();
   }
