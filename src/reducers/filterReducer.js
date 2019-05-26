import { CHANGE_FILTER, Filters } from '../actions'

export function filter(state = Filters.SHOW_ALL, action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter
    default:
      return state
  }
}
