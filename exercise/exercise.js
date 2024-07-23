const prompt = require("prompt-sync")();

var nome = prompt("Digite seu nome: ");
var idade = parseInt(prompt("Digite sua idade: "));

var maior_idade = idade >= 18
console.log(maior_idade)
