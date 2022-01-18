import { ContaCorrente } from "./ContaCorrente.js";
import { Cliente } from "./Cliente.js";


//Criando um novo cliente utilizando a classe construtora Cliente.
const cliente1 = new Cliente("Alice", "112299998"); 

// É possivel criar um classe CLIENTE dentro do atributo da conta cliente, utilizando a referencia. https://cursos.alura.com.br/course/javascritpt-orientacao-objetos/task/72215 
const conta1 = new ContaCorrente();
//designando os valores para o cliente
conta1.cliente = cliente1 // Ele so vai funcionar se for um cliente , se por exemplo for um numero nao ira funcionar.
conta1.agencia = 1001;

//--- Cliente 2 e Conta 2
const cliente2 = new Cliente("Ricardo", "992299998");
const conta2 = new ContaCorrente(1001, cliente2);


//----Ações----//

conta1.depositar(500);
conta1.transferir(300, conta2);

//console.log(conta1);
console.log(ContaCorrente.numeroDeContas);


// contaCorrenteAlice.depositar(60); //Ato de depositar igual a cima.
// contaCorrenteAlice.sacar(40); //ato de sacar utilizando o metodo encapsulado na classe.












