import { ADD_TODO, TOGGLE_TODO, CHANGE_FILTER, Filters } from './actions'

const initialState = {
  todos: [
    {
      id: 1,
      body: 'Create that app!',
      completed: false
    }
  ],
  filter: Filters.SHOW_ALL
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
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            return {
              id: todo.id,
              body: todo.body,
              completed: !todo.completed
            }
          }
          return todo
        })
      }
    case CHANGE_FILTER:
      return {
        ...state,
        filter: action.filter
      }
    default:
      return state
  }
}
