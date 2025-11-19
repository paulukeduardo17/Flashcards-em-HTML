function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    `

    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }:root {
    --text-color: #DBE4EF;
    --card-front-color: #144480;
    --card-back-color: #00F4BF;
}
body {
    background: url('img/bg-desktop.webp');
    font-family: Bai Jamjuree;
}
#container {
    display: flex;
}
.cartao {
    margin: 1rem 1rem;
    height: 20rem;
    flex-grow: 1;
    flex-basis: calc(33% - 6rem);
}
.cartao__conteudo {
    background-color: var(--card-front-color);
    text-align: center;
    /* background-color: aquamarine; */
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 300ms ease-in-out;
}
.cartao__conteudo h3 {
    color: var(--text-color);
    border: 1px solid var(--text-color);
    text-align: left;
    padding: 0.5rem;
    position: absolute;
    margin: 0.6rem;
    border-radius: 0.6rem;
    font-size: 1vw;
    backface-visibility: hidden;
}
.cartao__conteudo p {
    margin-top: 1rem;
    padding: 2rem;
    margin-top: 4rem;
}
    cartao.addEventListener('click', viraCartao)


    container.appendChild(cartao)

}