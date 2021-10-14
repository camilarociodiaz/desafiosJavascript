//CARRITO DE COMPRAS DE REMERAS //

//crear la clase producto//

class producto {
    constructor(nombre, precio, color, stock) {
        this.nombre = nombre
        this.precio = precio
        this.color = color
        this.stock = stock
    }

}

let producto1 = new producto("remera garfield", 1200, "blanca", 4)
let producto2 = new producto("Remera Tomy y Daly", 1350, "azul", 3)
let producto3 = new producto("Remera stranger things", 1299, "roja", 0)

const galeria = [producto1, producto2, producto3];

const carrito = [];

function main() {
    let option = mostrarProductos();

    while (option != 0) {
        switch (option) {
            case 1:
                alert("agregaste una remera de garfield")
                agregarProducto(galeria[0]);
                break;
            case 2:
                alert("agregaste una remera de Tomy y Daly")
                agregarProducto(galeria[1]);
                break;
            case 3:
                alert("agregaste una remera de stranger things")
                agregarProducto(galeria[2]);
                break;
            default:
                alert("Ingreso incorrecto");
        }

    }
}

console.log(mostrarProductos());
console.log(main());




function mostrarProductos() {
    let option = parseInt(prompt("seleccione producto, precione 0 para salir:\n\n 1- remera garfield precione 1\n\n 2-remera Tomy y Daly, presione 2\n\n3- remera Stranger Things, presione 3"))
    return option
}



;

function agregarProducto() {

}