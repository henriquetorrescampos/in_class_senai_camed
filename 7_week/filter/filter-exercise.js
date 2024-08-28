// Crie um novo array somente com os itens que contém
// a letra "a"
// Detalhe: use o método contains para verificar isso.
// ex: pessoa.nome.contains("a")

const pessoas = [
  { nome: "Ana", idade: 24 },
  { nome: "Bento", idade: 17 },
  { nome: "Leonardo", idade: 22 },
  { nome: "Maria", idade: 19 },
  { nome: "Bruno", idade: 65 },
];

const pessoaComA = pessoas.filter((pessoa) => {
  return pessoa.nome.includes("a");
});

console.log(pessoaComA);
