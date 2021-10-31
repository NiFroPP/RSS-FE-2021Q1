const arrowTop = document.querySelector('.side-panel__arrows-top');
const arrowBottom = document.querySelector('.side-panel__arrows-bottom');
const sidePanel = document.querySelector('.side-panel');
const cards = document.querySelectorAll('.side-panel__card');

arrowTop.addEventListener('click', () => {
    sidePanel.classList.toggle('active');
});

let offset = 0;

arrowBottom.addEventListener('click', () => {
    offset += 171;
    if (offset > 687) {
        offset = 0;
    }

    cards.forEach(e => {
        e.style.bottom = offset + 'px';
    }
    )
});
