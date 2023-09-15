

//Creo a los clientes del banco y le asocio cuentas

//Cliente 1
let cliente1 =  new Cliente(1,"Pepe","Vasquez");
cliente1.setCuentaPesos(new Cuenta(11111111,"$"));
cliente1.setCuentaDolares(new Cuenta(22222222,"U$D"));
//Le acreditamos 50mil con la variable cuenta_pesos
let cuenta_pesos = cliente1.getCuentaPesos();
cuenta_pesos.acreditar(50000);


//Cliente 2
let cliente2 =  new Cliente(2,"Hector","Daniel");
cliente2.setCuentaPesos(new Cuenta(33333333,"$"));
cliente2.setCuentaDolares(new Cuenta(44444444,"U$D"));


let mensaje = "Bienvenido al sistema de tranferencias";
mensaje +="\nInfo de clientes:";
mensaje +="\n"+cliente1.getDatos();
mensaje +="\n"+cliente1.getCuentaPesos().getDescripcion();
mensaje +="\n--------------------------";
mensaje +="\n"+cliente2.getDatos();
mensaje +="\n"+cliente2.getCuentaPesos().getDescripcion();
alert(mensaje);






