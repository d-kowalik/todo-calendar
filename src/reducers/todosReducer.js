import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

const saveTodosToCookies = todos => {
  cookies.set('todos', todos)
}

let nextId = 1
export function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      let newState = state.concat({
        id: nextId++,
        body: action.body,
        completed: false
      })
      saveTodosToCookies(newState)
      return newState
    case TOGGLE_TODO:
      newState = state.map(todo => {
        if (todo.id === action.id) {
          return {
            id: todo.id,
            body: todo.body,
            completed: !todo.completed
          }
        }
        return todo
      })
      saveTodosToCookies(newState)
      return newState
    case DELETE_TODO:
      newState = state.filter(todo => todo.id !== action.id)
      saveTodosToCookies(newState)
      return newState
    default:
      return state
  }
}
