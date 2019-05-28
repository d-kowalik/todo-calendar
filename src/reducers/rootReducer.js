import { filter } from './filterReducer'
import { todosByDate } from './todosByDateReducer'
import { selectedDate } from './selectedDateReducer'

export const rootReducer = (state = {}, action) => {
  const date = selectedDate(state.selectedDate, action)
  return {
    todosByDate: todosByDate(state.todosByDate, action, date),
    filter: filter(state.filter, action),
    selectedDate: date
  }
}
