let canvas = document.getElementById('snake');
let context = canvas.getContext(
    '2d'
); /* reinderiza o desenho que vai acontecer dentro do canvas */
let box = 32; /* 32 pixels cada quadradinho */
let snake = [];

// definindo um tamanho para a cobrinha
snake[0] = {
    x: 8 * box,
    y: 8 * box,
};

// criando o tabuleiro
function criarBG() {
    context.fillStyle = 'lightgreen'; /* a cor do tabuleiro */
    context.fillRect(0, 0, 16 * box, 16 * box);
    /* fillRect desenha o retângulo onde vai acontecer o jogo. 
    Trabalha com quatro parâmetros: X, Y, altura e largura */
}

// A COBRINHA VAI SER UM ARRAY DE COORDENADAS
// Adicionar um elemento e retirar o último. Isso fará com que ela ande
function criarCobrinha() {
    // o for percorre todo o tamanho do array e vai incrementar
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = 'green';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

// chama a função para aparecer no html
criarBG();

// chamar função que exibe a cobrinha
criarCobrinha();
