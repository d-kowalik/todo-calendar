import { combineReducers } from 'redux'
import { filter } from './filterReducer'
import { todos } from './todosReducer'
import { assembleDate } from '../dateHelper'

const date = assembleDate(new Date())

const selectedDate = (state = date, action) => {
  return state
}

export const rootReducer = combineReducers({
  todos,
  filter,
  selectedDate
})
