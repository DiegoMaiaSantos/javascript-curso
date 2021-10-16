//               012 345678 9 Indice iniciando no zero.
let umaString = 'Um \"texto\"'; // Pode usar a barra invertida \ como caractere de escape.

console.log(umaString[5]); // Para ter a mesma informação pode-se usar .charAt(5)
console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.'); // Concatenar é mais simples.
console.log(`${umaString} em um lindo dia.`) // E tem o template strings que é o melhro jeito.

console.log(umaString.indexOf('texto')); // Para saber onde começa o index do texto
console.log(umaString.lastIndexOf('m', 5)); // O que muda é que vem de trás para frente.
console.log(umaString.match(/[a-z]/));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/[a-z]/));
console.log(umaString.replace('Um', 'Outro'));
console.log(umaString.length);
console.log(umaString.slice(0, 10)); // Pode-se usar negativo Ex.: -3.
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());