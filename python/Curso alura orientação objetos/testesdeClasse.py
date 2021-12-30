class Character():
    def __init__(self, vida, ataque, defesa, mp):
        self.vida = vida
        self.ataque = ataque
        self.defesa = defesa
        self.mp = mp
    def change(self, atributo, valor):
        if atributo == "ataque":
            self.ataque = valor


#a variavel amarzena todos os valores da classe nela - o mestre é a classe.
personagem1 = Character(100, 200, 300, 400)
personagem2 = Character(2032,232345,123,523)

while(True):
    opcao = input("Digite o numero da opção: ")
    if opcao == "1":
        print(personagem1.vida)
        print(personagem1.ataque)
    if opcao == "2":
        print(personagem2.vida)
        print(personagem2.ataque)
    if opcao == "3":
        opcao2 = input("1 = Personagem1, 2 = Personagem2 ")
        if opcao2 == "1":
            valor = vars(input("Quanto quer mudar: "))
            
            personagem1.change("ataque", valor)
           
            print("terminou")
           
            pass
        if opcao2 == "2":
            pass
        






        """ if opcao2 == "1":
            quanto = input("Para quanto: ")
            qualPersonagem.vida = quanto
            print("Feito")
        if opcao2 == "2":
            quanto = input("Para quanto: ")
            personagem2.ataque = quanto
            print("Feito")
        if opcao2 == "3":
            quanto = input("Para quanto: ")
            personagem2.defesa = quanto
            print("Feito")
        if opcao2 == "4":
            quanto = input("Para quanto: ")
            personagem2.mp = quanto
            print("Feito") """

    

