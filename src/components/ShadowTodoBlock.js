import React from 'react'
import { connect } from 'react-redux'
import TodoBlock from './TodoBlock'

const ShadowTodoBlock = ({ date, onClick, todos }) => {
  return (
    <div className="Shadow" onClick={onClick}>
      <TodoBlock date={date} />
      <div className="ShadowOverlay" />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todosByDate[ownProps.date]
  }
}

export default connect(mapStateToProps)(ShadowTodoBlock)
