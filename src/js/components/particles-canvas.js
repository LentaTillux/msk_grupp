import particles from 'particles.js';
import {detectDevice} from '../dev/helpers';
import Parallax from '../lib/parallax.min';

const detectMob = detectDevice(767);

// particles init
(function () {
  const aquaParticles = $('#js-aqua-particles').length;
  const blueParticles = $('#js-blue-particles').length;
  const whiteParticles = $('#js-white-particles').length;
  const grayParticles = $('#js-gray-particles').length;
  const grayParticlesSecond = $('#js-gray-particles-2').length;

  const path = $('.main').attr('data-particles');
  if (aquaParticles) {
    particlesJS.load('js-aqua-particles', `${path}assets/aqua-particles.json`);
  }
  if (blueParticles) {
    particlesJS.load('js-blue-particles', `${path}assets/blue-particles.json`);
  }
  if (grayParticles) {
    particlesJS.load('js-gray-particles', `${path}assets/gray-particles.json`);
  }
  if (whiteParticles) {
    particlesJS.load('js-white-particles', `${path}assets/white-particles.json`);
  }
  if (grayParticlesSecond) {
    particlesJS.load('js-gray-particles-2', `${path}assets/gray-particles.json`);
  }
  if (grayParticlesSecond) {
    particlesJS.load('js-gray-particles-2', `${path}assets/gray-particles.json`);
  }

  // console.log($('.main').attr('data-particles'));
})();

// parallax init
(() => {
  const $glowParallax = $('.js-glow-parallax');
  const $screenParallax = $('.js-screen-parallax');

  if (!detectMob) {
    $glowParallax.each(function () {
      new Parallax($(this).get(0));
    });
    $screenParallax.each(function () {
      new Parallax($(this).get(0));
    });
  }
})();

