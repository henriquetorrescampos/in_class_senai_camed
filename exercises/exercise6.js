const prompt = require("prompt-sync")();

let n = parseInt(prompt("Digite primeiro número: "))
let m = parseInt(prompt("Digite segundo número: "))
let operacao = prompt("Digite uma das operações: '+', '-', '*' ou '/' ")
let total = 0

if (operacao == '+') {
    console.log(total = n + m)
} else if (operacao == '-') {
    console.log(total = n - m)
} else if (operacao == '*') {
    console.log(total = n * m)
} else if (operacao == '/') {
    console.log(total = n / m)
}
