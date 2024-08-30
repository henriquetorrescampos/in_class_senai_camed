setTimeout(() => alert("Passaram 3 segundos"), 3000); //depois de 3 segundos
setInterval(() => alert("Passaram 2 segundos"), 2000); //interval

const user = {
  nome: "bruno",
  email: "bruno@email.com",
};

localStorage.setItem("nome", "bruno");
console.log(localStorage.getItem("nome"));

console.log(JSON.parse(localStorage.getItem("user")));
