import { filter } from './filterReducer'
import { todosByDate } from './todosByDateReducer'
import { selectedDate } from './selectedDateReducer'
import { TOGGLE_MONTH_SELECTED } from '../actions'

function monthSelected(state = false, action) {
  switch (action.type) {
    case TOGGLE_MONTH_SELECTED:
      return !state
    default:
      return state
  }
}

export const rootReducer = (state = {}, action) => {
  const date = selectedDate(state.selectedDate, action)
  const month = monthSelected(state.monthSelected, action)
  return {
    todosByDate: todosByDate(state.todosByDate, action, date),
    filter: filter(state.filter, action),
    selectedDate: date,
    monthSelected: month
  }
}
