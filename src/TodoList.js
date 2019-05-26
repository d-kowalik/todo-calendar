import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from './actions'

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <li key={todo.id} onClick={() => this.props.toggleTodo(todo.id)}>
            {todo.body}
          </li>
        ))}
      </ul>
    )
  }
}

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
