document.onkeypress = function(event) {
    event = event || window.event;
    var letra = event.keyCode || event.which;
    var cadena = String.fromCharCode(letra);
    document.getElementById('output').innerHTML = cadena;
}