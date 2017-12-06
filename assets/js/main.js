import toggleBanner from './helpers/toggleBanner'
import { hideMainBanner, insertPost, splitDateAndTitle } from './helpers'
import './modules/search'
import './modules/scroll'
import './modules/infinitescroll'

$(document).ready(() => {
  // find date and title container on the page
  const $titleContainer = $('.js-titleContainer')
  const $date = $('.js-dateContainer')
  // get text of title container
  const titleText = $titleContainer.text()

  const { title, date } = splitDateAndTitle(titleText)

  $titleContainer.text(title)

  if (date) {
    $date.text(date)
  }

  // hideMainBanner()
})

// unused atm
$('.js-toggleBanner').on('click', toggleBanner)

$('.menu-button').on('click', function() {
  let nav = $('div.menu'),
    link_pad = $('div.menu a').height()
  $(this).toggleClass('active')
  $('body').toggleClass('pmt')
  let menu_oheight = nav.outerHeight(),
    menu_iheight = $('div.menu a:last-child').position()
})

$('img')
  .parent('p')
  .addClass('picture')
$('.cite')
  .parent('p')
  .addClass('paragraph--has-cite')
