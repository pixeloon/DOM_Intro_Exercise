console.log("Javascript is alive!");
var images = document.querySelectorAll("img");
var ghost = document.getElementById("ghosting");
var size = document.getElementById("resize");
var button = document.getElementById("reset");

// Change the greeting from "Hello, There!" to "Hello, World!".

var greeting = document.getElementById("greeting");
greeting.innerText = "Hello World!";

// Set the background color of each <li> to yellow.
var list = document.querySelectorAll("li");
for (i=0;i<list.length;i++) {
  list[i].style.backgroundColor = "yellow";
}

// // Create an image tag, set its src attribute 
// to http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif, 
// and append the to the #greeting div.

var image = document.createElement("IMG");
image.setAttribute("src","http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif");
greeting.appendChild(image);

// Add the class of selected to an <li> when it is clicked. Remove it from any other lis as well.

function listSelect() {
   if (this.getAttribute("class") === "selected") {
    this.removeAttribute("class");
  } else {
    this.setAttribute("class","selected");
  }
  // Change the image to be the most recently clicked food item.
  images[0].setAttribute("src","./images/" + this.innerText + ".jpeg");
}

for (var i = 0; i < list.length; i++) {
  list[i].addEventListener('click', listSelect);
  } 

// When the gray div is moused over, it's removed from the DOM.

ghost.addEventListener('mouseover', ghostify);

function ghostify() {
  ghost.parentNode.removeChild(ghost);
}

// When the orange div is moused over, its width doubles. When the mouse moves out of the div, it returns to its original size.
size.addEventListener('mouseover', upsize);
size.addEventListener('mouseleave', downsize);

function downsize() {
    size.removeAttribute("style");
}

function upsize() {
  size.setAttribute("style", "width:400px");
}

// When the reset button is clicked - remove the selected class from each <li> and change the image to panic.jpeg.
reset.addEventListener('click', panic);

function panic(){
  for (var i = 0; i < list.length; i++) {
    list[i].removeAttribute("class");
  }
  images[0].setAttribute("src","./images/panic.jpeg");
}

// When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is pressed, the page alerts the message "I HATE NUMBERZZZ!"

document.addEventListener("keydown", keyhandler, false);

function keyhandler(event) {
var keyCode = event.keyCode;
  if ((keyCode===48) || (keyCode===49) || (keyCode===50) || (keyCode===51) || (keyCode===52) || (keyCode===53) || (keyCode===54) || (keyCode===55) || (keyCode===56) || (keyCode===57)) {
  alert("I HATE NUMBERZZZ");
  } 
}






