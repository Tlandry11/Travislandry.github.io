console.log("Hello, welcome to my portfolio site. Hope you enjoy your visit!");
function menuToggle() {
  var x = document.getElementById('mynavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
  