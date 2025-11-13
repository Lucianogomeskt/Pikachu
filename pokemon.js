const pikachu = document.querySelector('.pikachu');
const pokeball = document.querySelector('.pokeball');
const resetButton = document.getElementById('botao-resetar');
let gameLoop;

const jump = () => {
    if (!pikachu.classList.contains('jump')) {
        pikachu.classList.add('jump');

        setTimeout(() => {
            pikachu.classList.remove('jump');
        }, 500);
    }
};

const iniciarJogo = () => {
    if (gameLoop) {
        clearInterval(gameLoop);
    }
    
    pokeball.style.animation = 'pokeball-animation 1.5s infinite linear'; 
    pokeball.style.left = '';

    // Garante que o pikachu volte à imagem de jogo e à posição base
    pikachu.src = 'image/pikachu.gif'; 
    pikachu.style.animation = '';
    pikachu.style.bottom = '0px'; 
    
    gameLoop = setInterval(() => {
        const pokeballPosition = pokeball.offsetLeft;
        const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px', '');

        if (pokeballPosition <= 120 && pokeballPosition > 0 && pikachuPosition < 80) {
            
            pokeball.style.animation = 'none';
            pokeball.style.left = `${pokeballPosition}px`;
            
            pikachu.style.animation = 'none';
            pikachu.style.bottom = `${pikachuPosition}px`;
            
            pikachu.src = 'image/pikachuGameOver.png';
            
            clearInterval(gameLoop); 

            resetButton.style.display = 'block'; 
        }
    }, 10);
};

const resetarJogo = () => {
    resetButton.style.display = 'none';
    iniciarJogo();
};

iniciarJogo(); 

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && gameLoop) {
        jump();
    }
});

resetButton.addEventListener('click', resetarJogo);