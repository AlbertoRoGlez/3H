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
        this.siguiente=null
    }
    articleToHtml() {
        let productString = '<li class="list-group-item">'
        for (let key in this) {
            productString += `<div>${key}: ${this[key]}</div>`;
        }
        return productString + "</li>"
    }
}

class PillarOfAutumn {
    constructor(){
        this.inicio=null
        this.tamaño=0
    }
    agregarPelican(nuevo){
        if (this.inicio===null) {
            this.inicio=nuevo
        }
        else {
            let aux=this.inicio
            while (aux.siguiente!==null) {
                aux=aux.siguiente
            }
            aux.siguiente=nuevo
        }
        this.tamaño++
        this.imprimir()
    }
    imprimir() {
        lista.innerHTML = "";
        let aux = this.inicio;
        while(aux){
            lista.innerHTML += aux.articleToHtml();
            aux = aux.siguiente;
        }
    }
}

let forwardUntoDawn = new PillarOfAutumn();

btnAgregar.addEventListener("click", () => {
    let nombreBase = (document.querySelector('#nombreBase'));
    let tiempoBase = (document.querySelector('#tiempoBase'));
    let base1 = new BasePelican(nombreBase.value, tiempoBase.value);
    forwardUntoDawn.agregarPelican(base1);
});

btnImprimir.addEventListener("click", () => {
    forwardUntoDawn.imprimir();
});