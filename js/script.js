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

let direction = 'right';

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

// Atualizando o jogo de tempos em tempos para que ela consiga se mecher neste intervalo
// Quando o jogor acabar a função deve parar
function iniciarJogo() {
    // chama a função para aparecer no html
    criarBG();

    // chamar função que exibe a cobrinha
    criarCobrinha();

    // Definindo a posição inicial (eixo X e Y) da cobrinha
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // condicional para cada lado que a cobrinha andar
    if (direcion == 'right') snakeX += box;
    if (direction == 'left') snakeX -= box;
    if (direcion == 'up') snakeY -= box;
    if (direction == 'down') snakeY += box;

    // retirando o último elemento do array
    snake.pop();

    // acrecentando um box no elemento à frente do início da cobrinha
    let newhead = {
        x = snakeX,
        y = snakeY
    }

    snake.unshift(newhead);

}




// Passando o intervalo para que a cada 100 milissegundos para a função iniciarJogo
// Assim o jogo continua sem travar
// Um intevalo de 100 milisegundos a função iniciarJOgo será reiniciada
let jogo = setInterval(iniciarJogo, 100);

//Criando as coordenadas da cobrinha (onde ela vai seguir)
