import React from 'react'
import { connect } from 'react-redux'
import { Filters } from '../actions'

import TodoList from '../components/TodoList'

const TodoListContainer = ({ toggleTodo, todos, deleteTodo }) => (
  <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
)

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

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todosByDate[state.selectedDate], state.filter)
  }
}
export default connect(mapStateToProps)(TodoListContainer)
