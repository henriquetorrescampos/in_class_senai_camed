const prompt = require("prompt-sync")();

let name = prompt("Digite seu nome: ");
let age = parseInt(prompt("Digite sua idade: "));

if (age >= 18) {
  console.log(`O(A) ${name} é maior de idade.`);
} else {
  console.log(`O(A) ${name} não é maior de idade.`);
}
