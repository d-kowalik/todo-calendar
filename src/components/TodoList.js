import React from 'react'

import '../styles/TodoList.css'

const TodoList = ({ toggleTodo, todos, deleteTodo }) => (
  <ul className="TodoList">
    {todos.map(todo => {
      return (
        <li
          key={todo.id}
          className={todo.completed ? 'completed' : ''}
          onClick={() => toggleTodo(todo.id)}
        >
          <p>{todo.body}</p>
          <button
            type="button"
            className="flat"
            onClick={() => deleteTodo(todo.id)}
          >
            X
          </button>
        </li>
      )
    })}
  </ul>
)

export default TodoList
