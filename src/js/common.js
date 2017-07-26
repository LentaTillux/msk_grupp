import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import dotdotdot from 'dotdotdot';
import particles from 'particles.js';

// load canvas for screen
particlesJS.load('js-screen-canvas', '../assets/particlesjs-config.json');
particlesJS.load('js-footer-canvas', '../assets/footer-particles.json');

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