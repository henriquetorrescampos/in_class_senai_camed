function calcularMediaNotas(notaUm, notaDois, notaTres, notaQuatro) {
  var mediaNotas = (notaUm + notaDois + notaTres + notaQuatro) / 4;
  return mediaNotas;
}
//get the class
// document.getElementsByClassName('class')
// get the id
//document.getElementById('id')

function executarFormulario(event) {

  event.preventDefault()

  let nota1 = document.getElementById("nota1").value;
  let nota2 = document.getElementById("nota2").value;
  let nota3 = document.getElementById("nota3").value;
  let nota4 = document.getElementById("nota4").value; 

  calcularMediaNotas(nota, nota2, nota3, nota4)
}


document //document arquivo que recebe script
  .getElementById('calculator') //pega o elemento by id
  .addEventListener('submit', executarFormulario)