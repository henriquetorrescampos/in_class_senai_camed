function remove_element(array) {
    for (let i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * array.length);
        let name = array[random];
        console.log(`${name} foi removido.`);
        array.splice(random, 1);
        console.log(array.length);
    }
    console.log(array);
}

let nums = [
    'Elisa', 'lara', 'bia', 'beatriz', 'henrique', 'ricardo', 'lina', 'luna', 'leila',
    'Elp', 'ela', 'esc', 'eoc', 'hen', 'riq', 'reta', 'rena', 'luma', 'coraca',
    'Doec', 'eoes', 'pals', 'eosa', 'eoasx', 'reitor', 'rico', 'goula', 'dougla',
    'emcd', 'emsc'
]

remove_element(nums)