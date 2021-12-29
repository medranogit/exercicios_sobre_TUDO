#Faça um Programa que peça um número inteiro e determine se ele é par ou impar. Dica: utilize o operador módulo (resto da divisão).

def par_ou_impar():
    numero = input("Coloque o numero aqui: ")

    while numero == "" or numero == "0":
        print("Numero invalido")
        numero = input("Coloque o numero aqui: ")


    conta = int(numero)%2


    if conta == 0:
        print(str(numero)+" é par")
    else:
        print(str(numero)+" é impar")



par_ou_impar()