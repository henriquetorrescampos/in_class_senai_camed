const prompt = require("prompt-sync")();
/* 
peça pro usuário digitar alguma letra
se usuário digitar vogal faça entrar dentro do if se nao entre no else e não é uma vogal
*/

var letra = prompt("Digite uma letra: ").toUpperCase()

if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U") {
    console.log("A letra",letra,"é uma vogal.")
} else {
    console.log("A letra",letra,"não é uma vogal.")
}


/*  Pergunte ao usuário seu nome e idade.
idade menor que 13, douglas vc é uma criação
idade 13 e 17, vc é um adolescente
idade 18-64, vc é adulto
idade +65, vc é idoso
*/

var nome = prompt("Digite eu nome: ")
var idade = parseInt(prompt("Digite sua idade: "))

if (idade < 13) {
    console.log(nome,"a sua idade é",idade,"e você é uma criança.")
} else if (idade >= 13 && idade <= 17) {
    console.log(nome,"a sua idade é",idade,"você é um adolescente.")
} else if (idade >= 18 && idade <= 64) {
    console.log(nome,"a sua idade é",idade,"você é um adulto.")
} else if (idade > 65) {
    console.log(nome,"a sua idade é",idade,"e você é um idoso.")
}