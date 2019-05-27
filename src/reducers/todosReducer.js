import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

const saveTodosToCookies = todos => {
  cookies.set('todos', todos)
}

const getInitialState = () => {
  return cookies.get('todos')
}

const initialState = getInitialState()
let nextId =
  initialState.length === 0 ? 1 : initialState[initialState.length - 1].id + 1

export function todos(state = initialState, action, selectedDate) {
  let newState
  switch (action.type) {
    case ADD_TODO:
      newState = state.concat({
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
