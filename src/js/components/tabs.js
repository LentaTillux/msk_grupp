import { TweenMax, CSSPlugin } from 'gsap';

const $tabs = $('.js-tabs');

(function() {
  $tabs.each(function() {
    const $this = $(this);
    const $tabsNav = $this.find('.js-tabs-nav > div');
    const $tabsContent = $this.find('.js-tabs-content > div');

    $tabsContent.hide();

    $tabsNav.each(function() {
      const $that = $(this);
      if ($that.hasClass('is-active')) {
        $that.trigger('click');
        $tabsContent.eq($that.index()).slideDown(500);
      }
    });

    $tabsNav.on('click', function(ev) {
      ev.preventDefault();
      $tabsNav.removeClass('is-active').eq($(this).index()).addClass('is-active');
      $tabsContent.slideUp().eq($(this).index()).slideDown(500);
    });
  });
}());