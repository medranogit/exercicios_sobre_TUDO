letra = input('Coloque uma letra: ')

vogais = ["a", "e", "i", "o", "u"]

if letra.lower() in vogais:
    print (letra, 'é vogal')

else:
    print(letra, 'é consoante')