import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{ //Export para exportar a classe
    static numeroDeContas = 0;
    //Constructor
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }
}