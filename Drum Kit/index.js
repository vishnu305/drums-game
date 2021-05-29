
function handleClick(){
  var button_text = this.innerHTML;
  animation(button_text);

  switch (button_text) {
    case "w":
      var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio=new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio=new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio=new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio=new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio=new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio=new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log("Not a valid Selector")

  }
}
for (var i=0;i<document.getElementsByClassName("drum").length;i++){
document.querySelectorAll("button")[i].addEventListener('click',handleClick);
}

// -----------for key event listener-----------
document.addEventListener("keydown",function(e){
  k = e.key;
  animation(k);
  switch (k) {
    case "w":
      var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio=new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio=new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio=new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio=new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio=new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio=new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log("Not a valid Selector")
    }

});

function animation(key){
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+key).classList.remove("pressed");
  },100);
}
