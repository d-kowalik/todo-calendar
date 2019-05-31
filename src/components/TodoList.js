import React from 'react'
import TodoContainer from '../containers/TodoContainer'
import '../styles/TodoList.css'

const TodoList = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(todo => {
      return <TodoContainer todo={todo} />
    })}
  </ul>
)

export default TodoList
