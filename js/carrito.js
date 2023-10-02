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
		seleccion = prompt(`Selecciona un producto:\n${opciones}`);
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

//JSON
/*
const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                {  id: 2,  producto: "Fideo", precio: 70 },
                {  id: 3,  producto: "Pan"  , precio: 50},
                {  id: 4,  producto: "Flan" , precio: 100}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
//Almacenar producto por producto
for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}
// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));
*/


//DOM

/** devuelve solo una componenete si existe*/
let parWithId = document.getElementById("parWithId");

parWithId.style.textTransform = 'uppercase';

console.log(parWithId.innerHTML)


/**
 * devuelve una coleccion de componenetes que son de una tipo en particular
 */
let paragraph  = document.getElementsByTagName("p");

for (let i = 0 ; i < paragraph.length ;i++){

    paragraph[i].style.color = "red";

}

console.log(paragraph);

/**
 * devuelve una coleccion de componenetes que son de una clase en particular
 */
let parWithClass = document.getElementsByClassName("parWithClass");

for (let i = 0 ; i < parWithClass.length ;i++){

    parWithClass[i].style.textDecoration = "underline";
  //  parWithClass[i].style.color = "yellow";

}


let parQuery = document.querySelector("p #parSpan");
parQuery.style.backgroundColor = '#5a5ada';
parQuery.style.color = '#fff';



let imgWithAtt = document.getElementById('imgWithAtt');
console.log("-attributes de un elemento: ");
console.log(imgWithAtt.attributes);


let imgToChangeAtt = document.getElementById('imgToChangeAtt');
imgToChangeAtt.setAttribute("src","https://dummyimage.com/200x120/5a5ada/aaa");
//imgToChangeAtt.src="https://dummyimage.com/200x120/5a5ada/aaa";
















