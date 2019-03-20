const $ = window.$
/**
 * Find promo container
 * and split its text for date and text container
 */
export function splitDateAndTitle() {
  const titleContainer = $('.js-titleContainer')
  const $date = $('.js-dateContainer')
  const titleText = titleContainer.text()
  const firstDateIndex = titleText.search(/\d{1,2}[.]\d{2}[–,-]\d{2}[.]\d{2}/g)
  const title = titleText.slice(0, firstDateIndex)
  const date = titleText.slice(firstDateIndex, titleText.length)

  titleContainer.text(title)
  $date.text(date)
}
