import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import dotdotdot from 'dotdotdot';
import './lib/fancybox.min';

// SVG for all
svg4everybody();

// polyfill for img
const objFitImg = $('.obj-fit');
objectFitImages(objFitImg);

// clear placeholder
(function() {
  const el = $('input, textarea');
  el.focus(function() {
    $(this).data('placeholder', $(this).attr('placeholder'));
    $(this).attr('placeholder', '');
  });
  el.blur(function() {
    $(this).attr('placeholder', $(this).data('placeholder'));
  });
}());

// dot.js
const $textOverflow = $('.js-dot');
$textOverflow.dotdotdot();

// img zoom
const zoomImg = $('[data-fancybox]');
zoomImg.fancybox();