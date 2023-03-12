// passo 1 - pegar o elemento html dos botoes
const botoescarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//identificar o clique do usuario no botao
botoescarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => { 
    // desmarcar o botao selecionado anterior
    const botaoselecionado = document.querySelector('.selecionado');
    botaoselecionado.classList.remove('selecionado');

    //marcar o botao clicado como selecionado

    botao.classList.add('selecionado');

    //esconder a imagem aiva de fundo anterior
    const imagemativa = document.querySelector('.ativa');
    imagemativa.classList.remove('ativa');
    // aparecer a imagem de fundo correspondente ao botao clicado
imagens[indice].classList.add('ativa')
    })
});