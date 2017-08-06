import { BODY, WINDOW } from '../dev/helpers';

(function () {
  const $nav = $('.js-nav');
  const $navBtn = $('.js-nav-toggle');
  const $navLogo = $('.js-logo');

  $navBtn.on('click', function (e) {
    const $this = $(this);
    $this.toggleClass('is-active');
    $navLogo.toggleClass('active');
    BODY.toggleClass('is-locked');
    $nav.fadeToggle(150).css('display', 'flex');
  });

  WINDOW.on('resize', () => {
    $navBtn.removeClass('is-active');
    BODY.removeClass('is-locked');
    $navLogo.removeClass('active');
    $nav.removeAttr('style');
  });
}());