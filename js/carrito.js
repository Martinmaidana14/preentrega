let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);
const carrito = JSON.parse(localStorage.getItem("carrito")) || []

function validarFormulario(e) {


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

	if (carrito.length === 0) {
		carritoElement.innerHTML = '<p>El carrito está vacio.</p>'
	}
	carrito.forEach(producto => {
		const itemCarrito = document.createElement('div');
		itemCarrito.classList.add('carrito-item', 'border', 'rounded', 'mt-3')
		itemCarrito.innerHTML = `<div class="card-body">
		<img src="${producto.img}" alt="${producto.nombre}" style="width: 75px;" class="prod-img">
		<h5 class="card-title">${producto.nombre} - Cantidad: ${producto.cantidad}</h5>
<button class="btn btn-danger btn-eliminar" data-id="${producto.id}">Eliminar</button>
	</div>`



		carritoElement.appendChild(itemCarrito);
	});
	//Configuracion de los botones eliminar
	// Configuración de los botones eliminar
	const btnEliminar = carritoElement.querySelectorAll('.btn-eliminar'); // Nodelist[]
	btnEliminar.forEach(el => {
		el.addEventListener('click', (e) => {
			const productId = e.target.getAttribute('data-id');
			console.log(productId)
			eliminarProductoDelCarrito(productId);
			renderizarCarrito();
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
function eliminarProductoDelCarrito(id) {
	const index = carrito.findIndex(prod => prod.id === parseInt(id));
	if (index !== -1) {
		carrito.splice(index, 1);
		localStorage.setItem("carrito", JSON.stringify(carrito));
		console.log("Producto eliminado del carrito.");
		mostrarAlertaSuccess("Producto eliminado del carrito");
	} else {
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
	.then(res => res.json())
	.then(productos =>
		mostrarProductos(productos),

	)


function mostrarProductos(productos) {
	buscador(productos)
	contenedorProd.innerHTML = ""
	productos.forEach(producto => {
		const {
			id,
			nombre,
			precio,
			img,
			cantidad,
			descripcion
		} = producto
		let card = document.createElement('div');
		card.classList.add('card', 'border', 'rounded', 'mt-3', 'd-flex', 'flex-row', 'p-3', 'col-12', 'justify-content-evenly')
		card.innerHTML = `
		
		<div class="w-20">
			<img src="${img}" alt="${nombre}" class="card-img-top" style="width: 150px;">
  			</div>
  			<div class="p-3 d-flex flex-column w-60 h-150">
    <h5 class="card-title">${nombre}</h5>
    <p class="card-text">${descripcion.substring(0, 120)}</p>
  </div>
  <div class="text-center">
    <p class="card-text precio">$${precio}</p>
    <button id="${id}" class="btn btn-primary btn-compra">COMPRAR</button>
	</div>
</div>
						`;

		contenedorProd.appendChild(card);

		const btnComprar = document.getElementById(id)
		btnComprar.addEventListener("click", () => agregarAlCarrito(id, productos));
	})
} {

	//Operador OR reduce y evalua si cumple ciertos datos

	function agregarAlCarrito(id, productos) {
		//Comprabar si existe
		let enCarrito = carrito.find(prod => prod.id === parseInt(id))

		let prodEncontrado = productos.find(prod => prod.id === parseInt(id)); //para encontrar un producto, recorriendo array 
		//console.log(prodEncontrado) me devuelve el producto que clickeo y asi poder encontrarlos 
		//Si existe se aumenta, else le agregamos con cantidad 1
		if (enCarrito) {
			enCarrito.cantidad++
		} else {
			prodEncontrado.cantidad = 1
			carrito.push(prodEncontrado)
			console.log(carrito)
			localStorage.setItem("carrito", JSON.stringify(carrito))
			mostrarAlertaSuccess("Producto agregado al carrito");

		}
		renderizarCarrito()
	}



	function mostrarAlertaSuccess(mensaje) {
		Swal.fire({
			icon: 'success',
			title: 'Éxito',
			text: mensaje,
			timer: 1500, // Cambia el tiempo que deseas que aparezca la alerta (en milisegundos)
			showConfirmButton: false,
		});
	}
}

renderizarCarrito()


const buscador = (productos) => {
	let inputTexto = document.getElementById("buscar");
	inputTexto.addEventListener("input", () => {
		let buscador = inputTexto.value.trim(); // Trim para eliminar espacios en blanco al principio y al final
		let filtrados = productos.filter((producto) =>
			producto.marca.toUpperCase().includes(buscador.toUpperCase())
		);
		mostrarProductos(filtrados);

	});
}