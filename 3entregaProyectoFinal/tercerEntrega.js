const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#listaCarrito tbody');
const vaciarCarrito = document.querySelector('#vaciarCarrito');
const listaPrendas = document.querySelector('#listaPrendas');



let articulosCarrito = [];

//funcion para agregar al carrito una prenda cuando apretan el boton de agregar al carrito//
cargarEvent();

function cargarEvent() {

    listaPrendas.addEventListener('click', agregarPrenda);



    //para eliminar prendas del carrito

    carrito.addEventListener('click', eliminarPrenda);

    //vaciar el carrito

    vaciarCarrito.addEventListener('click', () => {

        articulosCarrito = [];

        limpiarHTML();

    });

    document.addEventListener('DOMContentLoaded', () => {

        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

        carritoHTML();
    })

}

function agregarPrenda(e) {

    e.preventDefault();


    if (e.target.classList.contains('agregarCarrito')) {
        const prendaSeleccionada = e.target.parentElement.parentElement.parentElement;

        leerDatosPrenda(prendaSeleccionada);

    }
}





//eliminar prendas del carrito 
function eliminarPrenda(e) {



    if (e.target.classList.contains('borrarPrenda')) {


        const prendaId = e.target.getAttribute('data-id');



        articulosCarrito = articulosCarrito.filter(prenda => prenda.id !== prendaId);

        carritoHTML();

    }


}




function leerDatosPrenda(prenda) {


    //creo un objeto con los datos de la prenda//

    const infoPrenda = {
        imagen: prenda.querySelector('img').src,
        titulo: prenda.querySelector('h5').textContent,
        talle: prenda.querySelector('select').value,
        precio: prenda.querySelector('p').textContent,
        id: prenda.querySelector('a').getAttribute('data-id'),
        cantidad: 1,



    }


    //revisar si un articulo ya existe en el carrito

    const existe = articulosCarrito.some(prenda => prenda.id === infoPrenda.id);



    if (existe) {


        const prenda = articulosCarrito.map(prenda => {

            if (prenda.id === infoPrenda.id) {

                prenda.cantidad++;
                return prenda;
            } else {

                return prenda;
            }



        });


        articulosCarrito = [...prenda];

    } else {

        //agregar elementos al array carrito//

        articulosCarrito = [...articulosCarrito, infoPrenda];
    }


    carritoHTML();

}





//mostrar el carrito de compras al HTML

function carritoHTML() {

    //limpiar HTML para evitar duplicados en el objeto

    limpiarHTML();

    //recorrer el carrito para generar el HTML

    articulosCarrito.forEach(prenda => {

        const rowCarrito = document.createElement('tr');
        rowCarrito.innerHTML =

            `<td>
                    <img src="${prenda.imagen}" width="100">
            </td>
            <td>${prenda.titulo} </td>
            <td> ${prenda.talle}   </td>
            <td> ${prenda.precio} </td>
            <td> ${prenda.cantidad} </td>
            <td> 
            <a href='#' class="borrarPrenda" data-id="${prenda.id}"> x </a>
            </td> 

            
            `






        ;


        //agrego el HTML del carrito al tbody

        contenedorCarrito.appendChild(rowCarrito);


    })


    //agregamos un localStorage al carrito de compras
    sincronizarStorage();

    function sincronizarStorage() {

        localStorage.setItem('carrito', JSON.stringify(articulosCarrito));

    }







}

function limpiarHTML() {

    while (contenedorCarrito.firstChild) {

        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}





/*
//Calcula el precio total teniendo en cuenta los productos repetidos//

function calcularTotal() {
    // Limpiamos precio anterior
    total = 0;
    // Recorremos el array del carrito
    articulosCarrito.forEach(prenda => {
        // De cada elemento obtenemos su precio
        const miItem = prenda.precio => {
            return itemBaseDatos.id === parseInt(item);
        });
        total = total + miItem[0].precio;
    });
    // Renderizamos el precio en el HTML
    DOMtotal.textContent = total.toFixed(2);
}










//SUMAR TOTAL PRECIO/


/*

articulosCarrito.forEach(prenda => {


    newPrice = prenda.precio.replace("$", "")
    console.log(newPrice);


    totalPrecio = parseFloat(totalPrecio) + parseFloat(newPrice);
    console.log(totalPrecio);

    $("#precioTotalTabla").html("Total: $ ${totalPrecio}");

});
*/




function getLS() {

    if (localStorage.getItem('carrito') === nul) {

        productsCheck = []

    } else {

        productsCheck = JSON.parse(localStorage.getItem('carrito'));

    }
    return productsCheck;

}



function totalLive() {

    total = 0
    totalProd = getLS();

    for (let i = 0; i < totalProd.length; i++) {


        let element = Number(totalProd[i].precio * totalProd[i].cantidad);

        total = total + element;

        console.log(total);


        $("precioTablaTotal").html(`$ ${total.toLocalString('es')}`)
    }


}









//agregar descripcion de que hay nuevo articulo en carrito//



//APLICANDO ANIMACIONES 

$(".textoConfirmacion").hide()
$(".alertConfirmacion").hide()


$(".agregarCarrito").on("click", function(e) {

    e.preventDefault();


    if (e.target.classList.contains('agregarCarrito')) {




        $(".alertConfirmacion")
            .show()
            .css("color", "white").css("background-color", "rgb(32, 32, 32)")
            .fadeOut(1800)

    }


})




let banner = $("#banner")
banner.animate({ height: "105%", width: "105%" }, (2000));






//API//

//localizar geograficamente donde se encuentra el cliente//



$(document).ready(function() {

    let geoLoc = navigator.geolocation.getCurrentPosition(mostrarGeo);


    function mostrarGeo(position) {

        console.log(position);

        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        console.log("latitud: " + lat);
        console.log("Long: " + long);

        geoFinal(lat, long);

    }

})



//Agregar el clima segun la ubicacion exacta del cliente//

function geoFinal(lat, long) {

    $.ajax({

        url: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=8ae405df7ea5fbdf016b4ca92b7720bc`,
        type: `GET`,
        data: {
            appid: `8ae405df7ea5fbdf016b4ca92b7720bc`,
            dataType: `jsonp`,
            units: `metric`,
            lang: `es`,

        },
        success: function(data) {


            console.log(data);
            let icono = data.weather[0].icon;
            let iconoURL = "http://openweathermap.org/img/w/" + icono + ".png";

            $("#icono").attr("src", iconoURL);
            let clima = `<div id="cajaClima2">
                             <p id="climaCiudad"><b>${data.name}</b></p> 
                                            
                             <img src= "${iconoURL}"></img>                            
                             <p>TEMP: ${data.main.temp} °C   </p>
                             <p>.    ${data.weather[0].description}</p>     
                            

                        </div>`;


            $("#caja").append(clima);



        },


    })
}