'use strict';

function initializeToggle({ imagesDB, imgSelector, btnSelector }) {
  const img = document.querySelector(imgSelector);
  const btn = document.querySelector(btnSelector);
  let clickCounter = 0;

  const toggleEvent = (e) => {
    img.setAttribute(
      'src',
      imagesDB[clickCounter++ % imagesDB.length]
    );
  };

  btn.addEventListener('click', toggleEvent);
  btn.dispatchEvent(new Event('click'));
}

const options = {
  imagesDB: [
    'https://karma-kollection.com/wp-content/uploads/2018/05/magical-banner.jpg',
    'https://thypix.com/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-1.jpg',
  ],
  imgSelector: '.wrapper>img',
  btnSelector: '.wrapper>button',
};
initializeToggle(options);
