//PARTE 1
let body = document.getElementById('body');

function cUno(){
   body.style.backgroundColor = "tomato";
}

function cDos(){
    body.style.backgroundColor = "thistle";
 }

 function cTres(){
    body.style.backgroundColor = "violet";
 }
 
 function cCuatro(){
    body.style.backgroundColor = "yellow";
 }
 

 function cCinco(){
    body.style.backgroundColor = "yellowgreen";
 }

 function gris(){
    body.style.backgroundColor = "grey";
}


//PARTE 2
const pes = 0.006;

function aEuros(){
    let pesetas = document.getElementById('pesetas').value; 
    pesetas = pesetas * pes;
    document.getElementById('euros').value = pesetas.toFixed(2);
}

function aPesetas(){
    let euros = document.getElementById('euros').value;
    euros = euros / pes;
    document.getElementById('pesetas').value = euros.toFixed(2);
}
 
function borrar() {
    document.getElementById('euros').value = 0;
    document.getElementById('pesetas').value = 0;
}

function cargarEur(){
    aPesetas();
}

function cargarPes(){
    aEuros();
}

//PARTE 3

let user;
let pass;

function verificar() {
    user = document.getElementById('user').value;
    pass = document.getElementById('pass').value;
    

    //EL USUARIO DEBE SER 'ejdos' y la contraseña 'hecho'.
    if (user == 'ejdos') {
        document.getElementById('valido_u').innerHTML = '✔';
    } else {
        document.getElementById('valido_u').innerHTML = 'X';
    }

    if (pass == 'hecho') {
        document.getElementById('valido_p').innerHTML = '✔';
    } else {
        document.getElementById('valido_p').innerHTML = 'X';
    }
} 
