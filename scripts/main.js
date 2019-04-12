var helloLabel = document.querySelector('h1');

helloLabel.textContent = 'Hello!';
function setUserName() {
    var myName = prompt('Please enter your name.');
    
    if (myName === null || myName ===  ) {
     helloLabel.textContext = 'Hello!';   
    } else {
      helloLabel.textContent = 'Hello, ' + myName + '!';
    }
  }
  document.getElementById("btn1").onclick = function() {
    setUserName();
   }
