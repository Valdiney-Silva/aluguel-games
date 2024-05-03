let qtdAlugueis = 0;

function contarEExibirJogosAlugados() {
    console.log(`Quantidade de jogos alugados: ${qtdAlugueis}`);
}

function alterarStatus(id) {
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');
    let nomeJogo = jogoClicado.querySelector('.dashboard__item__name');
    //para pegar o texto da tag nomeJogo.textContent ou nomeJogo.inerHTML;

    if (imagem.classList.contains("dashboard__item__img--rented")) {
        if (confirm(`Tem certeza que deseja devolver o jogo ${nomeJogo.textContent}`)) {
            imagem.classList.remove("dashboard__item__img--rented");
            botao.classList.remove("dashboard__item__button--return");
            botao.textContent = "Alugar";
            qtdAlugueis--;
        }
    }
    else {
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Devolver";
        qtdAlugueis++;
    }
    contarEExibirJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function () {
    qtdAlugueis = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});


// let texto = prompt("Digite uma palavra");

//  // VERIFICANDO SE A PALAVRA É UM PALÍDROMO
// function verificaPalavra(palavra){
//     let palavraContraria = reverseString(palavra);
//     if(palavra === palavraContraria){
//         return `A palavra ${palavra} é um palíndromo.\n|${palavra}|\n|${palavraContraria}|`;
//     } else{
//         return `A palavra ${palavra} não é um palíndromo.\n|${palavra}|\n|${palavraContraria}|`;
//     }
// }

// alert(verificaPalavra(texto))
//     // INVERTENDO PALAVRAS
// function reverseString(str){
//     let splitString = str.split(""); //SEPARA A STRING EM UM ARRAY
//     let reverseArray = splitString.reverse(); // INVERTE O ARRAY
//     let joinArray = reverseArray.join(""); // JUNTA O ARRAY EM UMA STRING
//     return joinArray;
// }

// let numero1 = parseInt(prompt("Digite um número"));
// let numero2 = parseInt(prompt("Digite um número"));
// let numero3 = parseInt(prompt("Digite um número"));


// function sequencia(num1, num2, num3){
//     const sequencia = [num1, num2, num3].sort((a,b) => a-b );
//      console.log(`Números ordenados: ${sequencia.join(', ')}`);
//      }

// sequencia(numero1,numero2,numero3);


