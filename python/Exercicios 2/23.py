

def programa_nota():
    nota = int(input('Coloque um nota de 0 a 10: '))

    while nota > 10 or nota < 0:
        nota = int(input("Coloque uma nota válida: "))

    print ('Sua nota foi', nota)

programa_nota()