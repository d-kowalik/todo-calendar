export const ADD_TODO = 'ADD_TODO'

export function addTodo(body) {
  return {
    type: ADD_TODO,
    body
  }
}
