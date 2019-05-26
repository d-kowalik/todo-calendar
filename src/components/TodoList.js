import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo, Filters } from '../actions'

import './TodoList.css'

const TodoList = ({ toggleTodo, todos }) => (
  <ul className="TodoList">
    {todos.map(todo => {
      return (
        <li
          key={todo.id}
          className={todo.completed ? 'completed' : ''}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.body}
        </li>
      )
    })}
  </ul>
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
    todos: getVisibleTodos(state.todos, state.filter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => {
      dispatch(toggleTodo(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
