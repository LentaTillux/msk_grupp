import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import dotdotdot from 'dotdotdot';
import selectric from 'selectric';
import flatpickr from 'flatpickr';
import './lib/fancybox.min';

// SVG for all
svg4everybody();

// polyfill for img
const objFitImg = $('.obj-fit');
objectFitImages(objFitImg);

// dot.js
const $textOverflow = $('.js-dot');
$textOverflow.dotdotdot();

// img zoom
const zoomImg = $('[data-fancybox]');
zoomImg.fancybox();

// selects
const $select = $('.js-select');
$select.selectric();

// date picker
flatpickr('.js-date', {});