alert("Vamos a calcular el área y perímetro de un rectángulo");

var ladoUno = prompt("¿Cuánto mide el primer lado?");
var ladoDos = prompt("¿Cuánto mide el segundo lado?");

ladoUno = parseInt(ladoUno);
ladoDos = parseInt(ladoDos);


//AREA DEL RECTÁNGULO//
areaCuadrado = ladoUno * ladoDos;
console.log("El area del rectángulo es " + areaCuadrado);

alert("El area del rectángulo es " + areaCuadrado);


//AHORA SACAMOS EL PERIMETRO//
perimetroCuadrado = (ladoUno * 2) + (ladoDos * 2);
console.log("El perímetro del rectángulo es " + perimetroCuadrado);
alert("El perímetro del rectángulo es " + perimetroCuadrado);