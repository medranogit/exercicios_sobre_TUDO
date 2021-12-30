#Exercicio 3 Portifolio 

def operacaoMedia(pt, enade, pe, ef):
    #resultado da formula da média armazenado em uma variavel que depois retorna na função.
    operacao = pt * 0.15 + ef * 0.30 + enade * 0.10 + pe * 0.45
    return operacao

def condicaoAprovacao(media):
    #Estrtura condicional que retorna um valor em string.
    if media < 6:
        return("reprovado")
    else:
        return("aprovado")

def programaMedia():

    #Variaveis que armazenam as informações iniciais.
    #Caso funcione
    try:
        nomeAluno = input("Coloque seu nome completo: ")
        nomeDisciplina = input("Coloque o nome da disciplina: ")

        print("\nColoque as notas abaixo utilizando o formato a seguir caso for um valor decimal. Exemplo: 6.56")
        pt = float(input("Coloque a nota do portifolio: "))
        enade = float(input("Coloque a nota do momento enade: "))
        pe = float(input("Coloque a nota da prova eletronica: "))
        ef = float(input("Coloque a média dos exercicios de fixação: "))

        #Variaveis que armazenam informações após as funções retornarem um valor.
        notaFinal = operacaoMedia(pt, enade, pe, ef)
        resultado = condicaoAprovacao(notaFinal)
        #Print que exibe todas as informações necessárias.
        print("-----------------------------------------------\n"+nomeAluno +  " você foi " + resultado + ".\nCom a nota final de " + str(round(notaFinal, 2)) + " na disciplina: " + nomeDisciplina+".\n-----------------------------------------------" )
    #Caso aconteça um erro
    except:
        print("Algo de errado aconteceu, reinicie o programa.")

programaMedia()