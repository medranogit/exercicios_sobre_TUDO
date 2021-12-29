#include <iostream>
using namespace std;

int main()
{
	int x, y;
	cin >> x >> y;
	int contador = 0;
	do{
		x = x+2;
		y = y+1;
		contador++;
	
	}while(x < y);

	cout << contador;
	return 0;
}
