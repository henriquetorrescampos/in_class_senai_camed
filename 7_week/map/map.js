const nums = [2, 5, 20, 10, 6, 3, 4];

// quando usar?
// sempre que for necessario iterar por cada um dos itens sem modificar array
// map não altera array original

// nums.map((numeroAtual, index, arrayInteiro) => {
//   console.log(`${index} - ${numeroAtual} - ${arrayInteiro}`);
// });

// console.log(nums);

// const dobro = nums.map((numeroAtual) => numeroAtual * 2);

// console.log(dobro);

// nums.map(function (n, index) {
//   if (n % 2 != 0) {
//     nums.splice(index, 1, null);
//   }
// });

const evenNumber = nums.map((actualNumber) => {
  if (actualNumber % 2 == 0) {
    return actualNumber;
  }
});

console.log(evenNumber);
