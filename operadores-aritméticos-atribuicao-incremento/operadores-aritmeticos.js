/**
 * Aritméticos
 * + -> Adição / Concatenação
 * - / * -> Subtração, divisão e multiplicação.
 * ** -> Potenciação
 * % -> Resto da divisão
 * 
 * Sempre lembrar da ordem das precedências.
 * Ordem:
 * () -> Tudo que estiver dentro do parêntese vai ser executado primeiro.
 * ** -> Depois potenciação.
 * * / % -> Depois vem multiplicação, divisão e o resto da divisão.
 * + - -> Depois mais e menos.
 * */

const num1 = 5;
const num2 = 2;
const num3 = 10
console.log((num1 + num2) * num3);

let contador = 1; // Só é possivel realizar alterações com let.
contador++; // 2 / Também podemos usar assim ++contador. Incremento. Pre e pós.
contador++; // 3 / Existe o --. Ex. --contador ou contador--. Decremento. Pre e pós.
contador++; // 4
contador++; // 5
console.log(contador);

// Operadores de atribuição.

let contador1 = 2;
contador1 *= 10;
console.log(contador1);

let contador2 = 2;
contador2 += 2;
console.log(contador2);

let contador3 = 2;
contador3 **= 10;
console.log(contador3);

// NaN - Not a number. 
// parseInt(Inteiro) parseFloat(Decimais). Melhor usar só Number.

const num01 = 10;
const num02 = Number('5.2');
console.log(num01 + num02);
console.log(typeof num02);