import { ADD_TODO } from './actions'

const initialState = {
  todos: [
    {
      id: 1,
      body: 'Create that app!',
      completed: false
    }
  ]
}

let nextId = 2
export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat({
          id: nextId++,
          body: action.body,
          completed: false
        })
      }
    default:
      return state
  }
}
