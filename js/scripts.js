console.log("Hello, welcome to my portfolio site. Hope you enjoy your visit!");
$(".button").on("click", function() {
  alert("This button has been clicked!");
});
function menuToggle() {
  var x = document.getElementById('mynavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
  