import { TweenMax, CSSPlugin } from 'gsap';

const $tabs = $('.js-tabs');

(function() {
  $tabs.each(function() {
    const $this = $(this);
    const $tabsNav = $this.find('.js-tabs-nav > div');
    const $tabsContent = $this.find('.js-tabs-content > div');
    const speed = 0.7;

    $tabsNav.each(function() {
      const $that = $(this);
      if ($that.hasClass('is-active')) {
        $that.trigger('click');
        showContent($tabsContent.eq($that.index()));
      }
    });

    $tabsNav.on('click', function() {
      $tabsNav.removeClass('is-active').eq($(this).index()).addClass('is-active');
      $tabsContent.siblings().removeClass('is-active');
      showContent($tabsContent.eq($(this).index()).addClass('is-active'), hideContent($tabsContent.siblings().not('.is-active')));
    });

    function showContent(el) {
      TweenMax.set(el, { height: 'auto', scaleY: 1, scaleX: 1 });
      TweenMax.from(el, speed, { height: 0, scaleY: 0.8, scaleX: 0.8 });
    }

    function hideContent(el) {
      TweenMax.to(el, speed, { height: 0, scaleY: 0.8, scaleX: 0.8 });
    }
  });
}());