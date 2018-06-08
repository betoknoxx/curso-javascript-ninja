/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myvar = ['arroz', 'feijão', 'batata', 'salada', 'suco'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg) {
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log ( myFunction(myvar[1]) );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(x, y) {
    return x[y];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myvar2 = [5, 'Roberto', true, null, 2 + 3];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log ( myFunction2(myvar2, 0) ); // 5
console.log ( myFunction2(myvar2, 1) ); // Roberto
console.log ( myFunction2(myvar2, 2) ); // true
console.log ( myFunction2(myvar2, 3) ); // null
console.log ( myFunction2(myvar2, 4) ); // 5

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro) {
    var livro = {
        'Ready Player One': {
            quantidadePaginas: 374,
            autor: 'Ernest Cline',
            editora: 'Random House'
        },
        'The Hobbit': {
            quantidadePaginas: 310,
            autor: 'J. R. R. Tolkien',
            editora: 'George Allen & Unwin'
        },
        'World War Z': {
            quantidadePaginas: 352,
            autor: 'Max Brooks',
            editora: 'Crown Publishing Group',
        }
    };
    
    return nomeLivro ? livro[ nomeLivro ] : livro;
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log ( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log ( "O livro Ready Player One tem " + book('Ready Player One').quantidadePaginas + " páginas!" )

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log ( "O autor do livro The Hobbit é " + book('The Hobbit').autor + "." );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log ( "O livro World War Z foi publicado pela editora " + book('Wordl War Z').editora + "." );
