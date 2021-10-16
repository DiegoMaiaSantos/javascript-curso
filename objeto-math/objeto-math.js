// Aula Objeto Math

let num1 = 9.54578;
let num2 = Math.floor(num1); // Arredonda para baixo.
console.log(num2);

let num3 = 9.54578;
let num4 = Math.ceil(num3); // Arredonda para cima.
console.log(num4);

let num5 = 9.54578;
let num6 = Math.round(num5); // Arredonda para o número mais próximo acima de 50 ou abaixo.
console.log(num6);

console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6)) // Maior número.
console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6)) // Menor número.

console.log(Math.random()); // Gera um número aleatório.

const sorteio = Math.round(Math.random() * (100 - 1) + 1);
console.log(sorteio);

console.log(Math.PI); // Valor de PI.
console.log(Math.pow(2, 10)); // Potenciação.
console.log(2 ** 10); // Essa maneira de potenciação é melhor.

let num7 = 9;
console.log(num7 ** 0.5); // Raiz quadrada.