class Cuenta {

    constructor(cbu,tipo){


        this.cbu = cbu ;
        this.tipo = tipo ;
        this.saldo = 0 ;

    }

    getSaldo(){

        return this.saldo;
    }

    getTipo(){

        return this.tipo;
    }

    //disminuir saldo en cuenta para incrementarlo a otro
    debitar (monto){

        this.saldo = this.saldo - monto ;
    }

    //aumentar saldo en cuenta
    acreditar (monto){

        this.saldo = this.saldo + monto ;
    }

    //Me muestra la descripcion de la cuenta
    getDescripcion(){

        return this.cbu + " - "+ this.tipo + " - "+ this.saldo ;
    }

    //Chequear si la cuenta tiene saldo disponible
    tieneSaldo(monto){

        return this.saldo >= monto ; 
    }
}