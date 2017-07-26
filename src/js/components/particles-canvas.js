import particles from 'particles.js';
import { detectDevice } from '../helpers';
import Parallax from '../lib/parallax.min';

let detectMob = detectDevice(767);

initParticles();
function initParticles() {
  if (!detectMob) {
    particlesJS.load('js-aqua-particles', 'assets/aqua-particles.json');
    particlesJS.load('js-blue-particles', 'assets/blue-particles.json');
    particlesJS.load('js-gray-particles', 'assets/gray-particles.json');
  }
}

const whyUsParallax = $('#js-why-us-parallax').get(0);
const parallax = new Parallax(whyUsParallax);

const scrParallax = $('#js-screen-parallax').get(0);
const screenParallax = new Parallax(scrParallax);