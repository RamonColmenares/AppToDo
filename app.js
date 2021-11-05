// for (let i = 0; i < 10; i++) {
//     var count = 0;
//     for (let j = 0; j < Math.floor(Math.random() * 10); j++) {
//         count++;
//     }
//     console.log(count);
// }

let frase = '?HOla que tal gente?';
let array = frase.split(' ');
array[4].delete();
frase = array.join(' ');
console.log(frase);