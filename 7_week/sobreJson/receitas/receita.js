import dadosReceitas from "./dadosReceitas.json" with {type: "json"}

function exibirReceitas(){
  // const receitas = document.getElementById("receitas")

  console.log(JSON.stringify(dadosReceitas))
}

exibirReceitas()
