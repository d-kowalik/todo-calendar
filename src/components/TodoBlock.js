import React, { Component } from 'react'
import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList'
import VisibilityFilters from './VisibilityFilters'
import '../styles/TodoBlock.css'

class TodoBlock extends Component {
  render() {
    return (
      <div className="TodoBlock">
        <h2>{this.props.date}</h2>
        <AddTodoForm />
        <TodoList />
        <VisibilityFilters />
      </div>
    )
  }
}

export default TodoBlock
