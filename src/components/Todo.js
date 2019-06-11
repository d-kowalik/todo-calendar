import React from 'react'

const Todo = ({ todo, onLiClick, onDelete }) => (
  <li
    className={todo.completed ? 'completed' : ''}
    onClick={e => onLiClick(e, todo.id)}
  >
    <p>{todo.body}</p>
    <button type="button" className="flat" onClick={e => onDelete(e, todo.id)}>
      X
    </button>
  </li>
)

export default Todo
