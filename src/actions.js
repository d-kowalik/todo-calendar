export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const CHANGE_FILTER = 'CHANGE_FILTER'
export const DELETE_TODO = 'DELETE_TODO'
export const ADVANCE_DAY = 'ADVANCE_DAY'
export const REVERSE_DAY = 'REVERSE_DAY'

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

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id
  }
}

export function advanceDay() {
  return {
    type: ADVANCE_DAY
  }
}

export function reverseDay() {
  return {
    type: REVERSE_DAY
  }
}
