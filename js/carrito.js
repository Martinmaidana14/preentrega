/* -------------------------------- VARIABLES ------------------------------- */

let aceptar = confirm("¿Desea agregar un producto al carrito?");
let total = 0;
let carrito = [];

/* -------------------------------- FUNCIONES ------------------------------- */

const pedirProducto = () => {
	//Con map()

	// Crear una lista de opciones usando map()
	const opciones = productos.map((producto, index) => `${index + 1}. ${producto.nombre}`).join("\n");

	// Mostrar el listado en un prompt
	const seleccion = prompt(`Selecciona un producto:\n${opciones}`);
	let productoElegido = productos.find((producto) => producto.nombre === seleccion);

	while (!productoElegido) {
		alert("Producto no encontrado.");
		nombreDelProducto = prompt("¿Qué producto desea agregar?");
		productoElegido = productos.find((producto) => producto.nombre === nombreDelProducto);
	}
	alert(`El producto '${productoElegido.nombre}' tiene un costo de $${productoElegido.precio}`);
	return productoElegido;
};


const mostrarCarrito = () => {
	let mensaje = "";
	carrito.forEach((producto) => {
		mensaje += `Producto: ${producto.nombre} -------------- $${producto.precio}\n`;
	});
	mensaje += `Total: $${total}`;
	alert(mensaje);
};

/* --------------------------------- LÓGICA --------------------------------- */

if (aceptar) {
	while (aceptar) {
		const producto = pedirProducto();
		total += producto.precio;
		carrito.push(producto);
		aceptar = confirm("¿Desea agregar otro producto?");
	}
}

if (total > 0) {
	mostrarCarrito();
} else {
	alert("¡Qué tenga un buen día!");
}
















