//Classe Construtora
export class Cliente{
    //Aqui dentro definimos os atributos que ela ira ter.
   nome;
   _cpf;

   //Necessario para poder passar os parametros direto pela Classe na hora de criar. https://cursos.alura.com.br/course/javascritpt-orientacao-objetos/task/72217
   constructor(nome, cpf){ 
        this.nome = nome;
        this._cpf = cpf;
    }

   get cpf(){
       return this._cpf;
   }

   
}