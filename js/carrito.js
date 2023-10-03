class Persona {
	constructor(nombre, apellido) {
		this.nombre = nombre;
	
		this.apellido = apellido;
	}
	//metodo estatico para reutilizar constructor, truquito doble constructor
	static nuevaPersona(objeto) {
		return new Persona(objeto.nombre, objeto.apellido);
	}
	//recuperar estructura de la clase 
	mostrar_nombre_completo() {
		return this.nombre + " " + this.apellido;
	}
	}
	
	let nombre = prompt("ingrese su nombre");
	
	let apellido = prompt("ingrese su apellido");
	
	//localStorage.setItem("nombre-completo",nombre + " " + apellido);
	
	let persona = new Persona(nombre, apellido);
	
	localStorage.setItem("persona", JSON.stringify(persona));
	
	let objeto_persona = JSON.parse(localStorage.getItem("persona"));
	
	let p = Persona.nuevaPersona(objeto_persona);
	
	alert("Bienvenid@ " + p.mostrar_nombre_completo());

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
			agregarAlCarrito(e.target.id);
		});
	});
}

mostrarProductos(productos);

const carrito = [];

function agregarAlCarrito(id){
	//console.log(id)
	carrito.some()

	let prodEncontrado = productos.find( prod => prod.id === parseInt(id)); //para encontrar un producto, recorriendo array 
	//console.log(prodEncontrado) me devuelve el producto que clickeo y asi poder encontrarlos 

	carrito.push(prodEncontrado);
	console.log(carrito);
}















