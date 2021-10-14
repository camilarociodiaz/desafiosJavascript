//APLICANDO ARRAYS//


//OBJETOS PARA TELA BLACKOUT//

class cortinas {
    constructor(tela, anchoMinimo, anchoMaximo, altoMinimo, altoMaximo, precio) {
        this.tela = tela
        this.anchoMinimo = anchoMinimo
        this.anchoMaximo = anchoMaximo
        this.altoMinimo = altoMinimo
        this.altoMaximo = altoMaximo
        this.precio = precio
    }

    sumaGanancia() {
        this.precio = this.precio * 1.3;
    }
}

let medidaBkA1 = new cortinas("blackout", 100, 699, 100, 999, 2334)
let medidaBkA2 = new cortinas("blackout", 100, 699, 1000, 1999, 3202)
let medidaBkA3 = new cortinas("blackout", 100, 669, 2000, 2500, 3376)
let medidaBkB1 = new cortinas("blackout", 700, 1499, 100, 999, 4642)
let medidaBkB2 = new cortinas("blackout", 700, 1499, 1000, 1999, 6579)
let medidaBkB3 = new cortinas("blackout", 700, 1499, 2000, 2500, 8128)
let medidaBkC1 = new cortinas("blackout", 1500, 2500, 100, 999, 7527)
let medidaBkC2 = new cortinas("blackout", 1500, 2500, 1000, 1999, 10799)
let medidaBkC3 = new cortinas("blackout", 1500, 2500, 2000, 2500, 13417)



const medidasBlackout = [medidaBkA1, medidaBkA2, medidaBkA3, medidaBkB1, medidaBkB2, medidaBkB3, medidaBkC1, medidaBkC2, medidaBkC3];



//OBJETOS PARA TELA SUNSCREEN//

let medidaScA1 = new cortinas("Sunscreen", 100, 699, 100, 999, 2509)
let medidaScA2 = new cortinas("Sunscreen", 100, 699, 1000, 1999, 3706)
let medidaScA3 = new cortinas("Sunscreen", 100, 669, 2000, 2500, 3946)
let medidaScB1 = new cortinas("Sunscreen", 700, 1499, 100, 999, 5032)
let medidaScB2 = new cortinas("Sunscreen", 700, 1499, 1000, 1999, 7703)
let medidaScB3 = new cortinas("Sunscreen", 700, 1499, 2000, 2500, 9306)
let medidaScC1 = new cortinas("Sunscreen", 1500, 2500, 100, 999, 8186)
let medidaScC2 = new cortinas("Sunscreen", 1500, 2500, 1000, 1999, 12700)
let medidaScC3 = new cortinas("Sunscreen", 1500, 2500, 2000, 2500, 15408)



const medidasSunscreen = [medidaScA1, medidaScA2, medidaScA3, medidaScB1, medidaScB2, medidaScB3, medidaScC1, medidaScC2, medidaScC3];


/*
for (const cortinas of medidasBlackout)
    cortinas.sumaGanancia();

console.log(cortinas.sumaGanancia());
*/



//primero tengo que pedirle que elija una tela//


function pedirTela() {

    let opcionTela = parseInt(prompt("Seleccione el tipo de tela:\n\n 1- Blackout, presione 1\n\n 2- Sunscreen, presione 2\n\n presione 0 para salir"));
    return opcionTela;
}

const telasCortinas = ["blackout", "sunscreen"];




// despues tengo que pedirle el ancho x alto de la abertura//



function pedirMedidas() {

    let anchoAbertura = parseInt(prompt("Ingrese el ancho de la abertura en milimetros"));
    while (isNaN(anchoAbertura) == true) {
        alert("No es un número");
        anchoAbertura = parseInt(prompt("Ingrese el ancho de la abertura en milimetros"));
    }
    let altoAbertura = parseInt(prompt("Ingrese el alto de la abertura en milimetros"));
    while (isNaN(altoAbertura) == true) {
        alert("No es un número");
        altoAbertura = parseInt(prompt("Ingrese el alto de la abertura en milimetros"));
    }

    console.log("el ancho de la abertura es de " + anchoAbertura + "y el alto es de " + altoAbertura)

}






/* Cálculo de precio según las caracteristicas elegidas anteriormente */


/*CALCULO DE COSTO PARA BLACKOUT*/

function precioCostoBlackout() {

    let medidasUsuario = pedirMedidas();

    while (medidasUsuario != 0) {

        switch (medidasUsuario) {


            case 1:
                (anchoAbertura <= 699 && altoAbertura <= 999)
                return 2334


            case 2:
                (anchoAbertura > 699 && anchoAbertura <= 1499 && altoAbertura > 999 && altoAbertura <= 1999)
                return 6579


            case 3:
                (anchoAbertura > 1499 && anchoAbertura <= 2499 && altoAbertura > 1999 && altoAbertura <= 2599)
                return 12763


            default:
                console.log("la medida ingresada no es posible")

        }

    }

}


function gananciaBlackout() {
    return precioCostoBlackout() * 0.3


}


function precioFinalBackout() {
    return precioCostoBlackout() + gananciaBlackout()


}


/*

    //CALCULO DE COSTO PARA SUNSCREEN//

    function precioCostoSunscreen() {


        if (anchoAbertura <= 699 && altoAbertura <= 999) {
            return 2509


        } else if (anchoAbertura > 699 && anchoAbertura <= 1499 && altoAbertura > 999 && altoAbertura <= 1999) {
            return 7703


        } else if (anchoAbertura > 1499 && anchoAbertura <= 2499 && altoAbertura > 1999 && altoAbertura <= 2599) {
            return 15408


        } else {
            console.log("la abertura es muy grande y no se puede realizar la cortina")
        }

    }

    function gananciaSunscreen() {
        return precioCostoSunscreen() * 0.3


    }


    function precioFinalSunscreen() {
        return precioCostoSunscreen() + gananciaSunscreen()


    }

*/






/*

function main() {

    let opcion = pedirTela();



    while (opcion != 0) {
        switch (opcion) {
            case 1:
                alert("El precio de la cortina Blackout es de $" + precioFinalBackout());
                break;


            case 2:
                alert("El precio de la cortina Sunscreen es de $" + precioFinalSunscreen());
                break;



            default:
                alert("Ingreso incorrecto");
                break;
        }

        opcion = pedirTela();

    }


}




main();

*/