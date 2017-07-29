import slick from 'slick-carousel';

let sldDefaultOpt = {
  useTransform: true,
  infinite: true,
  cssEase: 'ease',
  speed: 500,
  prevArrow: '<button type="button" class="slider-btn slider-btn_prev"><svg class="slider-btn__icon icon-arr"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr"></use></svg></button>',
  nextArrow: '<button type="button" class="slider-btn slider-btn_next"><svg class="slider-btn__icon icon-arr"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr"></use></svg></button>'
};

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
  prevArrow: '<button type="button" class="teaser__slider-arr teaser__slider-arr_prev"><svg class="teaser__slider-arr-icon icon-arr"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr"></use></svg></button>',
  nextArrow: '<button type="button" class="teaser__slider-arr teaser__slider-arr_next"><svg class="teaser__slider-arr-icon icon-arr"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arr"></use></svg></button>'
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

const $ourSld = $('.js-our-slider');
$ourSld.slick($.extend({}, sldDefaultOpt, {
  slidesToShow: 3,
  slidesToScroll: 1
}));

const $awardsSld = $('.js-certif-slider');
$awardsSld.slick($.extend({}, sldDefaultOpt, {
  slidesToShow: 6,
  slidesToScroll: 1
}));

const $productSld = $('.js-product-slider');
$productSld.slick($.extend({}, sldDefaultOpt, {
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 800
}));

const $testimonialsSld = $('.js-testimonials-slider');
$testimonialsSld.slick($.extend({}, sldDefaultOpt, {
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 800
}));