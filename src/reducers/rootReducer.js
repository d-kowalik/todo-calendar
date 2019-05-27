import { filter } from './filterReducer'
import { todos } from './todosReducer'
import { today } from '../dateHelper'

const date = today()

const selectedDate = (state = date, action) => {
  return state
}

export const rootReducer = (state = {}, action) => {
  const d = selectedDate(state.selectedDate, action)
  return {
    todos: todos(state.todos, action, d),
    filter: filter(state.filter, action),
    selectedDate: d
  }
}
