function agregarLista() {


    let lista = document.getElementById("lista");
    let producto = document.getElementById("producto").value;

    let li = document.createElement("li");
    li.innerHTML = "Agregaste a tu lista de compras la prenda " + producto;

    li.style.color = "gray";
    li.style.fontSize = "2rem";
    li.style.textAlign = "center";



    lista.appendChild(li);


}


function eliminarLista() {

    let lista = document.getElementById("lista");
    lista.removeChild(lista.lastChild);


}