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
}

function cookies() {
 document.cookie = "name =" + promt;    
}

alert("This page uses cookies to remember your name the next time you visit it. If you do not give your name, no cookie will be created.")
