function canVote(person) {
  if (person.age >= 18 && person.citizenship === true) {
    return true;
  }
  return false;
}

let pessoa = {
  age: 19,
  citizenship: true,
};

console.log(canVote(pessoa));
