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
            productString += `<div>${key}: ${this[key]}</div>`
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
            nuevo.siguiente=this.inicio
        }
        else {
            let aux=this.inicio

            while (aux.siguiente!==this.inicio) {
                aux=aux.siguiente
            }
            aux.siguiente=nuevo
            nuevo.siguiente=this.inicio
        }
        this.tamaño++

    }
    imprimir() {
        lista.innerHTML=""
        if (!this.inicio) return false
        let aux=this.inicio
        let finalizado=false
        while(!finalizado){
            lista.innerHTML+=aux.articleToHtml()
            aux=aux.siguiente
            if (aux.nombre===this.inicio.nombre) {
                finalizado=true
            }
        }
    }
    buscar(x) {
        lista.innerHTML=""
        if (!this.inicio) return false
        let aux=this.inicio
        let finalizado=false
        while (!finalizado) {
            if (aux.nombre==x) {
                lista.innerHTML+=aux.articleToHtml()
                finalizado=true
                return aux
            }
            aux=aux.siguiente
        }
        
    }

    recorrido(horaInicio, baseInicio, horaFinal) {
        let baseaux=this.inicio
        console.log(baseaux)
        let horaaux=Number(horaInicio)
        console.log(horaaux)

        while (horaaux<horaFinal) {
            baseaux=baseaux.siguiente
            horaaux+=Number(baseaux.minutos)
            console.log(horaaux)
        }
    }

    eliminarBase(nombre) {
        if(this.tamaño === 1){
         this.inicio = null;
         this.tamaño--;
         this.imprimir();
         return null;
        }
         let aux = this.inicio;
         if(aux.nombre === nombre){
            this.inicio = aux.siguiente;
            let temp = this.inicio;
 
             while(temp.siguiente.nombre !== nombre){
                 temp = temp.siguiente;
             }
             this.tamaño--;
             temp.siguiente = this.inicio;
             this.imprimir();
         }
         else {
             let temp = this.inicio;
 
             while(temp.siguiente.nombre !== nombre){
                 temp = temp.siguiente;
             }
             temp.siguiente = temp.siguiente.siguiente;
             this.tamaño--;
             this.imprimir();
             return temp.siguiente;
         }
 
     }

}

let forwardUntoDawn = new PillarOfAutumn()

btnAgregar.addEventListener("click", () => {
    let nombreBase = (document.querySelector('#nombreBase'))
    let tiempoBase = (document.querySelector('#tiempoBase'))
    let base1 = new BasePelican(nombreBase.value, tiempoBase.value)
    forwardUntoDawn.agregarPelican(base1)
    console.log(base1)
});

btnImprimir.addEventListener("click", () => {
    forwardUntoDawn.imprimir()
});


btnBuscar.addEventListener("click", () => {
    let buscar=document.querySelector('#buscarBase')
    forwardUntoDawn.buscar(buscar.value)
});

btnCrearRecorrido.addEventListener("click", () => {
    let baseInicio = document.querySelector("#baseInicio");
    let horaInicio = document.querySelector("#horaInicio");
    let horaFinal = document.querySelector("#horaFin");
    forwardUntoDawn.recorrido(baseInicio.value, horaInicio.value, horaFinal.value);
});