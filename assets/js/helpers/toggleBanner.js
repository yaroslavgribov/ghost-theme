const visible = 'is-visible'
const jsIsVisible = 'js-isVisible'

export default function toggleBanner() {
  let $imageContainer = $('.js-mainImageContainer'),
    src = $imageContainer.attr('src')

  $imageContainer.toggleClass(`${jsIsVisible} ${visible}`)

  if ($imageContainer.hasClass(`${jsIsVisible}`)) {
    $imageContainer.show()
    window.localStorage.setItem('mainImgSrc', '')
  } else {
    $imageContainer.hide()
    window.localStorage.setItem('mainImgSrc', src)
  }
}
