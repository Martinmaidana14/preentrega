
//Clase que modela la entidad cliente

class Cliente {

    /*
     * Funcion constructora
     * @param {*} nro_cliente //=> numero de cliente
     * @param {*} nombre //=> nombre del cliente
     * @param {*} apellido //=> apellido del cliente
     */

    constructor (nro_cliente,nombre,apellido){

        this.nro_cliente = nro_cliente;
        this.nombre = nombre ;
        this.apellido = apellido ;
        /*para agregar muchas cuentas y no sola 1 en pesos y 1 en dolares podria ser
        this.cuentas = new Array() y abajo un */
        this.cuenta_pesos = null ;
        this.cuenta_dolares = null ;

    }

    /*agregarCuenta(cuenta){ 
        //Con esto podria tener 5 cuentas en pesos 2 en dolares por ejemplo y este cliente va a poder todas las cuentas que necesite
        this.cuenta.push(cuenta)
    }*/
    
    //Metodo de retorno, Cuando me devuelve un dato Get || Cuando voy a cambiar un dato Set 
    getCuentaPesos(){

        return this.cuenta_pesos ;
    }

    getCuentaDolares(){

        return this.cuenta_dolares ;
    }

    setCuentaPesos(nueva_cuenta){

        this.cuenta_pesos = nueva_cuenta
    }

    setCuentaDolares(nueva_cuenta){

        this.cuenta_dolares = nueva_cuenta
    }

    getDatos(){

        return this.nro_cliente + " - " + this.nombre + " - " + this.apellido ;
    }
}