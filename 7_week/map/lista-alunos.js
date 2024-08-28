const listaAlunos = [
  {
    nome: "Bruno",
    turma: "clamed v3",
  },
  {
    nome: "Cleiton",
    turma: "clamed v3",
  },
  {
    nome: "Natalia",
    turma: "clamed v3",
  },
];

function showStudent() {
  const lista = document.getElementById("listaAlunos");

  listaAlunos.map((alunoAtual, index) => {
    const li = document.createElement("li");
    li.innerText = `${index} - ${alunoAtual.nome} - ${alunoAtual.turma}`;

    lista.appendChild(li);
  });
}

showStudent();
