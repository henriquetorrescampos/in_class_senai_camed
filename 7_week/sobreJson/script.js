import jsonAlunos from './jsonAlunos.json' with {type: 'json'};

const alunoJson = `{
  "nome": "João",
  "email":"joao@email.com",
  "turma": "Clamed"
}`

console.log(JSON.parse(jsonAlunos));

// JSON.parse para JavaScript, JSON.stringify para JSON