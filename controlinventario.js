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