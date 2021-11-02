//primero creo la clase PRENDA //


class prenda {
    constructor(nombre, color, precio) {

        this.nombre = nombre;
        this.color = color;
        this.precio = precio;
    }
}


//defino las variables que necesito para el DOM//

let arrayPrendas = [];

let miFormulario = document.querySelector("#formulario");
let inputNombre = document.querySelector("#iNombre");


let nombreI = formulario.children[1].value;
let colorI = formulario.children[3].value;
let precioI = formulario.children[5].value;



let contenedor = document.querySelector("#prendaIngresada");
let displayTodos = document.querySelector("#displayTodos");
let parrafos = displayTodos.getElementsByTagName("p");
let bandera = false;

//Ahora defino los eventos de los botones//

miFormulario.addEventListener("submit", agregarPrenda);
btnMostrar.addEventListener("click", mostrarTodasPrendas);

inputNombre.focus();


//FUNCIONES//

function validarForm() {

    nombreI = formulario.children[1].value;
    colorI = formulario.children[3].value;
    precioI = formulario.children[5].value;


    console.log(nombreI);
    console.log(colorI);
    console.log(precioI);


    if (nombreI == '' || colorI == '' || precioI == '') {

        alert('Error - Debe completar todos los campos para continuar');

        inputNombre.focus();
        bandera = false;

    } else {
        bandera = true;
    }

}

//FUNCION PARA AGREGAR PRENDAS//

function agregarPrenda(e) {

    e.preventDefault();

    validarForm();

    if (bandera == true) {
        let opcion = confirm("¿Está seguro que quiere agregar esta prenda?");
        if (opcion == true) {
            let formulario = e.target;

            arrayPrendas.push(new prenda(nombreI, colorI, precioI));

        } else {

            alert('no se agregará la prenda');

        }
        formulario.children[1].value = '';
        formulario.children[3].value = '';
        formulario.children[5].value = '';
        contenedor.innerHTML = '';
        AgregarAlDom();
        inputNombre.focus();

    } else {
        inputNombre.focus();
    }

}



//funcion para mostrar en DOM  la ultima prenda ingresada//

function AgregarAlDom() {
    contenedor.innerHTML = `
    <h3>Última prenda ingresada:</h3>
    <p> <strong> Nombre:</strong> ${nombreI}</p>
    <p> <strong> Color:</strong> ${colorI}</p>
    <p> <strong> Precio:</strong> ${precioI}</p>
    <hr>`;
}


//funcion para mostrar todas las prendas en el div//




function mostrarTodasPrendas(e) {


    e.preventDefault();

    displayTodos.innerHTML = `<h3>Todas las prendas ingresadas al sistema son:</h3>`;


    for (const prenda of arrayPrendas) {

        displayTodos.innerHTML += `
        <p> <strong> Nombre:</strong> ${nombreI}</p>
        <p> <strong> Color:</strong> ${colorI}</p>
         <p> <strong> Precio:</strong> ${precioI}</p>
        <hr>`;

    }


}