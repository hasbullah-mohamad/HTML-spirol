import 'popper.js';
import 'bootstrap';
import '@fancyapps/fancybox';
import $ from 'jquery';
import 'slick-carousel';

$('.carousel').slick({
  dots: true,
  arrows: false,
});

$('.quality-carousel').slick({
  dots: false,
  arrows: true,
  centerPadding: true,
  centerPadding: 100
});

$('#accordion .panel-default .collapse:not(:has(li))').prev().hide();