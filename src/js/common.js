import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import dotdotdot from 'dotdotdot';
import selectric from 'selectric';
import './lib/fancybox.min';
const Flatpickr = require('flatpickr');
const Russian = require('flatpickr/dist/l10n/ru.js').ru;

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

const dateInput = '.js-date';
new Flatpickr(dateInput, {
  locale: Russian
});

$(function () {
  var location = window.location.href;
  var cur_url = '/' + location.split('/').pop();

  $('.nav__list li').each(function () {
    var link = $(this).find('a').attr('href');

    if (cur_url == link)
    {
      $(this).addClass('is-active');
    }
  });
});
$('.projects__nav-btn:first-child').addClass('is-active');
$('.projects__content-item:first-child').addClass('is-active');
$('.projects__content-item:first-child').css({ height: 'auto', transform: 'matrix(1, 0, 0, 1, 0, 0)'});