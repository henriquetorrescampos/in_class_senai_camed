// Elabore um programa que receba 10 números inteiros. Ao final exiba a lista de números em ordem crescente.
// obs: os números não podem se repetir.

const numbers = [10, 5, 3, 4, 2, 1, 8, 12, 9, 15];

numbers.sort((a, b) => a - b); // crescent order
// numbers.sort((a, b) => b - a); // decrescent order
console.log(numbers);
