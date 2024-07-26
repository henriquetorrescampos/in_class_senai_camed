const prompt = require("prompt-sync")();

let i = 0

while (i < 3) {
    console.log("Eita nois")
    i++
}

let j = 1

while (j <= 4) {
    let nome = prompt("Digite seu nome: ")
    let cpf = prompt("Digite seu cpf: ")
    console.log(`O seu nome é ${nome} e seu cpf ${cpf}`)
    j++
}