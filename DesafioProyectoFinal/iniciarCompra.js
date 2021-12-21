//iniciar compra, mostrando el carrito en pagina aparte//




articulosCarrito.forEach(prenda => {

    const rowCarrito = document.createElement('tr');
    rowCarrito.innerHTML =

        `
       <td>  
       <img src="${prenda.imagen}" width="100">
       </td>
      

        <td>${prenda.titulo} </td>
        <td> ${prenda.talle}   </td>
        <td> ${prenda.precio} </td>
        
        <td> ${prenda.cantidad} </td>
       
        
        <td> ${prenda.precio * prenda.cantidad}</td>

        <a href='#' class="borrarPrenda" data-id="${prenda.id}"> x </a>
        </td> 
       
        

        `;


    //agrego el HTML del carrito al tbody

    contenedorCarrito.appendChild(rowCarrito);


})