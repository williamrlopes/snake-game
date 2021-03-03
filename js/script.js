let canvas = document.getElementById('snake');
let context = canvas.getContext(
    '2d'
); /* reinderiza o desenho que vai acontecer dentro do canvas */
let box = 32; /* 32 pixels cada quadradinho */

function criarBG() {
    context.fillStyle = 'lightgreen'; /* a cor do tabuleiro */
    context.fillRect(0, 0, 16 * box, 16 * box);
    /* fillRect desenha o retângulo onde vai acontecer o jogo. 
    Trabalha com quatro parâmetros: X, Y, altura e largura */
}

// chama a função para aparecer no html
criarBG();
