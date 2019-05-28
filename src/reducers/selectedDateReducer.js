import {
  today,
  dateStringToDate,
  assembleDate,
  advanceDateByDay,
  reverseDateByDay
} from '../dateHelper'
import { ADVANCE_DAY, REVERSE_DAY } from '../actions'

export const selectedDate = (state = today(), action) => {
  switch (action.type) {
    case ADVANCE_DAY:
      return assembleDate(advanceDateByDay(dateStringToDate(state)))
    case REVERSE_DAY:
      return assembleDate(reverseDateByDay(dateStringToDate(state)))
    default:
      return state
  }
}
