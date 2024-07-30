const prompt = require("prompt-sync")();

var n1 = parseInt(prompt("Digite a sua primeira nota:"));
var n2 = parseInt(prompt("Digite a sua segunda nota:"));
var n3 = parseInt(prompt("Digite a sua terceira nota:"));
var n4 = parseInt(prompt("Digite a sua quarta nota:"));


if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)){
    console.log("Não é número.")
} else {
    var total = n1 + n2 + n3 + n4

    if (total < 24) {
        console.log("Aluno de recuperação.")
    }
    else {
        console.log("Aluno está aprovado.")
    }
}