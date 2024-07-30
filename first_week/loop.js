// const prompt = require("prompt-sync")();


// // for (let i = 0; i < 10; i++) {
// //     console.log(i)
// // }

// let n = 5

// for (let i = 0; n.range(); i++) {
//     console.log(i)
// }

function range(start, end, step = 1) {
    let array = [];
    if (step > 0) {
        for (let i = start; i < end; i += step) {
            array.push(i);
        }
    } else {
        for (let i = start; i > end; i += step) {
            array.push(i);
        }
    }
    return array;
}


console.log(range(0, 10))