const $ = window.$
/**
 * Find promo container
 * and split its text for date and text container
 */
export default function splitDateAndTitle(text) {
  // find index of date in title
  // basically searching for 2 digits separated by . and - (11.11 - 12.11)
  const firstDateIndex = text.search(/\d{2}[.]\d{2}[–,-]\d{2}[.]\d{2}/g)

  // if date is not present i.e. just return the text
  if (firstDateIndex !== -1) {
    return {
      title: text.slice(0, firstDateIndex),
      date: text.slice(firstDateIndex, text.length)
    }
  }

  return { title: text, date: undefined }
}
