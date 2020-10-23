var inventario= new Array();
var codigoP = document.querySelector("#codigo1")
var nombreP = document.querySelector("#nombre1")
var descripcionP = document.querySelector("#descripcion1")
var cantidadP = document.querySelector("#cantidad1")
var costoP = document.querySelector("#costo1")

class Producto{
    constructor(codigo, nombre, descripción, cantidad, costo, valormercancia){
    this.codigo=codigo
    this.nombre=nombre
    this.descripción=descripción
    this.cantidad=cantidad
    this.costo=costo
    this.valormercancia=(cantidad * costo)

}
}


//Agregar

var btnadd = document.querySelector("#btnadd")

btnadd.addEventListener("click", () => {
    let contador=0
    let nuevoProducto =(new Producto(codigoP.value, nombreP.value, descripcionP.value, cantidadP.value, costoP.value));


    if (inventario.length<=19) {
        inventario.push(nuevoProducto)
        inventario[Producto] = codigoP.value
    }
    console.log(inventario)
}
)

//Borrar
var borrar = document.querySelector("#borrar1")
var btndelete = document.querySelector("#btndelete")

btndelete.addEventListener("click", () => {
    let posicion = inventario.indexOf(borrar.value)
    inventario.splice(posicion,1)
    console.log(inventario)
})

//Buscar
var buscar = document.querySelector("#buscar1")
var btnsearch = document.querySelector("#btnsearch")

btnsearch.addEventListener("click", () => {
    
    console.log(inventario.indexOf(buscar.value))
})
//Listar
var btnlist = document.querySelector("#btnlist")

//Listar Inverso
var btninverselist = document.querySelector("#btninverselist")

//Posición
var posicion = document.querySelector("#posicion1")
var btnposition = document.querySelector("#btnposition")