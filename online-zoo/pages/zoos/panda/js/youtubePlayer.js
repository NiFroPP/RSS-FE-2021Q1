const videos = document.querySelectorAll('.zoos-panda__slider-element');
const letfBtn = document.querySelector('.SLIDER-left-n');
const rightBtn = document.querySelector('.SLIDER-right-n');

// слайдер влево/вправо
let offset2 = 0;

letfBtn.addEventListener('click', () => {
    offset2 += 285;

    if (offset2 > 285 * 4) {
        offset2 = 0;
    }

    videos.forEach(e => {
        e.style.left = -offset2 + 'px';
    })
})

rightBtn.addEventListener('click', () => {
    offset2 -= 285;

    if (offset2 < 0) {
        offset2 = 285 * 4;
    }

    videos.forEach(e => {
        e.style.left = -offset2 + 'px';
    })
})

// переключение видео на главное окно
videos.forEach(e => {
    e.addEventListener('click', () => {
        const mainInframe = document.querySelector('.iframe-main');
        let mainInframeSRC = mainInframe.getAttribute('src');

        const inframe = e.querySelector('.zoos-panda__slider-element-inframe');
        let inframeSRC = inframe.getAttribute('src');

        mainInframe.setAttribute('src', inframeSRC);
        inframe.setAttribute('src', mainInframeSRC)
    })
})
