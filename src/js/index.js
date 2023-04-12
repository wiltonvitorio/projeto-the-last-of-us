/* 
ao clicar no botao mostrará a imagem de fundo correspondente

    passo 1 -  pegar o elemento html dos botoes
    passo 2 - identificar o clique do usuário no botao
    passo 3 - desmarcar o botao selecionado anterior
    passo 4 - marcar o botao clicado como selecionado anterior
    passo 5 - esconder  imagem anterior
    passo 6 - fazer aparecer a imagem correspondendte ao botao clicado
*/

// passo 1 -  pegar o elemento html dos botoes
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//passo 2 - identificar o clique do usuário no botao
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
       
       
       
        desativarBotaoSelecionado();

        //marcar o botao clicado como selecionado anterior
        botao.classList.add('selecionado');
        
        esconderImagemAtiva();

        //fazer aparecer a imagem correspondendte ao botao clicado
        imagens[indice].classList.add('ativa');


    })

})


function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionando = document.querySelector('.selecionado');
    botaoSelecionando.classList.remove('selecionado');
}

