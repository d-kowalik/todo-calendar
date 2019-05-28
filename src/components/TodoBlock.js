import React from 'react'
import AddTodoForm from './AddTodoForm'
import TodoListContainer from '../containers/TodoListContainer'
import TodoBlockHeader from './TodoBlockHeader'
import VisibilityFilters from './VisibilityFilters'
import '../styles/TodoBlock.css'

const TodoBlock = () => (
  <div className="TodoBlock">
    <TodoBlockHeader />
    <AddTodoForm />
    <TodoListContainer />
    <VisibilityFilters />
  </div>
)

export default TodoBlock
