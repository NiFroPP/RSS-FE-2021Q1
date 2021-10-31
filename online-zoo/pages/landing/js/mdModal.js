const fieldModal = document.querySelector('.modal');

// кнопки донатов на главной странице модального окна
const donateBTNS = {
  donateValue: '0',
  donate$10: document.querySelector('.modal__main-btn-10'),
  donate$20: document.querySelector('.modal__main-btn-20'),
  donate$30: document.querySelector('.modal__main-btn-30'),
  donate$50: document.querySelector('.modal__main-btn-50'),
  donate$80: document.querySelector('.modal__main-btn-80'),
  donate$100: document.querySelector('.modal__main-btn-100'),
  donateOutherAmount: document.querySelector('.modal__main-btnbig')
}

// модадьные окна (4 штуки)
const modalPages = {
  modalMain: document.querySelector('.modal__main'),
  modalSlider1: document.querySelector('.modal__slider-1'),
  modalSlider2: document.querySelector('.modal__slider-2'),
  modalSlider3: document.querySelector('.modal__slider-3'),
}

// кнопки донатов на 1-й странице слайдера модального окна
const donateBTNSPage1 = {
  donate$10: document.querySelector('.modal__dollar-item-10'),
  donate$20: document.querySelector('.modal__dollar-item-20'),
  donate$30: document.querySelector('.modal__dollar-item-30'),
  donate$50: document.querySelector('.modal__dollar-item-50'),
  donate$80: document.querySelector('.modal__dollar-item-80'),
  donate$100: document.querySelector('.modal__dollar-item-100'),
  donateOutherAmount: document.querySelector('.modal__otheramount-btn')
}

// кнопка Other_Amount на 1-й странице слайдера модального окна
const donatePage1Value = document.querySelector('.modal__otheramount-input');

// состояние заполнения всех столбиков
const state = {
  dollars: false,
  forSpecialPen: false,
  yourName: false,
  yourEmail: false,
  creditCard: false,
  CVVNumber: false,
  dateMonth: false,
  dateYear: false
}

// открыть модальное окно
const btnModal = document.querySelector('.donate__button-arrow');
const btnDonateNow = document.querySelector('.BTN__donate-now');
const btnDonateForVolunteers = document.querySelector('.footer__btn');

btnModal.addEventListener('click', openModal);
btnDonateNow.addEventListener('click', openModal);
btnDonateForVolunteers.addEventListener('click', openModal);

function openModal() {
  fieldModal.classList.add('modalshow');
};

// закрытие модального окна
const modalOverlay = document.querySelector('.modaloverlay');
const modalCloseBtn = document.querySelector('.modal__main-close');

modalOverlay.addEventListener('click', closeModal);
modalCloseBtn.addEventListener('click', closeModal);

function closeModal() {
  fieldModal.classList.remove('modalshow');

  if (!modalPages.modalMain.classList.contains('modal__slider--active')) {
    modalPages.modalMain.classList.add('modal__slider--active')
  }
  modalPages.modalSlider1.classList.remove('modal__slider--active');
  modalPages.modalSlider2.classList.remove('modal__slider--active');
  modalPages.modalSlider3.classList.remove('modal__slider--active');

  donatePage1Value.removeAttribute('value');

  btnForSpecialPet.classList.remove('modal__dollar-item--active');

  state.dollars = false;
  state.forSpecialPen = false;
  state.yourName = false;
  state.yourEmail = false;
  state.creditCard = false;
  state.CVVNumber = false;
  state.dateMonth = false;
  state.dateYear = false;
}

// клик по кнопке ввода числа доната
btnModal.addEventListener('click', getInputvalue);

function getInputvalue(event) {
  event.preventDefault();
  donateBTNS.donateValue = document.querySelector('.donate__button-dollar-text').value;

  checkForTheAmount();
}

function checkForTheAmount() {
  console.log('donateValue = ' + donateBTNS.donateValue);

  switch (donateBTNS.donateValue) {
    case '':
      removeBtnClassActive();
      clearOutherAmount();
      donateBTNS.donate$10.classList.add('modal__main-btn--active');
      donateBTNSPage1.donate$10.classList.add('modal__dollar-item--active');
      break;
    case '10':
      removeBtnClassActive();
      clearOutherAmount();
      donateBTNS.donate$10.classList.add('modal__main-btn--active');
      donateBTNSPage1.donate$10.classList.add('modal__dollar-item--active');
      break;
    case '20':
      removeBtnClassActive();
      clearOutherAmount();
      donateBTNS.donate$20.classList.add('modal__main-btn--active');
      donateBTNSPage1.donate$20.classList.add('modal__dollar-item--active');
      break;
    case '30':
      removeBtnClassActive();
      clearOutherAmount();
      donateBTNS.donate$30.classList.add('modal__main-btn--active');
      donateBTNSPage1.donate$30.classList.add('modal__dollar-item--active');
      break;
    case '50':
      removeBtnClassActive();
      clearOutherAmount();
      donateBTNS.donate$50.classList.add('modal__main-btn--active');
      donateBTNSPage1.donate$50.classList.add('modal__dollar-item--active');
      break;
    case '80':
      removeBtnClassActive();
      clearOutherAmount();
      donateBTNS.donate$80.classList.add('modal__main-btn--active');
      donateBTNSPage1.donate$80.classList.add('modal__dollar-item--active');
      break;
    case '100':
      removeBtnClassActive();
      clearOutherAmount();
      donateBTNS.donate$100.classList.add('modal__main-btn--active');
      donateBTNSPage1.donate$100.classList.add('modal__dollar-item--active');
      break;
    default:
      removeBtnClassActive();
      setOutherAmount();
      donateBTNS.donateOutherAmount.classList.add('modal__main-btn--active');
      donateBTNSPage1.donateOutherAmount.classList.add('modal__dollar-item--active');
      break;
  }
}

function removeBtnClassActive() {
  donateBTNS.donate$10.classList.remove('modal__main-btn--active');
  donateBTNS.donate$20.classList.remove('modal__main-btn--active');
  donateBTNS.donate$30.classList.remove('modal__main-btn--active');
  donateBTNS.donate$50.classList.remove('modal__main-btn--active');
  donateBTNS.donate$80.classList.remove('modal__main-btn--active');
  donateBTNS.donate$100.classList.remove('modal__main-btn--active');

  donateBTNS.donateOutherAmount.classList.remove('modal__main-btn--active');
  donateBTNSPage1.donate$10.classList.remove('modal__dollar-item--active');
  donateBTNSPage1.donate$20.classList.remove('modal__dollar-item--active');
  donateBTNSPage1.donate$30.classList.remove('modal__dollar-item--active');
  donateBTNSPage1.donate$50.classList.remove('modal__dollar-item--active');
  donateBTNSPage1.donate$80.classList.remove('modal__dollar-item--active');
  donateBTNSPage1.donate$100.classList.remove('modal__dollar-item--active');
  donateBTNSPage1.donateOutherAmount.classList.remove('modal__dollar-item--active');
}

function setOutherAmount() {
  donateBTNS.donateOutherAmount.textContent = `$${donateBTNS.donateValue}`;
  if (donateBTNS.donateValue) {
    donatePage1Value.setAttribute('value', donateBTNS.donateValue);
  }
}

function clearOutherAmount() {
  donateBTNS.donateOutherAmount.textContent = `Other amount`;
};

function openModalPage2() {
  modalPages.modalMain.classList.remove('modal__slider--active');
  modalPages.modalSlider1.classList.add('modal__slider--active');
  modalPages.modalSlider2.classList.remove('modal__slider--active');
  modalPages.modalSlider3.classList.remove('modal__slider--active');
  checkForTheAmount();
  state.dollars = true;
}
function openModalPage2$10() {
  donateBTNS.donateValue = '10';
  openModalPage2();
}

function openModalPage2$20() {
  donateBTNS.donateValue = '20';
  openModalPage2();
}

function openModalPage2$30() {
  donateBTNS.donateValue = '30';
  openModalPage2();
}

function openModalPage2$50() {
  donateBTNS.donateValue = '50';
  openModalPage2();
}

function openModalPage2$80() {
  donateBTNS.donateValue = '80';
  openModalPage2();
}

function openModalPage2$100() {
  donateBTNS.donateValue = '100';
  openModalPage2();
}

function openModalPage2OutherAmount() {
  donateBTNS.donateValue = donateBTNS.donateValue || '0';
  openModalPage2();
}

// клики по донатам на главной странице модального окна
donateBTNS.donate$10.addEventListener('click', openModalPage2$10);
donateBTNS.donate$20.addEventListener('click', openModalPage2$20);
donateBTNS.donate$30.addEventListener('click', openModalPage2$30);
donateBTNS.donate$50.addEventListener('click', openModalPage2$50);
donateBTNS.donate$80.addEventListener('click', openModalPage2$80);
donateBTNS.donate$100.addEventListener('click', openModalPage2$100);
donateBTNS.donateOutherAmount.addEventListener('click', openModalPage2OutherAmount);

// клики по донатам на 1-й странице слайдера модального окна
donateBTNSPage1.donate$10.addEventListener('click', openModalPage2$10);
donateBTNSPage1.donate$20.addEventListener('click', openModalPage2$20);
donateBTNSPage1.donate$30.addEventListener('click', openModalPage2$30);
donateBTNSPage1.donate$50.addEventListener('click', openModalPage2$50);
donateBTNSPage1.donate$80.addEventListener('click', openModalPage2$80);
donateBTNSPage1.donate$100.addEventListener('click', openModalPage2$100);

// клик по кнопке Other_Amount на 1-й странице слайдера модального окна
document.querySelector('.modal__otheramount-btn').addEventListener('click', getInputvaluePage1);
function getInputvaluePage1(event) {
  event.preventDefault();
  if (donatePage1Value.value === '') {
    donateBTNS.donateValue = '0'
  } else {
    donateBTNS.donateValue = donatePage1Value.value;
  }
  checkForTheAmount();
}

// кнопка выбора животного для доната
const btnForSpecialPet = document.querySelector('.modal__forspecialpet-btn');

btnForSpecialPet.addEventListener('click', selectForSpecialPet);

function selectForSpecialPet(event) {
  event.preventDefault();

  btnForSpecialPet.classList.add('modal__dollar-item--active');

  if (document.querySelector('.modal__forspecialpet-select').value > 0) {
    state.forSpecialPen = true;
  }
}

// переключение на модальное окно-2
const btnNext = document.querySelector('.modal__nextbtn-1');
const btnNext2 = document.querySelector('.modal__nextbtn-2');

const btnBack = document.querySelector('.modal__backbtn-2');
const btnBack2 = document.querySelector('.modal__backbtn-3');

const yourNameInput = document.querySelector('.modal__yourname-input');
const yourEmailInput = document.querySelector('.modal__youremailaddress-input');

btnNext.addEventListener('click', openModalPage3);
btnNext2.addEventListener('click', openModalPage4)
btnBack.addEventListener('click', openModalPage2);
btnBack2.addEventListener('click', openModalPage3);

function openModalPage3(event) {
  event.preventDefault();

  if (state.forSpecialPen == true && state.dollars == true) {
    modalPages.modalSlider1.classList.remove('modal__slider--active');
    modalPages.modalSlider2.classList.add('modal__slider--active');
    modalPages.modalSlider3.classList.remove('modal__slider--active');
  }
}

function openModalPage4(event) {
  event.preventDefault();

  if (yourNameInput.value.length > 0) {
    state.yourName = true;
  }

  if (yourEmailInput.value.length > 0) {
    state.yourEmail = true
  }

  if (state.yourName == true && state.yourEmail == true) {
    modalPages.modalSlider1.classList.remove('modal__slider--active');
    modalPages.modalSlider2.classList.remove('modal__slider--active');
    modalPages.modalSlider3.classList.add('modal__slider--active');
  }
}

// модальное окно-3
const btnCompleeteDonation = document.querySelector('.modal__completebtn');

btnCompleeteDonation.addEventListener('click', completeDonate);

function completeDonate(event) {
  event.preventDefault();

  if (document.querySelector('.modal__creditcard-input').value.length > 0) {
    state.creditCard = true;
  }
  if (document.querySelector('.modal__cvv-input').value.length > 0) {
    state.CVVNumber = true;
  }
  if (document.querySelector('.modal__month-select').value > 0) {
    state.dateMonth = true;
  }
  if (document.querySelector('.modal__year-select').value > 0) {
    state.dateYear = true;
  }

  if (state.creditCard == true &&
    state.CVVNumber == true &&
    state.dateMonth == true &&
    state.dateYear == true) {
    alert('"Thank you for your donation"');
    closeModal();
  }
}