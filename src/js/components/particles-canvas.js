import particles from 'particles.js';
import {detectDevice} from '../helpers';
import Parallax from '../lib/parallax.min';

const detectMob = detectDevice(767);

// particles init
(function () {
  const aquaParticles = $('#js-aqua-particles').length;
  const blueParticles = $('#js-blue-particles').length;
  const grayParticles = $('#js-gray-particles').length;
  const grayParticlesSecond = $('#js-gray-particles-2').length;

  if (!detectMob) {
    if (aquaParticles) {
      particlesJS.load('js-aqua-particles', 'assets/aqua-particles.json');
    }
    if (blueParticles) {
      particlesJS.load('js-blue-particles', 'assets/blue-particles.json');
    }
    if (grayParticles) {
      particlesJS.load('js-gray-particles', 'assets/gray-particles.json');
    }
    if (grayParticlesSecond) {
      particlesJS.load('js-gray-particles-2', 'assets/gray-particles.json');
    }
  }
})();

// parallax init
(() => {
  const $glowParallax = $('.js-glow-parallax');
  const $screenParallax = $('.js-screen-parallax');

  if ($glowParallax.length) {
    const whyUsParallax = $glowParallax.get(0);
    const glowParallax = new Parallax(whyUsParallax);
  }

  if ($screenParallax.length) {
    const scrParallax = $screenParallax.get(0);
    const screenParallax = new Parallax(scrParallax);
  }

  // if ($('.js-glow-parallax').length) {
  // const glowParallax = $('.js-glow-parallax').get(0);
  // const glowParallaxLax = new Parallax(glowParallax);
  // }
})();