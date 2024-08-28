let nums = [5, 2, 3, 10];

//quando preciso filtrar os itens
//se condição for true o item vai ser add ao novo array, caso contrário não
let even = nums.filter((n) => {
  return n % 2 == 0;
});

console.log(even);

let odd = nums.filter((n) => {
  return n % 2 != 0;
});

console.log(odd);

const people = [
  {
    name: "Maria",
    age: 10,
  },
  {
    name: "João",
    age: 15,
  },
  {
    name: "Heitor",
    age: 20,
  },
];

const filterPeople = people.filter((person) => {
  person.age >= 18 && person.age <= 22;
});

console.log(filterPeople);

// const pessoaFil = people.filter((pessoaAtual) =>
//   pessoaAtual.name.includes("a")
// );
