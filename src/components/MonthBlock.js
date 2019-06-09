import React from 'react'
import AddTodoFormContainer from '../containers/AddTodoContainer'
import TodoList from './TodoList'
import { connect } from 'react-redux'

const MonthBlock = ({ todos }) => {
  return (
    <div className="MonthBlock">
      <h2>Month</h2>
      <AddTodoFormContainer />
      <TodoList todos={todos} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todosByDate[state.selectedMonth]
  }
}

export default connect(mapStateToProps)(MonthBlock)
