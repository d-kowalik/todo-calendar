import { filter } from './filterReducer'
import { todos } from './todosReducer'
import { today, dateStringToDate, assembleDate } from '../dateHelper'

import { ADVANCE_DAY, REVERSE_DAY } from '../actions'

const date = today()

const selectedDate = (state = date, action) => {
  let selectedDate
  switch (action.type) {
    case ADVANCE_DAY:
      selectedDate = dateStringToDate(state)
      const tomorrow = new Date(selectedDate.getDate() + 1)
      return assembleDate(tomorrow)

    case REVERSE_DAY:
      selectedDate = dateStringToDate(state)
      const yesterday = new Date(selectedDate.getDate() - 1)
      return assembleDate(yesterday)
    default:
      return state
  }
}

export const rootReducer = (state = {}, action) => {
  const d = selectedDate(state.selectedDate, action)
  return {
    todos: todos(state.todos, action, d),
    filter: filter(state.filter, action),
    selectedDate: d
  }
}
