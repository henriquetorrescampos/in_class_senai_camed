const prompt = require("prompt-sync")();

let peso = parseFloat(prompt("Digite o seu peso: "))
let altura = parseFloat(prompt("Digite sua altura: "))

let imc = peso / (altura*altura)

if (imc < 18.5){
    console.log(imc,"abaixo do peso.")
} else if (imc <= 18.5 && imc < 24.9) {
    console.log(imc,"peso normal.")
} else if (imc <= 24.9 && imc < 29.9) {
    console.log(imc,"sobrepeso.")
} else if (imc <= 29.9 && imc < 34.9) {
    console.log(imc,"Obesidade grau 1")
} else if (imc <= 34.9 && imc < 39.9) {
    console.log(imc,"obesidade grau 2")
} else {
    console.log(imc,"obesidade grau 3")
}