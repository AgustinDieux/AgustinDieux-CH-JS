class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio * 1.21;
    }
}

const remera = new Producto("remera nike", 100)
const pantalon = new Producto("pantalon puma", 200)
const buzo = new Producto("buzo adidas", 300)
const medias = new Producto("medias grid", 50)

const arrayProductos = [remera, pantalon, buzo, medias ]

const contenedorProductos = document.getElementById("contenedorProductos");

arrayProductos.forEach( Producto => {
    let div = document.createElement ("div");
    div.innerHTML = `<p> ${Producto.nombre} </p>
                    <p> Precio: $${Producto.precio} </p>
                    <button> Agregar al carrito </button>`;
    contenedorProductos.appendChild(div);
})
