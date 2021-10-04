//Realizar un programa que permita ingresar el nombre, apellido y notas de 5 alumnos. Obtener el promedio de cada uno. Mostrar con un mensaje los datos de alumno con su promedio correspondiente.//


let promedioNotasTotal = 0
let recursa = 0
let aprueba = 0

for (let i = 0; i < 5; i++) {

    //ingresar los datos del alumno//

    let nombreAlumno = prompt("Ingrese el nombre del alumno");
    let apellidoAlumno = prompt("Ingrese el apellido del alumno");
    let notaUno = parseInt(prompt("Ingrese la primer nota"));
    let notaDos = parseInt(prompt("Ingrese la segunda nota"));
    let notaTres = parseInt(prompt("Ingrese la tercer nota"));

    //calcular promedio//
    let sumaNotas = parseInt(notaUno + notaDos + notaTres);
    let promedioNotas = parseFloat(sumaNotas / 3);

    //calcular promedio total// 
    promedioNotasTotal = promedioNotasTotal + promedioNotas



    console.log(nombreAlumno + " " + apellidoAlumno + " sacó las siguientes notas: " + notaUno + " " + notaDos + " " + notaTres + ", dando un promedio de " +
        promedioNotas);

    if (promedioNotas < 5) {
        console.log("El alumno " + nombreAlumno + apellidoAlumno + " RECURSA LA MATERIA")

        recursa++
    } else {
        console.log("El alumno " + nombreAlumno + apellidoAlumno + " APRUEBA LA MATERIA")
        aprueba++
    }
}

console.log("El promedio total del curso es de" + promedioNotasTotal / 5)


if (recursa < aprueba) {
    console.log("Felicidades, en este curso aprobaron la mayoria de los alumnos")
} else if (recursa > aprueba) {
    console.log("Lamentablemente, en este curso desaprobaron la mayoria de los alumnos")
} else {
    console.log("La mitad del curso aprobó y la otra mitad desaprobó")
}