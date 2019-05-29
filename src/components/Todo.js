import React from 'react'

const Todo = ({ todo, toggleTodo, deleteTodo }) => (
  <li
    className={todo.completed ? 'completed' : ''}
    onClick={() => toggleTodo(todo.id)}
  >
    <p>{todo.body}</p>
    <button type="button" className="flat" onClick={() => deleteTodo(todo.id)}>
      X
    </button>
  </li>
)

export default Todo
