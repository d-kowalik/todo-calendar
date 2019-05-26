import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <li key={todo.id}>{todo.body}</li>
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

export default connect(mapStateToProps)(TodoList)
