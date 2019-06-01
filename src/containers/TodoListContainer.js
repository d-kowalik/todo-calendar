import React from 'react'
import { connect } from 'react-redux'
import { Filters } from '../actions'

import TodoList from '../components/TodoList'

const TodoListContainer = ({ todos, date }) => <TodoList todos={todos} />

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case Filters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case Filters.SHOW_NOT_COMPLETED:
      return todos.filter(todo => !todo.completed)
    case Filters.SHOW_ALL:
    default:
      return todos
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(state.todosByDate[ownProps.date], state.filter)
  }
}
export default connect(mapStateToProps)(TodoListContainer)
