class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio * 1.21;
    }
}

const remera = new Producto(1, "remera nike", 100)
const pantalon = new Producto(2, "pantalon puma", 200)
const buzo = new Producto(3, "buzo adidas", 300)
const medias = new Producto(4, "medias grid", 50)

const arrayProductos = [remera, pantalon, buzo, medias ]

arrayProductos.forEach(producto => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("card1", "col-xl-3", "col-md-6", "col-sm-12");
    divProducto.innerHTML = `
                            <div>
                                <img src="resources/${producto.id}.jpg" class="card-img-top img-fluid py-3">
                                <div class="card-body">
                                    <h3 class="card-title">${producto.nombre}</h3>
                                    <p class="card-text"> ${producto.precio}</p>
                                    <button id= "boton${producto.id}" class="btn btn-primary">Agregar al carrito</button>
                                </div>
                            </div>`
    contenedorProductos.appendChild(divProducto);
    const boton = document.getElementById(`boton${producto.id}`);
boton.addEventListener ("click", () => {
    Toastify({
        text: "Se agrego al carrito",
        duration: 3000,
        }).showToast();
    console.log(producto.id);
    agregarAlCarrito(producto.id);
    })
});

const carrito = [];

const agregarAlCarrito = (id) => {
    const producto = arrayProductos.find(producto => producto.id === id);
    carrito.push(producto);
    localStorage.setItem("arrayProductos", JSON.stringify(producto) )
    carrito= localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : []
}

const contenedorCarrito = document.getElementById ("contenedorCarrito");
const verCarrito = document.getElementById ("verCarrito");

verCarrito.addEventListener("click", actualizarCarrito);

function actualizarCarrito () {
    let aux="";
    carrito.forEach (producto => {
        aux += ` 
                <div>
                    <div>
                    <img src="resources/${producto.id}.jpg" class="card-img-top img-fluid py-3">
                    <div class="card-body">
                        <h3 class="card-title">${producto.nombre}</h3>
                        <p class="card-text"> ${producto.precio}</p>
                        <button onClick = "eliminarCarrito(${producto.id})" class="btn btn-primary">Eliminar carrito</button>
                    </div>
                </div>`
    })
    contenedorCarrito.innerHTML = aux;
};

function eliminarCarrito(id) {
    const producto = carrito.find(producto => producto.id === id);
    carrito.splice(carrito.indexOf(producto),1);
    actualizarCarrito();
}

/*****FETCH*****/

const criptoYa = "https://criptoya.com/api/dolar"

let divDolar = document.getElementById ("divDolar");

fetch(criptoYa)
    .then(response => response.json())
    .then (({blue, solidario})=> {
        divDolar.innerHTML = `
        <h2>Aceptamos Dolares!</h2>
        <p>Dolar Blue: ${blue}</p>
        <p>Dolar Solidario: ${solidario}</p>
        `
    })
    .catch(error => console.log(error));








