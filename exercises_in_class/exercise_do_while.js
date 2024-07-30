const prompt = require("prompt-sync")();

let password = 'lila'

do {
    bet = prompt("Digite uma senha: ")
    if (password == bet) {
        console.log("Acesso permitido.")
    } else {
        console.log(`Senha incorreta.`)
    }
} while (password != bet)