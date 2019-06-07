import React from 'react'
import { addTodo } from '../actions'
import { connect } from 'react-redux'

import AddTodoForm from '../components/AddTodoForm'

const AddTodoContainer = ({ addTodo }) => <AddTodoForm addTodo={addTodo} />

const mapDispatchToProps = dispatch => {
  return {
    addTodo: body => {
      dispatch(addTodo(body))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddTodoContainer)
