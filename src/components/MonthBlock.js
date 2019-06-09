import React from 'react'
import AddTodoFormContainer from '../containers/AddTodoContainer'
import TodoList from './TodoList'
import { connect } from 'react-redux'

const MonthBlock = ({ todos, selectedMonth }) => {
  return (
    <div className="MonthBlock Block">
      <h2>{selectedMonth}</h2>
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
