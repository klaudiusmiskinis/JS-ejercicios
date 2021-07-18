// VARIABLES
var cont = 0;
var columnas = [];
// ONCLICK INSERTAR
document.getElementById('insertar').onclick = function() {
    if (document.getElementById('nombre').value != "") {
        var div = new Elemento(cont, 'shadow-sm', document.getElementById('nombre').value)
        document.getElementById('general').insertAdjacentHTML('beforeend', div.crear());
        columnas.push(div);
        cont++;
    } 

    var cerrar = document.getElementsByClassName('cerrar');
    for (var i = 0; i < cerrar.length; i++) {
        cerrar[i].onclick = function(){
            document.getElementById(this.id).remove();
            cont--;
        }
    }
    document.getElementById('nombre').value = "";
}

var dark = false;
document.getElementById('modoOscuro').onclick = function(){
    var darkEl = document.getElementById('dark');
    if (dark == false) {
        document.getElementById('imagen-modo').src = 'assets/sol.png'
        document.getElementById('imagen-modo').style.transition = "1s";
        darkEl.href = "darkmode.css";
        dark = true;
    } else if (dark == true) {  
        document.getElementById('imagen-modo').src = 'assets/luna.png'
        darkEl.href = "#";
        dark = false;
    }
}

// CLASES
// CLASE ELEMENTO
class Elemento {
    constructor(id, estilo, texto) {
        this.id = id;
        this.estilo = estilo;
        this.texto = texto;
    }

    // GETTER
    getId(){
        return this.id;
    }

    getIdIns(){
        return "ins" + this.id;
    }

    getEstilo(){
        return this.estilo;
    }

    getTexto(){
        return this.texto;
    }

    //SETTER
    setId(id) {
        this.id = id;
    }

    setEstilo(estilo) {
        this.estilo = estilo;
    }

    setTexto(texto) {
        this.texto = texto
    }

    crear(){
        return '<div class="d-flex flex-row border rounded mb-1 '+ this.estilo +'" id="ins'+ this.id +'"><div class="col mt-2 m-2 a">' + this.texto + " " + this.id +'</div><div class="m-2"><button class="btn-close cerrar m-2" id="ins'+ this.id +'"></button></div></div>';
    }
}
