function calcularPerimetroTriangulo(ladoA, ladoB, ladoC) {
  let perimetro = ladoA + ladoB + ladoC;
  return perimetro;
}

function executarForm(event) {
  event.preventDefault();

  let ladoA = parseFloat(document.getElementById("ladoA").value);
  let ladoB = parseFloat(document.getElementById("ladoB").value);
  let ladoC = parseFloat(document.getElementById("ladoC").value);

  let resultado = calcularPerimetroTriangulo(ladoA, ladoB, ladoC);

  document.getElementById("result").innerText = `O resultado é ${resultado}.`;
}

document
  .getElementById("form-perimetro-triangulo")
  .addEventListener("submit", executarForm);
