const right = document.querySelector('.slider_right');
const left = document.querySelector('.slider_left');
const images = document.querySelectorAll('.slider_block_div');
let count = 0;

right.addEventListener('click', function () {
    count++;
    images.forEach(i => {
        if (count === 0) {i.style.left = '0px'}
        if (count === 1) {i.style.left = '-360px'}
        if (count > 1) {count = 1}
        })
    });
    
left.addEventListener('click', function () {
    count--;
    images.forEach(i => {
        if (count === 0) {i.style.left = '0px'}
        if (count === 1) {i.style.left = '-360px'}
        if (count < 0) {count = 0}
    })
});
