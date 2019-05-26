import { ADD_TODO, TOGGLE_TODO } from '../actions'

let nextId = 2
export function todos(state = [], action) {
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
