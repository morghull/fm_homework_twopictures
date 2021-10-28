'use strict';

const imagesDB = [
  'https://karma-kollection.com/wp-content/uploads/2018/05/magical-banner.jpg',
  'https://fanaticcook.files.wordpress.com/2021/04/animals.jpg',
];

const srcAttr = document.createAttribute('src');
srcAttr.value = imagesDB[0];

const img = document.querySelector('.wrapper>img');
const btn = document.querySelector('.wrapper>button');

const toggleEvent = (e) => {
  srcAttr.value = imagesDB[0];
  img.setAttributeNode(srcAttr);
};

btn.addEventListener('click', toggleEvent);
