function init(){
//add your javascrip between these two lines of code
var tf = document.getElementById('entryinput');

var h2c = document.getElementById('textoutput');
var button = document.getElementById('entrybutton');

button.addEventListener('click', function(){
  alert('Gladys Toledo-Rodriguez: ' + tf.value);
});

button.addEventListener('click', function(){
  h2c.innerHTML = tf.value;
});





}
window.addEventListener('load', init);
