let numero1
let numero2

numero1 = parseFloat(prompt("Digite um valor: " ))
numero2 = parseFloat(prompt("Digite outro valor: " ))

function adicao(numero1, numero2) {
    let result = numero1 + numero2
    return result
}

function subtracao(numero1, numero2){
    let result = numero1 - numero2
    return result
}

function divisao(numero1, numero2){
    let result = numero1 / numero2
    return result
}

function multiplicacao(numero1, numero2){
    let result = numero1 * numero2
    return result
}

document.write(`Adição: ${adicao(numero1, numero2)}<br>`);
document.write(`Subtração: ${subtracao(numero1, numero2)}<br>`);
document.write(`Divisão: ${divisao(numero1, numero2)}<br>`);
document.write(`Multiplicação: ${multiplicacao(numero1, numero2)}<br>`);
