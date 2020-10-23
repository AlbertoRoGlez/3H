var inventario= new Array();
var codigoP = document.querySelector("#codigo1")
var nombreP = document.querySelector("#nombre1")
var descripcionP = document.querySelector("#descripcion1")
var cantidadP = document.querySelector("#cantidad1")
var costoP = document.querySelector("#costo1")

class Producto{
    constructor(codigo, nombre, descripción, cantidad, costo, valormerc){
    this.codigo=codigo
    this.nombre=nombre
    this.descripción=descripción
    this.cantidad=cantidad
    this.costo=costo
    this.valormerc=(cantidad * costo)

}
}

let prueba= new Producto("AAAA", "Coca", "Refresco", 2, 15,);
console.log(prueba);
inventario.push(prueba);
console.log(inventario);

//Agregar

var btnadd = document.querySelector("#btnadd")

btnadd.addEventListener("click", () => {
    let nuevoProducto = new Producto(codigoP.value, nombreP.value, descripcionP.value, cantidadP.value, costoP.value);
    inventario.push(nuevoProducto)
    console.log(inventario)
}
)

//Borrar
var borrar = document.querySelector("#borrar1")
var btndelete = document.querySelector("#btndelete")

//Buscar
var buscar = document.querySelector("#buscar1")
var btnsearch = document.querySelector("#btnsearch")

//Listar
var btnlist = document.querySelector("#btnlist")

//Listar Inverso
var btninverselist = document.querySelector("#btninverselist")

//Posición
var posicion = document.querySelector("#posicion1")
var btnposition = document.querySelector("#btnposition")