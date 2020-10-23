var inventario= new Array(20);

for (let i = 0; i < inventario.length; i++) {
    inventario[i]=i
}

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

//Agregar
var numero = document.querySelector("#agregar1")
var btnadd = document.querySelector("#btnadd")

//Borrar
var numero = document.querySelector("#borrar1")
var btnadd = document.querySelector("#btndelete")

//Buscar
var numero = document.querySelector("#buscar1")
var btnadd = document.querySelector("#btnsearch")

//Listar
var btnadd = document.querySelector("#btnlist")

//Listar Inverso
var btnadd = document.querySelector("#btninverselist")

//Posición
var numero = document.querySelector("#posicion1")
var btnadd = document.querySelector("#btnposition")