import React from 'react'
import AddTodoFormContainer from '../containers/AddTodoContainer'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import { readableMonthDateFromMonthDateEng } from '../dateHelper'
import { setMonthSelected } from '../actions'

const MonthBlock = ({ todos, selectedMonth, enableMonthSelected }) => {
  return (
    <div
      className="MonthBlock Block"
      onFocus={() => {
        enableMonthSelected()
        console.log('enable motn selected')
      }}
    >
      <h2>{readableMonthDateFromMonthDateEng(selectedMonth)}</h2>
      <AddTodoFormContainer />
      <TodoList todos={todos} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todosByDate[state.selectedMonth],
    selectedMonth: state.selectedMonth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    enableMonthSelected: () => dispatch(setMonthSelected(true))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MonthBlock)
