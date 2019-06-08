import React from 'react'
import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList'

const MonthBlock = props => {
  return (
    <div className="MonthBlock">
      <h2>Month</h2>
      <AddTodoForm addTodo={null} />
      <TodoList todos={null} />
    </div>
  )
}

export default MonthBlock
