var btnAgregar = document.querySelector('#btnAgregar');
var btnEliminar = document.querySelector('#btnEliminar');
var btnBuscar = document.querySelector('#btnBuscar');
var btnImprimir = document.querySelector('#btnImprimir');
var btnCrearRecorrido = document.querySelector('#btnCrearRecorrido');

var lista = document.querySelector("#lista");

class BasePelican {
    constructor(nombre, minutos){
        this.nombre=nombre
        this.minutos=minutos
        this.siguente=null
    }
    articleToHtml() {
        let productString = '<li class="list-group-item">'
        for (let key in this) {
            productString += <div>${key}: ${this[key]}</div>
        }
        return productString + "</li>"
    }
}

class PillarOfAutumn {
    constructor(){
        this.inicio=null
        this.tamaño=0
    }
    agregarPelican(x){
        
    }
}
