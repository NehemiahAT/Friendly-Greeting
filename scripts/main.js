document.getElementById("btnOne").onclick = function() {
setName();
};
var promt;
var checkOne;
var ErrorAlertSwitchNumberOne;
function setName() {
   if (document.cookie === null || document.cookie === "") {
       promt = prompt("Please enter your name below:");
       }
    else if (document.cookie !== null && document.cookie !== "") {
     promt = document.cookie;   
    }
    else {
     alert("Sorry, something went wrong. Check the console to troubleshoot.");
     console.error("ErrorAlertSwitchOne");
     ErrorAlertSwitchNumberOne = true;
    }
  if (promt === null || promt === "") {
  checkOne = true; 
  }
  if (checkOne === true && ErrorAlertSwitchNumberOne === null) {
      document.getElementById("HelloH").innerText = "Hello!";
    } else if (checkOne === true && ErrorAlertSwitchNumberOne === null) {
    document.getElementById("HelloH").innerText = "Hello, " + promt + "!";
    document.title = "Hello, " + promt + "!";
  }
    else if (ErrorAlertSwitchNumberOne === true && checkOne === true) {
     console.log("promt === null || promt === \"\"");   
    }
    else if (ErrorAlertSwitchNumberOne === true && promt !== null && promt !== "") {
     console.log("promt === null && promt === \"\"");   
    }
    else {
     alert("Sorry, something went wrong. Check the console to troubleshoot."); 
     console.error("ErrorAlertSwitchTwo");
     var ErrorAlertSwitchTwo = true;
    }
}

function cookies() {
 document.cookie = "name =" + promt;    
}

alert("This page uses cookies to remember your name the next time you visit it. If you do not give your name, no cookie will be created.")
