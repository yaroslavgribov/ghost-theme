import {hideMainBanner, insertPost, splitDateAndTitle} from './helpers';
import './modules/search';
import './modules/scroll';
import './modules/infinitescroll';

$(document).ready(() => {
  splitDateAndTitle();
  hideMainBanner();
  //This is set to 2 since the posts already loaded should be page 1
  
  //on button click
  // $('#load-posts').click(function () {
    
  // });
});

$('.menu-button').on('click', function() {
  let nav = $('div.menu'),
    link_pad = $('div.menu a').height();
  $(this).toggleClass('active');
  $('body').toggleClass('pmt');
  let menu_oheight = nav.outerHeight(),
    menu_iheight = $('div.menu a:last-child').position();
});

$('.js-toggleBanner').on('click', function () {
  let imageContainer = $('.js-mainImageContainer'),
    src = imageContainer.attr('src');

  imageContainer.toggleClass('js-isVisible is-visible');

  if (imageContainer.hasClass('js-isVisible')) {
    imageContainer.show();
    window.localStorage.setItem('mainImgSrc', '');
  } else {
    imageContainer.hide();
    window.localStorage.setItem('mainImgSrc', src);
  }
});

$('img').parent('p').addClass('picture');
$('.cite').parent('p').addClass('paragraph--has-cite');
