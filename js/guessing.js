document.addEventListener("keypress", enter);
function enter() {
  var y = event.keyCode;
  if (y === 13) {
    return guess();
  }
  else {
    return false;
  }
}
function guess() {
  var guess = document.getElementById("guess").value;
  if (guess !== "pluto") {
    document.getElementById("out").innerHTML = "That is not correct!";
    document.getElementById("guess").value = "";
  }
  else {
    document.getElementById("out").innerHTML = "That is correct!";
  }
  document.getElementById("guess").focus();
}  
