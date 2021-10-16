// Mais sobre numbers
// IEEE 754-2008

let num1 = 1; // Number
let num2 = 2.5;
let num3 = 10;
let num4 = 10.5789551255547
let num5 = 10;
let num6 = 10.25

                                     // num1 = num1.toString(); Mudança definitiva.
console.log(num1.toString() + num2); // toString muda o number para string.
console.log(num3.toString(2)); // Retorna a forma binária do number.
console.log(num4.toFixed(2)); // Retorna o valor com as casas decimais informada e arredondada.
console.log(Number.isInteger(num5)); // Retorna se o número é inteiro ou não.

let temp = num6 * '5'; // Não faça conta com strings
console.log(Number.isNaN(temp));

let num7 = 0.7;
let num8 = 0.1;
num7 += num8;
num7 += num8;
num7 += num8;
console.log(parseFloat(num7.toFixed(2)));
console.log(Number.isInteger(num7));

let num9 = 0.7;
let num10 = 0.1;
num9 = ((num9 * 100) + (num10 * 100)) / 100;
num9 = ((num9 * 100) + (num10 * 100)) / 100;
num9 = ((num9 * 100) + (num10 * 100)) / 100;
console.log(num9);
console.log(Number.isInteger(num9)); // Quando tiver uma certa imprecisão, usar essa função.