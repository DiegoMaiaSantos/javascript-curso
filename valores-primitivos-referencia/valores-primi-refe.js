/* 
Primitivos (imutáveis) - string, number, boolean, undefined,
null (bigint, symbol) - Valores copiados.

Referência (mutável) - array, object, function - Passados por referência.
*/

// ------------- Referência (mutáveis) ------------------
const a1 = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b1 = a1;

a1.nome = 'João';
console.log(a1);
console.log(b1);


let a = [1, 2, 3];
let b = [...a];
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(b, a);

a.push('Luiz');
console.log(c);

// ------------- Primitivos (imutáveis) ------------------

let e = 'A';
let f = e; // Cópia
console.log(e, f);

e = 'Outra coisa';
console.log(e, f);