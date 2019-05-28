import { filter } from './filterReducer'
import { todos } from './todosReducer'
import { today, dateStringToDate, assembleDate } from '../dateHelper'
import Cookies from 'universal-cookie'

import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions'
import { ADVANCE_DAY, REVERSE_DAY } from '../actions'

const selectedDate = (state = today(), action) => {
  let selectedDate
  switch (action.type) {
    case ADVANCE_DAY:
      selectedDate = dateStringToDate(state)
      const tomorrow = new Date()
      tomorrow.setDate(selectedDate.getDate() + 1)
      return assembleDate(tomorrow)

    case REVERSE_DAY:
      selectedDate = dateStringToDate(state)
      const yesterday = new Date()
      yesterday.setDate(selectedDate.getDate() - 1)
      return assembleDate(yesterday)
    default:
      return state
  }
}

const saveTodosToCookies = (todos, date) => {
  const cookies = new Cookies()
  cookies.set(date, todos)
}

const getStateFromCookies = date => {
  const cookies = new Cookies()
  return cookies.get(date) === undefined ? [] : cookies.get(date)
}

const todosByDate = (state = {}, action, date) => {
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
      saveTodosToCookies(newTodos, selectedDate)
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
      saveTodosToCookies(newTodos, selectedDate)
      return {
        ...state,
        [date]: newTodos
      }
    case DELETE_TODO:
      newTodos = todosAtDate.filter(todo => todo.id !== action.id)
      saveTodosToCookies(newTodos, selectedDate)
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

export const rootReducer = (state = {}, action) => {
  const date = selectedDate(state.selectedDate, action)

  return {
    todosByDate: todosByDate(state.todosByDate, action, date),
    todos: todos(state.todos, action, date),
    filter: filter(state.filter, action),
    selectedDate: date
  }
}
