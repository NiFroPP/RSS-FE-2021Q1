const leftBtnPetInZoo = document.querySelector('.SLIDER-left-n');
const rightBtnPetInZoo = document.querySelector('.SLIDER-right-n');
const cardsPetInZoo = document.querySelectorAll('.pets-in-zoo__card');

// слайдер карточек животных
let offsetPetInZoo = 0;

leftBtnPetInZoo.addEventListener('click', () => {
    console.log('click-left');

    offsetPetInZoo += 475;

    if (offsetPetInZoo > 475 * 5) {
        offsetPetInZoo = 0;
    }

    cardsPetInZoo.forEach(e => {
        e.style.left = -offsetPetInZoo + 'px';
    })
})

rightBtnPetInZoo.addEventListener('click', () => {
    console.log('click-right');

    offsetPetInZoo -= 475;

    if (offsetPetInZoo < 0) {
        offsetPetInZoo = 475 * 4;
    }

    cardsPetInZoo.forEach(e => {
        e.style.left = -offsetPetInZoo + 'px';
    })
})
