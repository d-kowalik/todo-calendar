import { filter } from './filterReducer'
import { todosByDate } from './todosByDateReducer'
import { selectedDate } from './selectedDateReducer'
import {
  TOGGLE_MONTH_SELECTED,
  SET_MONTH_SELECTED,
  SET_CORRECT_MONTH_STATE
} from '../actions'

function isMonthSelected(state = false, action) {
  switch (action.type) {
    case TOGGLE_MONTH_SELECTED:
      return !state
    case SET_MONTH_SELECTED:
      return action.value
    case SET_CORRECT_MONTH_STATE:
      const e = action.event
      // Get the main MonthBlock
      const parent = document.querySelectorAll('.MonthBlock.Main')[0]
      // If true, that means an item inside the main MonthBlock was clicked, so isMonthSelected should be true
      return e.target !== parent && parent.contains(e.target)
    default:
      return state
  }
}

export const rootReducer = (state = {}, action) => {
  const selDate = selectedDate(
    { date: state.selectedDate, month: state.selectedMonth },
    action
  )

  const date = selDate.date
  const selectedMonthCpy = selDate.month
  const isMonthSelectedCpy = isMonthSelected(state.isMonthSelected, action)
  return {
    todosByDate: todosByDate(
      state.todosByDate,
      action,
      date,
      selectedMonthCpy,
      isMonthSelectedCpy
    ),
    filter: filter(state.filter, action),
    selectedDate: date,
    isMonthSelected: isMonthSelectedCpy,
    selectedMonth: selectedMonthCpy
  }
}
