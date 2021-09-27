/**Regras para criar as constantes:
 * Não podemos criar constantes com palavras reservadas;
 * constantes precisam ter nomes significativos;
 * Não pode começar o nome de uma constantes com número;
 * Não pode conter espaços ou traços;
 * Utilizamos camelCase;
 * Case-sensitive;
 * Não pode modificar o valor de uma constante;
 * Não utilize var, utilize const.
 */

// Dentro de "" é string/texto | Fora de "" é number/número.

const primeiroNumero = 5; // Number
const segundoNumero = 10;
const conta = primeiroNumero * segundoNumero;
const resultadoDuplicado = conta * 2;
let resultadoTriplicado = conta * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(typeof (primeiroNumero + segundoNumero));