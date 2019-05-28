import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const saveTodosToCookies = (todos, date) => {
  cookies.set(date, todos)
}

const getStateFromCookies = date => {
  return cookies.get(date) === undefined ? [] : cookies.get(date)
}

export const todosByDate = (state = {}, action, date) => {
  let todosAtDate = state[date]
  if (todosAtDate === undefined) {
    todosAtDate = getStateFromCookies(date)
  }

  let nextId =
    todosAtDate.length === 0 ? 1 : todosAtDate[todosAtDate.length - 1] + 1
  let newTodos
  switch (action.type) {
    case ADD_TODO:
      newTodos = todosAtDate.concat({
        id: nextId++,
        body: action.body,
        completed: false
      })
      saveTodosToCookies(newTodos, date)
      return {
        ...state,
        [date]: newTodos
      }
    case TOGGLE_TODO:
      newTodos = todosAtDate.map(todo => {
        if (todo.id === action.id) {
          return {
            id: todo.id,
            body: todo.body,
            completed: !todo.completed
          }
        }
        return todo
      })
      saveTodosToCookies(newTodos, date)
      return {
        ...state,
        [date]: newTodos
      }
    case DELETE_TODO:
      newTodos = todosAtDate.filter(todo => todo.id !== action.id)
      saveTodosToCookies(newTodos, date)
      return {
        ...state,
        [date]: newTodos
      }
    default:
      if (state[date] === undefined) {
        return {
          ...state,
          [date]: todosAtDate
        }
      }
      return state
  }
}