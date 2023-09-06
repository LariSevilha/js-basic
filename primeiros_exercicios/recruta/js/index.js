const nome = prompt("Qual o nome do recruta:") 
const sobrenome = prompt("Qual seu sobrenome do recruta:")
const dataNasc = prompt("Ano de nascimento do recruta: ")
const estudo = prompt("Qual seu campo de estudo:")

// document.write("Olá " + nome +" "+ sobrenome + ", seu ano de nascimento é: " + data_nasc + " e seu campo de estudo é: " + estudo )

alert( 
    "Recruta cadastrado com sucesso!\n\n" + 
    "Nome completo: " + nome + " " + sobrenome + "\n" +
    "Campo de estudo: " + " " + estudo + "\n" +
    "Idade: " +" "+ (2022 - dataNasc) 
)