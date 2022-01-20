export class Conta{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia; 
    }

    //Seters
    set cliente(novoValor){
        if (novoValor instanceof Cliente){// se o novo valor for uma istancia de cliente. Caso seja um valor tipo um numero ele nao executara nada.
            this._cliente = novoValor;
        } 
        
    }

    //Geters
    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo
    }

    sacar(valor){
        //This é para referenciar a propria conta que chamou a função.
        
        let taxa = 1;
        const valorSaque = taxa * valor;

        if (this._saldo >= valorSaque){
            this._saldo -= valorSaque;
            return valorSaque;
        }

    }

    depositar(valor){
        if (valor <= 0){ // Verificação de o valor é negativo
            console.log("Valor invalido")
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, paraConta){ //Transferencia de uma conta para a outra.
        const valorSacado = this.sacar(valor);
        paraConta.depositar(valor);
    }
}