import { filter } from './filterReducer'
import { todosByDate } from './todosByDateReducer'
import { today, dateStringToDate, assembleDate } from '../dateHelper'
import { ADVANCE_DAY, REVERSE_DAY } from '../actions'

const selectedDate = (state = today(), action) => {
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

export const rootReducer = (state = {}, action) => {
  const date = selectedDate(state.selectedDate, action)
  return {
    todosByDate: todosByDate(state.todosByDate, action, date),
    filter: filter(state.filter, action),
    selectedDate: date
  }
}
