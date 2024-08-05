function calcularMediaNotas(notaUm, notaDois, notaTres, notaQuatro) {
  let mediaNotas = (notaUm + notaDois + notaTres + notaQuatro) / 4;
  return mediaNotas;
}

//get the class
// document.getElementsByClassName('class')
// get the id
//document.getElementById('id')

function executarFormulario(event) {
  event.preventDefault();

  let nota1 = parseFloat(document.getElementById("nota1").value);
  let nota2 = parseFloat(document.getElementById("nota2").value);
  let nota3 = parseFloat(document.getElementById("nota3").value);
  let nota4 = parseFloat(document.getElementById("nota4").value);

  alert(calcularMediaNotas(nota1, nota2, nota3, nota4).toFixed(2));
}

document //document arquivo que recebe script
  .getElementById("calculator") //pega o elemento by id
  .addEventListener("submit", executarFormulario);
