export function assembleDate(date) {
  let day = date.getDate()
  let month = date.getMonth() + 1
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
  const month = dateComponents[1] - 1
  const day = dateComponents[0]

  return new Date(year, month, day)
}

export const advanceDateByDay = date => {
  return addDays(date, 1)
}

// addDays function courtesy to StackOverflow user Clever Human, https://stackoverflow.com/a/5757691
function addDays(date, amount) {
  var tzOff = date.getTimezoneOffset() * 60 * 1000,
    t = date.getTime(),
    d = new Date(),
    tzOff2

  t += 1000 * 60 * 60 * 24 * amount
  d.setTime(t)

  tzOff2 = d.getTimezoneOffset() * 60 * 1000
  if (tzOff !== tzOff2) {
    var diff = tzOff2 - tzOff
    t += diff
    d.setTime(t)
  }

  return d
}

function removeDays(date, amount) {
  var tzOff = date.getTimezoneOffset() * 60 * 1000,
    t = date.getTime(),
    d = new Date(),
    tzOff2

  t -= 1000 * 60 * 60 * 24 * amount
  d.setTime(t)

  tzOff2 = d.getTimezoneOffset() * 60 * 1000
  if (tzOff !== tzOff2) {
    var diff = tzOff2 - tzOff
    t += diff
    d.setTime(t)
  }

  return d
}

export const reverseDateByDay = date => {
  return removeDays(date, 1)
}

export const today = () => assembleDate(new Date())
