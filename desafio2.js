//LE PEDIMOS AL USUARIO QUE INGRESE 3 NROS Y LE DECIMOS CUÁL ES EL MAYOR//

let numeroUno = parseInt(prompt("Ingrese un número"));
let numeroDos = parseInt(prompt("Ingrese el segundo número"));
let numeroTres = parseInt(prompt("Ingrese el tercer número"));


//si el primer nro es mayor//

if (numeroUno > numeroDos && numeroUno > numeroTres) {
    console.log(numeroUno + "es mayor a " + numeroDos + " y " + numeroTres);

    //si el segudno nro es mayor//
} else if (numeroUno < numeroDos && numeroDos > numeroTres) {
    console.log(numeroDos + "es mayor a " + numeroUno + " y " + numeroTres);

    //si el tercer nro es mayor//
} else if (numeroUno < numeroTres && numeroDos < numeroTres) {
    console.log(numeroTres + "es mayor a " + numeroUno + " y " + numeroDos);

    //si los 3 son iguales//
} else(numeroUno == numeroDos == numeroTres); {
    alert("Los 3 números ingresados son iguales");
}