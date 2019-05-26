export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const CHANGE_FILTER = 'CHANGE_FILTER'

export const Filters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_NOT_COMPLETED: 'SHOW_NOT_COMPLETED'
}

export function addTodo(body) {
  return {
    type: ADD_TODO,
    body
  }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export function changeFilter(filter) {
  return {
    type: CHANGE_FILTER,
    filter
  }
}
