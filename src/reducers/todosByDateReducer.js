import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions'
import Cookies from 'universal-cookie'
import {
  advanceDateByDay,
  reverseDateByDay,
  assembleDate,
  dateStringToDate
} from '../dateHelper'

const cookies = new Cookies()

const saveTodosToCookies = (todos, date) => {
  cookies.set(date, todos)
}

const getTodosFromCookies = date => {
  return cookies.get(date) === undefined ? [] : cookies.get(date)
}

function nextDate(monthSelected, date) {
  if (monthSelected) {
  } else {
    return assembleDate(advanceDateByDay(dateStringToDate(date)))
  }
}

function prevDate(monthSelected, date) {
  if (monthSelected) {
  } else {
    return assembleDate(reverseDateByDay(dateStringToDate(date)))
  }
}

export const todosByDate = (
  state = {},
  action,
  date,
  month,
  isMonthSelected
) => {
  let todosAtDate = state[date]
  if (todosAtDate === undefined) {
    todosAtDate = getTodosFromCookies(date)
  }

  let tomorrow = nextDate(false, date)
  let todosTomorrow = state[tomorrow]
  if (todosTomorrow === undefined) {
    todosTomorrow = getTodosFromCookies(tomorrow)
  }

  let yesterday = prevDate(false, date)
  let todosYesterday = state[yesterday]
  if (todosYesterday === undefined) {
    todosYesterday = getTodosFromCookies(yesterday)
  }
  let monthTodos = getTodosFromCookies(month)

  let nextId =
    todosAtDate.length === 0 ? 1 : todosAtDate[todosAtDate.length - 1].id + 1

  const workingDate = isMonthSelected ? month : date
  const workingTodos = isMonthSelected ? monthTodos : todosAtDate
  let newTodos
  switch (action.type) {
    case ADD_TODO:
      newTodos = workingTodos.concat({
        id: nextId++,
        body: action.body,
        completed: false
      })
      saveTodosToCookies(newTodos, workingDate)
      return {
        ...state,
        [workingDate]: newTodos
      }
    case TOGGLE_TODO:
      newTodos = workingTodos.map(todo => {
        if (todo.id === action.id) {
          return {
            id: todo.id,
            body: todo.body,
            completed: !todo.completed
          }
        }
        return todo
      })
      saveTodosToCookies(newTodos, workingDate)
      return {
        ...state,
        [workingDate]: newTodos
      }
    case DELETE_TODO:
      newTodos = workingTodos.filter(todo => todo.id !== action.id)
      saveTodosToCookies(newTodos, workingDate)
      return {
        ...state,
        [workingDate]: newTodos
      }
    default:
      if (
        state[date] === undefined ||
        state[tomorrow] === undefined ||
        state[yesterday] === undefined ||
        state[month] === undefined
      ) {
        return {
          ...state,
          [date]: todosAtDate,
          [tomorrow]: todosTomorrow,
          [yesterday]: todosYesterday,
          [month]: monthTodos
        }
      }
      return state
  }
}
