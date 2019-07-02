import {
  today,
  dateStringToDate,
  assembleDate,
  advanceDateByDay,
  reverseDateByDay,
  getMonthDateEng
} from '../dateHelper'
import { ADVANCE_DAY, REVERSE_DAY } from '../actions'

const initialState = {
  date: today(),
  month: getMonthDateEng(new Date())
}

export const selectedDate = (state = initialState, action) => {
  if (state.date === undefined || state.month === undefined) {
    state = initialState
  }

  switch (action.type) {
    case ADVANCE_DAY:
      const nextDate = advanceDateByDay(dateStringToDate(state.date))
      return {
        date: assembleDate(nextDate),
        month: getMonthDateEng(nextDate)
      }
    case REVERSE_DAY:
      const prevDate = reverseDateByDay(dateStringToDate(state.date))
      return {
        date: assembleDate(prevDate),
        month: getMonthDateEng(prevDate)
      }
    default:
      return state
  }
}
