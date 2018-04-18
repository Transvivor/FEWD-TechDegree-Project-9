const myForm = document.getElementById("form");
const message = document.getElementById("submitMessage");

var messageOut = function(event) {
    event.preventDefault();
    message.innerHTML = "Message was successfully sent.";
};

myForm.addEventListener("submit", messageOut, true);
