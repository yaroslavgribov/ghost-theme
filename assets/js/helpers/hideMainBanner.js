export function hideMainBanner() {
  let $mainImg = $('.js-mainImageContainer'),
    mainImgSrc = $mainImg.attr('src')

  const ls = window.localStorage

  if (
    typeof ls.getItem('mainImgSrc') === 'string' &&
    ls.getItem('mainImgSrc') === mainImgSrc
  ) {
    $mainImg.hide()
  } else {
    $mainImg.addClass('js-isVisible')
  }
}
