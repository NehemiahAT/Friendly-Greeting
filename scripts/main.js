document.getElementById("btnOne").onclick = function() {
setName();
};

function setName() {
    var promt = prompt("Please enter your name below:");
    if (promt === null || promt === "") {
      document.getElementById("HelloH").innerText = "Hello!";
    } else {
    document.getElementById("HelloH").innerText = "Hello, " + promt + "!";
    document.title = "Hello, " + promt + "!";
  }
}

document.getElementById("cookieAcceptBtn").onclick = function() {
 acceptCookie();   
}
document.getElementById("cookieLearnMoreBtn").onclick = function() {
 learnMoreCookie();   
}

function acceptCookie() {
 var createCookie = function(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}   
}
function learnMoreCookie() {
 var lrnMrCki = document.createElement("div");
    lrnMrCki.innerText = "Every time you give us your name, your browser stores a small document called a “cookie.” The cookie helps us remeber your name so that we can have it on this site the next time you come on. If you don’t agree to the cookie, we can’t have your name on the site the next time you visit it. We store all our cookies and may check them for debugging purposes but will not give the information to others, unless they are things that we inputted. We only save one cookie and it will remain unless you chose to delete it or unless the expiry date is met (Jan. 1, 2100, essentially never). The cookie we use is called ___. Its use is (as we said before) to record your name (or whatever you put in the prompt) for the next time you come onto the site."
 ;
}
