export function convertDate(dateString) {
  let date = new Date(dateString),
    y = date.getFullYear(),
    m = date.getMonth(),
    d = date.getDate()

  console.log('test')
  return d + '/' + +(m + 1) + '/' + y
}
