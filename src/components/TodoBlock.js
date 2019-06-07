import React from 'react'
import AddTodoContainer from '../containers/AddTodoContainer'
import TodoListContainer from '../containers/TodoListContainer'
import TodoBlockHeader from './TodoBlockHeader'
import VisibilityFilters from './VisibilityFilters'
import '../styles/TodoBlock.css'

const TodoBlock = ({ date }) => (
  <div className="TodoBlock">
    <TodoBlockHeader date={date} />
    <AddTodoContainer />
    <TodoListContainer date={date} />
    <VisibilityFilters />
  </div>
)

export default TodoBlock
