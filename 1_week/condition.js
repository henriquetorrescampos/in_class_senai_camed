const prompt = require("prompt-sync")();

let idade = 18;

if (idade >= 18){
    console.log("Você é maior de idade.")
} else {
    console.log("Você é menor de idade.")
}

var saldo_conta = 1000
var pix_destinatario = parseInt(prompt("Digite o seu pix: "))
var valor_pix = parseFloat(prompt("Digite o valor a ser transferido: "))

if (valor_pix <= saldo_conta) {
    saldo_conta -= valor_pix // saldo_conta = saldo_conta - valor_pix
    console.log("Enviei um pix.")
    console.log(saldo_conta)
} else {
    console.log("Sem saldo em conta.")
}
