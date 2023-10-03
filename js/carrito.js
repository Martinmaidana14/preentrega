let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado");    
}


const contenedorProductos = document.querySelector('#contenedor-productos');
console.log(productos)

const mostrarProductos = (data) => {
	data.forEach(producto =>{
		const cardProducto = document.createElement('article');
		cardProducto.setAttribute('id', 'tarjeta-producto');
		cardProducto.innerHTML =`
								<img class="prod-img" src="${producto?.img}" alt="${producto?.nombre}" style="width: 75px"
								<div class="prod-description">
									<h5 class="cel-nombre">${producto?.nombre}</h5>
									<h5 class="cel-marca">${producto?.marca}</h5>
									<button id='${producto.id}' class="btn-compra">COMPRAR</button>
								</div>
								`;
		contenedorProductos.appendChild(cardProducto);
	})
	const btnComprar = document.querySelectorAll('.btn-compra'); //Nodelist[]
	btnComprar.forEach(el => {
		el.addEventListener('click', (e) =>{ //Agregar Evento
			agregarAlCarrito(e.target.id);
		});
	});
}

mostrarProductos(productos);

const carrito = [];

function agregarAlCarrito(id){
	//Comprabar si existe
	let enCarrito = carrito.find(prod => prod.id === parseInt(id))

	let prodEncontrado = productos.find( prod => prod.id === parseInt(id)); //para encontrar un producto, recorriendo array 
	//console.log(prodEncontrado) me devuelve el producto que clickeo y asi poder encontrarlos 
	//Si existe se aumenta, else le agregamos con cantidad 1
	if(enCarrito){
		enCarrito.cantidad ++
	}else {
		prodEncontrado.cantidad = 1
		carrito.push(prodEncontrado)
	}
	console.log(carrito);
	renderizarCarrito();
}

//Funcion para renderizar el carrito en el elemento con id "carrito"
function renderizarCarrito() {
	const carritoElement = document.getElementById('carrito');
	carritoElement.innerHTML = ''; //Limpiar el contenido previo del carrito

	if(carrito.length === 0) {
		carritoElement.innerHTML = '<p>El carrito está vacio.</p>'
		return
	}
	carrito.forEach(producto => {
		const itemCarrito = document.createElement('div');
		itemCarrito.classList.add('carrito-item');
		itemCarrito.innerHTML = `
								<div>${producto.nombre} - Cantidad: ${producto.cantidad}</div>
								<button class="btn-eliminar" data-id="${producto.id}">Eliminar</button>
								`;
		carritoElement.appendChild(itemCarrito);
	});
	//Configuracion de los botones eliminar
	const btnEliminar = carritoElement.querySelectorAll('.btn-eliminar'); //Nodelist[]
	btnEliminar.forEach(el => {
		el.addEventListener('click', (e) =>{ //Agregar Evento
			const productId = e.target.getAttribute('data-id');
			eliminarProductoDelCarrito(productId);
			renderizarCarrito(); //Volver a renderizar el carrito despues de eliminar un producto
		});
	});
}
	//Funcion de eliminar
function eliminarProductoDelCarrito(id){
	const index = carrito.findIndex(prod => prod.id === parseInt(id));

	if(index !== -1){
		carrito.splice(index, 1);
		console.log("Producto eliminado del carrito.");
	}else {
		console.log("No se encontro el producto en el carrito.");
	}
}
renderizarCarrito()
















