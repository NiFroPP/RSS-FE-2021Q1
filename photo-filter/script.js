const resetBtn = document.querySelector('.btn-reset');       // кнопка `Reset`
const nextPictureBtn = document.querySelector('.btn-next');  // кнопка 'Next picture'
const loadPictureBtn = document.querySelector('.btn-load');  // кнопка 'Load picture'
const savePictureBtn = document.querySelector('.btn-save');  // кнопка 'Save picture'

const filters = {
  blur: '0px',
  invert: '0%',
  sepia: '0%',
  saturate: '100%',
  'hue-rotate': '0deg',
};


// подсветка активной кнопки
let activeButton = 'nextActive';    // 'reserActive', 'loadActive', 'saveActive'

function refreshButtons(btn) {
  switch (btn) {
    case 'reserActive':
        resetBtn.classList.add('btn-active');
        nextPictureBtn.classList.remove('btn-active');
        loadPictureBtn.classList.remove('btn-active');
        savePictureBtn.classList.remove('btn-active');
      break;

    case 'nextActive':
        nextPictureBtn.classList.add('btn-active');
        resetBtn.classList.remove('btn-active');
        loadPictureBtn.classList.remove('btn-active');
        savePictureBtn.classList.remove('btn-active');
      break;

    case 'loadActive':
        loadPictureBtn.classList.add('btn-active');
        resetBtn.classList.remove('btn-active');
        nextPictureBtn.classList.remove('btn-active');
        savePictureBtn.classList.remove('btn-active');
      break;

    case 'saveActive':
        savePictureBtn.classList.add('btn-active');
        resetBtn.classList.remove('btn-active');
        nextPictureBtn.classList.remove('btn-active');
        loadPictureBtn.classList.remove('btn-active');
      break;
      
    default:
      break;
  }
}


// кнопка полноэкранного режима
const btnFullScreen = document.querySelector('.fullscreen');
btnFullScreen.addEventListener('click', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
    document.documentElement.requestFullscreen();
})


// ползунки фильтров
const labels = document.querySelectorAll('.filters label');

function handleUpdate() {
  const input = this.querySelector('input');
  const output = this.querySelector('output');

  const suffix = input.dataset.sizing || '';
  filters[input.name] = input.value + suffix;
  picture.style.setProperty(`--${input.name}`, input.value + suffix);
  output.value = input.value;  
}

labels.forEach(label => label.addEventListener('input', handleUpdate));


// функция очистки фильтров по клику 'Reset'
function resetFilter() {
  activeButton = 'reserActive';
  refreshButtons('reserActive');

  document.getElementById("my-form").reset();
  picture.style = '';
};

resetBtn.addEventListener('click', resetFilter);


// реализация переключения картинок по клику 'Next picture'
const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
let i = 0;
const picture = document.querySelector('.img-container img');

function getImage() {
  activeButton = 'nextActive';
  refreshButtons('nextActive');

  const today = new Date();
  const hour = today.getHours();
  let base = '';

  if (hour < 6) {            // с 00:00 до 5:59 - night
    base = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/';
  } else if (hour < 12) {    // с 6:00 до 11:59 - morning
    base = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/';
  } else if (hour < 18) {    // с 12:00 до 17:59 - day
    base = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/day/';
  } else {                   // с 18:00 до 23:59 - evening
    base = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/'; 
  };

  const index = i % images.length;
  const imageSrc = base + images[index];
  viewImage(imageSrc);
  i++;
  nextPictureBtn.disabled = true;
  setTimeout(function() { nextPictureBtn.disabled = false }, 1000);
} 

function viewImage(src) { 
  const img = new Image();

  img.src = src;
  img.onload = () => {      
    picture.src = `${src}`;
  }; 
}

nextPictureBtn.addEventListener('click', getImage);


// реализация загрузки картинки по клику 'Load pictire'
const fileInput = document.getElementById('btnInput');
const imgContainer = document.querySelector('.img-container');

function loadPicture() {
  activeButton = 'loadActive';
  refreshButtons('loadActive');

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    picture.src = reader.result;
    fileInput.value = '';
  }

reader.readAsDataURL(file);
};

loadPictureBtn.addEventListener('change', loadPicture);


// отображение в 'canvas'
const canvas = document.querySelector('canvas');

function drawImage(src, callback) {
  const img = new Image();
  img.setAttribute('crossOrigin', 'anonymous'); 
  img.src = src;
  img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");

    ctx.filter = Object.entries(filters)
       .map(([filter, value]) => `${filter}(${value})`)
       .join(' ');

    ctx.drawImage(img, 0, 0);
    callback();
  };  
}


// сохранение картинки
function savePicture() {
  activeButton = 'saveActive';
  refreshButtons('saveActive');

  drawImage(picture.src, () => {
    let link = document.createElement('a');

    link.download = 'Photo-filter-picture.png';
    link.href = canvas.toDataURL();
    link.click();
    link.delete;
  });

};

savePictureBtn.addEventListener('click', savePicture);
