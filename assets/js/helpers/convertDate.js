export function convertDate(dateString) {
  const date = new Date (dateString)

  const y = date.getFullYear ()
  const m = date.getMonth ()
  const d = date.getDate ()

  return d + '/' + +(m + 1) + '/' + y
}
