import { Cliente } from "./Cliente.js";

export class ContaCorrente{ //Export para exportar a classe
    static numeroDeContas = 0;
    agencia;
    _cliente;
    //------------------------------Privatizando o atributo de uma CLASSE-----------------------------------//
        //O problema é que, como o atributo saldo está exposto para qualquer pessoa com acesso ao código alterá-lo, podemos cair nos mesmos erros que existiam antes da criação de comportamentos do método depositar() e sacar(). Com a possibilidade de alterar o saldo sem nenhuma verificação, nosso sistema está sujeito a erros. Como fazer para proteger esse atributo e fazer com que ele seja alterado somente dentro da classe a que ele pertence?

        //Na verdade, ainda não existe um procedimento formal para isso na linguagem JavaScript. O que existe, hoje, é apenas uma proposta de como isso poderia funcionar. Essa proposta, escrita em inglês, foi feita no GitHub e está acessível neste link que também será disponibilizado para você na próxima atividade Proposta de campos Privados.

        //Essa proposta, que ainda não foi oficialmente implementada, tem como objetivo mudar a maneira como declaramos campos - os atributos - dentro das classes. Na proposta, há diversos exemplos explicando que é possível criar campos privados que só podem ser alterados dentro da classe a que pertencem, fazendo com que ninguém de fora da classe possa acessá-lo.

        //PARA ISSO UTLIZARMOS # antes da variavel, a o nodejs a partir da ver12 vem com isso ja.
        //https://github.com/tc39/proposal-class-fields#private-fields

        //NAO E POSSIVEL ver nem quando queremos imprimir a classe.
    _saldo = 0;


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

    //Constructor
    constructor(agencia, cliente){
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas += 1;
    }

    //Função ou metodo
    sacar(valor){
        //This é para referenciar a propria conta que chamou a função.
        if (this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
        
    }

    depositar(valor){
        if (valor > 0){ // Verificação de o valor é negativo
            this._saldo += valor;
            return valor;
        }
    }

    transferir(valor, paraConta){ //Transferencia de uma conta para a outra.
        const valorSacado = this.sacar(valor);
        paraConta.depositar(valor);
    }
}