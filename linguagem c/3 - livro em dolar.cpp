// Esse programa ira mostrar se eu tenho dinheiro suficiente em dolar para comprar um livro

#include<stdio.h>
#include<stdlib.h>
#include<stdbool.h>

float converter(float livroEmDolar, float taxa_dolar){
	return livroEmDolar * taxa_dolar;
}

bool testeDoDinheiro(float livroEmReal, float dinheiro){
	return livroEmReal <= dinheiro;
}

void resultado(bool suficiente, float livroEmReal, float dinheiro){
	if (suficiente == true){
		printf("\n \n Tem dinheiro suficiente para a compra \n");
		printf("O valor do livro em real é: R$ %.2f \n", livroEmReal);
		printf("O valor disponivel é: R$ %.2f \n", dinheiro);
	}else{
		printf("Não tem dinheiro suficiente para a compra \n");
		printf("O valor do livro em real é: R$ %.2f \n", livroEmReal);
		printf("O valor disponivel é: R$ %.2f \n", dinheiro);
	}
}

int main(){
	char s[5];
	float dinheiro, livroEmDolar, taxa_dolar; // variavel entrada
	float livroEmReal; // variavel saida
	bool suficiente;
	
	printf("Quanto dinheiro você possui? R$ ");
	scanf("%f", &dinheiro);
	printf("Qual o valor do livro em dolar? US$ ");
	scanf("%f", &livroEmDolar);
	printf("O valor do dolar hoje: R$ ");
	scanf("%f", &taxa_dolar);
	
	//converter valor do livro em dolar para real
	
	livroEmReal = converter(livroEmDolar, taxa_dolar);
	
	// Logica atribuir um valor boleano para a variavel suficienmte
	// se for igual ira se tornar "true" se nao for igual ou menor "false"
	suficiente = testeDoDinheiro(livroEmReal, dinheiro);
	
	resultado(suficiente, livroEmReal, dinheiro);
	
	system("pause");
	return 0;
}
