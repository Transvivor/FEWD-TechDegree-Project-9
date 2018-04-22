const myForm = document.getElementById("form");
const message = document.getElementById("submitMessage");
const input = document.getElementById("input");
const textarea = document.getElementById("textarea");

var messageOut = function(event) {
    event.preventDefault();
    if (input.value === ' ' || textarea.value === '' ){
    message.innerHTML = "Make sure that all fields are filled"}else {
      message.innerHTML = "Message was successfully sent";
    }
};

myForm.addEventListener("submit", messageOut, true);
