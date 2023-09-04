
var miBoton = document.getElementById('miBoton');
var miDiv = document.getElementById('miDiv');

miBoton.addEventListener('click', function (event) {
    event.stopPropagation();
    alert('Hola!');
});

miDiv.addEventListener('click', function () {
    alert('Hola! Soy el div');
});