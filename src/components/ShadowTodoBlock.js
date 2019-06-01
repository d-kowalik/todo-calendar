import React from 'react'
import Cookies from 'universal-cookie'
import TodoList from './TodoList'
import TodoBlockHeader from './TodoBlockHeader'

const ShadowTodoBlock = ({ date, onClick }) => {
  const cookies = new Cookies()
  let todos = cookies.get(date)
  todos = todos === undefined ? [] : todos

  return (
    <div className="TodoBlock Shadow" onClick={onClick}>
      <div>
        <TodoBlockHeader date={date} />
        <TodoList todos={todos} />
      </div>
      <div className="ShadowOverlay" />
    </div>
  )
}

export default ShadowTodoBlock
