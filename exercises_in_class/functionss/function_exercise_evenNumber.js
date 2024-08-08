const prompt = require("prompt-sync")();

function isEven(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function question() {
  let num = parseInt(prompt("Digite um número: "));
  return isEven(num);
}

console.log(question());
