import React from 'react'
import { connect } from 'react-redux'
import TodoList from './TodoList'
import TodoBlockHeader from './TodoBlockHeader'

const ShadowTodoBlock = ({ date, onClick, todos }) => {
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

const mapStateToProps = (state, ownProps) => {
  console.log(state)

  return {
    todos: state.todosByDate[ownProps.date]
  }
}

export default connect(mapStateToProps)(ShadowTodoBlock)
