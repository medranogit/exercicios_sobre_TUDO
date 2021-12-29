//Este programa irá calcular o IMC de uma pessoa

#include<stdio.h> // biblioteca para entrar e saida de dados
#include<stdlib.h> // para pausar o cmd

//Subprogramas
float calcular_imc(float peso, float altura){
	return peso / (altura * altura); 
}

void mensagem_imc(float imc){
	if (imc < 18.5)
		printf("Sua situação: Magreza! \n");
	if ((imc >= 18.5 ) && (imc <= 24.9))
		printf("Sua situação: Peso normal! \n");
	if ((imc > 24.9) && (imc <= 29.9))
		printf("Sua situação: Obesidade I \n");
	if ((imc > 29.9) && (imc <= 34.9))
		printf("Sua situação: Obesidade II \n");
	if (imc > 39.9)
		printf("Sua situação: Obesidade III \n");
}

float pesoIdeal(float altura){
	float peso_ideal;
	peso_ideal = 72.7 * altura - 58;
	return peso_ideal;
}

//Programa principal
int main(){
	float peso, altura; //variaveis de entrada
	float peso2, altura2; //variaveis de entrada da segunda pessoa
	float imc, imc2; // variavel de saida
	
	
	//1 pessoa
	printf("Informe seu peso(kg): "); //imprimir uma mensagem
	scanf("%f", &peso); //entrada de dados do usuario(input)
	
	printf("Informa sua altura(m): "); 
	scanf("%f", &altura);
	
	//2 pessoa
	printf("Informe seu peso(kg): ");
	scanf("%f", &peso2); 
	printf("Informa sua altura(m): "); 
	scanf("%f", &altura2);
	
	// chamando uma função com um conjunto de comandos para retornar um valor
	imc = calcular_imc(peso,altura);// calcular o imc
	imc2 = calcular_imc(peso2,altura2);// calcular o imc 2 pessoa
	
	// chamando um procedimento para executar um comando e não retornar nada
	printf("Seu imc = %.2f \n", imc); //exibir imc
	mensagem_imc(imc);
	printf("Seu peso ideal é %.2f \n \n", pesoIdeal(altura));
	
	printf("Seu imc = %.2f \n", imc2); //exibir imc 2 pessoa
	mensagem_imc(imc2);
	printf("Seu peso ideal é %.2f \n \n", pesoIdeal(altura2));

	system("pause");
	
	return 0;
}
