import React from 'react'
import { addTodo, setCorrectMonthState } from '../actions'
import { connect } from 'react-redux'

import AddTodoForm from '../components/AddTodoForm'

class AddTodoContainer extends React.Component {
  onAdd = (e, input) => {
    this.props.setCorrectMonthState(e)
    this.props.addTodo(input)
  }

  render() {
    return <AddTodoForm onAdd={this.onAdd} />
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: body => {
      dispatch(addTodo(body))
    },
    setCorrectMonthState: event => {
      dispatch(setCorrectMonthState(event))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddTodoContainer)
