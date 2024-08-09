function load() {
  const data = JSON.parse(localStorage.getItem("cat-profile"));

  // document.body.style.backgroundColor = data.color;

  document.getElementById("name").innerText = data.name;
  document.getElementById("age").innerText = data.age;
  document.getElementById("description").innerText = data.description;
  document.getElementById("img").src = data.img;
  // console.log(data.name);
  // console.log(data);
}

window.onload = load;
