import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from './actions'

import './TodoList.css'

const TodoList = ({ toggleTodo, todos }) => (
  <ul className="TodoList">
    {todos.map(todo => (
      <li
        key={todo.id}
        className={todo.completed ? 'completed' : ''}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.body}
      </li>
    ))}
  </ul>
)

const mapStateToProps = state => {
  return {
    todos: state.todos
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
