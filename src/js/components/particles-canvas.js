import particles from 'particles.js';
import { detectDevice } from '../helpers';
import Parallax from '../lib/parallax.min';

const detectMob = detectDevice(767);

// particles init
(function () {
  const aquaParticles = $('#js-aqua-particles').length;
  const blueParticles = $('#js-blue-particles').length;
  const grayParticles = $('#js-gray-particles').length;

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
  }
})();

// parallax init
(function () {
  if ($('#js-why-us-parallax').length) {
    const whyUsParallax = $('#js-why-us-parallax').get(0);
    const parallax = new Parallax(whyUsParallax);
  }

  if ($('#js-screen-parallax').length) {
    const scrParallax = $('#js-screen-parallax').get(0);
    const screenParallax = new Parallax(scrParallax);
  }
})();
