
// String, number, undefined, null, boolean. Dados primitivos.

const nome = 'Diego';
const nome1 = "Diego"; // Os 3 exemplos são strings.
const nome2 = `Diego`;

const num = 10;
const num1 = 10.52; // Os dois exemplos são number.

let nomeAluno; // undefined -> não aponta para local nenhum na memória.
const sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória.

const aprovado = false; // Boolean -> true ou false. (lógco)

let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2