function saudacao(nome) {
    return `Bom dia ${nome}`;
}

const variavel = saudacao('Luiz');
console.log(variavel);


// function saudacao(nome) {
//    console.log(`Bom dia ${nome}!`);      // <- Dentro da função vai ser criado o que ela vai realizar.
// }

// saudacao('Luiz');          // Aqui vai chamar a função.
// saudacao('Maria');
// saudacao('Felipe');