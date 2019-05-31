import React from 'react'
import Cookies from 'universal-cookie'
import TodoList from './TodoList'

const ShadowTodoBlock = ({ date }) => {
  const cookies = new Cookies()
  let todos = cookies.get(date)
  todos = todos === undefined ? [] : todos

  return (
    <div>
      <h2>{date}</h2>
      <TodoList todos={todos} />
    </div>
  )
}

export default ShadowTodoBlock
