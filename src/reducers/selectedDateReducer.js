import { today, dateStringToDate, assembleDate } from '../dateHelper'
import { ADVANCE_DAY, REVERSE_DAY } from '../actions'

export const selectedDate = (state = today(), action) => {
  let selectedDate
  switch (action.type) {
    case ADVANCE_DAY:
      selectedDate = dateStringToDate(state)
      const tomorrow = new Date()
      tomorrow.setDate(selectedDate.getDate() + 1)
      return assembleDate(tomorrow)

    case REVERSE_DAY:
      selectedDate = dateStringToDate(state)
      const yesterday = new Date()
      yesterday.setDate(selectedDate.getDate() - 1)
      return assembleDate(yesterday)
    default:
      return state
  }
}
