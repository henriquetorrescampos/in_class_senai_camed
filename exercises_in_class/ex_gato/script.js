function cadastrar_gato(event) {
  event.preventDefault();

  const name = document.getElementById("catName").value; // value significa salvando valor
  const age = document.getElementById("catAge").value;
  const description = document.getElementById("catDescription").value;
  const img = document.getElementById("catImage").value;
  const color = document.getElementById("catColor").value;

  const cat = {
    //objeto cat
    //quando o nome da variável do objeto for igual deixo só a variável
    name, // atributos
    age,
    description,
    img,
    color: color, //chave: valor
  };

  console.log(cat);
}

document.getElementById("catForm").addEventListener("submit", cadastrar_gato);
