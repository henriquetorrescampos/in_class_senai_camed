const prompt = require("prompt-sync")();


for (let i = 0; i < 8; i++) {
    let nome = prompt("Digite seu nome: ")
    let cpf = prompt("Digite seu cpf: ")
    console.log(`O seu nome é ${nome} e seu cpf é ${cpf}`)
}

