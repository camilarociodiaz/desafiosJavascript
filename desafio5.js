// Voy a hacer la obtención de datos de mis clientes de cortinas//


class usuario {
    constructor(nombre, apellido, direccion, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    saludar() {
        console.log("Bienvenido/a " + (this.nombre) + " " + (this.apellido) + ", por favor, el número de telefono ingresado es " + (this.telefono));
    }
}

let usuario1 = new usuario("Camila", "Diaz", "calle falsa 123", 35155511);
usuario1.saludar();

let usuario2 = new usuario("Diego", "Gonzalez", "25 de mayo 585", 356577555);
usuario2.saludar();

let usuario3 = new usuario(prompt("ingrese su nombre"), prompt("ingrese su apellido"), prompt("ingrese su dirección"), parseInt(prompt("ingrese su telefono")));
usuario3.saludar();