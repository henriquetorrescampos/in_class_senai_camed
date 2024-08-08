const prompt = require("prompt-sync")();

function inRange(n, inferior, superior) {
  // 4 >= 5 && 4 <= 2, whether the number is in the interval
  if (n >= inferior && n <= superior) {
    return true;
  }
  return false;
}

function get_limit() {
  let numero = parseInt(prompt("Digite o número: "));
  let low = parseInt(prompt("Digite o número inferior: "));
  let high = parseInt(prompt("Digite o número superior: "));

  return inRange(numero, low, high);
}

console.log(get_limit());
