print("Calculo de peso por sexo")

sexo = input("Coloque seu sexo:")
altura = input("Coloque sua altura: ")


if sexo == "H":
    print(72.7 * float(altura) - 58)
elif sexo == "M":
    print(62.1 * float(altura) - 44.7)
else:
    print("Nao entendi")
