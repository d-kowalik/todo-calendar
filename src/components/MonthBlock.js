import React from 'react'
import AddTodoFormContainer from '../containers/AddTodoContainer'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import { readableMonthDateFromMonthDateEng } from '../dateHelper'

const MonthBlock = ({ todos, selectedMonth, isMain }) => {
  return (
    <div className={`MonthBlock Block ${isMain ? 'Main' : ''}`}>
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

export default connect(mapStateToProps)(MonthBlock)
