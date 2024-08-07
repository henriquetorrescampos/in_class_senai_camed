// this refere ao próprio objeto

const usuarios = {
  nome: "João", // atributos
  idade: 30, // atributos

  saudacao: function () {
    //métodos
    return `Ola, meu nome é ${this.nome}.`;
  },
  comer: function () {
    // métodos
    return `${this.nome} está comendo.`;
  },
};

console.log(usuarios.comer());
console.log(usuarios.saudacao());
