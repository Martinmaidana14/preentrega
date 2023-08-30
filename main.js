

//declaracion de variables y constantes
const ANIO_ACTUAL = 2023 ;

let nombre = prompt("ingrese su nombre"); 
let apellido = prompt("ingrese su apellido"); 
let anio_nac = prompt("ingrese su año de nacimiento"); 

let edad = ANIO_ACTUAL - anio_nac ;

if ( nombre != "" && apellido != "" && anio_nac != ""  && !isNaN(edad) ){

    //armo el mensaje al usuario
    let mensaje = "Confirmas que tus datos son correctos : \n" ;
    mensaje = mensaje + "-nombre "+nombre +"\n";
    mensaje = mensaje + "-apellido "+apellido +"\n";
    mensaje = mensaje + "-edad "+edad +"\n";
    mensaje += "?" ;

    let respuesta = confirm(mensaje);

    if (respuesta){

        alert("Bienvenid@ "+nombre);
    }else{
        alert("Recarga y modifica tus datos");
    }

}else{

    alert ("Ingresa de forma correcta todos los datos");
}

//datos de usuario1
let id_usuario = 1;
let nombre_completo = "Pepe Vasquez";
let user = "pepevas";
let pass = "12345";
let saldo = 100000;

//datos de usuario2
let id_usuario2 = 2;
let nombre_completo2 = "Hector Daniel";
let user2 = "hec70";
let pass2 = "54321";
let saldo2 = 50000 ;

//.trim: saca los espacios de adelante y atras, si el usuario ingreso espacios
let usuario = prompt("Ingrese su usuario").trim();
let password = prompt ("Ingrese su contraseña").trim();

//valido que el usuario haya completado los dos datos
if (usuario != "" && password != "" ){

    //chequeo si los datos corresponder al primer usuario
    if (usuario == user && password == pass  ){
        let mensaje = "Bienvenido "+nombre_completo;
        mensaje += "\nid: "+id_usuario; 
        mensaje += "\nsaldo en cuenta: "+saldo; 
        alert (mensaje);

        //pregunto si queire hacer uan transferencia
        let respuesta = confirm("Desea hacer una transferencia?");
        if (respuesta){

            // le pido el monto a transferir
            let monto = parseFloat(prompt("Ingrese el monto a transferir"));

            if (isNaN(monto)){

                alert ("Transferencia abortada");

            }else {


                let id = prompt("Ingrese id del usuario destino").trim();

                //cheuqueo si el id del usuario es igual al del usuaario2
                if (id == id_usuario2){

                    //chequeo si puede hacer la transferencia
                    if (monto <= saldo){

                        saldo = saldo - monto ;
                        saldo2 = saldo2 + monto ;

                        let mensaje = "Tranferencia exitosa";
                        mensaje += "\n: "+nombre_completo; 
                        mensaje += "\nsaldo en cuenta: "+saldo;
                        mensaje += "\n----------------"; 
                        mensaje += "\n: "+nombre_completo2; 
                        mensaje += "\nsaldo en cuenta: "+saldo2; 
                        alert (mensaje);


                    }else {


                        alert("Monto insuficiente");

                    }



                }else {

                    alert ("error");
                }

            }

        }


    }else if (usuario == user2 && password == pass2){
        let mensaje = "Bienvenido "+nombre_completo2;
        mensaje += "\nid: "+id_usuario2; 
        mensaje += "\nsaldo en cuenta: "+saldo2; 
        alert (mensaje);


        

    }else{

        alert("Credenciales incorrectas");
    }

}else {

    alert("No ingresaste todos los datos");
}