import { filter } from './filterReducer'
import { todosByDate } from './todosByDateReducer'
import { selectedDate } from './selectedDateReducer'
import { TOGGLE_MONTH_SELECTED } from '../actions'
import { getMonthDateEng } from '../dateHelper'

function isMonthSelected(state = false, action) {
  switch (action.type) {
    case TOGGLE_MONTH_SELECTED:
      return !state
    default:
      return state
  }
}

function selectedMonth(state = getMonthDateEng(new Date()), action) {
  return state
}

export const rootReducer = (state = {}, action) => {
  const date = selectedDate(state.selectedDate, action)
  const isMonthSelectedCpy = isMonthSelected(state.isMonthSelected, action)
  const selectedMonthCpy = selectedMonth(state.selectedMonth, action)
  return {
    todosByDate: todosByDate(state.todosByDate, action, date),
    filter: filter(state.filter, action),
    selectedDate: date,
    isMonthSelected: isMonthSelectedCpy,
    selectedMonth: selectedMonthCpy
  }
}
