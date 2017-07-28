const $accordion = $('.js-accordion');

(function () {
  $accordion.each(function () {
    const $accordTitle = $(this).find('.js-accordion-item');
    const $accordContent = $('.js-accordion-content');

    $('.js-accordion-item.is-active').children('.js-accordion-content').slideDown();
    $accordTitle.on('click', function () {
      const $this = $(this);
      $this.siblings($accordTitle).removeClass('is-active').children('.js-accordion-content').slideUp();
      $this.toggleClass('is-active').children('.js-accordion-content').slideToggle('ease-out');
    });

    $accordContent.on('click', (ev) => {
      ev.stopPropagation();
    });
  });
})();