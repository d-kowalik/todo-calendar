import { ADD_TODO, TOGGLE_TODO, CHANGE_FILTER, Filters } from './actions'
import { combineReducers } from 'redux'

let nextId = 2
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: nextId++,
        body: action.body,
        completed: false
      })
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            id: todo.id,
            body: todo.body,
            completed: !todo.completed
          }
        }
        return todo
      })
    default:
      return state
  }
}

function filter(state = Filters.SHOW_ALL, action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter
    default:
      return state
  }
}

export const todoReducer = combineReducers({
  todos,
  filter
})
