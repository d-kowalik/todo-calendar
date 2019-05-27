export function assembleDate(date) {
  let day = date.getDate()
  let month = date.getMonth()
  let year = date.getFullYear()
  let weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  return `${weekdays[date.getDay()]}, ${day}-${month}-${year}`
}

export function dateStringToDate(string) {
  const datePart = string.split(', ')
  const dateComponents = datePart[1].split('-')
  const year = dateComponents[2]
  const month = dateComponents[1]
  const day = dateComponents[0]
  return new Date(year, month, day)
}
