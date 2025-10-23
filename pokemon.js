const pikachu = document.querySelector('.pikachu');
const pokeball = document.querySelector('.pokeball');

const jump = () => {
    pikachu.classList.add('jump');

    setTimeout(() => {
        pikachu.classList.remove('jump');
    }, 500);
};

const loop = setInterval(() => {
    const pokeballPosition = pokeball.offsetLeft;
    const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px', '');

    console.log(pokeballPosition);

    if (pokeballPosition <= 120 && pokeballPosition > 0 && pikachuPosition < 80) {

        pokeball.style.animation = 'none';
        pokeball.style.left = `${pokeballPosition}px`;

        pikachu.style.animation = 'none';
        pikachu.style.bottom = `${pikachuPosition}px`;


        pikachu.src = 'image/pikachuGameOver.png';



    }
}, 10);

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        jump();
    }
});