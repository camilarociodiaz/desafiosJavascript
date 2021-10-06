/*primero necesito saber el ancho x alto de la abertura*/

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


/* Ahora necesito sabe que tela quiere (BLACKOUT o SUNSCREEN) */

let tela = prompt("Ingrese el tipo de tela, si es BLACKOUT o SUNSCREEN");

if (tela == "BLACKOUT") {

    console.log("elegiste blackout")

} else if (tela == "BLACKOUT") {

    console.log("elegiste sunscreen")
} else {
    console.log("nombre incorrecto")
}




/* Cálculo de precio según las caracteristicas elegidas anteriormente */


/*CALCULO DE COSTO PARA BLACKOUT*/

function precioCostoBlackout() {


    if (anchoAbertura <= 699 && altoAbertura <= 999) {
        return 2334


    } else if (anchoAbertura > 699 && anchoAbertura <= 1499 && altoAbertura > 999 && altoAbertura <= 1999) {
        return 6579


    } else if (anchoAbertura > 1499 && anchoAbertura <= 2499 && altoAbertura > 1999 && altoAbertura <= 2599) {
        return 12763


    } else {
        console.log("la abertura es muy grande y no se puede realizar la cortina")
    }

}

function gananciaBlackout() {
    return precioCostoBlackout() * 0.3


}


function precioFinalBackout() {
    return precioCostoBlackout() + gananciaBlackout()


}

alert("El precio de la cortina Blackout es de $" + precioFinalBackout())



/*CALCULO DE COSTO PARA SUNSCREEN*/

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

alert("El precio de la cortina Sunscreen es de $" + precioFinalSunscreen())