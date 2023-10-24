

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);
const carrito = JSON.parse(localStorage.getItem("carrito")) || []
function validarFormulario(e){


    e.preventDefault();
    console.log("Formulario Enviado");


	//Capturando inputs y value
	let inputNombre = document.getElementById("nombre").value
	let inputApellido = document.getElementById("apellido").value


	const usuario = {
		nombre: inputNombre,
		apellido: inputApellido
	}

	localStorage.setItem("usuario", JSON.stringify(usuario))
}


//Funcion para renderizar el carrito en el elemento con id "carrito"
function renderizarCarrito() {
	const carritoElement = document.getElementById('carrito');
	carritoElement.innerHTML = ''; //Limpiar el contenido previo del carrito

	if(carrito.length === 0) {
		carritoElement.innerHTML = '<p>El carrito está vacio.</p>'
	}
	carrito.forEach(producto => {
		const itemCarrito = document.createElement('div');
		itemCarrito.classList.add('carrito-item');
		itemCarrito.innerHTML = `
								<img class="prod-img" src="${producto?.img}" alt="${producto?.nombre}" style="width: 75px"</img>
								<div>${producto?.nombre} - Cantidad: ${producto?.cantidad}</div>
								<button class="btn-eliminar" data-id="${producto?.id}">Eliminar</button>
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

	//mostrar total del carrito
	const totalCarrito = document.getElementById('total-carrito');
	totalCarrito.innerHTML = `Total: $ ${calcularTotalCarrito()}`;
	if (carrito.length === 0) {
		totalCarrito.innerHTML = "Total: 0";
	}
}

//Funcion de eliminar
function eliminarProductoDelCarrito(id){
	const index = carrito.findIndex(prod => prod.id === parseInt(id));
	if(index !== -1){
		carrito.splice(index, 1);
		localStorage.setItem("carrito", JSON.stringify(carrito));
		console.log("Producto eliminado del carrito.");

	}else {
		console.log("No se encontro el producto en el carrito.");
	}
}

//Retornar total de carrito
function calcularTotalCarrito() {
	let total = 0;
	carrito.forEach(producto => {
		total += producto.precio * producto.cantidad;
	})
	return total
}


const iconoCarrito = document.getElementById("iconoCarrito")
iconoCarrito.addEventListener("click", () => {
	renderizarCarrito()
})



//HACER FECH Y JSON(DE PRODUCTOS.JS)!!!!CLASE 15
const contenedorProd = document.querySelector('#container')


fetch('./js/productos.json')
.then( res => res.json())
.then( productos => mostrarProductos(productos))


function mostrarProductos(productos){


	productos.forEach(producto => {
		let card = document.createElement('div'); 

		card.innerHTML = `<h2>${producto.nombre}</p>
						<img class="prod-img" src="${producto?.img}" alt="${producto?.nombre}" style="width: 75px"</img>
						<div class="prod-description">
							<h5 class="cel-nombre">${producto?.nombre}</h5>
							<h5 class="cel-marca">${producto?.marca}</h5>
							<button id='${producto?.id}' class="btn-compra">COMPRAR</button>
						</div>
						`;

		contenedorProd.appendChild(card);

		const btnComprar = document.getElementById(producto.id)
		btnComprar.addEventListener("click", ()=> agregarAlCarrito(producto.id,productos)); 
	})
}

//Operador OR reduce y evalua si cumple ciertos datos

function agregarAlCarrito(id,productos){
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
		console.log(carrito)
		localStorage.setItem("carrito", JSON.stringify(carrito))
	}
	// renderizarCarrito();
}





