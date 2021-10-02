/* Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.80 de altura e seu IMC é de 25.92592592525924
Luiz Otávio nasceu em 1980
*/

const nome = 'Diego Maia'; // const não podem ser alteradas e let podem ser alteradas
const sobrenome = 'Santos';
const idade = 31;
const peso = 69;
const altura = 1.75;
let imc = peso / (altura * altura); // peso / (altura * altura) ou peso / (altura ^ 2)
let anoNascimento = 2021 - idade;

console.log(imc)
console.log(anoNascimento)

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg e`)
console.log(`tem ${altura}m de altura e seu IMC é de ${imc}.`)
console.log(`${nome} ${sobrenome} nasceu no ano de ${anoNascimento}.`)
