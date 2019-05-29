import React from 'react'
import TodoContainer from '../containers/TodoContainer'
import '../styles/TodoList.css'

const TodoList = ({ toggleTodo, todos, deleteTodo }) => (
  <ul className="TodoList">
    {todos.map(todo => {
      return <TodoContainer todo={todo} />
    })}
  </ul>
)

export default TodoList
