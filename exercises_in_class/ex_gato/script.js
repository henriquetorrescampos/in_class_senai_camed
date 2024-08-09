function new_cat(event) {
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

  //localStorage > inspect > application
  localStorage.setItem("cat-profile", JSON.stringify(cat));

  //JSON.parse  transforma JSON into object
  //JSON.stringify(variable) transform object into JSON
  console.log(cat);
}

function change_image(event) {
  const value_img = event.srcElement.value;

  document.getElementById("catImagePreview").src = value_img;
}

document.getElementById("catForm").addEventListener("submit", new_cat);

document.getElementById("catImage").addEventListener("input", change_image);
