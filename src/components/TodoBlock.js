import React from 'react'
import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList'
import TodoBlockHeader from './TodoBlockHeader'
import VisibilityFilters from './VisibilityFilters'
import '../styles/TodoBlock.css'

const TodoBlock = () => (
  <div className="TodoBlock">
    <TodoBlockHeader />
    <AddTodoForm />
    <TodoList />
    <VisibilityFilters />
  </div>
)

export default TodoBlock
