let alertNote = "";
var note = document.getElementById("TopNote");
var notice;

// create new div for alert box
function createAlert(alert){
  note.style.transition = "opacity 1.5s"
  var wrapper = document.createElement("P");
  notice = document.createTextNode(alert)
  wrapper.append(notice);
  note.append(wrapper)
  note.style.display = "block";
  note.style.opacity = 1;
}

// when close button is pressed hide notification

function determineNotification(a){
  if (a){
    alertNote = "I am an annoying pop-up notification!";
    return alertNote
  }else{
    alertNote = "Hi! Welcome to YourApp™. The only place to see your things all in one place! *Hint* Click to close me."
  }
}
determineNotification();

createAlert(alertNote)

note.addEventListener("click", function(){
  notice.remove();
  note.style.transition = "opacity 0s"
  note.style.opacity = 0;
  setTimeout(function () {
      note.style.display = "none";
  }, 500);
  // determineNotification(true);
  // setTimeout(function () {
  //   createAlert(alertNote)
  // }, 1000);
});
