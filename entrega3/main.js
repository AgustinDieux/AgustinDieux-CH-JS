class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const remera = new Producto("remera nike", 100)
const pantalon = new Producto("pantalon puma", 200)
const buzo = new Producto("buzo adidas", 300)
const medias = new Producto("medias grid", 50)

const arrayProductos = [remera, pantalon, buzo, medias ]

const buscador = prompt("¿Cual es el nombre del producto que queres buscar? (remera nike, pantalon puma, buzo adidas o medias grid)")

const encontrado = arrayProductos.find(producto => producto.nombre === buscador);

if(encontrado === null){
    alert('El producto no existe')
}else{
    console.log(encontrado)
}