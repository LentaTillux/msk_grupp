initToggling();

function initToggling() {
  const $togglingBlock = $('.js-toggling-block');

  $togglingBlock.each(function() {
    const $thisBlock = $(this);
    const $togglingBtn = $thisBlock.find('.js-toggling-btn');
    const $togglingContent = $thisBlock.find('.js-toggling-content');

    $togglingContent.hide();

    if ($thisBlock.hasClass('is-open')) {
      $togglingContent.show();
    }

    $togglingBtn.on('click tap', function(ev) {
      ev.preventDefault();
      const $thisBtn = $(this);
      const $BtnText = $thisBtn.find('span');

      $thisBlock.toggleClass('is-open');
      $thisBtn.toggleClass('is-hidden')
        .parent().prev()
        .slideToggle();

      $BtnText.text($BtnText.text() === $BtnText.data('default-text') ? $BtnText.data('change-text') : $BtnText.data('default-text'));
    });
  });
}

(function() {
  const $newsBtn = $('.js-more-btn');

  $newsBtn.on('click tap', function(e) {
    e.preventDefault();
    const $this = $(this);
    $this.siblings(':hidden').slideDown();
    $this.fadeOut();
  });
}());