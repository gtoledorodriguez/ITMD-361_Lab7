function init(){
//add your javascrip between these two lines of code
var h2c = document.querySelectorAll('.center h2');
var button = document.getElementById('entrybutton');
button.addEventListener('click', function(){
  alert('Gladys Toledo-Rodriguez: ');
});
button.addEventListener('click', function(){
  h2c.innerHTML = 'Change text';
});





}
window.addEventListener('load', init);
