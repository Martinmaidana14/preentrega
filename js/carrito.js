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
									<button id='${producto.id}' class"btn-compra">COMPRAR</button>
								</div>
								`;
		contenedorProductos.appendChild(cardProducto);
	})
	const btnComprar = document.querySelectorAll('.btn-compra'); //Nodelist[]
	btnComprar.forEach(el => {
		el.addEventListener('click', (e) =>{ //Agregar Evento
			agregarAlCarrito(e.target.id)
		});
	});
}

mostrarProductos(productos);

const carrito = [];

function agregarAlCarrito(id){
	//console.log(id)

	let prodEncontrado = productos.find( prod => prod.id === parseInt(id)); //para encontrar un producto, recorriendo array 
	//console.log(prodEncontrado) me devuelve el producto que clickeo y asi poder encontrarlos 
	
	carrito.push(prodEncontrado);
	console.log(carrito);
}
















