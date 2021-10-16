let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let varD = 'D'; // Vai servir para receber outra variável, para organizar do jeito que preciso.

varD = varA
varA = varB;
varB = varC;
varC = varD;

console.log(varA, varB, varC);