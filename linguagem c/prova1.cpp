#include <iostream>
#include<stdio.h>
#include<stdlib.h>
#include<stdbool.h>

using namespace std;


int main()
{
	int x, y;
	cin >> x >> y;

	int contador = 0;
	while( x < y){
		x = x + 2;
		y = y + 1;
		contador++;
		
	}
	cout << contador;
	return 0;
}
