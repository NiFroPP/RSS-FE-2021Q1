// проигрывание звуков при нажатии на клавишы пианино
let isMousePressed = false;

function playAudio(audio, key) {
    if (key) {
        key.classList.add('piano-key-active');
        key.classList.add('piano-key-remove-mouse');
        key.classList.add('piano-key-active-pseudo');
    }

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}

function playWithKeyboard(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (e.repeat) return;

    playAudio(audio, key)
}

function playWithMouse(e) {
    const audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);
    const key = document.querySelector(`div[data-key="${e.target.dataset.key}"]`);

    if (key) {
        isMousePressed = true;
    }

    playAudio(audio, key)
}

function transition(e) {
    e.target.classList.remove('piano-key-active');
    e.target.classList.remove('piano-key-remove-mouse');
    e.target.classList.remove('piano-key-active-pseudo');
}

function ifNotActiveKeyboard(e) {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (key) {
        key.classList.remove('piano-key-active');
        key.classList.remove('piano-key-remove-mouse');
    }
}

window.addEventListener('keydown', playWithKeyboard);
window.addEventListener('keyup', ifNotActiveKeyboard);

window.addEventListener('mousedown', playWithMouse);
window.addEventListener('mouseup', () => {
    isMousePressed = false;
})
window.addEventListener('mouseover', (e) => {
    if (isMousePressed) {
        playWithMouse(e);
    }
})

document.querySelectorAll('.piano-key')
    .forEach(key => {
        key.addEventListener('mouseup', transition);
        key.addEventListener('mouseover', transition);
        key.addEventListener('mouseleave', transition)
    })

// кнопка выбора отображения нот или клавиатуры
const keys = document.querySelectorAll('.piano-key');
const btnMode = document.querySelectorAll('.btn');
const btnNotes = document.querySelector('.btn-notes');
const btnLetters = document.querySelector('.btn-letters');

btnMode.forEach(key => key.addEventListener('click', () => {
    btnLetters.classList.toggle('btn-active');
    btnNotes.classList.toggle('btn-active');
    keys.forEach((e) => {
        e.classList.toggle('piano-key-letter')
    })
}))

// кнопка полноэкранного режима
const btnFullScreen = document.querySelector('.fullscreen');
btnFullScreen.addEventListener('click', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
    document.documentElement.requestFullscreen();
})
