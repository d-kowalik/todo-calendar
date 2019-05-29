import React from 'react'
import Todo from '../components/Todo'
import { toggleTodo, deleteTodo } from '../actions'
import { connect } from 'react-redux'

const TodoContainer = ({ todo, toggleTodo, deleteTodo }) => (
  <Todo todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
)

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => {
      dispatch(toggleTodo(id))
    },
    deleteTodo: id => {
      dispatch(deleteTodo(id))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(TodoContainer)
