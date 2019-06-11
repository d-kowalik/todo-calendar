import React from 'react'
import { addTodo, setMonthSelected } from '../actions'
import { connect } from 'react-redux'

import AddTodoForm from '../components/AddTodoForm'

class AddTodoContainer extends React.Component {
  setCorrectMonthState = e => {
    // Get the main MonthBlock
    const parent = document.querySelectorAll('.MonthBlock.Main')[0]

    if (e.target !== parent && parent.contains(e.target)) {
      // That means an item inside the main MonthBlock was clicked
      this.props.enableMonthSelected()
    } else {
      this.props.disableMonthSelected()
    }
  }

  onAdd = (e, input) => {
    this.setCorrectMonthState(e)
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
    enableMonthSelected: () => dispatch(setMonthSelected(true)),
    disableMonthSelected: () => dispatch(setMonthSelected(false))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddTodoContainer)
