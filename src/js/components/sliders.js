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