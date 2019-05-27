import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions'
import Cookies from 'universal-cookie'
import { today } from '../dateHelper'

const cookies = new Cookies()

const saveTodosToCookies = (todos, date) => {
  cookies.set(date, todos)
}

const getInitialState = date => {
  return cookies.get(date) === undefined ? [] : cookies.get(date)
}

const initialState = getInitialState(today())
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
      saveTodosToCookies(newState, selectedDate)
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
      saveTodosToCookies(newState, selectedDate)
      return newState
    case DELETE_TODO:
      newState = state.filter(todo => todo.id !== action.id)
      saveTodosToCookies(newState, selectedDate)
      return newState
    default:
      return state
  }
}
