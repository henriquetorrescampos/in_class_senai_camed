const prompt = require("prompt-sync")();

let dia_semana = prompt("Digite um número entre 1 e 7: ")

switch(dia_semana) {
    case 1:
        console.log("Hoje é domingo")
        break
    case 2:
        console.log("Hoje é segunda")
        break
    case 3:
        console.log("Hoje é terça")
        break
    case 4:
        console.log("Hoje é quarta.")
        break
    case 5:
        console.log("Hoje é quinta.")
        break
    case 6:
        console.log("Hoje é sexta.")
        break
    case 7:
        console.log("Hoje é sabado.")
        break
    default:
        console.log("Dia inválido.")
}