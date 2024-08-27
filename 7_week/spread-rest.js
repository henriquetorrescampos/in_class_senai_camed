//spread allows an iterable to concat

const frutas = ["Maça", "Abacaxi", "Limão"];
const frutasAmarelas = ["Banana", "Melão"];

// const newArray = frutas.concat(frutasAmarelas)

const newArray = [...frutas, ...frutasAmarelas];

console.log(newArray);

const user = {
  name: "Bruno",
  email: "bruno@email.com",
};

const user2 = { ...user };

user2.name = "Davi";
user2.email = "davi@email.com";

console.log(user);
console.log(user2);
