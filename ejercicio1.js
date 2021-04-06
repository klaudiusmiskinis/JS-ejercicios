
//Al cargar la pestaña, se pedira un input. Al introducirlo y aceptar el elemento TITULO del HTML cogera el valor del input y se cambiara por "Hola " + nombre
window.onload = function() {
    var message = window.prompt("Introduce tu nombre", "Paco");
    var message2 = window.prompt("Da un mensaje de bienvenida", "Hey");
    message = message.charAt(0).toUpperCase;
    message2 = message2.charAt(0).toUpperCase;
    document.getElementById("titulo").innerHTML = message2;
    document.getElementById("titulo_2").innerHTML = message;
    
    var uno = window.prompt("Introduce un numero", "2");
    var dos = window.prompt("Introduce otro numero", "3");
    uno = parseInt(uno, 10);
    dos = parseInt(dos, 10);
    document.getElementById("respuesta").innerHTML = "La suma es: " + (uno + dos);
}