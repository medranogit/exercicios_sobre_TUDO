import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";


const cliente1 = new Cliente("Alice", "112299998"); 
const conta1 = new ContaCorrente(cliente1, 1001);

// const cliente2 = new Cliente("Ricardo", "992299998");
// const conta2 = new Conta(0, cliente2, 1001);

const contaPoupanca1 = new ContaPoupanca(150, cliente1, 1001);


//----Ações----//

// conta1.depositar(500);
// conta1.transferir(300, conta2);

conta1.depositar(237);
console.log(conta1, contaPoupanca1);





//console.log(ContaCorrente.numeroDeContas);


// contaCorrenteAlice.depositar(60); //Ato de depositar igual a cima.
// contaCorrenteAlice.sacar(40); //ato de sacar utilizando o metodo encapsulado na classe.












