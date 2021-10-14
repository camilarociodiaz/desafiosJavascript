class producto {
    constructor(categoria, nombre, precio, color, stock) {

        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;
        this.stock = stock;
    }

    sumaGanancia() {
        this.precio = this.precio * 1.2;
    }


}

let producto1 = new producto("Remera", "Vicent", 2190, "blanco", 3);
let producto2 = new producto("Remera", "Planet", 1990, "gris", 0);
let producto3 = new producto("Jean", "Vanens", 5090, "jean claro", 7);
let producto4 = new producto("Camisa", "Casper", 4090, "azul", 5);
let producto5 = new producto("Zapatilla", "Laid", 5290, "blanco", 1);
let producto6 = new producto("Buzo", "Hard", 5390, "gris", 0);


const Galeria = [producto1, producto2, producto3, producto4, producto5, producto6];

//filtrar productos sin stock//

const sinStock = Galeria.filter(producto => producto.stock < 1);
console.log("los productos sin stock son ", sinStock);

//ORDENAR PRODUCTOS DE MAS BARATO A MAS CARO//

Galeria.sort(function(a, b) {
    if (a.precio > b.precio) {
        return 1;
    }
    if (a.precio < b.precio) {
        return -1;

    }
    if (a.precio == b.precio) {
        return 0;
    }

});

console.log("los productos de mas barato a mas caro: ", Galeria)




//sumarle la ganancia al precio de costo//


for (const producto of Galeria)
    producto.sumaGanancia();




//CARRITO DE COMPRAS//

let carrito = [];
let suma = 0;

function main() {
    let opcion = mostrarProductos();

    while (opcion != 0) {
        switch (opcion) {
            case 1:
                alert("Agregaste una " + Galeria[0].categoria + " " + Galeria[0].nombre)
                agregarProducto(Galeria[0].categoria, Galeria[0].nombre, Galeria[0].color);
                suma = suma + Galeria[0].precio;
                break;

            case 2:
                alert("Agregaste una " + Galeria[1].categoria + " " + Galeria[1].nombre)
                agregarProducto(Galeria[1].categoria, Galeria[1].nombre, Galeria[1].color);
                suma = suma + Galeria[1].precio;
                break;

            case 3:
                alert("Agregaste un " + Galeria[2].categoria + " " + Galeria[2].nombre)
                agregarProducto(Galeria[2].categoria, Galeria[2].nombre, Galeria[2].color);
                suma = suma + Galeria[2].precio;
                break;

            case 4:
                alert("Agregaste un " + Galeria[3].categoria + " " + Galeria[3].nombre)
                agregarProducto(Galeria[3].categoria, Galeria[3].nombre, Galeria[3].color);
                suma = suma + Galeria[3].precio;
                break;

            case 5:
                alert("Agregaste un " + Galeria[4].categoria + " " + Galeria[4].nombre)
                agregarProducto(Galeria[4].categoria, Galeria[4].nombre, Galeria[4].color);
                suma = suma + Galeria[4].precio;
                break;

            case 6:
                alert("Agregaste un " + Galeria[5].categoria + " " + Galeria[5].nombre)
                agregarProducto(Galeria[5].categoria, Galeria[5].nombre, Galeria[5].color);
                suma = suma + Galeria[5].precio;
                break;


            default:
                alert("Ingreso incorrecto");
                break;
        }

        opcion = mostrarProductos();
    }
    alert("Las prendas elegidas son: " + carrito.join(" "));
    alert("El total de la compra es de : $" + suma);
}



function mostrarProductos() {
    let opcion = parseInt(prompt("Seleccione la prenda:\n\n 1- Remera Planet \n\n 2- Remera Vicent \n\n 3- Camisa Casper\n\n 4-Jean Vanens \n\n5-Zapatilla Laid \n\n6- Buzo Hard\n\n presione 0 para Finalizar compra"));
    return opcion;
}


function agregarProducto(categoria, nombre, color) {
    carrito.push(categoria, nombre, color);
}


main();




function descuentoCupon() {
    let descuento = agregarCupon();

    if (descuento == "CODERHOUSE") {
        alert("El total de la compra es de : $" + (suma * 0.7));
    } else {

        alert("El total de la compra es de : $" + suma);

    }

}







function agregarCupon() {
    let descuento = prompt("Sólo por hoy cupon de descuento si escribis la palabra CODERHOUSE");
    return descuento;
}






descuentoCupon();