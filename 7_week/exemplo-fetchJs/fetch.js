const resultado = fetch("https://viacep.com.br/ws/01001000/json/");

console.log(resultado);

let endereco = {};

async function buscarCep() {
  try {
    let resultado = await fetch("https://viacep.com.br/ws/01001000/json/");
    endereco = await resultado.json();
    console.log("endereço 2", JSON.stringify(endereco));
  } catch (error) {
    console.log(error);
  }
}

await buscarCep();
console.log("endereco", JSON.stringify(endereco));
