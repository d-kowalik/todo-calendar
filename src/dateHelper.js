import { PL } from './language'

const englishWeekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const weekdays = PL
  ? [
      'Niedziela',
      'Poniedziałek',
      'Wtorek',
      'Środa',
      'Czwartek',
      'Piątek',
      'Sobota'
    ]
  : englishWeekdays

const englishMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const months = PL
  ? [
      'Stycznia',
      'Lutego',
      'Marca',
      'Kwietnia',
      'Maja',
      'Czerwca',
      'Lipca',
      'Sierpnia',
      'Września',
      'Października',
      'Listopada',
      'Grudnia'
    ]
  : englishMonths

export function assembleDate(date) {
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()

  return `${englishWeekdays[date.getDay()]}, ${day}-${month}-${year}`
}

export function getMonthNameEng(id) {
  return englishMonths[id]
}

export function getMonthDateEng(date) {
  let month = date.getMonth()
  let year = date.getFullYear()

  return `${englishMonths[month]} ${year}`
}

export function getMonthDate(date) {
  let month = date.getMonth()
  let year = date.getFullYear()

  return `${months[month]} ${year}`
}

export function readableDateFromString(dateString) {
  return readableDate(dateStringToDate(dateString))
}

export function readableDate(date) {
  let day = date.getDate()
  let month = date.getMonth()

  return PL
    ? `${weekdays[date.getDay()]}, ${day} ${months[month]}`
    : `${weekdays[date.getDay()]}, ${months[month]} ${day}`
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
  return addDays(date, -amount)
}

export const reverseDateByDay = date => {
  return removeDays(date, 1)
}

export const today = () => assembleDate(new Date())
