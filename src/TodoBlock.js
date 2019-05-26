import React, { Component } from 'react'
import AddTodoForm from 'AddTodoForm'
import TodoList from 'TodoList'
import VisibilityFilters from 'VisibilityFilters'

class TodoBlock extends Component {
  render() {
    return (
      <div>
        <AddTodoForm />
        <TodoList />
        <VisibilityFilters />
      </div>
    )
  }
}

export default TodoBlock
