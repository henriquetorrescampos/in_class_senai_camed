const prompt = require("prompt-sync")();
/* 
String 
*/
// snake_case
var student_name = "Henrique"
// camel_case
var studentName = "Henrique"


// Números
var idade = 25
var salario = 1000.50
var aumentar_idade = 10 / 5


var emprestimo = true // Booleano
var maior_idade = idade > 17 // Booleano
console.log(maior_idade)

//array
var lista = ["cafe", "leite", "arroz"]
console.log(lista)
console.log(typeof lista)
var numeros_sorteados = [1, 10, 45, 100]
console.log(numeros_sorteados)

var ingredientes = []
var item = prompt("Digite ingrediente: ")
ingredientes.push(item)
console.log(ingredientes)