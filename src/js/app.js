import 'popper.js';
import 'bootstrap';
import '@fancyapps/fancybox';
import $ from 'jquery';
import 'slick-carousel';

$('.carousel').slick({
  infinite: false,
  centerMode: true,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});