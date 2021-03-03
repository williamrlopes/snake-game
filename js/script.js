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

// criando posição aleatória para a comida no canvas
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box,
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

// criando a comida
function drawfood() {
    context.fillStyle = 'red';
    context.fillRect(food.x, food.y, box, box);
}

// cuidando para que a cobrinha não desapareça da tela.

// pega o keydown (evento de clique do teclado)
document.addEventListener('keydown', update);

// se o usuário digitar 37 e a direção for direrente de direita, então direção é igual a esquerda
// só muda se a direção não for ao contrário da inicial
function update(event) {
    if (event.keyCode == 37 && direction != 'right') direction = 'left';
    if (event.keyCode == 38 && direction != 'down') direction = 'up';
    if (event.keyCode == 39 && direction != 'left') direction = 'right';
    if (event.keyCode == 40 && direction != 'up') direction = 'down';
}

// Atualizando o jogo de tempos em tempos para que ela consiga se mecher neste intervalo
// Quando o jogor acabar a função deve parar
function iniciarJogo() {
    // fazendo com que a cobrinha passe de um lado para o outro da tela

    // se a cabeça (snake[o].x) na posição x for igual a 15 então ela recebe valor zero e aparece do lado oposto
    if (snake[0].x > 15 * box && direction == 'right') snake[0].x = 0;
    // o mesmo nas linhas a seguir para as outras direções
    if (snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == 'down') snake[0].y = 0;
    if (snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;

    // condicional para saber se a cabeça bateu no corpo da cobrinha, momento em que o jogo termina
    for (i = 1; i < snake.length; i++) {
        // se a posição da cabeça for igual a posição do corpo o jogo para e emite um alerta de fim de jogo
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(jogo); // fim do jogo
            alert('Game Over ;(');
        }
    }

    // chama a função para aparecer no html
    criarBG();

    // chamar função que exibe a cobrinha
    criarCobrinha();

    // chamar a função que exibe a comidinha
    drawfood();

    // Definindo a posição inicial (eixo X e Y) da cobrinha
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // condicional para cada lado que a cobrinha andar
    if (direction == 'right') snakeX += box;
    if (direction == 'left') snakeX -= box;
    if (direction == 'up') snakeY -= box;
    if (direction == 'down') snakeY += box;

    // condicional para quando a comida passar por cima a cobra aumentar de tamanho e a comida mudar aleatoriamente de lugar
    if (snakeX != food.x || snakeY != food.y) {
        // retirando o último elemento do array
        snake.pop();
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    // acrecentando um box no elemento à frente do início da cobrinha
    let newHead = {
        x: snakeX,
        y: snakeY,
    };

    snake.unshift(newHead);
}

// Passando o intervalo para que a cada 100 milissegundos para a função iniciarJogo
// Assim o jogo continua sem travar
// Um intevalo de 100 milisegundos a função iniciarJOgo será reiniciada
let jogo = setInterval(iniciarJogo, 100);

//Criando as coordenadas da cobrinha (onde ela vai seguir)
