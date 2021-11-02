


const raiz = function (n) {
    return n ** 0.5;
}; // Sempre que atribuir a variável o valor da função, é preciso colocar ";" no final.

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));


function multipli(x, y) {    // Crio uma variável.
    const resultado = x * y; // Digo o que vai ser realizado.    
    return resultado;        // Solicitei o retornar.
}

console.log(multipli(5, 10)); // Digo os valores das variáveis.

function soma(x = 1, y = 1) { // É possível deixar um valor padrão.
    const resultado = x + y;
    return resultado; // Tudo que estiver abaixo de return, não vai ser realizado.
}

console.log(soma());

function saudacao(nome) {
    console.log(`Bom dia ${nome}!`);      // <- Dentro da função vai ser criado o que ela vai realizar.
}

saudacao('Luiz');          // Aqui vai chamar a função.
saudacao('Maria');
saudacao('Felipe');