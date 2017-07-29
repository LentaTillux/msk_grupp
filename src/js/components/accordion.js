import { TweenMax, CSSPlugin } from 'gsap';

const $accordion = $('.js-accordion');

(function() {
  $accordion.each(function() {
    const $item = $(this).children();
    const $btn = $item.find('> div:first-child');
    const $content = $item.find('.js-accordion-content');
    const speed = 0.5;

    $item.each(function() {
      const $thisContent = $(this).find('.js-accordion-content');
      if ($(this).hasClass('is-active')) {
        showContent($thisContent);
      }
    });

    $btn.on('click', function() {
      const $selfItem = $(this).closest($item);
      const $selftContent = $selfItem.find($content);

      $item.not($selfItem).removeClass('is-active');
      $content.each(function() {
        if (!$(this).closest($selfItem).length) {
          hideContent($(this));
        }
      });
      $selfItem.toggleClass('is-active');

      if ($selfItem.hasClass('is-active')) {
        showContent($selftContent);
      } else {
        hideContent($selftContent);
      }
    });

    function showContent(el) {
      TweenMax.set(el, { height: 'auto', scaleY: 1, scaleX: 1 });
      TweenMax.from(el, speed, { height: 0, scaleY: 0.5, scaleX: 0.8 });
    }

    function hideContent(el) {
      TweenMax.to(el, speed, { height: 0, scaleY: 0.5, scaleX: 0.8 });
    }
  });
}()
);