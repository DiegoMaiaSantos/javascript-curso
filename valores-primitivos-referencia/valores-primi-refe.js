/* 
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)

Referência (mutável) - array, object, function
*/

// ------------- Referência (mutáveis) ------------------

let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(b, a);

// ------------- Primitivos (imutáveis) ------------------

let e = 'A';
let f = e; // Cópia
console.log(e, f);

e = 'Outra coisa';
console.log(e, f);