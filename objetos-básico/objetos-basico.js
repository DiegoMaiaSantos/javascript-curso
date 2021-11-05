
const pessoa6 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`);        
    },

    incrementaIdade() {
        ++this.idade;
    }
};

pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();


function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa3 = criaPessoa('João', 'Moreira', 55);
const pessoa4 = criaPessoa('Junior', 'Filho', 44);
const pessoa5 = criaPessoa('Jean', 'Otávio', 69);

console.log(pessoa1, pessoa2, pessoa3, pessoa4, pessoa5);