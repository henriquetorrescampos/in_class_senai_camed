const prompt = require("prompt-sync")();
// Crie um algoritmo que simule 3 pedidos a um gênio da lâmpada

for (i = 1; i <= 3; i++) {
    let pedido = prompt(`Digite o ${i}º pedido: `)
    console.log(`O seu desejo é ${pedido}`)
    let again = prompt(`Gostaria de pedir novamente ?`).toUpperCase()
}