import particles from 'particles.js';
import { detectDevice, WINDOW } from '../helpers';

let detectMob = detectDevice(767);

initParticles();
function initParticles() {
  if (!detectMob) {
    particlesJS.load('js-aqua-particles', 'assets/aqua-particles.json');
    particlesJS.load('js-blue-particles', 'assets/blue-particles.json');
    particlesJS.load('js-gray-particles', 'assets/gray-particles.json');
  }
}