#include <stdio.h>
#include <stdlib.h>
void menu();
void ValorPago();
//programa Principal
int main(){
    ValorPago();
    
    system("pause");
    return 0;

}

// subprogramas

void menu(){	
   
	printf("Tipo de combustivel\n");
	printf("1 - Gasolina\n");
	printf("2 - Alcool\n");
}

void ValorPago(){
     float litros,valoraserpago;
	 int tipo;
	 
	 menu();
	 printf("escolha uma opcao: ");
	 scanf("%d",&tipo);
	 switch(tipo){
		case 1:
			printf("Valor em litros do abastecimento: ");
			scanf("%f",&litros);
			if(litros<25){
				valoraserpago= 6*litros;
				valoraserpago=valoraserpago-0.07*valoraserpago;
				printf("Valor a ser pago: %.2f\n", valoraserpago);
			}
			else{
				valoraserpago= 6*litros;
				valoraserpago=valoraserpago-0.09*valoraserpago;
				printf("Valor a ser pago: %.2f\n", valoraserpago);
			}
			break;

		case 2:
			printf("Valor em litros do abastecimento: ");
			scanf("%f",&litros);
			if(litros<25){
				valoraserpago= 5*litros;
				valoraserpago=valoraserpago-0.05*valoraserpago;
				printf("Valor a ser pago: %.2f\n", valoraserpago);
			}
			else{
				valoraserpago= 5*litros;
				valoraserpago=valoraserpago-0.075*valoraserpago;
				printf("Valor a ser pago: %.2f\n", valoraserpago);
			}
			break;

		default:
			printf("Tipo de combustivel invalido!!!!!\n");
	}
		
	
}
