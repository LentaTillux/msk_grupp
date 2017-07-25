import slick from 'slick-carousel';

const $screenSld = $('.js-screen-slider');
$screenSld.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  speed: 700,
  infinite: true,
  dots: true,
  arrows: false
});

const $teaserSld = $('.js-teaser-slider');
$teaserSld.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  infinite: true,
  prevArrow: '<button type="button" class="teaser__slider-arr teaser__slider-arr_prev"><svg class="teaser__slider-arr-icon icon-arr_l"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr_l"></use></svg></button>',
  nextArrow: '<button type="button" class="teaser__slider-arr teaser__slider-arr_next"><svg class="teaser__slider-arr-icon icon-arr_r"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr_r"></use></svg></button>'
});

const $newsBlockSld = $('.js-news-block-slider');
$newsBlockSld.slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 1000,
  infinite: true,
  dots: true,
  arrows: false
});

