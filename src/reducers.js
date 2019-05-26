import { combineReducers } from 'redux'
import { filter } from './filterReducer'
import { todos } from './todosReducer'

export const todoReducer = combineReducers({
  todos,
  filter
})
