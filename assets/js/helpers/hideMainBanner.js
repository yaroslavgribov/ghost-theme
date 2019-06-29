export function hideMainBanner() {
  const $mainImg = $ ('.js-mainImageContainer')
  const mainImgSrc = $mainImg.attr ('src')
  
  const ls = window.localStorage

  if (
    typeof ls.getItem ('mainImgSrc') === 'string' &&
    ls.getItem ('mainImgSrc') === mainImgSrc
  ) {
    $mainImg.hide ()
  } else {
    $mainImg.addClass ('js-isVisible')
  }
}
