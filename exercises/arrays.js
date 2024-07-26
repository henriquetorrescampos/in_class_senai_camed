let array = [
    'elisa', 'lara', 'bia', 'beatriz', 'henrique', 'ricardo', 'lina', 'luna', 'leila',
    'olp', 'ela', 'esc', 'eoc', 'hen', 'riq', 'reta', 'rena', 'luma', 'coraca',
    'eoec', 'eoes', 'pals', 'eosa', 'eoasx', 'rola', 'rico', 'goula', 'dougla',
    'emcd', 'emsc'
]

for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * array.length);
    let name = array[random];
    console.log(`${name} foi removido.`);
    
    let remove = array.splice(random, 1);
}
console.log(array);