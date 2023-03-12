/* 

OBJETIVO - Quando clicar no botão, mostrar a imagem correspondente

1 - Pegar elemento HTML dos botoes
2 - Identificar o clique no botao
3 - Desmarcar o botao selecionado anterior
4 - Marcar o botao clicado
5 - Esconder imagem ativa
6 - Aparecer a imagem correspondente ao botao

*/

// PASSO 1 - Pegar elemento HTML dos botoes
const botoesCarrossel = document.querySelectorAll(".botao");

// Parte do passo 6
const imagens = document.querySelectorAll('.imagem');

// PASSO 2 - Identificar o clique no botao

// const botao1 = document.getElementById('botao1');
// console.log(botao1);
// botao1.addEventListener('click', () => {
//     console.log('clicou no botao1');
// })  

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        
        // PASSO 3 - Desmarcar o botao selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        // PASSO 4 - Marcar o botao clicado
        botao.classList.add("selecionado");

        // PASSO 5 - Esconder imagem ativa
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove("ativa")

        // PASSO 6 - Aparecer a imagem correspondente ao botao
        imagens[indice].classList.add('ativa');

    });
})