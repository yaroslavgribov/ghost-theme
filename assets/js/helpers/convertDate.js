export function convertDate(dateString) {
  let date = new Date(dateString),
    y = date.getFullYear(),
    m = date.getMonth(),
    d = date.getDate();
  return d + '/' + +(m+1) + '/' + y;
}