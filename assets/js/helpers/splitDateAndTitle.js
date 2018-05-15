const $ = window.$;
/**
 * Find promo container
 * and split its text for date and text container
 */
export function splitDateAndTitle() {
  let titleContainer = $('.js-titleContainer'),
    $date = $('.js-dateContainer'),
    titleText = titleContainer.text(),
    firstDateIndex = titleText.search(/\d{2}[.]\d{2}[–,-]\d{2}[.]\d{2}/g),
    title = titleText.slice(0, firstDateIndex),
    date = titleText.slice(firstDateIndex, titleText.length);

  titleContainer.text(title);
  $date.text(date);
}
