function calcularMediaNotas(notaUm, notaDois, notaTres, notaQuatro) {
    var mediaNotas = (notaUm + notaDois + notaTres + notaQuatro) / 4
    return mediaNotas
}
//get the class
// document.getElementsByClassName('container') 

// get the id
document.getElementById("calculator").addEventListener("submit", function(event) {
    event.preventDefault
    let nota1 = document.getElementById("nota1").value
    let nota2 = document.getElementById("nota2").value
    let nota3 = document.getElementById("nota3").value
    let nota4 = document.getElementById("nota4").value
})